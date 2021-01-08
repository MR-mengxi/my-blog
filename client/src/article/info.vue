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
      <div class="content markdown-body">
        <div v-html="content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "../axios/request";
import marked from "marked";

export default {
  data() {
    return {
      contentInfo: {},
      content: "",
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
      const html = marked(this.contentInfo.content);
      this.content = html;
    },
  },
  async created() {
    const id = this.$route.params.id;
    // 从远程获取详情页的信息
    const result = await axios().get(`/api/article/${id}`);
    this.contentInfo = result.data.data;
    this.markdownRender();
  },
};
</script>

<style lang="scss" scoped>
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