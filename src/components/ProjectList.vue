<template>
  <section id="projects">
    <h2 class="section-title">Our Landmark Projects</h2>
    <p class="section-description">We have successfully implemented our integrated solutions in a diverse range of high-profile facilities.</p>
    <div class="projects-grid">
      
      <div class="project-card">
      <img src="@/assets/sdk.jpg" alt="SKD Factory">
        <div class="project-info">
          <h3>SKD Factory Automation</h3>
          <p>BMS Building Automation & Access Control</p>
        </div>
      </div>
      
      <div class="project-card">
        <img src="@/assets/head.jpg" alt="Corporate Headquarters">

        <div class="project-info">
          <h3>Corporate Headquarters</h3>
          <p>Full BMS, Security, and Network Integration</p>
        </div>
      </div>
      
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
  name: 'ProjectList',
}
</script>

<style scoped>
#projects {
  padding: 80px 20px;
  background-color: var(--white-color);
  text-align: center;
}

.section-title {
  color: var(--primary-color);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 15px;
}

.section-description {
  color: #666;
  max-width: 700px;
  margin: 0 auto 50px auto;
  font-size: 1.1rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
  height: 400px;
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
  box-sizing: border-box;
  background: linear-gradient(to top, rgba(10, 37, 64, 0.95), transparent);
  color: var(--white-color);
  padding: 60px 30px 30px 30px;
  transform: translateY(30%);
  opacity: 0;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.project-card:hover .project-info {
  transform: translateY(0);
  opacity: 1;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-info h3 {
  margin: 0 0 10px 0;
  font-size: 1.6rem;
  font-weight: 600;
}

.project-info p {
  margin: 0;
  font-size: 1rem;
  opacity: 0.9;
}
</style>