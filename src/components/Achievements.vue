<template>
  <section id="achievements" class="section-container">
    <h2 class="section-title">Our Achievements</h2>
    <p class="section-subtitle">
      A testament to our commitment to excellence and innovation.
    </p>
    <div class="achievements-grid">
      <div class="achievement-card">
        <img src="/path/to/your/achievement-image1.jpg" alt="Achievement 1" class="achievement-image">
        <div class="achievement-content">
          <h4>Project of the Year Award</h4>
          <p>Recognized for our groundbreaking work on the Smart City Grid project.</p>
        </div>
      </div>
      <div class="achievement-card">
        <img src="/path/to/your/achievement-image2.jpg" alt="Achievement 2" class="achievement-image">
        <div class="achievement-content">
          <h4>Innovation in Sustainability</h4>
          <p>Awarded for developing energy-efficient BMS solutions that reduce carbon footprints.</p>
        </div>
      </div>
      <div class="achievement-card">
        <img src="/path/to/your/achievement-image3.jpg" alt="Achievement 3" class="achievement-image">
        <div class="achievement-content">
          <h4>Top-Rated Partner</h4>
          <p>Acknowledged by our technology partners for outstanding collaboration and integration.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // CORRECTED: Renamed the component to be multi-word
  name: 'AchievementsSection', 
}
</script>

<style scoped>
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.achievement-card {
  background: var(--white-color);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
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
</style>