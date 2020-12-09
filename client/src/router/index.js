import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/login/Login'
import Register from '../components/login/Register'
import Music from '../components/music'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/music',
    name:"Music",
    component:Music,
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
    path:'/register',
    name:'Register',
    component:Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
