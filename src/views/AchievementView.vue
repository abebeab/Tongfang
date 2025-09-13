<template>
  <div class="page-container">
    <h1 class="section-title">Our Achievements</h1>
    <p class="section-subtitle">A testament to our commitment to excellence, innovation, and partnership in delivering world-class integrated systems.</p>

    <div class="achievements-grid">
      <div class="achievement-card">
        <!-- Optimized Image: Native Lazy Loading -->
        <img 
          :src="achievementImage1" 
          alt="Achievement: Project of the Year Award" 
          class="achievement-image"
          loading="lazy" 
        >
        <div class="achievement-content">
          <h4>Project of the Year Award</h4>
          <p>Recognized for our groundbreaking work on the Smart City Grid project, integrating over 10,000 IoT devices.</p>
        </div>
      </div>
      <div class="achievement-card">
        <!-- Optimized Image: Native Lazy Loading -->
        <img 
          :src="achievementImage2" 
          alt="Achievement: Top-Rated Technology Partner" 
          class="achievement-image"
          loading="lazy"
        >
        <div class="achievement-content">
          <h4>Top-Rated Technology Partner</h4>
          <p>Acknowledged by our international technology partners for outstanding collaboration and seamless system integration.</p>
        </div>
      </div>
      <div class="achievement-card">
        <!-- Optimized Image: Native Lazy Loading -->
        <img 
          :src="achievementImage3" 
          alt="Achievement: Innovation in Sustainability" 
          class="achievement-image"
          loading="lazy"
        >
        <div class="achievement-content">
          <h4>Innovation in Sustainability</h4>
          <p>Awarded for developing energy-efficient BMS solutions that reduce carbon footprints by an average of 30% for our clients.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Explicitly import images. Webpack will process these paths.
import imgAchievement1 from '@/assets/images/products/Achievement.jpg';
import imgAchievement2 from '@/assets/images/tongfng.png'; // Assuming 'tongfng.png' is correct
import imgAchievement3 from '@/assets/images/sustain.jpg';

export default {
  name: 'AchievementView',
  data() {
    return {
      achievementImage1: imgAchievement1,
      achievementImage2: imgAchievement2,
      achievementImage3: imgAchievement3,
    };
  },
  // You might consider lazy loading the component itself if it's not immediately visible on page load.
  // This is typically handled at the router level.
}
</script>

<style scoped>
/* Basic page container styles, assuming these are global or from a layout */
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 80px 20px; /* Adjust padding as needed */
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 15px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

/* Original styles below */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
.achievement-card {
  background: var(--white-color);
  border-radius: 12px;
  box-shadow: 0 10px 30px var(--shadow-color);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}
.achievement-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  /* Add transition for smoother lazy load appearance */
  transition: opacity 0.3s ease-in-out;
}
/* Hide broken image icon while image is loading, or if src is empty initially */
.achievement-image:not([src]) {
  visibility: hidden;
}
.achievement-content {
  padding: 25px;
}
.achievement-content h4 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin: 0 0 10px 0;
}
.achievement-content p {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .section-subtitle {
    font-size: 1rem;
    margin-bottom: 40px;
  }
  .achievement-content h4 {
    font-size: 1.2rem;
  }
  .achievement-content p {
    font-size: 0.95rem;
  }
}
</style>