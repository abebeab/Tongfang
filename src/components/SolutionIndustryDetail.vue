<template>
  <div class="industry-detail-container">
    <div class="banner-section" :style="{ backgroundImage: `url(${solution.image})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h3 class="banner-title">{{ solution.title }}</h3>
        <p class="banner-description">{{ solution.description }}</p>
        <div class="related-solutions">
          <router-link :to="`/solutions/${solution.slug}`">
            Explore {{ solution.title }} Solutions <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="stories-section">
      <h4 class="stories-title">Success Stories</h4>
      <div class="stories-grid">
        <div v-for="(story, index) in solution.successStories" :key="index" class="story-card">
          <h5>{{ story.title }}</h5>
          <p>{{ story.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionIndustryDetail',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.industry-detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--white-color);
  border-radius: 16px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
.banner-section {
  position: relative; padding: 50px; color: var(--white-color);
  background-size: cover; background-position: center;
  display: flex; flex-direction: column; justify-content: flex-end;
}
.banner-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(13, 36, 79, 0.95) 0%, rgba(13, 36, 79, 0.2) 100%);
}
.banner-content { position: relative; z-index: 2; }
.banner-title { font-size: 2.2rem; font-weight: 700; margin: 0 0 15px 0; }
.banner-description { font-size: 1.05rem; line-height: 1.7; opacity: 0.9; margin-bottom: 25px; }
.related-solutions a {
  color: var(--white-color); background-color: var(--secondary-color);
  padding: 12px 24px; border-radius: 50px; text-decoration: none;
  font-weight: 600; transition: all 0.3s ease; display: inline-block;
}
.related-solutions a:hover {
  background-color: #d17f00; transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}
.stories-section { padding: 40px; }
.stories-title {
  font-size: 1.4rem; color: var(--primary-color);
  margin: 0 0 25px 0; padding-bottom: 10px;
}
.stories-grid { display: grid; gap: 25px; }
.story-card {
  padding-bottom: 25px;
  border-bottom: 1px solid var(--border-color);
}
.story-card:last-child { border-bottom: none; padding-bottom: 0; }
.story-card h5 {
  font-size: 1.1rem; margin: 0 0 8px 0;
  color: var(--text-dark); font-weight: 600;
}
.story-card p {
  font-size: 0.95rem; color: var(--text-light);
  line-height: 1.6; margin: 0;
}

@media (max-width: 900px) {
  .industry-detail-container { grid-template-columns: 1fr; }
  .banner-section { min-height: 350px; }
}
</style>