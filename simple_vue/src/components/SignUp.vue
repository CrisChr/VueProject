<template>
  <el-container style="margin-left:500px">
    <el-form ref="form">
      <el-form-item id="userDiv" label="User Name">
        <el-input id="signup_username" clearable v-model="user_name"></el-input>
      </el-form-item>
      <el-form-item id="passwordDiv" label="Password">
        <el-input type="password" id="signup_password" clearable v-model="user_password"></el-input>
      </el-form-item>
      <el-form-item id="passwordConfirmDiv" label="Confirm your password">
        <el-input type="password" id="signup_confirmpass" clearable v-model="confirm_password "></el-input>
      </el-form-item>
      <el-button id="btn" type="primary" @click="Submit" plain>Sign up</el-button>
    </el-form>
  </el-container>
</template>

<script>
import CryptoJs from "crypto-js";
import bus from '../bus/EventBus.js'

export default {
  name: "signup",
  data() {
    return {
      user_name: "",
      user_password: "",
      confirm_password: "",
      title: "Input Notification",
      type: "error",
      offset: 150,
      isSignup: false
    };
  },
  localStorage: {
    userId: {
      type: String
    }
  },
  methods: {
    Submit: function() {
      if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(this.user_name)) {
        this.$notify({
          title: this.title,
          type: this.type,
          offset: this.offset,
          message: "用户名必须大于5位且是数字和字母组合"
        });
      } else if (this.user_password.length < 6) {
        this.$notify({
          title: this.title,
          type: this.type,
          offset: this.offset,
          message: "密码字符数必须至少6位"
        });
      } else if (
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(this.user_password)
      ) {
        this.$notify({
          title: this.title,
          type: this.type,
          offset: this.offset,
          message: "密码必须是字母、数字和特殊字符的组合"
        });
      } else if (this.user_password !== this.confirm_password) {
        this.$notify({
          title: this.title,
          type: this.type,
          offset: this.offset,
          message: "两次输入的密码不一致"
        });
      } else {
        var user_id = this.Encrypt(this.user_name + this.user_password)
        this.$localStorage.set("userId", user_id);
        this.$message({
          type: "success",
          showClose: true,
          message: "regiest successfully!"
        });
        this.isSignup = true
        this.$cookies.set('cookie_id', user_id, "5MIN") //cookie expired after 5 min
        this.$router.push('/')
        bus.$emit('user_status', this.isSignup)
      }
    },
    Encrypt: function(val) {
      return CryptoJs.MD5(val).toString();
    }
  }
};
</script>

<style>
</style>
