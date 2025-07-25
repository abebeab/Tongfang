<template>
  <div class="scenario-card">
    <img :src="solution.image" :alt="solution.title" class="scenario-image">
    <div class="title-overlay">
      <h4 class="scenario-title">{{ solution.title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionScenarioCard',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.scenario-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 350px;
}
.scenario-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow-color);
}
.scenario-card:hover .scenario-image {
  filter: brightness(0.9);
}
.scenario-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}
.title-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.scenario-title {
  color: var(--white-color);
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}
</style>