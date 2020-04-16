<template>
  <div>
    <button @click="$router.go(-1)"><i class="fa fa-step-backward"></i>返回上一级</button>
    <div>
      <img class="left_img"
           :src="getPicture($route.params.id)" />
    </div>
    <div class="player">
      <div class="progress">
        <div class="stime">{{progressCurr}}</div>
        <div class="line">
          <div class="mask"
               :style="{width: progressRate+'%'}"></div>
          <div class="bar"
               :style="{left: progressRate+'%'}"></div>
        </div>
        <div class="etime">{{progressDura}}</div>
      </div>
      <div class="controls">
        <audio @canplay='songLengths'
               @timeupdate="onTimeupdate"
               controls
               ref='myAudio'
               id="myAudio"
               style="width: 100%;"></audio>
        <div class="control-item play-bc">
          <i class="fa fa-step-backward"></i>
        </div>
        <div class="control-item play-ctrl"
             @click="play">
          <div v-if="played && timeNow == 0"
               class="play-load mint-spinner-snake"></div>
          <i v-else
             class="fa"></i>
        </div>
        <div class="control-item play-bc">
          <i class="fa fa-step-forward"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRelaxMusic } from '@/config/getData'

export default {
  data () {
    return {
      training: {},
      played: false,
      timeNow: 0,
      timeDuration: undefined
    }
  },


  mounted () {
    this.initData();
  },

  computed: {
    progressCurr () {
      let m = ~~(this.timeNow / 60),
        s = this.timeNow % 60;
      s = s < 10 ? '0' + s : s;
      return m + ':' + s;
    },
    progressDura () {
      if (this.timeDuration) {
        let m = ~~(this.timeDuration / 60),
          s = this.timeDuration % 60;
        s = s < 10 ? '0' + s : s;
        return m + ':' + s;
      }
      return '0:00';
    },
    progressRate () {
      return (this.timeNow / this.timeDuration * 100).toFixed(4)
    }
  },

  methods: {
    async initData () {
      let id = this.$route.params.id;
      let res = await getRelaxMusic(id);
      this.training = res
      this.$refs.myAudio.src = res.media;
    },

    play () {
      let rotateImg = document.getElementsByClassName('left_img')[0]
      const self = this;
      let player = self.$refs.myAudio;

      if (!player.paused) {
        player.pause()
        this.played = false
        rotateImg.style.webkitAnimationPlayState = "paused";
      } else {
        player.play()
        this.played = true
        rotateImg.style.webkitAnimationPlayState = "running";
      }
    },
    songLengths () {
      this.timeDuration = parseInt(this.$refs.myAudio.duration)
    },
    onTimeupdate: function (res) {
      // console.log('timeupdate', res)
      this.fuck = res.target.currentTime;
      this.timeNow = parseInt(res.target.currentTime)
    },

    getPicture (index) {
      index = index < 1 ? 1 : index
      index = index > 7 ? 7 : index
      return 'http://music.zilpn.com/images/music_' + index + '.jpeg'
    },

  },
}

</script>
<style lang="scss" scoped>
.left_img {
  border-radius: 50%;
  margin-top: 100px;
  animation: rotate 10s linear infinite;
  animation-play-state: paused;
}
/* @-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
} */
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.player {
  width: 20%;
  padding: 20px;
  margin: 50px auto;
  background: rgba(0, 0, 0, 0.4);
  .progress {
    position: relative;
    padding: 24px 46px;
    height: 24px;
    .line {
      position: relative;
      height: 5px;
      border: 1px solid rgba(36, 38, 47, 0.15);
      box-shadow: inset -1px 1px 2px 0 rgba(0, 0, 0, 0.5);
      .mask {
        background: #fff;
        height: 100%;
        width: 0;
      }
      .bar {
        position: absolute;
        top: 50%;
        margin-left: -6px;
        margin-top: -6px;
        width: 14px;
        height: 14px;
        background: #fff;
        box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.4);
        border-radius: 50%;
      }
    }
    .stime,
    .etime {
      position: absolute;
      top: -1%;
      height: 18px;
      margin-top: 18px;
    }
    .stime {
      left: 0;
    }
    .etime {
      right: 0;
    }
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-top: 20px;
    .control-item {
      background: #294da0;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
    }
    .play-bc {
      width: 42px;
      height: 42px;
    }
    .play-ctrl {
      width: 60px;
      height: 60px;
      margin: 0 30px;
    }
  }
}
audio {
  display: none;
}
</style>

