<template>
  <div class="acticle-info">
    <section>
      <h2 class="tit">无人问津的心情，在黑纸白字间游荡！</h2>
      <el-input placeholder="标题" v-model="data.title" clearable> </el-input>
    </section>

    <!-- 富文本框 -->
    <mavon-editor
      ref="md"
      :ishljs="true"
      :subfield="false"
      :boxShadow="false"
      @change="change"
      @imgAdd="$imgAdd"
      @imgDel="$imgDel"
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

    </section>

    <el-button type="primary" class="submit" @click="submit">SUBMIT</el-button>
  </div>
</template>

<script>
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
        src: "",
        imgUrl:
          "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=155346741,3953923104&fm=26&gp=0.jpg",
      },
    };
  },
  methods: {
    getDate(val) {
      this.date.time = val;
    },
    $imgAdd(pos, $file) {
      const formdata = new FormData();
      formdata.append("img", $file);
      fetch("/api/upload", {
        body: formdata,
        method: "POST",
      })
        .then((resp) => resp.json())
        .then((resp) => {
          console.log(resp);
          if (resp.code) {
            //有错误
            alert(resp.msg);
          } else {
            this.$refs.md.$img2Url(pos, resp.data);
          }
        });


      // async function getResult() {
      //   const formdata = new FormData();
      //   formdata.append("img", $file);

      //   const result = await fetch("/api/upload", {
      //     method: "POST",
      //     body: formdata,
      //   });
      //   const res = await result.json();
      //   return res;
      // }
      // const result = getResult().then(res=>{
      //   console.log(res);
      // });

      // 第一种官方的axios方式。
      // const formdata = new FormData();
      // formdata.append("img", $file);
      // axios({
      //   url: "/api/upload",
      //   method: "post",
      //   data: formdata,
      //   headers: { "Content-Type": "multipart/form-data" },
      // }).then((url) => {
      //   console.log(url);
      //   this.$refs.md.$img2Url(pos, url);
      // });
    },
    $imgDel() {
      
    },
    change(value, render) {
      // console.log(value, render, this.data.words);
      this.data.contentHTML = render; // 解析的html
      this.data.content = value; // 输入的内容
      this.data.words = value.length; // 字数
    },
    async submit() {
      const article = await this.$store.dispatch("addArticle", {
        title: this.data.title,
        content: this.data.content,
        imgUrl: this.data.imgUrl,
      });
    },
  },
  components: {
    Date,
  },
};
</script>

<style lang="scss" scoped>
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
  }
}
</style>