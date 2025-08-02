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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 30px 25px;
  height: 100%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.03);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}
.function-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  border-color: var(--secondary-color);
}
.icon-wrapper {
  font-size: 2rem;
  color: var(--secondary-color);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 20px;
  background-color: #e9eef5;
  transition: all 0.3s ease;
}
.function-card:hover .icon-wrapper {
  background-color: var(--secondary-color);
  color: var(--white-color);
  transform: scale(1.1) rotate(10deg);
}
.function-title {
  font-size: 1.05rem;
  color: var(--primary-color);
  margin: 0;
  font-weight: 600;
  line-height: 1.5;
}
</style>