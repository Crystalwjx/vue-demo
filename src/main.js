// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import axios from 'axios'
import router from './router'
import echarts from 'echarts'
import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls';
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
