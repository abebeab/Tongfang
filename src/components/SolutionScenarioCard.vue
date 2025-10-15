<template>
  <div class="scenario-card">
    <img v-if="solution.image" :src="solution.image" :alt="solution.title" class="scenario-image">
    <div v-else class="scenario-icon-fallback">{{ solution.icon }}</div>
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
/* NOTE: The root element is now a <div>, not a <router-link> */
.scenario-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: var(--white-color);
  /* For 3D effect */
  transform-style: preserve-3d;
}
.scenario-card:hover {
  transform: perspective(1000px) translateY(-10px) rotateX(3deg) rotateY(3deg);
  box-shadow: 0 18px 35px rgba(0,0,0,0.15);
}
.scenario-image {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover; transition: transform 0.4s ease; filter: brightness(0.9);
}
.scenario-card:hover .scenario-image {
  transform: scale(1.05); filter: brightness(1);
}
.scenario-icon-fallback {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 4rem; background-color: var(--primary-color-light);
  color: var(--primary-color); transition: all 0.4s ease;
}
.scenario-card:hover .scenario-icon-fallback {
  background-color: var(--primary-color); color: var(--white-color);
}
.card-overlay {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(13, 36, 79, 0.9) 0%, transparent 60%); z-index: 1;
}
.card-content {
  position: relative; z-index: 2; padding: 25px; width: 100%;
}
.scenario-title {
  color: var(--white-color); font-size: 1.25rem; font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.6); margin: 0;
}
</style>