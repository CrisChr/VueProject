<template>
  <el-container>
    <el-form :label-position="top" style="margin-left:280px">
      <el-form-item label="Title">
        <el-input type="text" width="100" style="width:600px" v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="Content">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" size="medium" v-model="content"></el-input>
      </el-form-item>
      <el-button type="warning" @click="CreateBlog">Create</el-button>
    </el-form>
  </el-container>
</template>

<script>
import BlogModel from '../models/Blog.js'

 export default {
   name: 'newblog',
   props: ['from'],
   data() {
     return {
       title: '',
       content: '',
       top: 'top'
     }
   },
   localStorage: {
     blog: {
       type: Array
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
          //to do: save blog to local storage
          let userName = this.$localStorage.get("user").name
          let date = new Date()
          let year = date.getFullYear()
          let month = this.PadDate(date.getMonth() + 1)
          let day = this.PadDate(date.getDate())
          let dateFormat = year + "-" + month + "-" + day
          BlogModel.create(userName, this.title, this.content, dateFormat, null, 0)
          let existBlog = this.$localStorage.get('blog') //获取当前已存储的博客
          if(existBlog == null){ //如果当前数组没有值则创建一个空数组并push第一个值
            existBlog = []
            existBlog.push(BlogModel)
          }else{
            existBlog.unshift(BlogModel) //在数组的开头添加Blog对象
          }
          //创建成功
          if(this.$localStorage.set('blog', existBlog)){
            this.$message({
              type: 'success',
              showClose: true,
              message: 'Post new blog successful!'
            })
            //根据路由来源判断返回
            if(this.$props.from == 'blog'){
              this.$router.push('/blog')
            }
            if(this.$props.from == 'myblog'){
              this.$router.push('/myblog')
            }
          } else {
            this.$message({
              type: 'error',
              showClose: true,
              message: 'There is something error when post a blog'
            })
          }
        }
      },
     PadDate(value) {
       return value < 10 ? "0" + value : value;
     }
   }
 }
</script>

<style>

</style>

