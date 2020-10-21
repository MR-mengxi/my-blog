<template>
  <div class="mucplay">
    <div class="play-logo">
      <div class="img">
        <img src="../../assets/image/song_1.jpg" alt="" />
      </div>
    </div>
    <div class="music-lyric">
      <ul>
        <li class="lyric-list" v-for="item in lyricList">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="music-progress">
      <audio ref="audio" src="../../assets/image/song_1.mp3"></audio>
      <div class="play">
        <i
          :class="['iconfont', isPlay ? 'icon-zantingtingzhi' : 'icon-1']"
          @click="play"
        ></i>
        <!-- <i class="iconfont icon-zantingtingzhi"></i> -->
      </div>
      <div class="progress-bar">
        <div class="bar-move"></div>
        <div class="bar-circle"></div>
      </div>
      <div class="progress-time">
        <span>04:39</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["music"],
  data() {
    return {
      isPlay: false,
      lyricList: [
        "原唱：一支榴莲",
        "作曲 : PSROSIE",
        "作词 : PSROSIE",
        "翻唱：酩九",
        "散落的月光穿过了云",
        "躲着人群",
        "铺成大海的鳞",
        "海浪打湿白裙",
        "试图推你回去",
        "海浪清洗血迹",
        "妄想温暖你",
        "往海的深处听",
        "谁的哀鸣在指引",
        "灵魂没入寂静",
      ],
    };
  },
  methods: {
    play() {
      if (!this.isPlay) {
        this.$refs.audio.play();
        this.isPlay = true;
      } else {
        this.$refs.audio.pause();
        this.isPlay = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/music/mucplay.scss";
@import url("//at.alicdn.com/t/font_2042834_gb58w6jfu07.css");
</style>