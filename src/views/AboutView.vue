<template>
  <div class="page-container">
    <h1 class="section-title">About TONGFANG</h1>
    <p class="section-subtitle">A Factory of Innovation, a Partner in Design. We are dedicated to building the smart infrastructure of tomorrow, from the factory floor to the finished building.</p>

    <div class="about-grid">
      <div class="about-image">
         <img :src="require('@/assets/images/team_1.jpg')" alt="Our Team at Tongfang"/>
      </div>
      <div class="about-content">
        <h3>Our Mission</h3>
        <p>To design, manufacture, and implement cutting-edge integrated systems that enhance efficiency, security, and productivity for our clients globally. We bridge the gap between architectural design and technology implementation.</p>
        
        <h3>Our Core Values</h3>
        <ul>
          <li><strong>Innovation:</strong> Continuously pioneering new technologies and finding smarter ways to integrate them.</li>
          <li><strong>Excellence:</strong> Adhering to the highest international standards (ISO 9001, ISO/IEC 27001) in everything we do.</li>
          <li><strong>Partnership:</strong> Working collaboratively with our clients as a unified team to achieve shared goals and long-term success.</li>
          <li><strong>Reliability:</strong> Building robust, dependable systems that stand the test of time and provide peace of mind.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'AboutView' }
</script>

<style scoped>
.page-container {
    padding-top: 60px;
    padding-bottom: 80px;
}
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  align-items: center;
  margin-top: 50px;
}
.about-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 15px 40px var(--shadow-color);

  /* --- THIS IS THE CHANGE --- */
  /* This filter applies the brightness and contrast boost, similar to your example. */
  filter: brightness(1.1) contrast(1.05);
}
.about-content h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 15px;
}
.about-content p {
  line-height: 1.8;
  color: var(--text-light);
  font-size: 1.05rem;
  margin-bottom: 30px;
}
.about-content ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}
.about-content li {
  margin-bottom: 15px;
  font-size: 1.05rem;
  color: var(--text-dark);
  line-height: 1.7;
}
.about-content li strong {
    color: var(--primary-color);
}
@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-image {
    order: -1; /* Puts image on top on mobile */
    max-width: 500px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
    .page-container {
        padding-top: 40px;
        padding-bottom: 60px;
    }
    .about-content h3 { font-size: 1.5rem; }
    .about-content p, .about-content li { font-size: 1rem; }
}
</style>