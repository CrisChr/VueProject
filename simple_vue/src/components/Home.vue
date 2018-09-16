<template>
<div>
  <el-row :gutter="20" style="margin-top:50px">
    <el-col :span="12" :offset="6">
      <el-card>
        <div>
          <h2>Welcom to Vue Blog</h2>
        </div>
      </el-card>
    </el-col>
  </el-row>
  
  <el-row type="flex" justify="space-around" style="margin-top:20px">
    <el-col :span="6">
      <el-card shadow="hover">
        <div>
          <h4>vue-cli</h4>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div>
          <h4>Element UI</h4>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="hover">
        <div>
          <h4>Web SQL</h4>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Home"
    };
  }
};
</script>

<style>
h4 {
  text-align: center;
}
</style>
