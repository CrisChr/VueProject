<template>
  <el-container>
    <el-form :label-position="top" style="margin-left:280px">
      <el-form-item label="Title">
        <el-input type="text" width="100" autofocus="true" clearable="true" style="width:600px" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" size="medium" v-model="content"></el-input>
      </el-form-item>
      <el-button type="warning" @click="CreateBlog">Create</el-button>
    </el-form>
  </el-container>
</template>

<script>
 export default {
   name: 'newblog',
   data() {
     return {
       title: '',
       content: ''
     }
   },
   mounted: function(){
     if(!this.$cookies.isKey("cookie_id")){
       this.$message({
        type: 'warning',
        showClose: true,
        message: 'Please log in'
      })
      this.$router.push('/account/login/newblog')
     }
   },
   methods: {
     CreateBlog() {
       if(this.title == "" || this.content == ""){
         this.$notify({
           type: 'error',
           offset: 150,
           message: 'Please input title and content'
         })
       } else {
         //to do  
       }
     }
   }
 }
</script>

<style>

</style>

