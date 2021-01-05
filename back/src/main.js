import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// import * as article from './axios/articleService';
// article.addArticle("这是一个文章标题","这是一篇文章，是用来测试的","https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=155346741,3953923104&fm=26&gp=0.jpg").then(res=>{
//   console.log(res.data);
// })

Vue.use(ElementUI);
Vue.use(mavonEditor);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
