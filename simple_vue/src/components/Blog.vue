<template>
<el-col :span="6">
  <el-card :body-style="{ padding: '0px' }" shadow="hover">
    <div slot="header">
      <span><h2>Title</h2></span>
    </div>
    <div class="bottom clearfix">
      <time class="time">{{currentDate | formatDate}}</time>
      <el-button type="text" style="margin-left:50px">详细</el-button>
    </div>
  </el-card>
</el-col>
  
</template>

<script>
import formatDate from "../middle/DateFormat.js";

let padDate = function(value) {
  //在月份、日期、小时等小于10时在前面补0
  return value < 10 ? "0" + value : value;
};

export default {
  name: "blog",
  data() {
    return {
      msg: "Blog",
      currentDate: new Date()
    };
  },
  filters: {
    formatDate(value) {
      let date = new Date();
      let year = date.getFullYear();
      let month = padDate(date.getMonth() + 1);
      let day = padDate(date.getHours());
      //整理数据并返回
      return year + "-" + month + "-" + day;
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
</style>