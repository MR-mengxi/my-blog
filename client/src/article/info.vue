<template>
  <div class="article-info">
    <Loading v-if="isLoading" />
    <template v-else>
      <section>
        <h1 class="title">{{ contentInfo.title }}</h1>
        <div class="info">
          <span> 阅读 {{ contentInfo.read }}</span>
          <span>评论 {{ number }}</span>
          <span>喜欢 {{ contentInfo.like }}</span>
        </div>
        <article id="content markdown-body">
          <div v-html="content" v-highlight></div>
        </article>
        <comment-input @comment="comment" />
        <comment-list :lists="commentList" />
      </section>
    </template>
  </div>
</template>

<script>
import axios from "../axios/request";
import marked from "marked";
import "highlight.js/styles/monokai-sublime.css";
import { list, add } from "../axios/comment";
import CommentInput from "@/components/commentInput";
import CommentList from "@/components/commentList.vue";
import Loading from "@/components/loading";

export default {
  data() {
    return {
      isLoading: false,
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

    async comment(username, comment) {
      const data = {
        userId: username,
        comment: comment,
        ArticleId: this.$route.params.id,
      };
      const result = await add(data);
      this.$message({
        type: "success",
        message: "留言成功~~",
        offset: 60,
      });
      this.getComData();
    },
    // 获取评论列表
    async getComData() {
      const data = {
        page: this.page,
        limit: this.limit,
        ArticleId: this.$route.params.id,
      };
      const result = await list(data);
      this.commentList = result.data;
    },
  },
  async created() {
    this.isLoading = true;
    const id = this.$route.params.id;
    // 从远程获取详情页的信息
    const result = await axios().get(`/api/article/${id}`);
    this.contentInfo = result.data.data;
    if (this.contentInfo) {
      setInterval(() => {
        this.isLoading = false;
      }, 2000);
    }
    this.markdownRender();
  },

  computed: {
    number() {
      return this.commentList.datas.length;
    },
  },

  mounted() {
    this.getComData();
  },
  components: {
    CommentInput,
    CommentList,
    Loading,
  },
};
</script>

<style lang="scss" scoped>
@import "github-markdown-css";
@import "@/assets/css/article/info.scss";
</style>