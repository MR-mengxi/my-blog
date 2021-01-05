<template>
  <div class="admin">
    <div class="index">
      <h2>
        <i class="iconfont icon-mofabang"> </i>
        愿所有的美好如约而至，愿所有的黑暗都能看到希望。
      </h2>
    </div>
    <div class="card">
      <section>
        <h4>Hello，你好，我是谁！</h4>
        <div>
          <p>重新认识、审视、定义一下自己吧。</p>
          <ul>
            <li>
              <i class="iconfont icon-cha"></i>
              现在的你，是个怎样的人？
            </li>
            <li>
              <i class="iconfont icon-cha"></i>
              你希望以后成为怎样的人？
            </li>
            <li>
              <i class="iconfont icon-cha"></i>
              你心中的未来是怎样的？
            </li>
            <li>
              <i class="iconfont icon-cha"></i>
              最想做的一件事是什么？
            </li>
            <li>
              <i class="iconfont icon-cha"></i>
              你现在的生活，开心吗？
            </li>
            <li>
              <i class="iconfont icon-cha"></i>
              心如止水，淡中得味，加油。
            </li>
          </ul>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  </div>
</template>

<style lang="scss">
@import url("//at.alicdn.com/t/font_2166255_thx7f7olail.css");
.admin {
  .index {
    margin: 0 -20px;
    color: #3b4b5a;
    width: 100%;
    h2 {
      width: 100%;
      color: #0e8bff;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 1px;
      margin: 10px 0 30px;
      i {
        color: #0e8bff;
        font-size: 20px;
      }
    }
  }
  .card {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -20px;
    section {
      position: relative;
      z-index: 1;
      width: calc(50% - 15px);
      height: 300px;
      display: inline-block;
      border-radius: 20px;
      box-shadow: 0 2px 20px #e0f0ff;
      box-sizing: border-box;
      background: #fff;
      padding: 20px;
      margin-bottom: 24px;
    }
    section:nth-child(1) {
      h4 {
        color: #0e8bff;
        font-size: 16px;
        font-weight: 400;
        margin: 22px 0 10px;
        padding-left: 15px;
      }
      p {
        font-size: 13px;
        color: #909399;
        padding-left: 15px;
      }
      ul {
        margin: 10px 0;
        padding: 14px 15px 12px;
        border: 1px solid #edf3f9;
        border-radius: 10px;
        list-style: none;
        li {
          color: #5182b3;
          line-height: 24px;
          font-size: 13px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>