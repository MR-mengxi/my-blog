<template>
  <div class="com-list">
    <div class="com-title">{{ lists.total }}条留言</div>
    <div class="com-item">
      <ul>
        <li v-for="item in lists.datas" :key="item.id">
          <div class="tourists">
            <div class="tourists-info">
              <img src="@/assets/image/6.jpg" alt="" />
              <div class="tourists-name">
                <div class="tourists-title">{{item.userId}}</div>
                <div class="tourists-com">
                  {{ item.comment }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lists"],
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/comment/commentlist.scss";
</style>