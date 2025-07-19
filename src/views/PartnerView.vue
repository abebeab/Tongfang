<template>
  <div class="page-container">
    <h1 class="section-title">Grow With Us</h1>
    <p class="section-subtitle">Join our network of partners to leverage innovative products, world-class training, and collaborative marketing opportunities.</p>

    <div class="partner-container">
      <div class="partner-card">
        <h3>Why Partner with TONGFANG?</h3>
        <p>Gain a competitive edge by offering cutting-edge integrated solutions. We provide the tools, training, and support you need to succeed.</p>
        <ul>
          <li>Access to innovative products & solutions</li>
          <li>Comprehensive training and certification</li>
          <li>Co-marketing and lead generation support</li>
          <li>Lucrative partner-only pricing tiers</li>
        </ul>
      </div>
      <div class="partner-card cta-card">
        <h3>Become a Partner</h3>
        <p>We offer flexible partnership models tailored to your business. Apply today to discover the right fit for you.</p>
        <router-link to="/contact" class="cta-button">Apply Now</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnerView'
}
</script>

<style scoped>
.partner-container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}
.partner-card {
    background-color: var(--light-bg-color);
    border-radius: 12px;
    padding: 40px;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
}
.partner-card h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin: 0 0 15px 0;
}
.partner-card p {
    color: var(--text-light);
    line-height: 1.7;
    flex-grow: 1;
}
.partner-card ul { 
  list-style: none; 
  padding: 0; 
  margin: 20px 0; 
}
.partner-card li { 
  margin-bottom: 12px; 
  padding-left: 25px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2328a745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>') no-repeat left center;
}
.cta-card {
  background-color: var(--primary-color);
  color: var(--white-color);
  text-align: center;
}
.cta-card h3 {
  color: var(--white-color);
}
.cta-card p {
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;
}
.cta-card .cta-button {
  margin-top: auto;
}
</style>