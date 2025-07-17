<template>
  <section id="solutions" class="section-container" style="background-color: var(--light-bg-color);">
    <h2 class="section-title">Industry-Based Solutions</h2>
    <p class="section-subtitle">
      We leverage our deep expertise to build scalable, custom solutions that address the unique challenges of your industry.
    </p>
    <div class="solutions-container">
        <!-- Industry Card -->
        <div class="industry-card">
          <div class="industry-icon"><i class="fas fa-graduation-cap"></i></div>
          <h3 class="industry-title">Education</h3>
          <p class="industry-description">Smart Classrooms, eLearning Platforms, Campus-wide Security.</p>
        </div>
        <!-- Industry Card -->
        <div class="industry-card">
          <div class="industry-icon"><i class="fas fa-heartbeat"></i></div>
          <h3 class="industry-title">Healthcare</h3>
          <p class="industry-description">Patient Monitoring, Medical IT Systems, Secure Data Management.</p>
        </div>
        <!-- Industry Card -->
        <div class="industry-card">
          <div class="industry-icon"><i class="fas fa-landmark"></i></div>
          <h3 class="industry-title">Government</h3>
          <p class="industry-description">Secure Document Management, Public Surveillance, Smart City Infrastructure.</p>
        </div>
        <!-- Industry Card -->
        <div class="industry-card">
          <div class="industry-icon"><i class="fas fa-industry"></i></div>
          <h3 class="industry-title">Manufacturing</h3>
          <p class="industry-description">Industrial Automation, Supply Chain Robotics, Quality Control Vision Systems.</p>
        </div>
        <!-- Industry Card -->
        <div class="industry-card">
          <div class="industry-icon"><i class="fas fa-shopping-cart"></i></div>
          <h3 class="industry-title">Retail</h3>
          <p class="industry-description">POS Systems, Inventory Integration, Smart Shelf & Checkout Solutions.</p>
        </div>
        <!-- Capabilities Card -->
        <div class="capabilities-card">
          <h3 class="capabilities-title">Our Key Capabilities</h3>
          <ul>
            <li>🔹 End-to-End Solution Design</li>
            <li>🔹 Agile & Scalable Deployment</li>
            <li>🔹 Custom APIs & Middleware</li>
            <li>🔹 Future-Proof Scalability</li>
          </ul>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionsSection',
}
</script>

<style scoped>
.solutions-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
.industry-card {
  background: var(--white-color);
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease-in-out;
}
.industry-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}
.industry-icon { font-size: 3rem; color: var(--secondary-color); margin-bottom: 20px; }
.industry-title { font-size: 1.5rem; font-weight: 600; color: var(--primary-color); margin-bottom: 15px; }
.industry-description { font-size: 1rem; color: var(--text-light); line-height: 1.6; }
.capabilities-card {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 40px;
    border-radius: 12px;
    grid-column: span 1; /* Default span */
}
.capabilities-title { font-size: 1.5rem; color: var(--white-color); margin-bottom: 25px; }
.capabilities-card ul { list-style: none; padding: 0; margin: 0; }
.capabilities-card li { margin-bottom: 15px; font-size: 1.1rem; color: rgba(255,255,255,0.9); }
/* Make capabilities card span full width on certain layouts */
@media (min-width: 1024px) {
    .capabilities-card {
        grid-column: span 2; /* Spans two columns */
        text-align: center;
    }
    .capabilities-card ul {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 20px 40px;
        justify-content: center;
    }
}
</style>