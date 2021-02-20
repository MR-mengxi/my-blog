<template>
  <div class="article">
    <!-- <Loading v-if="isLoading" /> -->
    <template>
      <div class="title">将来要写的东西</div>
      <div class="container">
        <div
          class="article-list"
          v-for="(article, index) in articleList"
          :key="index"
        >
          <div class="article-time">时间格式</div>
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
              <span class="publish-time">2020年12月11号</span>
            </li>
          </ul>
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
      isLoading: true,
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
          read = read+=1;
          const result = await getRead(id, { "read": read });
        }
      }
    },
  },
  created() {
    axios()
      .get("/api/article?page=1&limit=20")
      .then((res) => {
        // console.log(res.data);
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
.article {
  .title {
    text-align: center;
  }
  .container {
    width: 600px;
    height: 300px;
    margin: 100px auto;
    padding: 20px;
    .article-time {
      color: #6e7ab5;
      margin-left: 10px;
      padding: 20px 0 5px 0;
    }
    .article-info {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        position: relative;
        display: flex;
        box-sizing: border-box;
        margin-left: 20px;
        padding: 20px 0;
        .item-l {
          margin-right: 15px;
          .img {
            width: 50px;
            height: 50px;
            padding: 4px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 7px;
            }
          }
        }
        .item-r {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            margin: 0;
            color: #5b6773;
            font-size: 15px;
          }
          p:nth-child(1) {
            position: relative;
            transition: all 0.6s;
            cursor: pointer;
          }
          p:nth-child(1)::before {
            content: "";
            position: absolute;
            display: inline-block;
            width: 0;
            left: 50%;
            bottom: -6px;
            background: orange;
            height: 2px;
            transition: all 0.6s;
          }
          p:nth-child(1):hover::before {
            left: 0;
            width: 100%;
          }
          p:nth-child(2) {
            font-size: 14px;
          }
        }
        .publish-time {
          position: absolute;
          right: 0;
          font-size: 14px;
          color: #d2c6a3;
        }
      }
    }
  }
}
</style>