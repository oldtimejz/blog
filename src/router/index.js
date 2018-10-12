import VueRouter from "vue-router";
import Home from "../components/Home";
import Article from "../components/Article";
import About from "../components/About";
import Tellme from "../components/Tellme";
import Descrition from "../components/Descrition";
import Panel from "../components/Panel";

var router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/Article", component: Article },
    { path: "/About", component: About },
    { path: "/Tellme", component: Tellme },
    { path: "/Descrition", component: Descrition },
    { path: "/Panel", component: Panel }
  ]
  // linkActiveClass: "is-active"
});
export default router;
