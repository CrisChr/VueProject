<template>
<el-col :span="20">
  <el-button type="danger" icon="el-icon-edit" circle class="edit" @click="CreateBlog"></el-button>
  <el-card :body-style="{ padding: '0px' }" shadow="hover" class="card" v-for="(item, index) in items" :key="index">
    <div slot="header">
      <span><h2>{{item.title}}</h2></span>
    </div>
    <div class="bottom clearfix">
      <time class="time">{{item.date}}</time>
      <el-button type="text" style="margin-left:50px">More...</el-button>
    </div>
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
      }
    };
  },
  methods: {
    CreateBlog() {
      this.$router.push('/newblog')
    }
  },
  mounted: function() {
    let blog = this.$localStorage.get('blog')
    this.items = blog
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