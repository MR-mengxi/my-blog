<template>
  <div class="comment">
    <div class="com-container">
      <div class="info">
        <input type="text" v-model="username" name="昵称" placeholder="昵称" />
        <!-- <el-input v-model="username" placeholder="昵称"></el-input> -->
        <input type="email" v-model="password" name="邮箱" placeholder="邮箱" />
      </div>
      <div ref="nicheng" class="nicheng">昵称不能为空</div>
      <div class="com-input">
        <textarea v-model="comment" placeholder="您想要表达什么"></textarea>
      </div>
      <div class="submit">
        <button @click="submit(comment)">送达</button>
      </div>
    </div>
    <Comment :lists="commentList" />
  </div>
</template>

<script>
import Comment from "./list";
import { add, list } from "../axios/comment";
export default {
  data() {
    return {
      username: "",
      password: "",
      comment: "",
      page: 1,
      limit: 10,
      commentList: [],
    };
  },
  created() {
    this.getComData();
  },
  methods: {
    async submit(comment) {
      // 验证昵称、邮箱是否正确
      if (!this.username || !this.password) {
        this.$refs.nicheng.style.opacity = "1";
        this.$refs.nicheng.style.top = "90px";
        return;
      }
      const data = {
        comment: comment,
      };
      const result = await add(data);
      this.commentList.unshift(result.data);
      this.$message({
        type: "success",
        message: "留言成功~~",
        offset: 60,
      });
    },
    async getComData() {
      try {
        const data = { page: this.page, limit: this.limit };
        const result = await list(data);
        const { datas } = result.data;
        setTimeout(() => {
          this.commentList.push(...datas);
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    },
  },
  components: {
    Comment,
  },
};
</script>

<style lang="scss">
@import url("//at.alicdn.com/t/font_2042834_fcfrfe6wc4.css");

.comment {
  width: 1000px;
  box-sizing: border-box;
  margin: 0px auto;
  background: #fff;
  padding: 40px;
  .com-container {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    margin-bottom: 80px;
    position: relative;
    .info {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      input {
        width: 300px;
        height: 30px;
        outline: none;
        border-radius: 12px;
        border-style: none;
        border: 1px solid;
        box-sizing: border-box;
        margin: 10px;
        padding-left: 12px;
        &:focus {
          border: 2px solid;
        }
      }

      input:nth-child(1) {
        color: #f40;
      }
      input:nth-child(2) {
        color: rgb(3, 175, 60);
      }
    }
    .nicheng {
      position: absolute;
      left: 250px;
      top: 73px;
      transition: all 0.5s;
      color: #f40;
      font-size: 12px;
      // display: none;
      opacity: 0;
    }
    .com-input {
      text-align: center;
      textarea {
        width: 700px;
        height: 200px;
        font-size: 14px;
        color: #333;
        border-radius: 12px;
        box-sizing: border-box;
        outline: none;
        border: 1px solid;
        resize: none;
        margin: 12px 0;
        padding: 12px;
      }
    }
    .submit {
      text-align: right;
      button {
        outline: none;
        border-style: none;
        width: 70px;
        height: 30px;
        line-height: 30px;
        border-radius: 12px;
        background: #f40;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>