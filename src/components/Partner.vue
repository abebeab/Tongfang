<template>
  <section id="partner" class="section-container" style="background-color: var(--light-bg-color);">
    <h2 class="section-title">Grow With Us</h2>
    <p class="section-subtitle">
      Join our network of partners to leverage innovative products, world-class training, and collaborative marketing opportunities.
    </p>
    <div class="partner-container">
      <div class="partner-card">
        <h3>Why Partner with TONGFANG?</h3>
        <p>Gain a competitive edge by offering cutting-edge integrated solutions. We provide the tools, training, and support you need to succeed.</p>
        <ul>
          <li><i class="fas fa-check"></i> Access to innovative products & solutions</li>
          <li><i class="fas fa-check"></i> Comprehensive training and certification</li>
          <li><i class="fas fa-check"></i> Co-marketing and lead generation support</li>
          <li><i class="fas fa-check"></i> Lucrative partner-only pricing tiers</li>
        </ul>
      </div>
      <div class="partner-card">
        <h3>Types of Partnerships</h3>
        <div class="partnership-types">
            <div class="type-item">🔹 Resellers</div>
            <div class="type-item">🔹 System Integrators</div>
            <div class="type-item">🔹 OEMs</div>
        </div>
        <p>We offer flexible partnership models tailored to your business. Apply today to discover the right fit for you.</p>
        <a href="#contact" class="partner-cta">Become a Partner</a>
      </div>
      <div class="partner-card">
        <h3>Partner Portal</h3>
        <p>Existing partners can log in to our secure portal to access exclusive tools, marketing materials, technical documents, and direct support.</p>
        <a href="#" class="partner-cta disabled">Portal Login <small>(Coming Soon)</small></a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PartnerSection',
}
</script>

<style scoped>
.partner-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}
.partner-card {
    background-color: var(--white-color);
    border-radius: 12px;
    padding: 40px;
    border: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
}
.partner-card h3 {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-top: 0;
}
.partner-card p {
    color: var(--text-light);
    line-height: 1.7;
    flex-grow: 1;
}
.partner-card ul { list-style: none; padding: 0; margin: 20px 0; }
.partner-card li { margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
.partner-card li i { color: #28a745; }
.partnership-types {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
}
.type-item {
    background-color: var(--light-bg-color);
    padding: 8px 15px;
    border-radius: 20px;
    font-weight: 500;
}
.partner-cta {
    display: inline-block;
    padding: 14px 30px;
    background-color: var(--secondary-color);
    color: var(--white-color);
    font-weight: 700;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-align: center;
    margin-top: auto;
}
.partner-cta:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
}
.partner-cta.disabled {
    background-color: #A0AEC0;
    cursor: not-allowed;
}
.partner-cta.disabled:hover {
    transform: none;
}
</style>