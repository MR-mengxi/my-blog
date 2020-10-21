<template>
  <div class="circle">
      <div class="cirItem">
          <router-link to="/home">首页</router-link>
      </div>
      <div class="cirItem">
          <router-link to="/novel">小说</router-link>
      </div>
      <div class="cirItem">
          <router-link to="/music">音乐</router-link>
      </div>
      <div class="cirItem">
          <router-link to="/article">文章</router-link>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/css/circle/circle.scss";
</style>