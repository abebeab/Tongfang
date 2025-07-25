<template>
  <div class="industry-detail-container">
    <div class="banner-section" :style="{ backgroundImage: `url(${solution.image})` }">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <h3 class="banner-title">{{ solution.title }}</h3>
        <p class="banner-description">{{ solution.description }}</p>
        <div class="related-solutions">
          <strong>Related solutions:</strong>
          <router-link :to="`/solutions/${solution.slug}`">{{ solution.title }}</router-link>
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
  background-color: var(--white-color);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}
.banner-section {
  position: relative;
  padding: 40px;
  color: var(--white-color);
  background-size: cover;
  background-position: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.banner-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(90deg, rgba(13, 36, 79, 0.95) 20%, rgba(13, 36, 79, 0.1) 100%);
}
.banner-content {
  position: relative;
  z-index: 2;
  max-width: 50%;
}
.banner-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
}
.banner-description {
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 20px;
}
.related-solutions a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  margin-left: 10px;
}
.related-solutions a:hover {
  text-decoration: underline;
}

.stories-section {
  padding: 40px;
}
.stories-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 0 0 25px 0;
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
}
.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}
.story-card {
  background-color: var(--light-bg-color);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
}
.story-card h5 {
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: var(--primary-color);
}
.story-card p {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .banner-content { max-width: 100%; }
  .banner-title { font-size: 2rem; }
}
</style>