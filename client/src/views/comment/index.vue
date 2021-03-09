<template>
  <div class="comment">
    <comment-input @comment="comment" />
    <comment-list :lists="commentList" />
  </div>
</template>

<script>
import CommentInput from "@/components/commentInput";
import CommentList from "@/components/commentList";
import { add, list } from "@/axios/comment";

export default {
  data() {
    return {
      page: 1,
      limit: 10,
      commentList: [],
    };
  },
  created() {
    this.getComData();
  },
  methods: {
    async comment(username, comment) {
      const data = {
        userId: username,
        comment: comment,
      };
      const result = await add(data);
      this.$message({
        type: "success",
        message: "留言成功~~",
        offset: 60,
      });
      this.getComData();
    },
    async getComData() {
      try {
        const data = { page: this.page, limit: this.limit };
        const result = await list(data);
        this.commentList = result.data;
        // console.log(this.commentList);
        // console.log(result);
        // console.log(result.data);
        // setTimeout(() => {
        //   // this.commentList.push(...datas);
        //   // this.total = total;
        // }, 1000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    CommentInput,
    CommentList,
  },
};
</script>

<style lang="scss">
.comment {
  width: 6rem;
  // border: 1px solid;
  box-sizing: border-box;
  margin: 0px auto;
  // background: #fff;
  padding: 20px;
}
</style>