<template>
  <div class="com-container">
    <div class="info">
      <el-input v-model="username" placeholder="昵称"></el-input>
      <div ref="nicheng" class="nicheng">昵称不能为空</div>
    </div>

    <div class="com-input">
      <textarea v-model="comment" placeholder="请留言"></textarea>
      <div ref="comment" class="com-content">评论不能为空</div>
    </div>

    <div class="submit">
      <button @click="submit">发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      comment: "",
    };
  },

  methods: {
    submit() {
      // 验证昵称是否有值
      if (!this.username) {
        this.$refs.nicheng.style.opacity = "1";
        return;
      } else if (!this.comment) {
        this.$refs.comment.style.opacity = "1";
        return;
      }
      this.$emit("comment",this.username,this.comment);
      this.username = "";
      this.comment = "";
      this.$refs.nicheng.style.opacity = "0";
      this.$refs.comment.style.opacity = "0";
      // const data = {
      //   userId: this.username,
      //   comment: this.comment,
      // };
      // const result = await add(data);
      // this.commentList.unshift(result.data);
      // this.$message({
      //   type: "success",
      //   message: "留言成功~~",
      //   offset: 60,
      // });
      // this.$refs.nicheng.style.opacity = "0";
      // this.$refs.comment.style.opacity = "0";
      // this.getComData();
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2042834_fcfrfe6wc4.css");
@import "@/assets/css/comment/commentinput.scss";
</style>