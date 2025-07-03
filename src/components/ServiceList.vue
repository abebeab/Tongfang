<template>
  <section id="services">
    <h2 class="section-title">Our Integrated Solutions</h2>
    <p class="section-description">We provide a comprehensive suite of services to create fully integrated and intelligent building ecosystems.</p>

    <div class="services-grid">
      <!-- Security & Surveillance -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-shield-alt"></i></div>
        <h3 class="service-title">Security & Surveillance</h3>
        <ul class="service-list">
          <li>Video Surveillance System</li>
          <li>Access Control & Speed Door System</li>
          <li>Intercom & Patrol System</li>
          <li>Electronic Fence & Anti-theft Alarm</li>
          <li>Parking Management System</li>
        </ul>
      </div>

      <!-- Building Automation & Control -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-cogs"></i></div>
        <h3 class="service-title">Building Automation</h3>
        <ul class="service-list">
          <li>BMS Building Automation System</li>
          <li>Intelligent Lighting System</li>
          <li>Building Control Equipment</li>
          <li>Mechanical & Electrical Installation</li>
          <li>Fire Alarm System</li>
        </ul>
      </div>

      <!-- Communication & Information -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-bullhorn"></i></div>
        <h3 class="service-title">Communication & Info</h3>
        <ul class="service-list">
          <li>Network Data System</li>
          <li>Information Dissemination</li>
          <li>Background Music System</li>
          <li>Conference System</li>
          <li>Queue Calling System</li>
          <li>Cable TV System</li>
        </ul>
      </div>

      <!-- Infrastructure & Specialized Systems -->
      <div class="service-card">
        <div class="service-icon"><i class="fas fa-building"></i></div>
        <h3 class="service-title">Infrastructure</h3>
        <ul class="service-list">
          <li>Integrated Wiring</li>
          <li>Computer Room & Static Floor</li>
          <li>Electronic Blackboard Installation</li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceList', // <-- Change this line
};
</script>

<style scoped>
/* You need to add Font Awesome to your project for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

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
  max-width: 700px;
  margin: 0 auto 50px auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background: var(--white-color);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.service-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}
</style>