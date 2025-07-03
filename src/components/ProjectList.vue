<template>
  <section id="projects">
    <h2 class="section-title">Our Landmark Projects</h2>
    <p class="section-description">We have successfully implemented our integrated solutions in a diverse range of facilities.</p>
    <div class="projects-grid">
      <!-- Project 1 (Example) -->
      <div class="project-card">
        <img src="https://images.unsplash.com/photo-1519995451813-39e21b0e4295?q=80&w=2874&auto=format&fit=crop" alt="Corporate Headquarters">
        <div class="project-info">
          <h3>Corporate Headquarters</h3>
          <p>Full BMS, Security, and Network Integration</p>
        </div>
      </div>
      <!-- Project 2 (Example) -->
      <div class="project-card">
        <img src="https://images.unsplash.com/photo-1580974928064-f0ae4309ae5a?q=80&w=2787&auto=format&fit=crop" alt="SKD Factory">
        <div class="project-info">
          <h3>SKD Factory Automation</h3>
          <p>BMS Building Automation & Access Control</p>
        </div>
      </div>
      <!-- Project 3 (Example) -->
      <div class="project-card">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2938&auto=format&fit=crop" alt="Smart Residential Complex">
        <div class="project-info">
          <h3>Smart Residential Complex</h3>
          <p>Intercom, Surveillance, and Lighting Systems</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectList', // <-- Change this line
}
</script>

<style scoped>
#projects {
  padding: 80px 20px;
  background-color: var(--white-color);
  text-align: center;
}

.section-title, .section-description {
  /* Re-using styles from services for consistency */
  color: var(--primary-color);
  margin-left: auto;
  margin-right: auto;
}
.section-description {
  color: #666;
  margin-bottom: 50px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  cursor: pointer;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(10, 37, 64, 0.9), transparent);
  color: var(--white-color);
  padding: 40px 20px 20px 20px;
  transform: translateY(30%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.project-card:hover .project-info {
  transform: translateY(0);
  opacity: 1;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.5rem;
}

.project-info p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>