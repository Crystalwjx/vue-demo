<template>
  <!-- transition>keep-alive>router-view -->
  <el-row class="container">
    <el-col :span="24"
            class="header">
      <!-- VUEADMIN 导航部分文字 -->
      <el-col :class="collapsed?'logoalone':'logo'">
        <span v-if="!collapsed">导航头部</span>
        <span @click="showAside"><i class="el-icon-s-tools"></i></span>

      </el-col>
      <el-col :span="4"
              class="userinfo">
        <span>登录信息？</span>
        <el-dropdown trigger="hover">
          <i class="el-icon-user userinfo-inner"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24"
            class="main">
      <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单 没有折叠-->
        <div class="navmenu"
             v-if="!collapsed">
          <el-menu :default-active="$route.path"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   @select="handleSelect"
                   v-show="!collapsed"
                   unique-opened
                   router>
            <div v-for="(item,index) in $router.options.routes"
                 v-if="!item.hidden">
              <el-submenu :index="index+''"
                          v-if="!item.leaf">
                <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                <el-menu-item v-for="child in item.children"
                              :index="child.path"
                              :key="child.path"
                              v-if="!child.hidden">{{child.name}}</el-menu-item>
              </el-submenu>
              <el-menu-item v-if="item.leaf&&item.children.length>0"
                            :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </div>
          </el-menu>
        </div>
        <ul class="el-menu el-menu-vertical-demo collapsed"
            v-show="collapsed"
            ref="menuCollapsed">
          <li v-for="(item,index) in $router.options.routes"
              v-if="!item.hidden"
              class="el-submenu item">
            <div v-if="!item.leaf">
              <div class="el-submenu__title"
                   style="padding-left: 20px;"
                   @mouseover="showMenu(index,true)"
                   @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
              <ul class="el-menu submenu"
                  :class="'submenu-hook-'+index"
                  @mouseover="showMenu(index,true)"
                  @mouseout="showMenu(index,false)">
                <li v-for="child in item.children"
                    v-if="!child.hidden"
                    :key="child.path"
                    class="el-menu-item"
                    style="padding-left: 40px;"
                    :class="$route.path==child.path?'is-active':''"
                    @click="$router.push(child.path)">{{child.name}}</li>
              </ul>
            </div>
            <div v-else>
          <li class="el-submenu">
            <div class="el-submenu__title el-menu-item"
                 style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"
                 :class="$route.path==item.children[0].path?'is-active':''"
                 @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
          </li>
          </div>
          </li>
        </ul>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24"
                  class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/"
                           class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched"
                                  :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24"
                  class="content-wrapper">
            <transition name="fade"
                        mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath);
    },
    handleSelect () {

    },
    showAside () {
      this.collapsed = !this.collapsed
    },
    showMenu (i, status) {
      this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
    },
    signout () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('user');
        _this.$router.push('/login');
      }).catch(() => {

      });

    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #ccc;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      height: 60px;
      background: #5f5f5f;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
      }
    }
    .logo {
      width: 230px;
    }
    .logoalone {
      width: 60px;
    }
  }
  .tools {
    background: pink;
    padding: 0px 23px;
    width: 14px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .main {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      background: #cce8cf;
      height: 100%;
      .el-menu {
        background: #cce8cf;
        height: 100%;
      }
      .submenu {
        position: absolute;
        top: 0px;
        left: 60px;
        z-index: 99999;
        height: auto;
        display: none;
      }
      .navmenu {
        height: 100%;
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      background: #f1f2f7;
      flex: 1;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>



