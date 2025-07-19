<template>
  <div class="page-container">
    <h1 class="section-title">Our Achievements</h1>
    <p class="section-subtitle">A testament to our commitment to excellence, innovation, and partnership in delivering world-class integrated systems.</p>

    <div class="achievements-grid">
      <div class="achievement-card">
        <img src="https://images.unsplash.com/photo-1579548122204-688199b5015b?w=500" alt="Achievement" class="achievement-image">
        <div class="achievement-content">
          <h4>Project of the Year Award</h4>
          <p>Recognized for our groundbreaking work on the Smart City Grid project, integrating over 10,000 IoT devices.</p>
        </div>
      </div>
      <div class="achievement-card">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500" alt="Achievement" class="achievement-image">
        <div class="achievement-content">
          <h4>Top-Rated Technology Partner</h4>
          <p>Acknowledged by our international technology partners for outstanding collaboration and seamless system integration.</p>
        </div>
      </div>
      <div class="achievement-card">
        <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500" alt="Achievement" class="achievement-image">
        <div class="achievement-content">
          <h4>Innovation in Sustainability</h4>
          <p>Awarded for developing energy-efficient BMS solutions that reduce carbon footprints by an average of 30% for our clients.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementView'
}
</script>

<style scoped>
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