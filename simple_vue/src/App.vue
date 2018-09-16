<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-header style="padding:0">
          <el-menu :router="true" mode="horizontal" :default-active="activeIndex" background-color="#F2F6FC">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/blog">Blog</el-menu-item>
            <el-menu-item index="/myblog">My Blog</el-menu-item>
            <el-submenu index="/account" :offset="8">
              <template slot="title">Account</template>
              <el-menu-item index="/account/login/direct" v-if="!userLogin">Log in</el-menu-item>
              <el-menu-item index="/account/signup" v-if="!userLogin">Sign up</el-menu-item>
              <el-menu-item index="/account/setting">Setting</el-menu-item>
              <el-menu-item index="" v-if="userLogin" @click="LogOut">Log out</el-menu-item>
            </el-submenu>
            <el-menu-item index="/account/setting" style="margin-left:50%">user name</el-menu-item>
          </el-menu>
        </el-header>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-main>
          <router-view keep-alive></router-view>
        </el-main>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bus from './bus/EventBus.js'

export default {
  name: "app",
  data() {
    return {
      activeIndex: "/",
      userLogin: false
    };
  },
  updated: function(){
    bus.$on("user_status", (data) => {
      if(data) this.userLogin = true
      return this.userLogin
    })
  },
  methods: {
    LogOut() {
      this.$cookies.remove('cookie_id')
      this.userLogin = false
      return this.userLogin
    }
  }
};
</script>

<style lang="scss">
</style>
