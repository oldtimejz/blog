import Vue from "vue";
import App from "./App.vue";
import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/css/common.css";
import VueRouter from "vue-router";
import router from "./router/index.js";
import "./assets/plugins/uedition/themes/default/css/ueditor.min.css";
import "./assets/plugins/uedition/ueditor.config.js";
import "./assets/plugins/uedition/ueditor.all.js";
import "./assets/plugins/uedition/lang/zh-cn/zh-cn.js";
// import "./plugins/uedition/ueditor.parse.min.js";
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
