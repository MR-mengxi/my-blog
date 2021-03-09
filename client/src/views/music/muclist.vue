<template>
  <div class="music-sing">
    <ul class="music-list">
      <li
        :class="['music-item', isActive ? 'active' : '']"
        @click="musicTarget($event, index)"
        v-for="(music, index) in list"
        :key="music.id"
      >
        {{ music.song }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    musicTarget(e, index) {
      this.$emit("musicIndex", e, index);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/music/musiclist.scss";
</style>