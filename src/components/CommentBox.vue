<template>
    <div class="box">
        <span class="close el-icon-close" @click="closeCBox"></span>
        <el-input placeholder="请输入内容"  v-model="input10" clearable></el-input>
        <el-button type="primary">发送</el-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input10: ""
    };
  },
  methods: {
    closeCBox() {
      this.$emit("close", false);
    }
  }
};
</script>
<style scoped>
.box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #fff;
  padding: 20px 10px 0 10px;
  box-sizing: border-box;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  color: #409eff;
  transition: all 0.3s;
}
.close:hover {
  text-shadow: 0px 0px 10px #88e2d9;
}
.el-input {
  width: 80%;
  margin-right: 30px;
}
</style>
