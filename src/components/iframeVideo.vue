<template id='video-player'>
  <div class="video-player">
     <div class="video-container" display='flex;flex-wrap: wrap'>
       <div class="video-wrap" style="width:80%;float:left;oveflow:hidden;">
         <iframe :src="this.activeVideo.youtobeURL" frameborder='0'
          allow='autoplay;encrypted-media' allowfullscreen style='width:100%;height:500px;'>
         </iframe>
         <h3>{{this.activeVideo.title}}</h3>
       </div>  
  
       <div class="video-list" style="float:right;width:20%;text-align:center;">
       <div v-for='video in videos' :key='video.id' class="thumbnail" >
         <div class="thumbnail-img" >
           <div style="height:50%;width:100%;position:absolute;z-index:999"
           @click="activeVideoShow(video.id)"></div>
         <iframe :src='video.youtobeURL' :alt="video.title"  />
         </div>
         <div class="thumbnail-info">
           <h4>{{video.title}}</h4>
           <div class="thumbnail-views">
            <span>{{video.speaker}}</span>
            <span>{{video.views}} Views</span>
           </div>
           <div class="thumbnail-describe">
           {{video.describe}}
           </div>
         </div>
       </div>
     </div>
     </div>
       
  </div>
</template>

<script>
import{videoPlayer} from 'vue-video-player'
import './../../node_modules/video.js/dist/video-js.css'
import './../../node_modules/vue-video-player/src/custom-theme.css'
export default {
  props:{
    videoUrl:String,
    state:Boolean,
  },
  data () {
    return {
      flag:false,
     videos:[{
       id:1,title:'test2',youtobeURL:'http://player.youku.com/embed/XMzcwNTY3NTM2MA',speaker:'harry', likes:101,views:0,describe:'good'
     },{
       id:2,title:'test3',youtobeURL:'http://player.youku.com/embed/XMzcwNTY3NTM2MA',speaker:'harry', likes:100,views:75,describe:'good'
     }],
     activeVideo:{
        id:3,title:'test1',thumbnail:'./../../static/images/headImg.png',speaker:'harry', likes:0,views:0,describe:'good',
       youtobeURL:'http://player.youku.com/embed/XMzcwNTY3NTM2MA'
     }
    }
  },
  watch:{
    videoUrl(val){
        if(val !== ''){
          this.$refs.videoPlayer.player.src(val)
        }
    },
    state:function(val){
      if(val){
        this.$refs.videoPlayer.player.pause()
      }
    }
  },
  components:{
    videoPlayer
  },
  methods:{
     activeVideoShow(id){
    this.videos.filter(item=>{
         if(id == item.id){
           this.activeVideo=item
         }
       })
       
      
    },
    onPlayerPlay(player){},
    onPlayerPause(player){},
    playerStateChanged(player){}
  },
  computed:{
    player(){
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  background-color:#efefef;
  min-height:100%;

}

</style>
