<template>
  <div class="mymusic">
    <muclist :list="musicList" @musicIndex="musicIndex" />
    <mucplay :lyric="lyric" :duration="duration" v-if="musicList.length > 0" />
  </div>
</template>

<script>
import muclist from "@/views/music/muclist";
import mucplay from "@/views/music/mucplay";
import { getMusic } from "@/axios/music";
export default {
  data() {
    return {
      musicList: [],
      lyric: "",
      duration: "",
    };
  },

  async created() {
    const result = await getMusic();
    this.musicList = result.data;
  },

  methods: {
    musicIndex(e, index) {
      const ul = e.target.parentNode;
      let liActive = ul.querySelector(".active");
      if (liActive) {
        // li存在
        liActive.classList.remove("active"); // 去掉active
      }
      e.target.classList.add("active");
      const li = this.musicList[index];
      this.lyric = li.lyric;
      this.duration = li.duration;
    },
  },

  components: {
    muclist,
    mucplay,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/music/mymusic.scss";
</style>