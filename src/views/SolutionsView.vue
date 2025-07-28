<template>
  <div class="solutions-page">
    <!-- Hero Section -->
    <section class="solutions-hero">
      <div class="hero-background-image"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content page-container">
        <!-- MODIFIED: "Integrated" is now wrapped in a span to apply the brand color -->
        <h1 class="hero-title animate-fade-in-up">
          <span class="highlight">Integrated</span> Solutions
        </h1>
        <!-- MODIFIED: "Engineering" and "smart" are now wrapped in spans -->
        <p class="hero-subtitle animate-fade-in-up">
          <span class="highlight">Engineering</span> the future of <span class="highlight">smart</span> infrastructure.
        </p>
      </div>
    </section>

    <!-- Navigation Hints Bar (Sticky on Desktop) -->
    <SolutionHints />

    <!-- Overview Section -->
    <section id="overview" class="content-section page-container">
      <h2 class="section-heading">A Rich Portfolio of Empowering Solutions</h2>
      <p class="section-text">
        TONGFANG offers an abundance of solution options to facilitate digital transformation. Our AIoT-powered applications provide comprehensive, end-to-end capabilities that open doors to new business opportunities, optimized operations, and a winning edge in the competition.
      </p>
    </section>

    <!-- Solutions by Industry -->
    <section id="solutions-by-industry" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Industry</h2>
        <h3 class="section-subheading">Tailored to meet varied needs</h3>
        <div class="industry-tabs-wrapper">
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
// The script is unchanged and remains correct
import { ApiService } from '@/services/api.js';
import SolutionHints from '@/components/SolutionHints.vue';
import SolutionIndustryDetail from '@/components/SolutionIndustryDetail.vue';
import SolutionScenarioCard from '@/components/SolutionScenarioCard.vue';
import SolutionFunctionCard from '@/components/SolutionFunctionCard.vue';

export default {
  name: 'SolutionsView',
  components: {
    SolutionHints, SolutionIndustryDetail, SolutionScenarioCard, SolutionFunctionCard
  },
  data() {
    return {
      currentIndustry: null, industrySolutions: [], scenarioSolutions: [], functionSolutions: []
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
    if (this.industrySolutions.length > 0) {
        this.currentIndustry = this.industrySolutions[0].slug;
    }
  }
};
</script>

<style scoped>
/* General Section Styling */
.content-section { padding: 80px 20px; }
.page-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.page-container-fullwidth { padding: 80px 0; }
.bg-light { background-color: #f7f9fc; border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); }
.section-heading { font-size: 2.2rem; font-weight: 700; color: var(--primary-color); text-align: center; margin-bottom: 12px; }
.section-subheading { font-size: 1.15rem; font-weight: 500; color: var(--text-dark); text-align: center; margin-bottom: 40px; line-height: 1.6; }
.section-text { max-width: 800px; margin: 0 auto 10px auto; text-align: center; color: var(--text-light); line-height: 1.8; }

/* Hero Section */
.solutions-hero { position: relative; height: 50vh; min-height: 400px; display: flex; align-items: center; justify-content: center; text-align: center; color: var(--white-color); }
.hero-background-image { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: url('@/assets/images/solution.png'); background-size: cover; background-position: center; filter: brightness(1.25) contrast(1.05); z-index: 1; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, rgba(13, 36, 79, 0.3), rgba(0, 0, 0, 0.1)); z-index: 2; }
.hero-content { position: relative; z-index: 3; }
.hero-title { font-size: 3.5rem; font-weight: 800; text-shadow: 0 2px 8px rgba(0,0,0,0.5); }
.hero-subtitle { font-size: 1.25rem; margin-top: 10px; opacity: 0.9; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }

/* --- NEW STYLE FOR BRANDED TEXT --- */
.hero-content .highlight {
  color: var(--secondary-color);
}

@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }

/* Industry Tabs */
.industry-tabs-wrapper { max-width: 100%; overflow-x: auto; padding-bottom: 25px; margin-bottom: 40px; -ms-overflow-style: none; scrollbar-width: none; }
.industry-tabs-wrapper::-webkit-scrollbar { display: none; }
.industry-tabs { display: flex; justify-content: center; border-bottom: 1px solid #dde2e8; width: -moz-fit-content; width: fit-content; margin: 0 auto; }
.industry-tabs button { padding: 10px 22px; font-size: 1rem; font-weight: 600; border: none; background: none; color: #5a6d82; cursor: pointer; transition: color 0.3s ease; position: relative; white-space: nowrap; flex-shrink: 0; }
.industry-tabs button:hover { color: var(--primary-color); }
.industry-tabs button.active { color: var(--primary-color); }
.industry-tabs button.active::after { content: ''; position: absolute; bottom: -26px; left: 0; width: 100%; height: 3px; background-color: var(--secondary-color); }

/* Grids & Categories */
.solutions-grid-scenario { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.solutions-grid-function { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px; }
.function-category { margin-bottom: 60px; }
.function-category:last-child { margin-bottom: 0; }
.function-category-title { font-size: 1.6rem; color: var(--primary-color); margin-bottom: 30px; border-bottom: 2px solid var(--border-color); padding-bottom: 15px; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Responsive Design */
@media (max-width: 992px) {
  .hero-title { font-size: 2.8rem; }
  .solutions-hero { min-height: 350px; height: 40vh; }
  .industry-tabs { justify-content: flex-start; margin-left: 20px; margin-right: 20px; }
}
@media (max-width: 768px) {
  .content-section { padding: 60px 0; }
  .page-container { padding: 0 20px; }
  .section-heading { font-size: 2rem; }
  .section-subheading { font-size: 1rem; }
  .solutions-grid-scenario, .solutions-grid-function { grid-template-columns: 1fr; gap: 20px; }
  .function-category-title { font-size: 1.5rem; }
  .hero-title { font-size: 2.2rem; }
  .hero-subtitle { font-size: 1.1rem; }
  .solutions-hero { min-height: 300px; height: 35vh; }
}
</style>