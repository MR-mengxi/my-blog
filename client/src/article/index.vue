<template>
  <div class="article">
    <Loading v-if="isLoading" />
    <template v-else>
      <div class="container">
        <div class="title">在不曾见过的大海里，有生命在呼唤。</div>
        <div
          class="content"
          v-for="(article, index) in articleList"
          :key="article.id"
        >
          <div class="article-list">
            <ul class="article-info">
              <li>
                <div class="item-l">
                  <div class="img">
                    <img src="../assets/image/6.jpg" alt="" />
                  </div>
                </div>
                <div class="item-r" ref="titleWidth">
                  <router-link
                    @click.native="read(article.id)"
                    :to="{ name: 'ArticleInfo', params: { id: article.id } }"
                    tag="p"
                    >{{ article.title }}</router-link
                  >
                  <p>{{ article.like }} LIKE / {{ article.read }} READ</p>
                </div>
                <span class="publish-time">{{ article.createdAt }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Loading from "../components/loading";
import axios from "../axios/request";
import { getRead } from "../axios/article";
export default {
  data() {
    return {
      isLoading: false,
      articleList: [],
      readCount: 0,
      newArticleList: [],
    };
  },
  methods: {
    async read(id) {
      const len = this.articleList.length;
      for (let i = 0; i < len; i++) {
        if (this.articleList[i].id === id) {
          let read = this.articleList[i].read;
          read = read += 1;
          const result = await getRead(id, { read: read });
        }
      }
    },
  },
  created() {
    axios()
      .get("/api/article?page=1&limit=20")
      .then((res) => {
        this.isLoading = true;
        const datas = res.data.data;
        this.articleList = datas.datas;
        if (this.articleList) {
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        }
      });
  },
  updated() {
    // const title = this.$refs.titleWidth;
    // for (let i = 0; i < title.length; i++) {
    //   const item = title[i];
    //   const width = item.clientWidth;
    //   console.log(item, width);
    // }
  },
  components: {
    Loading,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/article/article.scss";
</style>