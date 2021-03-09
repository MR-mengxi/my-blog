<template>
  <div class="music">
    <div class="container">
      <div class="music-l">
        <ul>
          <li>
            <router-link to="/music/musiclist">
              <i class="iconfont icon-gongzuotai1"></i>
              <span>我的音乐</span>
            </router-link>
          </li>
          <li>
            <router-link to="/music/notes">
              <i class="iconfont icon-xiaojijilu"></i>
              <span>随记</span>
            </router-link>
          </li>
          <li>
            <router-link to="/music/collections">
              <i class="iconfont icon-shoucang"></i>
              <span>收藏</span>
            </router-link>
          </li>

          <li>
            <router-link to="/music/recycle">
              <i class="iconfont icon-huishouzhan"></i>
              <span>回收站</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="music-r">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>



<style lang="scss" scoped>
.music {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: hidden;
}
@import "@/assets/css/music/musicl.scss";

// @media screen and (max-width:800px) {
//   .music{
//     display: none;
//   }
// }
</style>