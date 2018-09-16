<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: "setting",
  data() {
    return {
      msg: "Setting"
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
  }
};
</script>

<style>
</style>