<template>
  <div class="home">
    <div class="message">
      <div class="logo">
        <h1>也.子</h1>
      </div>
      <div class="content">
        <router-link to="/article">文章</router-link>
        <router-link to="/comment">评论</router-link>
        <router-link to="/music">音乐</router-link>
        <a href="https://github.com/MR-mengxi/my-blog" target="_black"
          >GitHub</a
        >
        <router-link to="/login">登录</router-link>
      </div>
    </div>
    <!-- 页脚 -->
    <footer class="footer">
      <a href="http://beian.miit.gov.cn" target="_black">冀ICP备2020024349号</a>
    </footer>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: url("../assets/image/2.jpg") no-repeat center center/cover;
  .message {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 0.15rem;
    .logo {
      line-height: 0.7rem;
      text-align: center;
      cursor: pointer;
      h1 {
        font-size: 30px;
        color: rgb(71, 81, 100);
      }
    }
    .content {
      display: flex;
      width: 5rem;
      justify-content: center;
      flex-wrap: wrap;
      a {
        text-decoration: none;
        font-size: 20px;
        margin: 0 0.05rem;
      }
    }
  }
  .footer {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    width: 4rem;
    text-align: center;
    font-size: 20px;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>