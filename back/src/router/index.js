import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Admin',
    redirect: '/admin',
    component: () => import('../admin'),
    children: [
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('../admin/admin'),
      },
      {
        path: 'article',
        name: 'Article',
        component: () => import('../admin/article/article')
      },
      {
        path: 'article/info',
        name: 'ArticleInfo',
        component: () => import('../admin/article/articleInfo')
      },
      {
        path: 'comment',
        name: 'Comment',
        component: () => import('../admin/comment/comment')
      },
      {
        path: 'comment/info',
        name: 'CommentInfo',
        component: () => import('../admin/comment/commentInfo')
      },
      {
        path: 'music',
        name: 'Music',
        component: () => import('../admin/music/music')
      },
      {
        path: 'music/info',
        name: 'MusicInfo',
        component: () => import('../admin/music/musicInfo')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('../admin/setting')
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../login')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.name !== "Login" && !store.state.data){
//     console.log(store.state.data);
//     next("/login");
//   }
//   else{
//     console.log(store.state.data);
//     next();
//   }
// })


export default router
