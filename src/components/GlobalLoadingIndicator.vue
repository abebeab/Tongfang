<template>
  <div class="loading-bar-container" :class="{ 'visible': isLoading }">
    <div class="loading-bar"></div>
  </div>
</template>

<script>
export default {
  name: 'GlobalLoadingIndicator',
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.loading-bar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.loading-bar-container.visible {
  opacity: 1;
}

.loading-bar {
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
  transform-origin: left;
  animation: loading-animation 1.5s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

@keyframes loading-animation {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
    width: 20%;
  }
}
</style>