<template>
  <div class="solution-card">
    <img :src="solution.image" :alt="solution.title" class="solution-image">
    <div class="solution-content">
      <h4 class="solution-title">{{ solution.title }}</h4>
      <p class="solution-description">{{ solution.shortDescription }}</p>
      <router-link :to="`/solutions/${solution.slug}`" class="details-button">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionCard',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* This uses similar styling to ProductCard for consistency */
.solution-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  background-color: var(--white-color);
}
.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow-color);
}
.solution-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: var(--light-bg-color);
}
.solution-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.solution-title {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin: 0 0 10px 0;
}
.solution-description {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 20px;
}
.details-button {
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 12px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: auto;
}
.details-button:hover {
  background-color: var(--secondary-color);
  color: var(--white-color);
}
</style>