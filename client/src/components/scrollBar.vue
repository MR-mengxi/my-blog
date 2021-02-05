<template>
  <div class="scroll-bar">
    <ul>
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
    <div class="bar" @click="scroll"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    scroll() {},
  },
};
</script>

<style lang="scss" scoped>
.scroll-bar {
  position: relative;
  width: 250px;
  height: 350px;
  border: 2px solid;
  margin: 100px auto;
  padding: 20px;
  box-sizing: border-box;
  ul {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    padding: 20px;
    height: 100%;
    box-sizing: border-box;
    list-style: none;
    overflow: auto;
    text-align: center;
    li {
      line-height: 2;
    }
  }

  .bar {
    position: absolute;
    right: 0;
    top: 20px;
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