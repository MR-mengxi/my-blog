import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../login'
import Music from '../components/music'
import Article from '../article'
import ArticleInfo from '../article/info'
import Comment from '../comment'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/music',
    name: "Music",
    component: Music,
    // beforeEnter(to,from,next){
    //   if (store.state.loginUser.data) {
    //     //有用户
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // }
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/article',
    name: "Article",
    component: Article
  },
  {
    path: '/articleinfo/:id',
    name: 'ArticleInfo',
    component: ArticleInfo
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comment
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('../components/scrollBar')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
