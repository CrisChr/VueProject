<template>
  <el-container style="margin-left:500px">
    <el-form ref="form">
      <el-form-item id="userDiv" label="User Name">
        <el-input id="login_username" clearable v-model="user_name"></el-input>
      </el-form-item>
      <el-form-item id="passwordDiv" label="Password">
        <el-input type="password" id="login_password" clearable v-model="user_password"></el-input>
      </el-form-item>
        <el-button id="login_btn" type="success" @click="Submit" plain>Log in</el-button>
        <router-link to="/account/signup" style="color:blue;margin-left:20px;font-size:10px;underline:none">go to Sign up</router-link>
    </el-form>
  </el-container>
</template>

<script>
import CryptoJs from "crypto-js"
import bus from '../bus/EventBus.js'

export default {
  name: "login",
  props: ['from'],
  data() {
    return {
      user_name: "",
      user_password: "",
      title: "Input Notification",
      type: "error",
      offset: 150,
      isLogin: false
    };
  },
  localStorage: {
    userId: {
      type: String
    }
  },
  methods: {
    Submit: function() {
      if (this.user_name == "" || this.user_password == "") {
        this.$notify({
          type: this.type,
          title: this.title,
          offset: this.offset,
          message: "Please input your User Name and Password"
        });
      } else {
          var user_id = CryptoJs.MD5(this.user_name + this.user_password).toString()
          if (this.$localStorage.get("userId") === user_id) {
            this.$message({
              type: "success",
              message: "Log in successfully!",
              showClose:true
            });
            this.isLogin = true
            this.$cookies.set('cookie_id', user_id, "5MIN")
            bus.$emit("user_status", this.isLogin)
          //if from Myblog to Log in, then return to Myblog page
          if(this.$props.from == 'myblog'){
            this.$router.push('/myblog')
          }
          //if from Setting to Log in, then return to Setting page
          if(this.$props.from == 'setting'){
            this.$router.push('/account/setting')
          }
        } else {
          this.$notify({
            type: this.type,
            title: this.title,
            offset: this.offset,
            message: "User Name or Pass word not correct!"
          });
        }
      }
    }
  }
};
</script>

<style>
</style>
