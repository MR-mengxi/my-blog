<template>
  <div class="home">
    <!-- <circle-com /> -->
    <!-- <test /> -->
    <footer class="footer">
      <p>
        <a href="http://beian.miit.gov.cn" target="_black">冀ICP备2020024349号</a>
      </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import circleCom from "./circleCom";
// import test from "./test";

export default {
  name: "Home",
  components: {
    circleCom,
    // test
  },
};
</script>


<style lang="scss">
body {
  // background: #92b3a5;
  background: url("../assets/image/4.jpg") no-repeat center/100% fixed;
  margin: 0;
  // position: relative;
}
.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 188px;
  font-size: 18px;
  p {
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>