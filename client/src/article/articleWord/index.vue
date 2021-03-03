<template>
  <div class="comment">
    <div class="com-container">
      <div class="info">
        <input type="text" v-model="username" name="昵称" placeholder="昵称" />
        <input type="text" v-model="password" name="邮箱" placeholder="邮箱" />
      </div>
      <div class="com-input">
        <textarea v-model="comment" placeholder="您想要表达什么"></textarea>
      </div>
      <div class="submit">
        <button @click="submit(comment)">送达</button>
      </div>
    </div>
    <div class="com-list">
      <div class="com-title">{{ lists.total }}条留言</div>
      <div class="com-item">
        <ul>
          <li v-for="item in lists.datas" :key="item.id">
            <div class="tourists">
              <div class="tourists-info">
                <img src="../../assets/image/6.jpg" alt="" />
                <div class="tourists-name">
                  <div class="tourists-title">{{item.userId}}</div>
                  <div class="tourists-com">
                    {{ item.comment }}
                  </div>
                </div>
              </div>
              <div class="tourists-icon">
                <span>
                  <i class="iconfont icon-zan"></i>
                  赞
                </span>
                <span>
                  <i class="iconfont icon-huifu"></i>
                  回复
                </span>
              </div>
            </div>
            <!-- <div class="root">
              <div class="tourists-info">
                <img src="../assets/image/6.jpg" alt="" />
                <div class="tourists-name">
                  <div class="tourists-title">
                    也子
                    <span class="lovely">小可爱</span>
                  </div>
                  <div class="tourists-com">
                    这是最好的时代，这是最坏的时代。击碎命运的诅咒。
                  </div>
                </div>
              </div>
              <div class="tourists-icon">
                <span>
                  <i class="iconfont icon-zan"></i>
                  赞
                </span>
                <span>
                  <i class="iconfont icon-huifu"></i>
                  回复
                </span>
              </div>
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { add } from "../../axios/comment";
export default {
  props: ["lists", "id"],
  data() {
    return {
      username: "",
      password: "",
      comment: "",
    };
  },
  methods: {
    async submit(comment) {
      const data = {

        comment: comment,
        ArticleId: this.id,
      };
      if(!comment){
        alert("内容不能为空");
        return;
      }
      await add(data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("//at.alicdn.com/t/font_2042834_fcfrfe6wc4.css");

.comment {
  width: 80%;
  box-sizing: border-box;
  margin: 0px auto;
  background: #fff;
  padding: 40px;
  .com-container {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    margin-bottom: 80px;
    .info {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      input {
        width: 40%;
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
    .com-input {
      text-align: center;
      textarea {
        width: 100%;
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
  .com-list {
    width: 100%;
    .com-title {
      font-size: 20px;
    }
    .com-item {
      width: 100%;
      margin-top: 20px;
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding: 20px;
        li {
          // height: 125px;
          box-sizing: border-box;
          padding: 10px;
          .tourists,
          .root {
            .tourists-info {
              display: flex;

              img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
              .tourists-name {
                margin-left: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .tourists-title {
                  font-size: 18px;
                }
                .tourists-com {
                  font-size: 14px;
                  color: #333;
                }
              }
            }
            .tourists-icon {
              margin-top: 10px;
              margin-left: 60px;
              cursor: pointer;
              span:nth-child(1) {
                margin-right: 10px;
              }
            }
          }
          .root {
            margin: 30px 0 10px 60px;
            .tourists-title {
              .lovely {
                display: inline-block;
                height: 18px;
                font-size: 14px;
                color: #fff;
                background: #f40;
                border-radius: 12px;
                padding: 4px;
              }
            }
          }
        }
      }
    }
  }
}
</style>