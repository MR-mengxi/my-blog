<template>
  <div class="home">
    <div class="personal-message">
      <div class="logo">
        <!-- <img src="../assets/image/6.jpg" alt="" /> -->
        <h1>也.子</h1>
      </div>
      <div class="content">
        <router-link :to="{ name: 'Article' }">文章</router-link>
        <router-link :to="{ name: 'Comment' }">评论</router-link>
        <router-link :to="{ name: 'Music' }">音乐</router-link>
        <a href="https://github.com/MR-mengxi/my-blog" target="_black"
          >GitHub</a
        >
        <router-link :to="{ name: 'Login' }">登录</router-link>
      </div>
    </div>
    <div class="svg">
      <!-- <CircleSvg /> -->
      <!-- <TriangleSvg /> -->
    </div>
    <!-- 页脚 -->
    <footer class="footer">
      <p>
        <a href="http://beian.miit.gov.cn" target="_black"
          >冀ICP备2020024349号</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import CircleSvg from "../svg/circle";
import TriangleSvg from "../svg/triangle";

export default {
  name: "Home",
  components: {
    CircleSvg,
    TriangleSvg,
  },
};
</script>


<style lang="scss">
body {
  margin: 0;
  .home {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url("../assets/image/2.jpg") no-repeat center center/cover;
    .personal-message {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 600px;
      height: 300px;
      padding: 15px;
      .logo {
        // width: 70px;
        // height: 70px;
        line-height: 70px;
        text-align: center;
        border-radius: 50%;
        // box-shadow: 0 0 10px 10px;
        cursor: pointer;
        margin: 0 auto;
        h1 {
          font-size: 40px;
          color: rgb(71, 81, 100);
        }
      }
      .content {
        display: flex;
        width: 500px;
        margin: 30px auto;
        padding: 30px;
        a {
          text-decoration: none;
          // color: #fff;
          font-size: 20px;
          margin: 0 auto;
        }
        a:hover {
          // color: #fff;
        }
      }
    }
    .footer {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 188px;
      font-size: 18px;
      p {
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}
</style>