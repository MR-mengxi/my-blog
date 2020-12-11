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
      <div class="music-comment">
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
      </div>
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
        {
          image: "../../assets/image/song_1.jpg",
          audio: "/image/song_1.mp3",
          song: "海底",
          album: "意外",
          singer: "薛之谦",
          duration: 253,
          isLike: true,
        },
        {
          image: "/image/song_2.jpg",
          audio: "/image/song_2.mp3",
          song: "瑕疵",
          album: "小梦大半",
          singer: "陈粒",
          duration: 297,
          isLike: false,
        },
        {
          image: "/image/song_3.jpg",
          audio: "/image/song_3.mp3",
          song: "云与海",
          album: "÷",
          singer: "ed sheeran",
          duration: 235,
          isLike: false,
        },
        {
          image: "/image/song_3.jpg",
          audio: "/image/song_3.mp3",
          song: "无骨无花",
          album: "÷",
          singer: "ed sheeran",
          duration: 235,
          isLike: false,
        },
        {
          image: "/image/song_3.jpg",
          audio: "/image/song_3.mp3",
          song: "梦里花",
          album: "÷",
          singer: "ed sheeran",
          duration: 235,
          isLike: true,
        },
        // {
        //   image: "/image/song_3.jpg",
        //   audio: "/image/song_3.mp3",
        //   song: "云与海",
        //   album: "÷",
        //   singer: "ed sheeran",
        //   duration: 235,
        //   isLike: false,
        // },
      ],
    };
  },
  components: {
    mucplay,
    comment,
  },
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