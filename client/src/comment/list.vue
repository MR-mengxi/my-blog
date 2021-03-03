<template>
  <div class="com-list">
    <div class="com-title">{{ total }}条留言</div>
    <div class="com-item">
      <ul>
        <li v-for="item in lists" :key="item.id">
          <div class="tourists">
            <div class="tourists-info">
              <img src="../assets/image/6.jpg" alt="" />
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lists","total"],
};
</script>

<style lang="scss" scoped>
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
</style>