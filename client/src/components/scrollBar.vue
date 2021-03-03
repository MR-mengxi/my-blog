<template>
  <div class="scroll-bar">
    <ul class="list" ref="list" @mousewheel="scroll($event)">
      <li>Lorem, ipsum dolor.</li>
      <li>Velit, cupiditate impedit.</li>
      <li>Fugiat, dignissimos nemo.</li>
      <li>Qui, ut iusto.</li>
      <li>Atque, inventore esse.</li>
      <li>Ratione, ut quis?</li>
      <li>Odit, facilis molestias?</li>
      <li>Consequuntur, dicta est!</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Iusto, eum explicabo!</li>
      <li>Eum, alias itaque!</li>
      <li>Enim, tempora architecto.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Perspiciatis, esse rerum.</li>
      <li>Officia, mollitia rem.</li>
      <li>Odio, eum facere!</li>
      <li>Iusto, iure rem?</li>
      <li>Lorem, ipsum dolor.</li>
      <li>In, tempore nulla.</li>
    </ul>
    <div ref="bar" class="bar" @mousedown="bar($event)"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
    };
  },
  methods: {
    // 设置滚动条的高度
    setBarHeight() {
      let list = this.$refs.list;
      let bar = this.$refs.bar;
      let listClientHeight = list.clientHeight;
      let listScrollHeight = list.scrollHeight;
      let h = (listClientHeight / listScrollHeight) * listClientHeight;
      if (h >= listClientHeight) {
        h = 0;
      }
      bar.style.height = h + "px";
    },

    // 设置滚动条的位置
    setBarTop() {
      const list = this.$refs.list;
      const bar = this.$refs.bar;
      let top = (list.scrollTop / list.scrollHeight) * list.clientHeight;
      bar.style.top = top + "px";
    },

    // 设置列表的scrollTop
    setListScrollTop(newScrollTop) {
      const list = this.$refs.list;
      clearInterval(this.timer); // 避免重复调用函数，停止之前的移动
      // 使用动画实现滚动
      let spd = 0.8; // 速度：1毫秒变化的距离
      let dis = newScrollTop - list.scrollTop; // 移动的距离
      let tick = 10; // 多少毫秒移动以一次
      let duration = Math.abs(dis / spd); // 计算移动的总时间
      let times = Math.ceil(duration / tick); // 一共可以移动多少次
      let curTimes = 0; // 当前移动了多少次
      let everyDis = dis / times; // 每次移动的距离：总距离 / 总次数
      this.timer = setInterval(() => {
        curTimes++;
        list.scrollTop += everyDis;
        this.setBarTop();
        // console.log(everyDis);
        if (curTimes === times) {
          clearInterval(this.timer);
        }
      }, tick);
    },

    // 根据滚动条的位置，直接设置列表的滚动高度
    setListScrollTopFromBarTop(top) {
      const list = this.$refs.list;
      const bar = this.$refs.bar;
      let sh = (top / list.clientHeight) * list.scrollHeight;
      list.scrollTop = sh;
    },

    scroll(e) {
      const list = this.$refs.list;
      this.setListScrollTop(list.scrollTop + e.deltaY);
    },

    bar(e) {
      const list = this.$refs.list;
      const bar = this.$refs.bar;
      let y = e.pageY; // 相对于网页的y坐标
      let top = parseFloat(getComputedStyle(bar).top); // 按下时的top值
      let h = bar.clientHeight; // 滚动条自身的高度
      window.onmousemove = (e) => {
        let newY = e.pageY;
        let newTop = top + (newY - y);
        if (newTop < 0) {
          newTop = 0;
        } else if (newTop > list.clientHeight - h) {
          newTop = list.clientHeight - h;
        }
        bar.style.top = newTop + "px";
        this.setListScrollTopFromBarTop(newTop);
      };

      window.onmouseup = function () {
        window.onmousemove = null;
      };
    },
  },
  mounted() {
    this.setBarHeight();
    this.setBarTop();
  },
};
</script>

<style lang="scss" scoped>
.scroll-bar {
  position: relative;
  width: 250px;
  border: 2px solid;
  margin: 100px auto;
  // padding: 20px;
  box-sizing: border-box;
  .list {
    // position: absolute;
    // left: 0;
    // top: 0;
    margin: 0;
    padding: 0;
    padding: 20px 0;
    height: 300px;
    box-sizing: border-box;
    list-style: none;
    // overflow: auto;
    overflow: hidden;
    text-align: center;
    li {
      height: 35px;
      line-height: 35px;
      padding: 0 20px;
    }
  }

  .bar {
    position: absolute;
    right: 0;
    top: 0px;
    width: 5px;
    height: 30px;
    border: 1px solid;
    border-radius: 5px;
    background: #3ca;
    opacity: 0.5;
    cursor: pointer;
  }
}
</style>