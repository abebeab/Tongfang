<template>
  <div class="industry-card" @click="handleClick">
    <div class="card-background" :style="{ backgroundImage: `url(${solution.hero.image})` }"></div>
    <div class="card-overlay"></div>
    <div class="card-content">
      <h3 class="card-title">{{ solution.hero.title }}</h3>
      <p class="card-description">{{ solution.hero.subtitle }}</p>
      <div class="details-button">Explore Solutions <i class="fas fa-arrow-right"></i></div>
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
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.industry-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  color: var(--white-color);
  min-height: 320px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  transform-style: preserve-3d;
}

.industry-card:hover {
  transform: perspective(1000px) translateY(-8px) rotateX(2deg) rotateY(-2deg);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.6s ease;
  filter: brightness(0.9);
}

.industry-card:hover .card-background {
  transform: scale(1.08);
  filter: brightness(1);
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(13, 36, 79, 0.9) 0%, rgba(13, 36, 79, 0.2) 70%, transparent 100%);
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 30px;
  width: 100%;
  text-align: left;
}

.card-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

.card-description {
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
  margin-bottom: 20px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
}

.details-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.details-button i {
  transition: transform 0.3s ease;
}

.industry-card:hover .details-button {
  background-color: #d17f00;
  transform: translateY(-3px);
}

.industry-card:hover .details-button i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .industry-card {
    min-height: 280px;
  }
  
  .card-title {
    font-size: 1.5rem;
  }
  
  .card-content {
    padding: 25px;
  }
}
</style>