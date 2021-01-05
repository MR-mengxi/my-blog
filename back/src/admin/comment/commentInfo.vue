<template>
  <div class="comment-info">
    <section>
      <h2 class="tit">离散的人群，在黑暗里寻找足迹，妄想掩埋一切。</h2>
      <el-input placeholder="标题" v-model="data.title" clearable> </el-input>
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
  methods: {
    change() {},
    $imgAdd() {},
    $imgDel() {},
  },
};
</script>

<style lang="scss" scoped>
.comment-info {
  height: 100%;
  section {
    margin: 15px 0;
    h2.tit {
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