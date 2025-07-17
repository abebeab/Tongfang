<template>
  <section id="support" class="section-container">
    <h2 class="section-title">Dedicated Support & Resources</h2>
    <p class="section-subtitle">
      We are committed to your success long after deployment with comprehensive support and maintenance services.
    </p>
    <div class="support-grid">
        <div class="support-item">
            <div class="support-icon"><i class="fas fa-headset"></i></div>
            <h4>Customer Support Portal</h4>
            <p>Login to submit and track support tickets with our dedicated engineering team.</p>
        </div>
        <div class="support-item">
            <div class="support-icon"><i class="fas fa-download"></i></div>
            <h4>Download Center</h4>
            <p>Access the latest manuals, drivers, firmware, and product software for all your devices.</p>
        </div>
        <div class="support-item">
            <div class="support-icon"><i class="fas fa-tools"></i></div>
            <h4>Remote Support Tools</h4>
            <p>Enable our technicians to provide secure, remote troubleshooting for faster resolutions.</p>
        </div>
        <div class="support-item">
            <div class="support-icon"><i class="fas fa-handshake"></i></div>
            <h4>Maintenance Plans</h4>
            <p>Protect your investment with our Annual Maintenance Contracts (AMC) for on-site and remote care.</p>
        </div>
         <div class="support-item">
            <div class="support-icon"><i class="fas fa-book-open"></i></div>
            <h4>Knowledge Base</h4>
            <p>Find answers quickly in our extensive library of FAQs, setup guides, and troubleshooting articles.</p>
        </div>
         <div class="support-item">
            <div class="support-icon"><i class="fas fa-question-circle"></i></div>
            <h4>Have a Question?</h4>
            <p>Can't find what you need? Our team is ready to assist you directly.</p>
            <a href="#contact" class="support-cta">Contact Support</a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SupportSection',
}
</script>

<style scoped>
.support-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
}
.support-item {
    background: var(--light-bg-color);
    border: 1px solid var(--border-color);
    padding: 30px;
    border-radius: 12px;
    text-align: left;
    display: flex;
    flex-direction: column;
}
.support-icon { font-size: 2rem; color: var(--secondary-color); margin-bottom: 20px; }
.support-item h4 { font-size: 1.3rem; margin: 0 0 10px 0; color: var(--primary-color); }
.support-item p { font-size: 1rem; color: var(--text-light); line-height: 1.6; margin: 0; flex-grow: 1; }
.support-cta {
    margin-top: 20px;
    font-weight: 600;
    color: var(--secondary-color);
    text-decoration: none;
    align-self: flex-start;
}
.support-cta:hover { text-decoration: underline; }
</style>