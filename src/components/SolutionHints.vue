<template>
  <div class="navigation-hints">
    <div class="page-container hints-container">
      <a href="#overview" @click.prevent="scrollTo('overview')">Overview</a>
      <i class="fas fa-chevron-right separator"></i>
      <a href="#solutions-by-industry" @click.prevent="scrollTo('solutions-by-industry')">By Industry</a>
      <i class="fas fa-chevron-right separator"></i>
      <a href="#solutions-by-scenario" @click.prevent="scrollTo('solutions-by-scenario')">By Scenario</a>
      <i class="fas fa-chevron-right separator"></i>
      <a href="#solutions-by-function" @click.prevent="scrollTo('solutions-by-function')">By Function</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionHints',
  methods: {
    scrollTo(elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        const headerOffset = 140; 
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style scoped>
.navigation-hints {
  background-color: var(--white-color);
  border-bottom: 1px solid var(--border-color);
  padding: 18px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  position: sticky;
  top: 70px;
  z-index: 900;
  height: 70px;
}
.hints-container {
  display: flex; align-items: center; flex-wrap: wrap;
  gap: 15px; font-size: 1rem; font-weight: 600;
}
.hints-container a {
  color: var(--text-light); text-decoration: none;
  transition: color 0.3s ease;
}
.hints-container a:hover { color: var(--secondary-color); }
.hints-container .separator { color: var(--border-color); font-size: 0.8rem; }
</style>