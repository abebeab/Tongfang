<template>
  <section id="tongfang" class="section-container">
    <div class="tongfang-container">
      <div class="tongfang-content">
        <h2 class="section-title" style="text-align: left;">Pioneering Integrated Technology</h2>
        <p class="overview-text">
          TONGFANG is a leading system integration company, specializing in tailored technology solutions for government, business, and industry sectors.
        </p>
        <div class="mission-vision">
          <h4><i class="fas fa-bullseye"></i> Mission</h4>
          <p>Deliver cutting-edge integrated systems that enhance efficiency and productivity.</p>
          <h4><i class="fas fa-eye"></i> Vision</h4>
          <p>To be a global leader in smart technologies and digital transformation.</p>
        </div>
        <div class="values">
          <strong>Our Core Values:</strong> Innovation | Excellence | Partnership | Reliability | Integrity
        </div>
      </div>
      <div class="tongfang-stats">
        <div class="stat-item">
          <div class="stat-number">20+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">15+</div>
          <div class="stat-label">Global Markets</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">200+</div>
          <div class="stat-label">Dedicated Experts</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Integrated Projects</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TongfangSection',
}
</script>

<style scoped>
.section-container { background: var(--white-color); }
.tongfang-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
.overview-text { font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin: 20px 0 30px 0; }
.mission-vision h4 { font-size: 1.2rem; color: var(--primary-color); margin-top: 15px; margin-bottom: 5px; display: flex; align-items: center; gap: 10px; }
.mission-vision i { color: var(--secondary-color); }
.mission-vision p { color: var(--text-light); margin-top: 0; }
.values { margin-top: 30px; font-weight: 500; color: var(--primary-color); }
.tongfang-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
.stat-item { background: var(--light-bg-color); padding: 30px; text-align: center; border-radius: 12px; border: 1px solid var(--border-color); transition: all 0.3s ease; }
.stat-item:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.05); border-color: var(--secondary-color); }
.stat-number { font-size: 3rem; font-weight: 700; color: var(--secondary-color); }
.stat-label { font-size: 1rem; font-weight: 600; color: var(--text-dark); }
@media (max-width: 992px) { .tongfang-container { grid-template-columns: 1fr; gap: 50px; } .section-title { text-align: center !important; } }
@media (max-width: 576px) { .tongfang-stats { grid-template-columns: 1fr; } }
</style>