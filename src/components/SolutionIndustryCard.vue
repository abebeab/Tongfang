<template>
  <div class="industry-card">
    <div class="card-background" :style="{ backgroundImage: `url(${solution.image})` }"></div>
    <div class="card-overlay"></div>
    <div class="card-content">
      <h3 class="card-title">{{ solution.title }}</h3>
      <p class="card-description">{{ solution.description }}</p>
      <router-link :to="`/solutions/${solution.slug}`" class="details-button">Learn More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SolutionIndustryCard',
  props: {
    solution: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.industry-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  color: var(--white-color);
  min-height: 350px;
  display: flex;
  align-items: center;
}
.card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
}
.industry-card:hover .card-background {
  transform: scale(1.05);
}
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(13, 36, 79, 0.9) 0%, rgba(13, 36, 79, 0.2) 100%);
}
.card-content {
  position: relative;
  z-index: 2;
  padding: 40px;
  max-width: 50%;
}
.card-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 15px 0;
}
.card-description {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: 25px;
}
.details-button {
  text-decoration: none;
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.details-button:hover {
  background-color: #d17f00; /* Darker shade of secondary */
  transform: translateY(-2px);
}
@media (max-width: 768px) {
  .card-content { max-width: 90%; padding: 25px; }
  .card-title { font-size: 1.8rem; }
  .card-description { font-size: 1rem; }
}
</style>