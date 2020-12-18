import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin'),
    children: [
      { path: '/admin', name: 'Admin', component: () => import('../views/admin/admin') },
      { path: 'article', name: 'Article', component: () => import('../views/admin/article') },
      { path: 'article/info', name: 'ArticleInfo', component: () => import('../views/admin/articleInfo') },
      { path: 'envelope', name: 'Envelope', component: () => import('../views/admin/envelope') },
      { path: 'envelope/info', name: 'EnvelopeInfo', component: () => import('../views/admin/envelopeInfo') },
      { path: 'comment', name: 'Comment', component: () => import('../views/admin/comment') },
      { path: 'myself', name: 'Myself', component: () => import('../views/admin/myself') },
      { path: 'setting', name: 'Setting', component: () => import('../views/admin/setting') },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
