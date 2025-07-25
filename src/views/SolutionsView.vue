<template>
  <div class="solutions-page">
    <!-- Hero Section -->
    <section class="solutions-hero">
      <div class="hero-background-image"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content page-container">
        <h1 class="hero-title">TONGFANG Solutions</h1>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="content-section page-container">
      <h2 class="section-heading">Overview</h2>
      <h3 class="section-subheading">A rich portfolio of empowering and enabling solutions</h3>
      <p class="section-text">
        TONGFANG offers an abundance of solution options to facilitate the digital transformation process. These solutions enable intelligent operations in many sectors of society. Beginning at system integration and extending to AIoT-powered applications, our solutions are designed to provide comprehensive, end-to-end capabilities for diverse customers and industries.
      </p>
    </section>

    <!-- Solutions by Industry Section -->
    <section id="solutions-by-industry" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Industry</h2>
        <h3 class="section-subheading">Tailored to meet varied needs</h3>
        <p class="section-text">
          Covering a wide range of industries – from education to healthcare and beyond – our solutions are built on solid ground.
        </p>
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

    <!-- Solutions by Scenario Section -->
    <section class="content-section page-container">
      <h2 class="section-heading">Solutions by Scenario</h2>
      <h3 class="section-subheading">Focused on each business process</h3>
      <p class="section-text">
        Each industry consists of a finite number of scenarios. We believe the key to success is meeting the requirements and challenges in each scenario.
      </p>
      <div class="solutions-grid-scenario">
        <SolutionScenarioCard 
          v-for="(solution, index) in scenarioSolutions" 
          :key="index" 
          :solution="solution"
        />
      </div>
    </section>

    <!-- Solutions by Function Section - REDESIGNED -->
     <section class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Function</h2>
        <h3 class="section-subheading">Designed to resolve everyday issues</h3>
        <p class="section-text">
          Taking a building-block approach, we create functional applications based on common technologies, designed to solve particular problems with flexibility and precision.
        </p>
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
import SolutionIndustryDetail from '@/components/SolutionIndustryDetail.vue';
import SolutionScenarioCard from '@/components/SolutionScenarioCard.vue';
import SolutionFunctionCard from '@/components/SolutionFunctionCard.vue';

export default {
  name: 'SolutionsView',
  components: {
    SolutionIndustryDetail,
    SolutionScenarioCard,
    SolutionFunctionCard
  },
  data() {
    return {
      currentIndustry: 'education',
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
.content-section {
  padding: 80px 20px;
}
.page-container-fullwidth {
  padding: 80px 0;
}
.bg-light {
  background-color: var(--light-bg-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.section-heading {
  font-size: 2.2rem; font-weight: 700; color: var(--primary-color);
  text-align: center; margin-bottom: 8px;
}
.section-subheading {
  font-size: 1.2rem; font-weight: 500; color: var(--secondary-color);
  text-align: center; margin-bottom: 20px;
}
.section-text {
  max-width: 800px; margin: 0 auto 50px auto;
  text-align: center; color: var(--text-light); line-height: 1.7;
}

/* Hero Section */
.solutions-hero {
  position: relative; height: 40vh; min-height: 350px;
  display: flex; align-items: center; justify-content: center;
  text-align: center; color: var(--white-color);
}
.hero-background-image {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80');
  background-size: cover; background-position: center 30%;
  filter: brightness(0.5);
}
.hero-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(45deg, rgba(13, 36, 79, 0.7), rgba(0, 0, 0, 0.4));
}
.hero-content { position: relative; z-index: 2; }
.hero-title { font-size: 3.2rem; font-weight: 800; }

/* Industry Tabs */
.industry-tabs {
  display: flex; justify-content: center; flex-wrap: wrap;
  gap: 10px; margin-bottom: 40px;
}
.industry-tabs button {
  padding: 10px 20px; font-size: 1rem; font-weight: 600;
  border: 1px solid var(--border-color); background-color: var(--white-color);
  color: var(--text-light); border-radius: 50px;
  cursor: pointer; transition: all 0.3s ease;
}
.industry-tabs button:hover { background-color: #f0f4f8; color: var(--primary-color); }
.industry-tabs button.active {
  background-color: var(--primary-color); color: var(--white-color);
  border-color: var(--secondary-color);
}

/* Solutions by Function - NEW STYLES */
.function-category {
  margin-bottom: 50px;
}
.function-category:last-child {
  margin-bottom: 0;
}
.function-category-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}
.function-category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--secondary-color);
}

/* Grids */
.solutions-grid-scenario {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.solutions-grid-function {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>