import Vue from "vue";
import App from "./App.vue";
import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/css/common.css";
import VueRouter from "vue-router";
import router from "./router/index.js";
import "../public/UEditor/themes/default/css/ueditor.min.css";
import "../public/UEditor/ueditor.config.js";
import "../public/UEditor/ueditor.all.js";
import "../public/UEditor/lang/zh-cn/zh-cn.js";
// import "../public/UEditor/ueditor.parse.min.js";
//import store from "./store.js";
//import Vuex from "vuex";

Vue.use(elementui);
Vue.use(VueRouter);
//Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  //store,
  render: h => h(App)
}).$mount("#app");
