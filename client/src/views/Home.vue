<template>
  <div class="home">
    <!-- <circle-com /> -->
    <div class="personal-message">
      <div class="logo">
        <img src="../assets/image/6.jpg" alt="" />
      </div>
      <div class="content">
        <router-link :to="{ name: 'Article' }">文章</router-link>
        <router-link :to="{ name: 'Comment' }">评论</router-link>
        <router-link :to="{ name: 'Music' }">音乐</router-link>
        <router-link :to="{ name: 'Login' }">登录</router-link>
      </div>
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
import axios from 'axios';

export default {
  name: "Home",
};
</script>


<style lang="scss">
body {
  // background: #92b3a5;
  margin: 0;
  // position: relative;
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
        width: 70px;
        height: 70px;
        border-radius: 50%;
        box-shadow: 0 0 10px 10px;
        cursor: pointer;
        margin: 0 auto;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .content {
        display: flex;
        width: 300px;
        margin: 70px auto;
        padding: 30px;
        a {
          text-decoration: none;
          color: #fff;
          font-size: 20px;
          margin: 0 auto;
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