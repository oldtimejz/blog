<template>
  <div id="app">
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to='/'> 首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><router-link to='/Article'>文章</router-link></template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" ><router-link to='/About'> 关于我</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to='/Tellme'> 留言</router-link></el-menu-item>
      </el-menu>
      <Account></Account>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Account from "./components/Account";
export default {
  name: "app",
  components: {
    Account
  },
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu.el-menu--horizontal {
  width: 700px;
  margin: 0 auto;
}
.header {
  position: relative;
  background: rgb(84, 92, 100);
}
.header ul li {
  width: 100px;
}
.container {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0 120px 0;
}
.header ul li a {
  color: #fff;
  display: block;
}
.header .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  position: absolute;
}
</style>
