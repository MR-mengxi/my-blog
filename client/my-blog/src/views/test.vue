<template>
  <div class="test">
    <div class="user">欢迎您访问也子的网站</div>
    <div class="test">
      <router-link to="/login">登录</router-link> |
      <router-link to="register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/login/test.scss";
</style>