<template>
  <div>
    <div class="demo">
      <div v-for="item in arr"
           :key="item"
           ref="image"
           @click="turn(item)"
           class="pic">
        <img v-if="showpoker[item]"
             src="@/assets/front.jpg">
        <img v-else
             src="@/assets/back.jpg" class="fadeIn animated">
      </div>
    </div>
  </div>
</template>
<script>
const defaultStatus = [false, false, false, false, false, false]
export default {
  data () {
    return {
      num: null,
      num1: null,
      allnum: null,
      xnum: null,
      ynum: null,
      arr: [0, 1, 2, 3, 4, 5],
      showpoker: [...defaultStatus]
    }
  },
  mounted () {
    this.showpoker = [true, true, true, true, true, true]
    setTimeout(() => {
      this.showpoker = [...defaultStatus]
    }, 1000)
    this.createBubble(6)
  },
  methods: {
    createBubble (num) {
      var iconWidth = 87;   //值越大，元素左右间隔越大
      var iconHeight = 122;  //值越大，元素上下间隔越大
      var targetHeight = document.querySelector(".demo").offsetHeight;
      var targetWidth = document.querySelector(".demo").offsetWidth;
      var _tmpArray = [];
      //当放置的元素的宽高大于浏览器窗口的宽高时，直接返回
      if (targetWidth < iconWidth || targetHeight < iconHeight) {
        return false;
      }

      var xnum = parseInt(targetWidth / iconWidth, 10)
      var ynum = parseInt(targetHeight / iconHeight, 10)
      var allnum = xnum * ynum
      //当需要放置的元素的个数超过浏览器窗口内总共可以放置的元素的个数时，则返回
      if (num >= allnum) {
        return false;
      }

      for (var i = 0; i < allnum; i++) {
        _tmpArray.push(i);
      }
      for (let j = 0; j < num; j++) {
        var xStart = 0, yStart = 0;
        var pointer = Math.floor(Math.random() * allnum);    //向下取整取出0到 allnum之间的任意一个整数
        //如果数组_tmpArray中不存在第pointer值，则继续
        if (!_tmpArray[pointer]) {
          continue;
        }
        delete _tmpArray[pointer];   //删除数组_tmpArray中第pointer个值
        yStart = parseInt(pointer / xnum, 10) * iconHeight;
        xStart = (pointer % xnum) * iconWidth;
        this.$refs.image[j].style.top = yStart + 'px'
        this.$refs.image[j].style.left = xStart + 'px'
      }
    },
    turn (index) {
      this.showpoker[index] = true
      setTimeout(() => {
        this.showpoker[index] = false
      this.$forceUpdate()
      }, 1000)
      this.$forceUpdate()
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.demo {
  height: calc(100vh - 120px);
  position: relative;
  background: #5f4b8b;
}
.pic {
  width: 85px;
  height: 120px;
  position: absolute;
  top: 0;
  left: 0;
}
.pic img {
  width: 100%;
  height: 100%;
}
@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.fadeOut {
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
</style>