import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'animate.css'
import router from './router'
import store from './store'

// const article = require("./axios/article");
// article.getArticleInfo(2).then(res=>console.log(res));

// const music = require("./axios/getMusic");
// music.getMusic().then(resp=>console.log(resp));


// const comment = require("./axios/comment");
// comment.add({ comment: "阿里管理工具阿拉贡" }).then(resp => console.log(resp));

// const article = require("./axios/article");
// article.getRead(2, { read: 29 }).then(resp => console.log(resp));

// const comment = require("./axios/comment");

// comment.list({page:1,limit:10,ArticleId:4}).then(resp=>console.log(resp));

Vue.use(ElementUI);

// 高亮富文本
// import hljs from 'highlight.js/lib/core';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
// 高亮富文本

// 引入markdown-css
import 'github-markdown-css/github-markdown.css'
// 引入markdown-css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
