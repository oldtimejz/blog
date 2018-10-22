<template>
  <div class="components-container">    
    <div class="editor-container">
      <UE :defaultMsg='defaultMsg' :config='config' ref="ue"></UE>
    </div>
    <el-button type="primary" @click="getUEContent()">获取内容</el-button>
  </div>
</template>
<style>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>
<script>
import UE from "./UEdit.vue";
export default {
  components: { UE },
  data() {
    return {
      defaultMsg: "",
      config: {
        initialFrameWidth: "100%",
        initialFrameHeight: 600,

        UEDITOR_HOME_URL: "./UEditor/"
      }
    };
  },
  methods: {
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: "获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
      console.log(content);
    }
  }
};
</script>