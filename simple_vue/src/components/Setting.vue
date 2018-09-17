<template>
  <el-container style="margin-left:500px">
    <el-form ref="form">
      <el-form-item id="userDiv" label="New Name">
        <el-input id="new_username" clearable v-model="user_name"></el-input>
      </el-form-item>
      <el-form-item id="passwordDiv" label="New Password">
        <el-input type="password" id="new_password" clearable v-model="user_password"></el-input>
      </el-form-item>
      <el-form-item id="passwordConfirmDiv" label="Confirm your new password">
        <el-input type="password" id="new_confirmpass" clearable v-model="confirm_password "></el-input>
      </el-form-item>
      <el-button id="btn" type="warning" @click="Submit" plain>Confirm</el-button>
    </el-form>
  </el-container>
</template>

<script>
import CryptoJs from "crypto-js";
import UserModel from '../models/User.js'

export default {
  name: "setting",
  data() {
    return {
      user_name: "",
      user_password: "",
      confirm_password: "",
      title: "Input Notification",
      type: "error",
      offset: 150
    };
  },
  mounted: function() {
    if(!this.$cookies.isKey("cookie_id")){
      this.$message({
        type: 'warning',
        showClose: true,
        message: 'Please log in first'
      })
      this.$router.push('/account/login/setting')
    }
  },
  methods: {
    Submit() {
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
        //to do: change the user name and password in localStorage
        let user = UserModel.get()
        user.name = this.user_name
        user.passWord = this.Encrypt(this.user_name + this.user_password)
        this.$localStorage.set('user', user)
        this.$message({
          type: "success",
          showClose: true,
          message: "change your account successfully!"
        });
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