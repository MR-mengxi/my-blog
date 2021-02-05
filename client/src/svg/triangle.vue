<template>
  <div class="triangle">
    <svg class="circular">
      <path
        class="path"
        d="M150 0 L75 100 L200 120 Z"
        stroke="#6b5892"
        stroke-width="5"
        fill="#6b5892"
      ></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.triangle {
  position: relative;
  .circular {
    position: absolute;
    left: 50px;
    top: 300px;
    animation: triangle 2s infinite;
  }
  @keyframes triangle {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(0.5) rotate(360deg);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>