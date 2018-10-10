<template>
  <div>
    <div class="container-left">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人信息</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>个人随笔</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>随笔标签</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>阅读排行</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div class="container-right">
        <ArticleList></ArticleList>
    </div>
  </div>
</template>
<script>
import ArticleList from './ArticleList.vue'
export default {
    data () {
        return {

        }
    },
    components:{
        ArticleList,
    }
}
</script>
<style scoped>
.container-left{
    float: left;
    width: 300px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 300px;
    margin-bottom: 20px; 
    opacity: 0.9;
  }
  .box-card .clearfix{
      color: #fff;
      font-size: 18px;
      font-weight: 500;
  }
  .container-right{
      padding-left: 380px;
  }
</style>
