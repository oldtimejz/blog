import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    //储存要保存在状态中的数据
    //Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态
  },
  mutations: {
    //具体的操作，在vue的实例中通过提交的方式提交报错
  }
});

export default store;
