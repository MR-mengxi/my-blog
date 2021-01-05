<template>
  <div class="music">
    <div>
      <div class="music-sing">
        <ul class="music-list">
          <li class="music-item" v-for="music in musicList">
            {{ music.song }}
          </li>
        </ul>
      </div>
      <!-- <div class="music-comment">
        <textarea
          class="music-content"
          cols="30"
          rows="10"
          placeholder="请输入您喜欢的音乐"
          v-focus
        ></textarea>
        <p class="music-msg">
          <button class="music-btn">提交</button>
        </p>
      </div> -->
    </div>
    <div>
      <mucplay />
    </div>
    <div>
      <comment />
    </div>
  </div>
</template>

<script>
import mucplay from "./mucplay";
import comment from "./musicComment";
export default {
  data() {
    return {
      musicList: [
        
      ],
    };
  },

  components: {
    mucplay,
    comment,
  },

  // 自定义指令
  directives: {
    // 当被绑定的元素插入到DOM时执行
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/music/music.scss";
</style>