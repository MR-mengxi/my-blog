import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home"),
  },
  {
    path: '/music',
    name: "Music",
    redirect:"/music/musiclist",
    component: () => import("@/views/music"),
    children: [
      { path: 'musiclist', component: () => import("@/components/mymusic") },
      { path: 'notes', component: () => import("@/components/notes") },
      { path: 'collections', component: () => import("@/components/collections") },
      { path: 'recycle', component: () => import("@/components/recycle") },
    ]
  },
  {
    path: '/login',
    name: "Login",
    component: () => import("@/views/login")
  },
  {
    path: '/article',
    name: "Article",
    component: () => import("@/article")
  },
  {
    path: '/articleinfo/:id',
    name: 'ArticleInfo',
    component: () => import("@/article/info")
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import("@/views/comment")
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('@/components/scrollBar')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
