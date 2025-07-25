<template>
  <div class="function-card">
    <div class="icon-wrapper">
      <i :class="solution.icon"></i>
    </div>
    <h4 class="function-title">{{ solution.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'SolutionFunctionCard',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.function-card {
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}
.function-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow-color);
  border-color: var(--secondary-color);
}
.icon-wrapper {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}
.function-title {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
}
</style>