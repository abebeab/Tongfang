<template>
  <div class="function-card">
    <div class="icon-wrapper">
      <i :class="solution.icon"></i>
    </div>
    <h4 class="function-title">{{ solution.title }}</h4>
    <p class="function-description">{{ solution.description }}</p>
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
  justify-content: flex-start; /* Align content to top */
  text-align: center;
  background-color: var(--white-color);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 30px 25px;
  height: 100%; /* Ensure cards in a grid have consistent height */
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
  font-size: 2.5rem; /* Slightly larger icon */
  color: var(--secondary-color);
  background-color: #eef5ff; /* Light blue background for icon */
  width: 80px; /* Larger wrapper */
  height: 80px; /* Larger wrapper */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-bottom: 25px; /* More space below icon */
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05); /* Subtle shadow for icon */
}

.function-card:hover .icon-wrapper {
  background-color: var(--secondary-color);
  color: var(--white-color);
  transform: scale(1.1) rotate(5deg); /* Subtle rotate on hover */
}

.function-title {
  font-size: 1.15rem; /* Slightly larger title */
  color: var(--primary-color);
  margin: 0 0 10px 0;
  font-weight: 700; /* Bolder title */
  line-height: 1.4;
}

.function-description {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
  flex-grow: 1; /* Allow description to take available space */
}
</style>