<template>
  <div class="big">
    <div v-for="item in list"
         :key="item.id"
         :class="{'test': true}"
         class="box">
      {{item.name}}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          name: 'aaa'
        },
        {
          id: 2,
          name: 'bbb'
        },
        {
          id: 3,
          name: 'ccc'
        }
      ]
    }
  }
}
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 50%;
  background: pink;
  display: inline-block;
  position: relative;
}
.box:before {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  transform: rotate(225deg);
  background-color: red;
  border: 1px green;
  border-style: solid solid none none;
}
/* .box:after {
  content: "";
  width: 20px;
  height: 2px;
  position: absolute;
  right: 0;
  background-color: #5f4b8b;
}
.box:last-child:after {
  background: red;
} */
.box:not(:last-child)::after {
  content: "";
  width: 20px;
  height: 2px;
  position: absolute;
  right: 0;
  background-color: #5f4b8b;
}
</style>