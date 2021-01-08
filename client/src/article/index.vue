<template>
  <div class="article">
    <div class="title">将来要写的东西</div>
    <div class="container">
      <div class="article-list" v-for="article in articleList">
        <div class="article-time">时间格式</div>
        <ul class="article-info">
          <li>
            <div class="item-l">
              <div class="img">
                <img src="../assets/image/6.jpg" alt="" />
              </div>
            </div>
            <div class="item-r">
              <router-link
                :to="{ name: 'ArticleInfo', params: { id: article.id } }"
                tag="p"
                >{{ article.title }}</router-link
              >
              <p>{{ article.like }} LIKE / {{ article.read }} READ</p>
            </div>
            <span class="publish-time">2020年12月11号</span>
          </li>
          <li>
            <div class="item-l">
              <div class="img">
                <img src="../assets/image/6.jpg" alt="" />
              </div>
            </div>
            <div class="item-r">
              <p>曾经，那也是我们不为人知的过去</p>
              <p>{{ article.like }} LIKE / 1174 READ</p>
            </div>
            <span class="publish-time">2020年12月11号</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../axios/request";
export default {
  data() {
    return {
      articleList: [],
    };
  },
  created() {
    axios()
      .get("/api/article?page=1&limit=20")
      .then((res) => {
        const datas = res.data.data;
        this.articleList = datas.datas;
        // console.log(this.articleList);
      });
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
            cursor: pointer;
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