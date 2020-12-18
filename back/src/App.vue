<template>
  <div id="app">
    <div class="nav">
      <!-- <router-link to="/">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/admin">后台</router-link> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}
.nav {
  width: 200px;
  margin: 0 auto;
  a {
    margin-left: 30px;
  }
}
</style>
