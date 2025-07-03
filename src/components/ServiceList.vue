<template>
  <section id="services">
    <h2 class="section-title">Our Integrated Solutions</h2>
    <p class="section-description">We provide a comprehensive suite of services to create fully integrated and intelligent building ecosystems, from initial design to long-term management.</p>

    <div class="services-grid">

      <!-- NEW SERVICE: System Design & Consulting -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-pencil-ruler"></i>
        </div>
        <h3 class="service-title">System Design & Consulting</h3>
        <p class="card-description">Expert planning and strategy to ensure your building's systems are efficient, scalable, and future-proof from day one.</p>
        <a href="#contact" class="learn-more">Consult Our Experts →</a>
      </div>

      <!-- Security & Surveillance (Updated Style) -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="service-title">Security & Surveillance</h3>
        <p class="card-description">State-of-the-art solutions to protect your assets and ensure a secure environment for all occupants.</p>
        <a href="#contact" class="learn-more">Explore Security Solutions →</a>
      </div>

      <!-- Building Automation (Updated Style) -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-cogs"></i>
        </div>
        <h3 class="service-title">Building Automation</h3>
        <p class="card-description">Intelligent control of lighting, climate, and mechanical systems for optimal comfort and performance.</p>
        <a href="#contact" class="learn-more">Discover Automation →</a>
      </div>

      <!-- Communication & Info (Updated Style) -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-network-wired"></i>
        </div>
        <h3 class="service-title">Communication & Info</h3>
        <p class="card-description">Seamless integration of data networks, conference systems, and information displays for a connected workplace.</p>
        <a href="#contact" class="learn-more">View Communication Systems →</a>
      </div>

      <!-- Infrastructure (Updated Style) -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-building"></i>
        </div>
        <h3 class="service-title">Core Infrastructure</h3>
        <p class="card-description">The foundational wiring, computer rooms, and specialized installations that power your entire facility.</p>
        <a href="#contact" class="learn-more">See Infrastructure Services →</a>
      </div>

      <!-- NEW SERVICE: Energy Management -->
      <div class="service-card">
        <div class="service-icon-background">
          <i class="fas fa-bolt"></i>
        </div>
        <h3 class="service-title">Energy Management</h3>
        <p class="card-description">Advanced monitoring and automation to reduce energy consumption, lower operational costs, and promote sustainability.</p>
        <a href="#contact" class="learn-more">Learn About Energy Savings →</a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceList',
};
</script>

<style scoped>
#services {
  padding: 80px 20px;
  background-color: var(--light-gray);
  text-align: center;
}

.section-title {
  font-size: 2.8rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 15px;
}

.section-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto 60px auto;
  line-height: 1.7;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--white-color);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.07);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  border: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border-color: var(--secondary-color);
}

.service-icon-background {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #e6f7f5; /* Light teal background for the icon */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  transition: background-color 0.3s;
}

.service-card:hover .service-icon-background {
  background-color: var(--secondary-color);
}

.service-icon-background i {
  font-size: 2.2rem;
  color: var(--secondary-color);
  transition: color 0.3s;
}

.service-card:hover .service-icon-background i {
  color: var(--white-color);
}

.service-title {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  font-weight: 600;
}

.card-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  flex-grow: 1; /* Pushes the 'Learn More' link to the bottom */
  margin-bottom: 25px;
}

.learn-more {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s, transform 0.3s;
  opacity: 0;
  transform: translateY(10px);
}

.service-card:hover .learn-more {
  opacity: 1;
  transform: translateY(0);
}

.learn-more:hover {
  color: var(--secondary-color);
}

</style>