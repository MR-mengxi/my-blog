<template>
  <div class="pageset">
    <div class="page-1">
      <div class="sibling item">上一页</div>
      <div
        @click="toggle($event)"
        :class="['pager', 'item', page === 1 ? 'active' : '']"
        v-for="page in 5"
      >
        {{ page }}
      </div>
      <div class="next item">下一页</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isActive: false,
    };
  },
  methods: {
    toggle(e) {
      const item = e.target.parentNode.children;
      for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains("active")) {
          item[i].classList.remove("active");
        }
        e.target.classList.add("active");
      }
      // console.log(item);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page.scss";
</style>