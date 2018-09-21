<template>
  <el-col :span="20">
    <el-button type="danger" icon="el-icon-edit" circle class="edit" @click="CreateBlog"></el-button>
    <el-table style="margin-top:50px" :data="tableData">
      <el-table-column prop="date" label="Created"></el-table-column>
      <el-table-column prop="title" label="Title"></el-table-column>
      <el-table-column prop="operate" label="Operation" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">view</el-button>
          <el-button type="text" size="small">update</el-button>
          <el-button type="text" size="small">remove</el-button>
        </template>
      </el-table-column>
      
    </el-table>
  </el-col>
</template>

<script>
import bus from '../middle/EventBus.js'

export default {
  name: "myblog",
  data() {
    return {
      msg: "My Blog",
      tableData: []
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
    }else{
      let user = this.$localStorage.get("user")
      let blog = this.$localStorage.get('blog')
      if(typeof blog === 'string'){
        blog = JSON.parse(blog)
      }
      console.log("blog type: "+typeof blog)
      if(blog != null){
        for(let i=0; i<blog.length; i++){
          if(user.name === blog[i].username){
            this.tableData.push(blog[i])
          }
        }
      }
    }
  },
  methods: {
    CreateBlog() {
      this.$router.push('/newblog/myblog')
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