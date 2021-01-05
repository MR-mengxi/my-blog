<template>
  <div class="music">
    <section>
      <h2 class="tit">在无人的夜色里，浪漫藏匿在无人知晓的角落里。</h2>
      <el-input placeholder="Music Name" v-model="data.title" clearable>
      </el-input>
    </section>

    <!-- 富文本框 -->
    <mavon-editor
      ref="editor"
      :ishljs="true"
      :subfield="false"
      :boxShadow="false"
      @change="change"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
    />

    <section>
      <el-button type="primary" class="submit" @click="submit"
        >SUBMIT</el-button
      >
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        title: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.music {
  section {
      margin: 15px 0;
    .tit {
      color: #0084ff;
      font-size: 18px;
      font-weight: 400;
      border-left: 2px solid #0084ff;
      margin: 20px 0 30px;
      padding-left: 16px;
    }
  }
}
</style>