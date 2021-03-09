<template>
  <div class="article">
    <div class="container">
      <div
        class="content"
        v-for="(article, index) in articleList"
        :key="article.id"
      >
        <ul class="article-list">
          <li>
            <div class="item-l">
              <div class="img">
                <img src="@/assets/image/6.jpg" alt="" />
              </div>
            </div>
            <div class="item-r" ref="titleWidth">
              <router-link
                class="wow slideInLeft"
                data-wow-duration="2s"
                data-wow-delay="5s"
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

<script>
import Loading from "@/components/loading";
import { getArticle, getRead } from "@/axios/article";
export default {
  data() {
    return {
      articleList: [],
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
  async created() {
    const result = await getArticle();
    this.articleList = result.data.datas;
    
  },

  components: {
    Loading,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/article/article.scss";
</style>