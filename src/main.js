import Vue from "vue";
import App from "./App.vue";
import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/css/common.css";
import VueRouter from "vue-router";
import router from "./router/index.js";
import "../public/js/ueditor/themes/default/css/ueditor.min.css";
import "../public/js/ueditor/ueditor.config.js";
import "../public/js/ueditor/ueditor.all.js";
import "../public/js/ueditor/lang/zh-cn/zh-cn.js";
// import "./assets/js/ueditor/ueditor.parse.min.js";
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
