import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Notfound from '@/components/Notfound'
import tableList from '@/components/page/tablelist'
import randomPic from '@/components/page/randomPic'
import canvasTest from '@/components/page/canvas'
import table1 from '@/components/nav/nav1'
import form1 from '@/components/nav/nav2'
import echart1 from '@/components/nav/nav3'
import Music from '@/components/nav/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '导航1',
      iconCls: 'el-icon-share',
      component: Home,
      children: [
        { path: '/table', component: tableList, name: 'Table', },
        { path: '/form', component: randomPic, name: 'Form' },
        {
          path: '/canvas', component: canvasTest, name: 'Canvas',
        },
      ]
    },
    {
      path: '/',
      name: '导航2',
      iconCls: 'el-icon-video-play',
      component: Home,
      children: [
        { path: '/table1', component: table1, name: 'Table1' },
        { path: '/form1', component: form1, name: 'Form1' },
        { path: '/chart1', component: echart1, name: 'Chart1' },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      hidden: true,
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      hidden: true,
      component: Signup
    },
    {
      path: '/404',
      name: 'notfound',
      hidden: true,
      component: Notfound
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    },
    {
      path: '/table1/:id',
      hidden: true,
      component: Music
    },
  ]
})
