<template>
  <div class="page-container">
    <section class="solutions-hero">
      <div class="hero-background-image"></div>
      <div class="hero-content">
        <!-- You can add content here for your hero section if needed -->
        <!-- For example: -->
        <!-- <h2 class="hero-title">Our Integrated Solutions</h2> -->
        <!-- <p class="hero-subtitle">Innovating for a smarter, more connected world.</p> -->
      </div>
    </section>

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
/* --- New Hero Section Styles --- */
.solutions-hero {
  position: relative;
  width: 100vw; /* Make it full viewport width */
  left: 50%; /* Center it */
  transform: translateX(-50%); /* Adjust to truly center it */
  height: 700px; /* Adjust height as needed */
  overflow: hidden;
  margin-bottom: 60px; /* Space between hero and content */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; /* For any text you might add inside the hero */
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/images/Untitled-1.svg');
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center top;
  background-repeat: no-repeat;
  filter: brightness(1.05) contrast(1.1); /* Increased brightness and contrast */
  z-index: 1;
  
}
    

.hero-content {
  position: relative;
  z-index: 2; /* Ensures content is above the background image */
  text-align: center;
  padding: 20px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 15px;
  color: white; /* Example styling for hero title */
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9); /* Example styling for hero subtitle */
}
/* --- End New Hero Section Styles --- */

.page-container {
    padding-top: 0; /* Remove top padding from page-container if hero is full width */
    padding-bottom: 80px;
    /* Max width on page-container might interfere with full width hero, consider removing or adjusting */
    /* max-width: 1200px; /* Example: adjust or remove if it conflicts with full-width hero */
    /* margin: 0 auto; /* Example: adjust or remove */
}
.section-title, .section-subtitle, .about-grid {
    max-width: 1200px; /* Re-apply max-width to main content if page-container had it */
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px; /* Add some padding on sides for smaller screens */
    padding-right: 20px; /* Add some padding on sides for smaller screens */
}

/* Original styles below */
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
        /* Adjust if hero section is now full width */
        padding-top: 0;
        padding-bottom: 60px;
    }
    .about-content h3 { font-size: 1.5rem; }
    .about-content p, .about-content li { font-size: 1rem; }
}
</style>