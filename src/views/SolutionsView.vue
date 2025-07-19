<template>
  <div class="page-container">
    <h1 class="section-title">Integrated Solutions</h1>
    <p class="section-subtitle">From architectural design to technology implementation, we provide holistic solutions tailored to the unique challenges of your industry.</p>

    <div class="solutions-grid">
      <SolutionCard v-for="solution in solutions" :key="solution.slug" :solution="solution" />
    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import SolutionCard from '@/components/SolutionCard.vue';

export default {
  name: 'SolutionsView',
  components: { SolutionCard },
  data() {
    return {
      solutions: []
    }
  },
  async created() {
    this.solutions = await ApiService.fetchSolutions();
  }
}
</script>

<style scoped>
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}
</style>