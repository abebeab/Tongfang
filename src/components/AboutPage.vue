<template>
  <section id="about" class="section-container">
    <h2 class="section-title">About Us</h2>
    <p class="section-subtitle">
      Our history, leadership, and commitment to excellence define who we are and drive us to innovate for a better future.
    </p>
    <div class="about-grid">
      <div class="about-card">
        <h4><i class="fas fa-history"></i> Company Background</h4>
        <p>Founded on the principles of innovation and excellence, TONGFANG has grown from a specialized tech provider to a global system integration leader. We are dedicated to building the smart infrastructure of tomorrow.</p>
      </div>
      <div class="about-card">
        <h4><i class="fas fa-users"></i> Leadership Team</h4>
        <p>Our team comprises industry veterans, visionary engineers, and strategic thinkers (CEO, CTO, VP of Engineering) committed to delivering unparalleled value and expertise to our clients.</p>
      </div>
      <div class="about-card">
        <h4><i class="fas fa-certificate"></i> Certifications & Compliance</h4>
        <p>We adhere to the highest international standards, holding certifications like <strong>ISO 9001</strong> and <strong>ISO/IEC 27001</strong>, and ensuring compliance with GDPR and other regional regulations.</p>
      </div>
      <div class="about-card">
        <h4><i class="fas fa-award"></i> Awards & Recognition</h4>
        <p>Our commitment to quality and innovation has been recognized through numerous industry and partnership awards, affirming our position as a trusted leader in technology integration.</p>
      </div>
       <div class="about-card-full">
        <h4><i class="fas fa-globe-africa"></i> Corporate Social Responsibility</h4>
        <p>We believe in technology for good. Our CSR initiatives focus on sustainable practices, environmental responsibility, and community engagement to create a positive impact beyond business.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
#about { background-color: var(--white-color); }
.about-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}
.about-card, .about-card-full {
    background: var(--light-bg-color);
    padding: 30px;
    border-radius: 12px;
}
.about-card h4, .about-card-full h4 {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.3rem;
    color: var(--primary-color);
    margin: 0 0 15px 0;
}
.about-card h4 i, .about-card-full h4 i { color: var(--secondary-color); }
.about-card p, .about-card-full p {
    font-size: 1rem;
    color: var(--text-light);
    line-height: 1.7;
    margin: 0;
}
.about-card-full {
    grid-column: 1 / -1; /* Span full width */
}
@media (max-width: 768px) {
    .about-grid { grid-template-columns: 1fr; }
}
</style>