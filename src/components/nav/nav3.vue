<template>
  <section class="chart-container">
    <el-row>
      <!-- <el-col :span="12">
        <div id="chartColumn"
             style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartBar"
             style="width:100%; height:400px;"></div>
      </el-col> -->
      <el-col :span="12">
        <div id="chartLine"
             style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="12">
        <div id="chartPie"
             style="width:100%; height:400px;"></div>
      </el-col>
      <el-col :span="24">
        <a href="http://echarts.baidu.com/examples.html"
           target="_blank"
           style="float: right;">more>></a>
      </el-col>
    </el-row>
    <button @click="xiazai">下载</button>
  </section>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      chartLine: null
    }
  },

  methods: {
    xiazai () {
      const imgUrl = this.chartLine.getDataURL({
        type: 'png',
        backgroundColor: 'white',
        // 导出的图片分辨率比例，默认为 1。
        pixelRatio: 1,
      })
      // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
      if (window.navigator.msSaveOrOpenBlob) {
        var bstr = atob(imgUrl.split(',')[1])
        var n = bstr.length
        var u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        var blob = new Blob([u8arr])
        window.navigator.msSaveOrOpenBlob(blob, 'chart-download' + '.' + 'png')
      } else {
        // 这里就按照chrome等新版浏览器来处理
        const a = document.createElement('a')
        a.href = imgUrl
        a.setAttribute('download', 'chart-download')
        a.click()
      }
    },
    drawLineChart () {
      this.chartLine = echarts.init(document.getElementById('chartLine'));
      this.chartLine.setOption({
        title: {
          text: 'Line Chart'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '搜索引擎']
        },
        // toolbox: {
        //   padding: 30,
        //   show: true,
        //   feature: {
        //     saveAsImage: { show: true },
        //     //敲黑板，重点！！！
        //     myTool2: {//自定义按钮 danielinbiti,这里增加，selfbuttons可以随便取名字    
        //       show: true,//是否显示    
        //       title: '查看全部', //鼠标移动上去显示的文字    
        //       icon: 'path://M525.4 721.2H330.9c-9 0-18.5-7.7-18.5-18.1V311c0-9 9.3-18.1 18.5-18.1h336.6c9.3 0 18.5 9.1 18.5 18.1v232.7c0 6 8.8 12.1 15 12.1 6.2 0 15-6 15-12.1V311c0-25.6-25.3-48.9-50.1-48.9h-335c-26.2 0-50.1 23.3-50.1 48.9v389.1c0 36.3 20 51.5 50.1 51.5h197.6c6.2 0 9.3-7.5 9.3-15.1 0-6-6.2-15.3-12.4-15.3zM378.8 580.6c-6.2 0-12.3 8.6-12.3 14.6s6.2 14.6 12.3 14.6h141.4c6.2 0 12.3-5.8 12.3-13.4 0.3-9.5-6.2-15.9-12.3-15.9H378.8z m251.6-91.2c0-6-6.2-14.6-12.3-14.6H375.7c-6.2 0-12.4 8.6-12.4 14.6s6.2 14.6 12.4 14.6h240.8c6.2 0.1 13.9-8.5 13.9-14.6z m-9.2-120.5H378.8c-6.2 0-12.3 8.6-12.3 14.6s6.2 14.6 12.3 14.6h240.8c7.7 0 13.9-8.6 13.9-14.6s-6.2-14.6-12.3-14.6z m119.4 376.6L709 714.1c9.2-12 14.6-27 14.6-43.2 0-39.4-32.1-71.4-71.8-71.4-39.7 0-71.8 32-71.8 71.4s32.1 71.4 71.8 71.4c16.3 0 31.3-5.4 43.4-14.5l31.6 31.5c3.8 3.8 10 3.8 13.8 0 3.8-3.8 3.8-10 0-13.8z m-88.8-23.6c-28.3 0-51.3-22.8-51.3-51s23-51 51.3-51c28.3 0 51.3 22.8 51.3 51s-23 51-51.3 51z', //图标    
        //       onclick: function () {//点击事件,这里的option1是chart的option信息    
        //         $('.big').css('display', 'block');
        //       }
        //     }
        //   }
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      });
    },
    drawCharts () {
      this.drawLineChart()
    },
  },

  mounted: function () {
    this.drawCharts()
  },
  updated: function () {
    this.drawCharts()
  }
}
</script>

<style scoped>
.chart-container {
  width: 100%;
  float: left;
}
/*.chart div {
        height: 400px;
        float: left;
    }*/

.el-col {
  padding: 30px 20px;
}
</style>
