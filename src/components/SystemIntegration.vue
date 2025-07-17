<template>
  <section id="integration" class="section-container" style="background-color: var(--light-bg-color);">
    <h2 class="section-title">End-to-End System Integration</h2>
    <p class="section-subtitle">
      We provide end-to-end system integration services across industries, combining hardware, software, and networking to create unified, high-performance solutions.
    </p>
    <div class="integration-container">
      <div class="integration-services">
        <h3 class="sub-heading">Types of Integration Services</h3>
        <ul class="service-list">
          <li><i class="fas fa-cogs"></i> Enterprise Resource Planning (ERP) Integration</li>
          <li><i class="fas fa-server"></i> Data Center & Server Infrastructure</li>
          <li><i class="fas fa-shield-alt"></i> Smart Surveillance & Security Systems</li>
          <li><i class="fas fa-robot"></i> Industrial Automation</li>
          <li><i class="fas fa-cloud"></i> Cloud & On-Premise Hybrid Solutions</li>
          <li><i class="fas fa-wifi"></i> IoT & Smart Devices Integration</li>
        </ul>
      </div>
      <div class="integration-features">
        <h3 class="sub-heading">Core Features of Our Approach</h3>
        <ul class="feature-list">
          <li><i class="fas fa-check-circle"></i> Custom Design Tailored to Your Needs</li>
          <li><i class="fas fa-check-circle"></i> Seamless Workflow & Process Integration</li>
          <li><i class="fas fa-check-circle"></i> High Availability & Redundant Architecture</li>
          <li><i class="fas fa-check-circle"></i> Proactive Cybersecurity & Risk Management</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SystemIntegration',
}
</script>

<style scoped>
.integration-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
.sub-heading { font-size: 1.5rem; font-weight: 600; color: var(--primary-color); margin-bottom: 20px; }
.integration-services, .integration-features { background: var(--white-color); padding: 30px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.04); }
.service-list, .feature-list { list-style: none; padding: 0; margin: 0; }
.service-list li, .feature-list li { display: flex; align-items: center; gap: 15px; font-size: 1.1rem; color: var(--text-dark); margin-bottom: 20px; }
.service-list i, .feature-list i { font-size: 1.4rem; color: var(--secondary-color); width: 25px; text-align: center; }
.feature-list i { color: #28a745; }
</style>