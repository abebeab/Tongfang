<template>
  <div class="page-container">
    <section class="solutions-hero">
      <div class="hero-background-image" :style="heroBackgroundStyle"></div>
      <div class="hero-content">
        <!-- Optional content for hero section -->
      </div>
    </section>

    <h1 class="section-title">About TONGFANG</h1>
    <p class="section-subtitle">A Factory of Innovation, a Partner in Design. We are dedicated to building the smart infrastructure of tomorrow, from the factory floor to the finished building.</p>

    <div class="about-grid">
      <div class="about-image">
         <!-- Use only the original image, but still apply native lazy loading -->
         <img 
            :src="aboutImageSrc" 
            alt="Our Team at Tongfang"
            loading="lazy"
         />
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
// Import images explicitly to let Webpack process them for optimal paths/hashes
import heroBg from '@/assets/images/Untitled-1.svg';
import teamOriginal from '@/assets/images/team_1.jpg'; // Only import the original image

export default { 
  name: 'AboutView',
  data() {
    return {
      heroBackgroundStyle: {
        backgroundImage: `url(${heroBg})`
      },
      aboutImageSrc: teamOriginal // Only store the original image path
    };
  },
}
</script>

<style scoped>
/* --- New Hero Section Styles --- */
.solutions-hero {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  height: 700px;
  overflow: hidden;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  filter: brightness(1.05) contrast(1.1);
  z-index: 1;
}
    
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 20px;
}

/* Original styles below */
.page-container {
    padding-top: 0;
    padding-bottom: 80px;
}
.section-title, .section-subtitle, .about-grid {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
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
  filter: brightness(1.1) contrast(1.05);

  transition: opacity 0.3s ease-in-out;
}
.about-image img:not([src]) {
  visibility: hidden;
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
    order: -1;
    max-width: 500px;
    margin: 0 auto;
  }
}
@media (max-width: 768px) {
    .page-container {
        padding-top: 0;
        padding-bottom: 60px;
    }
    .about-content h3 { font-size: 1.5rem; }
    .about-content p, .about-content li { font-size: 1rem; }
}
</style>