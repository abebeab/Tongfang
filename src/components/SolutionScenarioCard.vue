<template>
  <div class="scenario-card">
    <img :src="solution.image" :alt="solution.title" class="scenario-image">
    <div class="card-overlay"></div>
    <div class="card-content">
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
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 280px;
}
.scenario-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 18px 35px rgba(0,0,0,0.12);
}
.scenario-image {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.scenario-card:hover .scenario-image { transform: scale(1.05); }
.card-overlay {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(13, 36, 79, 0.85) 0%, transparent 60%);
}
.card-content {
  position: absolute; bottom: 0; left: 0; width: 100%;
  padding: 25px;
}
.scenario-title {
  color: var(--white-color); font-size: 1.25rem; font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.6); margin: 0;
}
</style>