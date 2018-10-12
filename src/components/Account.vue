<template>
    <div class="account">
      <el-dropdown>
      <span class="el-dropdown-link">
        用户<i class="el-icon-arrow-down el-icon--right"></i> 
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item ><div @click="login">登录</div> </el-dropdown-item>
        <el-dropdown-item ><div @click="register">注册</div></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="showComp" @click.self="hide" v-show="show">

		<component :is="componentId"></component>

    </div>
    </div>
</template>
<script>
import Login from "./Login";
import Register from "./Register";
export default {
  data() {
    return {
      show: false,
      componentId: ""
    };
  },
  components: {
    Login,
    Register
  },
  methods: {
    login() {
      this.show = true;
      this.componentId = "Login";
    },
    register() {
      this.show = true;
      this.componentId = "Register";
    },
    hide() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.account {
  position: absolute;
  top: 20px;
  right: 100px;
}
.el-dropdown-link {
  color: #fff;
}
.showComp {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>

