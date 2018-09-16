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
  beforeCreate: function() {
    if(!this.$cookies.isKey("cookie_id")){
      this.$router.push('/account/login')
      this.$message({
        type: 'warning',
        showClose: true,
        message: 'Please log in first'
      })
    }
  }
};
</script>

<style>
</style>