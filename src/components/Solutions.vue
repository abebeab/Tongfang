<template>
  <section id="solutions" class="section-container" style="background-color: var(--light-bg-color);">
    <h2 class="section-title">Integrated Solutions</h2>
    <p class="section-subtitle">
      From architectural design to technology implementation, we provide holistic solutions.
    </p>
    <div class="solutions-tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id" 
        :class="['tab-button', { 'active': activeTab === tab.id }]" 
        @click="activeTab = tab.id">
        {{ tab.name }}
      </button>
    </div>

    <div class="solutions-content">
      <!-- Industry-Based Solutions -->
      <div v-if="activeTab === 'industry'">
        <div class="solutions-grid">
          <div class="solution-card" v-for="industry in industries" :key="industry.name">
            <img :src="industry.image" :alt="industry.name" class="solution-card-image">
            <div class="solution-card-content">
              <h4><i :class="industry.icon"></i> {{ industry.name }}</h4>
              <p>{{ industry.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Technology Solutions -->
      <div v-if="activeTab === 'technology'">
        <div class="solutions-grid">
           <div class="solution-card" v-for="tech in technologies" :key="tech.name">
            <img :src="tech.image" :alt="tech.name" class="solution-card-image">
            <div class="solution-card-content">
              <h4><i :class="tech.icon"></i> {{ tech.name }}</h4>
              <p>{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- BMS Decoration -->
      <div v-if="activeTab === 'bms'">
        <div class="bms-decoration-section">
          <div class="bms-text">
            <h3>Building Management Systems (BMS)</h3>
            <p>Our BMS solutions are the central nervous system for your building, providing a unified platform to monitor, control, and optimize all of your building's systems. We focus on creating intuitive and powerful interfaces that are both aesthetically pleasing and highly functional.</p>
            <ul>
              <li><i class="fas fa-check-circle"></i> Centralized Control & Monitoring</li>
              <li><i class="fas fa-check-circle"></i> Energy Optimization</li>
              <li><i class="fas fa-check-circle"></i> Predictive Maintenance</li>
              <li><i class="fas fa-check-circle"></i> Customizable Dashboards</li>
            </ul>
          </div>
          <div class="bms-image">
            <img src="/path/to/your/bms-dashboard.jpg" alt="BMS Dashboard">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionsSection',
  data() {
    return {
      activeTab: 'industry',
      tabs: [
        { id: 'industry', name: 'Industry-Based' },
        { id: 'technology', name: 'Technology Solutions' },
        { id: 'bms', name: 'BMS Decoration' }
      ],
      industries: [
        { name: 'Offices', description: 'Smart office automation, access control, and energy management.', icon: 'fas fa-building', image: '/path/to/your/office-image.jpg' },
        { name: 'Schools', description: 'Campus-wide security, smart classrooms, and resource management.', icon: 'fas fa-school', image: '/path/to/your/school-image.jpg' },
        { name: 'Airports', description: 'Terminal automation, public address systems, and security integration.', icon: 'fas fa-plane-departure', image: '/path/to/your/airport-image.jpg' },
        { name: 'Hotels', description: 'Guest room automation, energy management, and integrated security.', icon: 'fas fa-hotel', image: '/path/to/your/hotel-image.jpg' },
        { name: 'Apartments', description: 'Smart home integration, security systems, and utility management.', icon: 'fas fa-city', image: '/path/to/your/apartment-image.jpg' },
        { name: 'Manufacturing', description: 'Industrial automation, supply chain robotics, and quality control systems.', icon: 'fas fa-industry', image: '/path/to/your/manufacturing-image.jpg' },
      ],
      technologies: [
        { name: 'ERP Integration', description: 'Seamless integration with your existing Enterprise Resource Planning systems.', icon: 'fas fa-cogs', image: '/path/to/your/erp-image.jpg' },
        { name: 'Data Center Solutions', description: 'Design and implementation of secure and efficient data centers.', icon: 'fas fa-server', image: '/path/to/your/datacenter-image.jpg' },
        { name: 'IoT & Smart Devices', description: 'Connecting and managing a network of smart devices for data collection and automation.', icon: 'fas fa-wifi', image: '/path/to/your/iot-image.jpg' },
      ]
    };
  }
}
</script>

<style scoped>
.solutions-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 20px;
}
.tab-button {
  padding: 12px 25px;
  font-size: 1.1rem;
  font-weight: 600;
  border: 2px solid var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.tab-button.active, .tab-button:hover {
  background-color: var(--primary-color);
  color: var(--white-color);
}
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.solution-card {
  background: var(--white-color);
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.05);
  overflow: hidden;
  transition: transform 0.3s ease;
}
.solution-card:hover {
  transform: translateY(-5px);
}
.solution-card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.solution-card-content {
  padding: 25px;
}
.solution-card h4 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
  display: flex;
  align-items: center;
  gap: 10px;
}
.solution-card h4 i {
  color: var(--secondary-color);
}
.solution-card p {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
}
.bms-decoration-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.bms-image img {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}
.bms-text h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}
.bms-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 30px;
}
.bms-text ul {
  list-style: none;
  padding: 0;
}
.bms-text li {
  font-size: 1.1rem;
  color: var(--text-dark);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.bms-text li i {
  color: var(--secondary-color);
  font-size: 1.4rem;
}
@media (max-width: 992px) {
  .bms-decoration-section {
    grid-template-columns: 1fr;
  }
}
</style> 