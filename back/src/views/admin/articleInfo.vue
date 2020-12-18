<template>
  <div class="acticle-info">
    <section>
      <h2 class="tit">无人问津的心情，在黑纸白字间游荡！</h2>
      <el-input placeholder="标题" v-model="data.title" clearable> </el-input>
    </section>

    <mavon-editor
      ref="editor"
      :ishljs="true"
      :subfield="false"
      :boxShadow="false"
      @change="change"
    />

    <section>
      <date @getdate="getDate" :originalDate="data.time" />
      <el-input
        placeholder="文章摘要"
        v-model="data.describe"
        prefix-icon="el-icon-document"
        clearable
      >
      </el-input>

      <div class="upload-box"></div>
    </section>

    <el-button type="primary" class="submit" @click="submit">SUBMIT</el-button>
  </div>
</template>

<script>
import Date from "@/components/date";
import axios from "axios";

export default {
  data() {
    return {
      data: {
        title: "",
        contentHTML: "",
        content: "",
        time: "",
        describe: "",
      },
    };
  },
  methods: {
    getDate(val) {
      this.date.time = val;
    },
    change(value, render) {
      // console.log(value, render, this.data.words);
      this.data.contentHTML = render; // 解析的html
      this.data.content = value; // 输入的内容
      this.data.words = value.length; // 字数
    },
    async submit() {
      axios.post("http://localhost:5008/api/article", (res) => {
        console.log(122);
      });
    },
  },
  components: {
    Date,
  },
};
</script>

<style lang="scss">
.acticle-info {
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
    .el-input {
      width: 100%;
      height: 38px;
      margin: 8px 0;
    }
  }
}
</style>