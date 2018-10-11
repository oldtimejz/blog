import Vue from "vue";
import App from "./App.vue";
import elementui from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/css/common.css";
import VueRouter from "vue-router";
import router from "./router/index.js";
import Vuex from "vuex";
import store from "./store.js";

Vue.use(elementui);
Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
