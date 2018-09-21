<template>
<el-col :span="20">
  <el-button type="danger" icon="el-icon-edit" circle class="edit" @click="CreateBlog"></el-button>
  <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card" v-for="(item, index) in items" :key="index">
    <div slot="header">
      <span><h2>{{item.title}}</h2></span>
    </div>
    <div class="bottom clearfix">
      <time class="time">{{item.date}}</time>
      <el-button type="text" style="margin-left:50px" @click="ShowMore(true, item)">More...</el-button>
    </div>
    <el-dialog v-bind:title="title" :visible.sync="dialgBlogVisible" width="60%" center>
      <h3>{{content}}</h3>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <p>{{likeValue}}</p>
      </span>
    </el-dialog>
  </el-card>
</el-col>
</template>

<script>
import formatDate from "../middle/DateFormat.js";

export default {
  name: "blog",
  data() {
    return {
      msg: "Blog",
      items: {
        type: Object
      },
      dialgBlogVisible: false,
      title: '',
      content: '',
      likeValue: 0
    };
  },
  methods: {
    CreateBlog() {
      this.$router.push('/newblog/blog')
    },
    ShowMore(visible, item) {
      this.dialgBlogVisible = visible
      this.title = item.title
      this.content = item.content
      if(item.likes > 99){ //点赞
        this.likeValue = '99+'
      }else{
        this.likeValue = item.likes
      }
    }
  },
  created: function() {
    let blog = this.$localStorage.get('blog')
    if(typeof blog === 'string'){
      this.items = JSON.parse(blog)
    }else{
      this.items = blog
    }
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
  margin-left: 30px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.card{
  margin-left: 200px;
  margin-top: 20px;
}

.edit{
  z-index:999;
  position:fixed;
  margin-left:1000px;
}
</style>