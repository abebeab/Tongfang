<template>
  <div class="solutions-page">
    <!-- HERO SECTION -->
    <section class="solutions-hero">
      <div class="hero-background-image"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content page-container">
        <h1 class="hero-title animate-fade-in-up">Integrated Solutions</h1>
        <p class="hero-subtitle animate-fade-in-up">Moving Forward! Smart Systems</p>
      </div>
    </section>

    <!-- OVERVIEW SECTION -->
    <section id="overview" class="content-section page-container">
      <h2 class="section-heading">A Rich Portfolio of Empowering Solutions</h2>
      <p class="section-text">
        TONGFANG offers an abundance of solution options to facilitate digital transformation.
        Our AIoT-powered applications provide comprehensive, end-to-end capabilities that open
        doors to new business opportunities, optimized operations, and a winning edge in the competition.
      </p>
    </section>

    <!-- SOLUTIONS BY INDUSTRY -->
    <section id="solutions-by-industry" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Industry</h2>
        <h3 class="section-subheading">Tailored to meet varied needs for specific sectors</h3>
        <div class="industry-grid">
          <SolutionIndustryCard
            v-for="industry in industrySolutions"
            :key="industry.slug"
            :solution="industry"
            @click="navigateToSolution(industry.slug)"
          />
        </div>
      </div>
    </section>

    <!-- SOLUTIONS BY SCENARIO -->
    <section id="solutions-by-scenario" class="content-section page-container">
      <h2 class="section-heading">Solutions by Scenario</h2>
      <h3 class="section-subheading">Targeting specific business processes and environments</h3>
      <div class="industry-grid">
        <SolutionIndustryCard
          v-for="solution in scenarioSolutions"
          :key="solution.slug"
          :solution="solution"
          @click="navigateToSolution(solution.slug)"
        />
      </div>
    </section>

    <!-- SOLUTIONS BY FUNCTION -->
    <section id="solutions-by-function" class="content-section page-container-fullwidth bg-light">
      <div class="page-container">
        <h2 class="section-heading">Solutions by Function</h2>
        <h3 class="section-subheading">Leveraging Digital Information & AIoT Capabilities</h3>
        <div class="industry-grid">
          <SolutionIndustryCard
            v-for="solution in allFunctionSolutions"
            :key="solution.slug"
            :solution="solution"
            @click="navigateToSolution(solution.slug)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import SolutionIndustryCard from '@/components/SolutionIndustryCard.vue';

export default {
  name: 'SolutionsView',
  components: {
    SolutionIndustryCard,
  },
  data() {
    return {
      industrySolutions: [],
      scenarioSolutions: [],
      functionSolutions: [],
    };
  },
  computed: {
    allFunctionSolutions() {
      if (!this.functionSolutions) return [];
      return this.functionSolutions.flatMap(category => category.solutions);
    }
  },
  async created() {
    this.industrySolutions = await ApiService.fetchSolutionsByIndustry();
    this.scenarioSolutions = await ApiService.fetchSolutionsByScenario();
    this.functionSolutions = await ApiService.fetchSolutionsByFunction();
  },
  methods: {
    navigateToSolution(slug) {
      if (slug) {
        this.$router.push(`/solutions/${slug}`);
      }
    },
  },
};
</script>

<style scoped>
:root { 
  --primary-color: #0d244f; 
  --secondary-color: #ff8c00; 
  --white-color: #ffffff; 
  --text-dark: #333333; 
  --text-light: #666666; 
  --border-color: #e0e0e0; 
  --light-bg-color: #f8f9fa; 
  --shadow-color: rgba(0, 0, 0, 0.1); 
  --primary-color-light: #e6f0ff; 
}

.content-section { 
  padding: 80px 20px; 
}

.page-container { 
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 20px; 
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
  font-size: 2.6rem; 
  font-weight: 800; 
  color: var(--primary-color); 
  text-align: center; 
  margin-bottom: 15px; 
  line-height: 1.2; 
  font-family: 'Segoe UI', Arial, sans-serif; 
}

.section-subheading { 
  font-size: 1.25rem; 
  font-weight: 500; 
  color: var(--text-light); 
  text-align: center; 
  margin-bottom: 60px; 
  line-height: 1.6; 
  max-width: 800px; 
  margin-left: auto; 
  margin-right: auto; 
}

.section-text { 
  max-width: 800px; 
  margin: 0 auto 50px auto; 
  text-align: center; 
  color: var(--text-light); 
  line-height: 1.8; 
  font-size: 1.1rem; 
}

.solutions-hero { 
  position: relative; 
  height: 50vh; 
  min-height: 400px; 
  display: flex; 
  align-items: flex-start; 
  justify-content: center; 
  text-align: center; 
  color: var(--white-color); 
  padding-top: 5vh; 
  box-sizing: border-box; 
}

.hero-background-image { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background-image: url('@/assets/images/hero-solutions-bg.png'); 
  background-size: cover; 
  background-position: center; 
  filter: brightness(1.1) contrast(1.05) saturate(1.1); 
  z-index: 1; 
}

.hero-overlay { 
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  background: transparent; 
  z-index: 2; 
}

.hero-content { 
  position: relative; 
  z-index: 3; 
}

.hero-title { 
  font-size: 4rem; 
  font-weight: 800; 
  margin-bottom: 15px; 
  letter-spacing: -0.5px; 
  background: linear-gradient(90deg, #ff8c00, #ffaa33); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  text-shadow: 0 5px 16px rgba(0,0,0,0.55); 
}

.hero-subtitle { 
  font-size: 2rem; 
  font-weight: 700; 
  line-height: 1.3; 
  color: #010129cc; 
  text-shadow: 0 4px 10px rgba(0,0,0,0.6); 
}

@keyframes fadeInUp { 
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  } 
  to { 
    opacity: 1; 
    transform: translateY(0); 
  } 
}

.animate-fade-in-up { 
  animation: fadeInUp 0.9s ease-out forwards; 
  opacity: 0; 
}

.hero-title.animate-fade-in-up { 
  animation-delay: 0.2s; 
}

.hero-subtitle.animate-fade-in-up { 
  animation-delay: 0.5s; 
}

.industry-grid { 
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); 
  gap: 35px; 
  padding: 0 20px; 
}

@media (max-width: 1200px) { 
  .industry-grid { 
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
  } 
}

@media (max-width: 992px) { 
  .solutions-hero { 
    height: 55vh; 
    min-height: 380px; 
  } 
  
  .hero-title { 
    font-size: 3.2rem; 
  } 
  
  .hero-subtitle { 
    font-size: 1.8rem; 
  } 
  
  .section-heading { 
    font-size: 2.3rem; 
  } 
}

@media (max-width: 768px) { 
  .content-section { 
    padding: 50px 0; 
  } 
  
  .page-container, .page-container-fullwidth .page-container { 
    padding: 0 15px; 
  } 
  
  .solutions-hero { 
    height: 45vh; 
    min-height: 300px; 
  } 
  
  .hero-title { 
    font-size: 2.6rem; 
  } 
  
  .hero-subtitle { 
    font-size: 1.5rem; 
  } 
  
  .section-heading { 
    font-size: 2rem; 
  } 
  
  .industry-grid { 
    grid-template-columns: 1fr; 
    padding: 0 15px; 
  } 
}
</style>