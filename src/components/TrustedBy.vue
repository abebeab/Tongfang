<template>
  <div class="trusted-by-section">
    <div class="trusted-by-container">
      <h3 class="trusted-by-title">Trusted By Industry Leaders and Government Agencies</h3>
      <div class="logos-container">
        <!-- Using Font Awesome icons as placeholders. Replace with <img> tags for real logos -->
        <i class="fas fa-building logo-placeholder" title="Commercial Real Estate"></i>
        <i class="fas fa-university logo-placeholder" title="Educational Institutions"></i>
        <i class="fas fa-hospital-alt logo-placeholder" title="Healthcare Facilities"></i>
        <i class="fas fa-industry logo-placeholder" title="Industrial Manufacturing"></i>
        <i class="fas fa-shield-alt logo-placeholder" title="Government & Security"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrustedBy',
}
</script>

<style scoped>
.trusted-by-section { background-color: var(--light-bg-color); padding: 40px 20px; border-bottom: 1px solid var(--border-color); }
.trusted-by-container { max-width: 1200px; margin: 0 auto; text-align: center; }
.trusted-by-title { font-size: 1rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
.logos-container { display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 40px; }
.logo-placeholder { font-size: 40px; color: #A0AEC0; transition: color 0.3s ease; }
.logo-placeholder:hover { color: var(--secondary-color); }
</style>