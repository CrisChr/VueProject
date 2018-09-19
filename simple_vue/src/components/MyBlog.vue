<template>
  <el-button type="danger" icon="el-icon-edit" circle class="edit" @click="CreateBlog"></el-button>
</template>

<script>
import bus from '../middle/EventBus.js'

export default {
  name: "myblog",
  data() {
    return {
      msg: "My Blog"
    };
  },
  mounted: function() {
    if(!this.$cookies.isKey("cookie_id")){
      this.$message({
        type: 'warning',
        showClose: true,
        message: 'Please log in'
      })
      this.$router.push('/account/login/myblog')
    }
  },
  methods: {
    CreateBlog() {
      this.$router.push('/newblog')
    }
  }
};
</script>

<style>
.edit{
  z-index:999;
  position:fixed;
  margin-left:1000px;
}
</style>