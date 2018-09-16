<template>
  <h1>{{ msg }}</h1>
</template>

<script>
import bus from '../bus/EventBus.js'

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
        message: 'Please log in first'
      })
      this.$router.push('/account/login/myblog')
    }
  }
};
</script>

<style>
</style>