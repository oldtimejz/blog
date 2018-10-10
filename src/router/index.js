import VueRouter from 'vue-router'
import Home from '../components/Home'
import Article from '../components/Article'
import About from '../components/About'
import Tellme from '../components/Tellme'

var router = new VueRouter({
    routes:[
        {path: '/', component: Home},
        {path: '/Article', component: Article},
        {path: '/About', component: About},
        {path: '/Tellme', component: Tellme}
    ]
});
export default router;