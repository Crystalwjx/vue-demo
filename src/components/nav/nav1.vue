<template>
  <div>
    <video-player class="vjs-custom-skin "
                  ref="videoPlayer"
                  :playsinline='false'
                  :options='videoOptions'
                  @ended="onPlayerEnded($event)">
    </video-player>
  </div>
</template>
<script>
// import './../../node_modules/video.js/dist/video-js.css'
export default {
  // props: {
  //   state: Boolean,
  //   videoUrl: String,
  // },
  data () {
    return {
      videoOptions: {
        playbackRates: [1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true，浏览器准备好时开始回放
        controls: true,
        muted: false, // 默认情况下将会消除任何音频
        loop: false, //循环播放
        preload: 'auto', // <video>加载元素后立即加载视频
        language: 'zh-CN',
        aspectRatio: '16:9', //流畅模式，并计算播放器动态大小时使用该值
        fluid: true, //按比例缩放以适应容器
        sources: [{
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }],
        poster: '', // 封面地址
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
      }
    }
  },
  watch: {
    // videoUrl: function (val) {
    //   if (val !== '') {
    //     this.$refs.videoPlayer.player.src(val)
    //   }
    // },
    // state: function (val) {
    //   if (val) {
    //     this.$refs.videoPlayer.player.pause()
    //   }
    // }
  },
  methods: {
    onPlayerPause (player) {
      console.log('pause')
    },
    onPlayerEnded (player) {
      alert('end')
    },
    playerStateChanged (player) {
      console.log('changed')
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  mounted () {

  }
}
</script>
<style>
.vjs-custom-skin {
  height: 220px !important;
  width: 343px !important;
}
</style>


