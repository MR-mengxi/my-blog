<template>
  <div class="mucplay">
    <div class="play-logo">
      <div class="img">
        <img src="../../assets/image/song_1.jpg" alt="" />
      </div>
    </div>
    <div class="music-lyric">
      <ul ref="ul">
        <li class="lyric-list" v-for="item in lyricList">
          {{ item.words }}
        </li>
      </ul>
    </div>
    <div class="music-progress">
      <audio
        ref="audio"
        @timeupdate="setCurrent"
        src="../../assets/image/梦里花.mp3"
      ></audio>
      <div class="play">
        <i
          :class="['iconfont', isPlay ? 'icon-zantingtingzhi' : 'icon-1']"
          @click="play"
        ></i>
        <!-- <i class="iconfont icon-zantingtingzhi"></i> -->
      </div>
      <div class="progress-bar">
        <div class="bar-move" ref="barMove"></div>
        <!-- <div class="bar-circle" ref="barCircle"></div> -->
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
      lrcContainerHeight: 220,
      liHeight: 35,
      musicTime: 253,
      length: 462,
    };
  },
  methods: {
    play() {
      // 控制播放图标按钮切换
      let audio = this.$refs.audio;
      if (!this.isPlay) {
        audio.play();
        this.isPlay = true;
      } else {
        audio.pause();
        this.isPlay = false;
      }
    },
    getCurrentIndex() {
      const audio = this.$refs.audio;
      // console.log(audio);
      // 根据播放器的播放时间，从lyricList数组中得到对应的下标
      let playTime = audio.currentTime;
      // console.log(playTime);
      for (let i = this.lyricList.length - 1; i >= 0; i--) {
        // 倒着循环
        const lrcObj = this.lyricList[i];
        // console.log(lrcObj);
        if (playTime >= lrcObj.time) {
          return i; // 返回下标，结束循环
        }
      }
      return -1;
    },
    setCurrent() {
      let index = this.getCurrentIndex(); // 得到当前播放的歌词是数组的第几项(下标)
      const that = this;
      let ul = this.$refs.ul;
      setULMarginTop();
      setLiActive();

      // 设置ul元素的margin-top
      function setULMarginTop() {
        let midHeight = that.lrcContainerHeight / 2 - that.liHeight / 2;
        let top = midHeight - index * that.liHeight;
        if (top > 0) {
          top = 0; // 不能为正数
        }
        ul.style.marginTop = top + "px";
      }

      function setLiActive() {
        // 1. 找到之前的具有active样式的li，去掉active
        let li = ul.querySelector(".active");
        if (li) {
          // li存在
          li.className = ""; // 去掉active
        }
        // 2. 找到当前的li，加上active
        if (index !== -1) {
          // 有对应的歌词
          ul.children[index].className = "active";
        }
      }

      let currentTime = this.$refs.audio.currentTime;
      let currentLength = (currentTime / this.musicTime) * this.length;
      this.$refs.barMove.style.width = currentLength + "px";
    },
  },

  computed: {
    lyricList() {
      // const lrc = this.music[1].lyric;
      const lrc = this.music;
      let parts = lrc.split("\n");
      for (let i = 0; i < parts.length; i++) {
        const str = parts[i]; // 拿到这一行的字符串
        parts[i] = createLrcObject(str);
      }
      // console.log(parts);
      return parts;

      function createLrcObject(str) {
        let parts = str.split("]");
        let words = parts[1]; // 第二个部分歌词
        let time = parts[0]; // 第一个部分是时间
        time = time.replace("[", ""); // 去掉左中括号
        let timeParts = time.split(":"); // 分割时间
        let minute = parseInt(timeParts[0]); // 分钟数
        let second = parseFloat(timeParts[1]); // 秒数
        time = minute * 60 + second;
        return {
          words,
          time,
        };
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/music/mucplay.scss";
@import url("//at.alicdn.com/t/font_2042834_gb58w6jfu07.css");
</style>