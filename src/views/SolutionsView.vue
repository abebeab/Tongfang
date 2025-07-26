<template>
  <div class="solutions-page">
    <!-- Hero Section -->
    <section class="solutions-hero">
      <div class="hero-background-image"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content page-container">
        <h1 class="hero-title animate-fade-in-up">TONGFANG Integrated Solutions</h1>
      </div>
    </section>

    <!-- Navigation Hints Bar -->
    <SolutionHints />

    <!-- Overview Section -->
    <section id="overview" class="content-section page-container">
      <h2 class="section-heading">Overview</h2>
      <h3 class="section-subheading">A Rich Portfolio of Empowering and Enabling Solutions</h3>
      <p class="section-text">
        TONGFANG offers an abundance of solution options to facilitate digital transformation. Our AIoT-powered applications provide comprehensive, end-to-end capabilities that open doors to new business opportunities, optimized operations, and a winning edge in the competition.
      </p>
    </section>

    <!-- Solutions by Industry -->
    <section id="solutions-by-industry" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Industry</h2>
        <h3 class="section-subheading">Tailored to meet varied needs</h3>
        <div class="industry-tabs">
          <button
            v-for="industry in industrySolutions"
            :key="industry.slug"
            :class="{ active: currentIndustry === industry.slug }"
            @click="currentIndustry = industry.slug"
          >
            {{ industry.title }}
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <SolutionIndustryDetail v-if="selectedIndustry" :solution="selectedIndustry" :key="selectedIndustry.slug" />
        </transition>
      </div>
    </section>

    <!-- Solutions by Scenario -->
    <section id="solutions-by-scenario" class="content-section page-container">
      <h2 class="section-heading">Solutions by Scenario</h2>
      <h3 class="section-subheading">Focused on each business process</h3>
      <div class="solutions-grid-scenario">
        <SolutionScenarioCard 
          v-for="(solution, index) in scenarioSolutions" 
          :key="index" 
          :solution="solution"
        />
      </div>
    </section>

    <!-- Solutions by Function -->
    <section id="solutions-by-function" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Function</h2>
        <h3 class="section-subheading">Designed to resolve everyday issues</h3>
        <div class="function-categories-wrapper">
          <div v-for="category in functionSolutions" :key="category.category" class="function-category">
            <h4 class="function-category-title">{{ category.category }}</h4>
            <div class="solutions-grid-function">
              <SolutionFunctionCard 
                v-for="(solution, index) in category.solutions" 
                :key="index" 
                :solution="solution"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import SolutionHints from '@/components/SolutionHints.vue';
import SolutionIndustryDetail from '@/components/SolutionIndustryDetail.vue';
import SolutionScenarioCard from '@/components/SolutionScenarioCard.vue';
import SolutionFunctionCard from '@/components/SolutionFunctionCard.vue';

export default {
  name: 'SolutionsView',
  components: {
    SolutionHints,
    SolutionIndustryDetail,
    SolutionScenarioCard,
    SolutionFunctionCard
  },
  data() {
    return {
      currentIndustry: 'smart-offices',
      industrySolutions: [],
      scenarioSolutions: [],
      functionSolutions: [],
    };
  },
  computed: {
    selectedIndustry() {
      return this.industrySolutions.find(i => i.slug === this.currentIndustry);
    }
  },
  async created() {
    this.industrySolutions = await ApiService.fetchSolutionsByIndustry();
    this.scenarioSolutions = await ApiService.fetchSolutionsByScenario();
    this.functionSolutions = await ApiService.fetchSolutionsByFunction();
  }
};
</script>

<style scoped>
/* General Section Styling */
.content-section { padding: 80px 20px; }
.page-container-fullwidth { padding: 80px 0; }
.bg-light {
  background-color: #f7f9fc;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.section-heading {
  font-size: 2.2rem; font-weight: 700; color: var(--primary-color);
  text-align: center; margin-bottom: 12px;
}
.section-subheading {
  font-size: 1.15rem; font-weight: 500; color: var(--text-dark);
  text-align: center; margin-bottom: 30px;
}
.section-text {
  max-width: 800px; margin: 0 auto 60px auto;
  text-align: center; color: var(--text-light); line-height: 1.8;
}

/* Awesome Hero Section */
.solutions-hero {
  position: relative; height: 50vh; min-height: 400px;
  display: flex; align-items: center; justify-content: center;
  text-align: center; color: var(--white-color);
}
.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/solution.png'); /* Use local path */
  background-size: cover;
  background-position: center 30%;
  filter: brightness(0.6);
  z-index: -1;
}
.hero-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(45deg, rgba(13, 36, 79, 0.6), rgba(0, 0, 0, 0.3));
}
.hero-content { position: relative; z-index: 2; }
.hero-title { font-size: 3.5rem; font-weight: 800; }

/* Animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* Industry Tabs */
.industry-tabs {
  display: flex; justify-content: center; flex-wrap: wrap;
  gap: 12px; margin: 0 auto 40px; border-bottom: 1px solid #dde2e8; padding-bottom: 25px;
}
.industry-tabs button {
  padding: 10px 22px; font-size: 1rem; font-weight: 600;
  border: none; background: none; color: #5a6d82;
  cursor: pointer; transition: color 0.3s ease; position: relative;
}
.industry-tabs button:hover { color: var(--primary-color); }
.industry-tabs button.active { color: var(--primary-color); }
.industry-tabs button.active::after {
  content: '';
  position: absolute; bottom: -26px; left: 0;
  width: 100%; height: 3px;
  background-color: var(--secondary-color);
}

/* Grids */
.solutions-grid-scenario { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
.solutions-grid-function { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }

/* Function Section */
.function-category { margin-bottom: 60px; }
.function-category:last-child { margin-bottom: 0; }
.function-category-title {
  text-align: left; font-size: 1.6rem; color: var(--primary-color);
  margin-bottom: 30px; border-bottom: 2px solid var(--border-color); padding-bottom: 15px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>