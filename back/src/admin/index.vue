<template>
  <div class="back">
    <div class="msg">
      <div class="logo">
        <img src="../assets/小楠.png" alt="" />
      </div>
      <div class="msg-list">
        <ul>
          <router-link
            tag="li"
            :to="{ name: menu.router }"
            :class="[index === 0 ? 'active' : '']"
            v-for="(menu, index) in menuList"
            :key="menu.id"
          >
            <i class="iconfont icon-xiongmao"></i>
            {{ menu.name }}
          </router-link>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      menuList: [
        { id: 0, name: "My world", router: "Admin" },
        { id: 1, name: "文章列表", router: "Article" },
        { id: 2, name: "文章", router: "ArticleInfo" },
        { id: 3, name: "评论列表", router: "Comment" },
        { id: 4, name: "评论", router: "CommentInfo" },
        { id: 5, name: "音乐", router: "Music" },
        { id: 6, name: "音乐列表", router: "MusicInfo" },
        { id: 7, name: "设置", router: "Setting" },
      ],
    };
  },
  methods: {
    // changeMenu(e) {
    //   const menus = this.$refs.menu.children;
    //   for (var i = 0; i < menus.length; i++) {
    //     console.log(menus[i]);
    //     if (menus[i].classList.contains("active")) {
    //       menus[i].classList.remove("active");
    //     }
    //   }
    //   e.target.classList.add("active");
    //   router-link-exact-active 路由选中时添加的类名 
    // },
  },
};
</script>

<style lang="scss">
@import url("//at.alicdn.com/t/font_2166255_evk4lr0o2ci.css");
.back {
  width: 1200px;
  margin: 10px auto;
  display: flex;
  .msg {
    width: 240px;
    height: 100%;
    border-radius: 18px;
    background: #475164;
    padding-top: 40px;
    .logo {
      width: 70px;
      height: 70px;
      border: 5px solid #475164;
      border-radius: 50%;
      box-shadow: 0 0 7px;
      box-sizing: border-box;
      margin: 0px auto;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .msg-list {
      ul {
        padding-left: 8px;
        margin-top: 40px;
        list-style: none;
        li {
          width: 100%;
          height: 40px;
          line-height: 42px;
          color: #fff;
          font-size: 14px;
          text-align: left;
          box-sizing: border-box;
          margin-bottom: 5px;
          padding-left: 32px;
          transition: all 0.3s;
          cursor: pointer;
          &:hover {
            color: #475164;
            background: #fff;
            border-radius: 20px 0 0 20px;
          }
          &.router-link-exact-active {
            color: #475164;
            background: #fff;
            border-radius: 20px 0 0 20px;
          }
          .iconfont {
            color: #475164;
            font-size: 18px;
            text-align: center;
            margin-right: 5px;
          }
        }
      }
    }
  }
  .container {
    position: relative;
    z-index: 10;
    left: -18px;
    width: 960px;
    height: 520px;
    padding: 40px 0;
    box-sizing: border-box;
    overflow: auto;
    border-radius: 20px;
    box-shadow: 0 2px 20px #e0f0ff;
    background: rgb(249, 252, 255);
    .content {
      padding: 0 80px;
    }
  }
}
</style>