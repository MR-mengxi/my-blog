<template>
  <div class="circle">
    <svg viewBox="25 25 50 50" class="circular">
      <circle
        cx="50"
        cy="50"
        r="20"
        stroke="pink"
        stroke-width="2"
        fill="pink"
        class="path"
      ></circle>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.circle {
  position: relative;
  .circular {
    position: absolute;
    left: 200px;
    top: 30px;
    width: 100px;
    height: 100px;
    animation: circle 2s infinite;
  }
  @keyframes circle {
    0% {
      left: 250px;
    }
    50% {
      left: 230px;
      top: 70px;
    }
    100% {
       left: 250px;
    }
  }
}
</style>