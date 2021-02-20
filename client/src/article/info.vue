<template>
  <div class="article-info">
    <section>
      <h1 class="title">{{ contentInfo.title }}</h1>
      <div class="info">
        <span>十一月 03, 2020</span>
        <span> 阅读 {{ contentInfo.read }}</span>
        <span>字数 1528</span>
        <span>评论 28</span>
        <span>喜欢 {{ contentInfo.like }}</span>
      </div>
      <article id="content markdown-body">
        <div v-html="content" v-highlight></div>
      </article>
    </section>
    <Comment :lists="commentList" :id="$route.params.id"/>
  </div>
</template>

<script>
import axios from "../axios/request";
import marked from "marked";
import "highlight.js/styles/monokai-sublime.css";
import Comment from "./articleWord/index";
import { list } from "../axios/comment";

export default {
  data() {
    return {
      contentInfo: {},
      content: "",
      page: 1,
      limit: 2,
      commentList: [],
    };
  },
  methods: {
    markdownRender() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      this.content = marked(this.contentInfo.content);
    },
    // 获取评论列表
    async getComData() {
      const data = {
        page: this.page,
        limit: this.limit,
        ArticleId: this.$route.params.id,
      };
      // console.log(data);
      const result = await list(data);
      // console.log(result);
      this.commentList = result.data;
      // console.log(this.commentList)
      // const { total } = result.data.data;
      // setTimeout(() => {
      //   this.commentList = result.data.data;
      //   console.log(this.commentList);
      //   // this.isLoading = false;
      // }, 1000);
    },
  },
  async created() {
    const id = this.$route.params.id;
    // 从远程获取详情页的信息
    const result = await axios().get(`/api/article/${id}`);
    this.contentInfo = result.data.data;
    this.markdownRender();
  },

  mounted(){
    this.getComData();
  },
  components: {
    Comment,
  },
};
</script>

<style lang="scss" scoped>
@import "github-markdown-css";

.article-info {
  width: 800px;
  height: 300px;
  margin: auto;
  section {
    .title {
      font-size: 30px;
      color: #333;
      margin: 0;
      padding: 130px 0 22px;
    }
    .info {
      width: 100%;
      span {
        font-size: 13px;
        color: #6a737d;
        margin-right: 10px;
      }
    }
    .markdown-body {
      box-sizing: border-box;
      min-width: 200px;
      max-width: 980px;
      margin: 0 auto;
      padding: 45px;
    }

    @media (max-width: 767px) {
      .markdown-body {
        padding: 15px;
      }
    }
    .content {
      padding: 100px 0;
      font-size: 14px;
      p {
        line-height: 36px;
        margin: 0 0 22px;
        font-size: 16px;
      }
    }
  }
}
</style>