<template>
  <div class="page-container">
    <h1 class="section-title">About TONGFANG</h1>
    <p class="section-subtitle">A Factory of Innovation, a Partner in Design. We are dedicated to building the smart infrastructure of tomorrow, from the factory floor to the finished building.</p>

    <div class="about-grid">
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" alt="Our Team">
      </div>
      <div class="about-content">
        <h3>Our Mission</h3>
        <p>To design, manufacture, and implement cutting-edge integrated systems that enhance efficiency, security, and productivity for our clients globally. We bridge the gap between architectural design and technology implementation.</p>
        
        <h3>Our Core Values</h3>
        <ul>
          <li><strong>Innovation:</strong> Continuously pioneering new technologies.</li>
          <li><strong>Excellence:</strong> Adhering to the highest international standards (ISO 9001, ISO/IEC 27001).</li>
          <li><strong>Partnership:</strong> Working collaboratively with clients to achieve shared goals.</li>
          <li><strong>Reliability:</strong> Building robust systems that stand the test of time.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'AboutView' }
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  align-items: center;
  margin-top: 40px;
}
.about-image img {
  width: 100%;
  border-radius: 12px;
}
.about-content h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-top: 0;
}
.about-content p {
  line-height: 1.8;
  color: var(--text-light);
}
.about-content ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.about-content li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: var(--text-dark);
}
@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
}
</style>