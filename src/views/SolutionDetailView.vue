<template>
  <div class="solution-detail">
    <!-- Back Button -->
    <div class="back-button-wrapper">
      <router-link to="/solutions" class="back-button">
        ← Back to Solutions
      </router-link>
    </div>

    <!-- Smart Hotel Hero Section -->
    <section v-if="solution?.slug === 'smart-hotel-design'" class="hotel-hero">
      <div class="hero-image-wrapper">
        <img :src="solution.hero.image" alt="Smart Hotel Hero Image" class="hero-image" />
      </div>
      <div class="hotel-hero-content">
        <h1>{{ solution.hero.title }}</h1>
        <p class="subtitle">{{ solution.hero.subtitle }}</p>
        <div class="feature-highlights">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h4>AI Security</h4>
            <p>Facial recognition access and intelligent threat detection</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-door-open"></i>
            </div>
            <h4>Smart Rooms</h4>
            <p>Automated lighting, climate control, and guest preferences</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-concierge-bell"></i>
            </div>
            <h4>Guest Experience</h4>
            <p>Personalized services and interactive amenities</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h4>Energy Management</h4>
            <p>Smart climate control and automated resource optimization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Smart Healthcare Hero Section -->
    <section v-else-if="solution?.slug === 'smart-healthcare'" class="healthcare-hero">
      <div class="hero-image-wrapper">
        <img :src="solution.hero.image" alt="Smart Healthcare Hero Image" class="hero-image" />
      </div>
      <div class="healthcare-hero-content">
        <h1>{{ solution.hero.title }}</h1>
        <p class="subtitle">{{ solution.hero.subtitle }}</p>
        <div class="feature-highlights">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-parking"></i>
            </div>
            <h4>Smart Parking</h4>
            <p>99.5% recognition rate with reverse vehicle search and multi-level guidance</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-id-card-alt"></i>
            </div>
            <h4>Access Control</h4>
            <p>Multi-mode authentication with thermal screening and tiered authorization</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h4>Cafeteria Management</h4>
            <p>Multi-payment integration, online ordering, and batch operations</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-map-signs"></i>
            </div>
            <h4>Patient Navigation</h4>
            <p>Real-time indoor guidance with HIS integration and AR navigation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Stadium Hero Section with Image ABOVE Title -->
    <section v-else-if="solution?.slug === 'stadiums-and-arenas'" class="stadium-hero">
      <div class="hero-image-wrapper">
        <img :src="solution.hero.image" alt="Stadium Hero Image" class="hero-image" />
      </div>
      <div class="stadium-hero-content">
        <h1>{{ solution.hero.title }}</h1>
        <p class="subtitle">{{ solution.hero.subtitle }}</p>
        <div class="feature-highlights">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-video"></i>
            </div>
            <h4>Smart Surveillance</h4>
            <p>AI-powered video analytics with real-time monitoring</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-ticket-alt"></i>
            </div>
            <h4>Digital Ticketing</h4>
            <p>Seamless entry with QR codes and mobile integration</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <h4>Energy Management</h4>
            <p>Real-time monitoring and optimization</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-wifi"></i>
            </div>
            <h4>Connectivity</h4>
            <p>High-density wireless for thousands of users</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Smart Public Toilet Hero Section -->
    <section v-else-if="solution?.slug === 'smart-public-toilet-solution'" class="toilet-hero">
      <div class="hero-image-wrapper">
        <img :src="solution.hero.image" alt="Smart Public Toilet Hero Image" class="hero-image" />
      </div>
      <div class="toilet-hero-content">
        <h1>{{ solution.hero.title }}</h1>
        <p class="subtitle">{{ solution.hero.subtitle }}</p>
        <div class="feature-highlights">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-wind"></i>
            </div>
            <h4>Air Quality Monitoring</h4>
            <p>Real-time detection of gases and environmental parameters</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-users"></i>
            </div>
            <h4>Occupancy Tracking</h4>
            <p>Smart sensors for real-time stall availability and foot traffic</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-broom"></i>
            </div>
            <h4>Cleaning Management</h4>
            <p>Automated performance tracking and optimization</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h4>Security & Safety</h4>
            <p>Facial recognition and emergency response systems</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Standard Hero Section for other solutions -->
    <section v-else-if="solution" class="hero-section">
      <div class="hero-image-wrapper">
        <img :src="solution.hero.image" alt="Hero Image" class="hero-image" />
        <div class="hero-text">
          <h1>{{ solution.hero.title }}</h1>
          <p>{{ solution.hero.subtitle }}</p>
        </div>
      </div>
    </section>

    <!-- System Architecture for Hotels -->
    <section v-if="solution?.slug === 'smart-hotel-design'" class="system-architecture">
      <div class="page-container">
        <h2><i class="fas fa-sitemap"></i> Integrated Hotel Management Architecture</h2>
        <p>Our comprehensive smart hotel solution integrates multiple operational systems into a unified management platform:</p>
        <div class="architecture-grid">
          <div class="architecture-item">
            <i class="fas fa-shield-alt"></i>
            <h4>Security Systems</h4>
            <p>AI surveillance, access control, and emergency response</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-home"></i>
            <h4>Guest Room Automation</h4>
            <p>Smart controls, lighting, climate, and entertainment</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-users"></i>
            <h4>Conference Facilities</h4>
            <p>Audio-visual systems and smart meeting spaces</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-cogs"></i>
            <h4>Operations Management</h4>
            <p>PMS integration and staff efficiency tools</p>
          </div>
        </div>
      </div>
    </section>

    <!-- System Architecture for Healthcare -->
    <section v-else-if="solution?.slug === 'smart-healthcare'" class="system-architecture">
      <div class="page-container">
        <h2><i class="fas fa-sitemap"></i> Integrated Hospital Management Architecture</h2>
        <p>Our comprehensive smart hospital solution integrates multiple operational systems into a unified management platform:</p>
        <div class="architecture-grid">
          <div class="architecture-item">
            <i class="fas fa-car"></i>
            <h4>Vehicle Management</h4>
            <p>Parking guidance, license plate recognition, reverse vehicle search</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-shield-alt"></i>
            <h4>Access Control</h4>
            <p>Facial recognition, temperature screening, elevator control</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-credit-card"></i>
            <h4>Consumption Systems</h4>
            <p>Cafeteria management, multi-account, online ordering</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-map-marked-alt"></i>
            <h4>Patient Navigation</h4>
            <p>Indoor guidance, HIS integration, AR navigation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- System Architecture for Stadiums -->
    <section v-else-if="solution?.slug === 'stadiums-and-arenas'" class="system-architecture">
      <div class="page-container">
        <h2><i class="fas fa-sitemap"></i> Integrated System Architecture</h2>
        <p>Our comprehensive stadium solution integrates multiple subsystems into a unified management platform:</p>
        <div class="architecture-grid">
          <div class="architecture-item">
            <i class="fas fa-shield-alt"></i>
            <h4>Security Systems</h4>
            <p>CCTV, Access Control, Intrusion Detection</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-network-wired"></i>
            <h4>Infrastructure</h4>
            <p>Networking, Cabling, Communications</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-broadcast-tower"></i>
            <h4>Audio-Visual</h4>
            <p>Sound, Displays, Broadcast Systems</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-tachometer-alt"></i>
            <h4>Building Management</h4>
            <p>HVAC, Lighting, Energy Control</p>
          </div>
        </div>
      </div>
    </section>

    <!-- System Architecture for Smart Public Toilets -->
    <section v-else-if="solution?.slug === 'smart-public-toilet-solution'" class="system-architecture">
      <div class="page-container">
        <h2><i class="fas fa-sitemap"></i> Integrated System Architecture</h2>
        <p>Our comprehensive smart public toilet solution integrates multiple subsystems into a unified management platform:</p>
        <div class="architecture-grid">
          <div class="architecture-item">
            <i class="fas fa-temperature-low"></i>
            <h4>Environmental Monitoring</h4>
            <p>Air quality, temperature, humidity, and equipment status</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-user-friends"></i>
            <h4>Visitor Management</h4>
            <p>Occupancy tracking, foot traffic, and demographic analysis</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-broom"></i>
            <h4>Cleaning Operations</h4>
            <p>Staff tracking, performance monitoring, quality control</p>
          </div>
          <div class="architecture-item">
            <i class="fas fa-chart-line"></i>
            <h4>Data Analytics</h4>
            <p>Performance analysis, predictive maintenance, optimization</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="intro-section" v-if="solution && solution.introduction">
      <div class="page-container">
        <h2><i class="fas fa-lightbulb"></i> Introduction</h2>
        <p>{{ solution.introduction }}</p>
      </div>
    </section>

    <!-- Description -->
    <section class="description-section" v-if="solution && solution.fullDescription">
      <div class="page-container">
        <h2><i class="fas fa-info-circle"></i> Solution Overview</h2>
        <p>{{ solution.fullDescription }}</p>
      </div>
    </section>

    <!-- Modules with Accordion -->
    <section class="modules-section" v-if="solution && solution.modules">
      <div class="page-container">
        <h2><i class="fas fa-layer-group"></i> System Components</h2>
        <div
          v-for="(module, index) in solution.modules"
          :key="module.title"
          class="module-card"
        >
          <div class="module-header" @click="toggleModule(index)">
            <h3>
              <i class="fas fa-cube"></i> {{ module.title }}
            </h3>
            <i
              :class="[
                'fas transition-transform duration-300',
                activeModule === index ? 'fa-chevron-up' : 'fa-chevron-down'
              ]"
            ></i>
          </div>
          <transition name="collapse">
            <div v-show="activeModule === index" class="module-body">
              <img
                v-if="module.image"
                :src="module.image"
                :alt="module.title"
                class="module-image"
              />
              <ul class="styled-list">
                <li v-for="detail in module.details" :key="detail" v-html="detail"></li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="benefits-section" v-if="solution && solution.benefits">
      <div class="page-container">
        <h2><i class="fas fa-star"></i> Key Benefits</h2>
        <div class="benefits-grid">
          <div v-for="benefit in solution.benefits" :key="benefit" class="benefit-card">
            <i class="fas fa-check-circle"></i>
            <p>{{ benefit }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Highlights -->
    <section class="tech-section" v-if="solution && solution.technicalHighlights">
      <div class="page-container">
        <h2><i class="fas fa-microchip"></i> Technical Features</h2>
        <div class="tech-grid">
          <div
            v-for="highlight in solution.technicalHighlights"
            :key="highlight"
            class="tech-card"
          >
            <i class="fas fa-bolt"></i>
            <p>{{ highlight }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotel Case Studies -->
    <section v-if="solution?.slug === 'smart-hotel-design'" class="hotel-case-studies">
      <div class="page-container">
        <h2><i class="fas fa-hotel"></i> Hotel Implementation Success</h2>
        <div class="hotel-case-grid">
          <div class="hotel-case-card">
            <div class="hotel-case-image-placeholder">
              <i class="fas fa-building"></i>
              <span>Luxury Resort</span>
            </div>
            <div class="hotel-case-content">
              <h4>Five-Star Coastal Resort</h4>
              <p>Implemented comprehensive smart room automation, AI security, and energy management systems across 300 guest rooms and conference facilities, resulting in 30% energy savings and 45% improvement in guest satisfaction scores.</p>
            </div>
          </div>
          <div class="hotel-case-card">
            <div class="hotel-case-image-placeholder">
              <i class="fas fa-city"></i>
              <span>Business Hotel</span>
            </div>
            <div class="hotel-case-content">
              <h4>Downtown Business Hotel</h4>
              <p>Deployed facial recognition access, smart conference systems, and integrated property management, reducing check-in times by 70% and increasing conference booking revenue by 25% through premium smart facilities.</p>
            </div>
          </div>
          <div class="hotel-case-card">
            <div class="hotel-case-image-placeholder">
              <i class="fas fa-spa"></i>
              <span>Boutique Hotel</span>
            </div>
            <div class="hotel-case-content">
              <h4>Luxury Boutique Hotel</h4>
              <p>Integrated aromatherapy systems, mirror TVs, and personalized room controls across 80 suites, achieving 95% guest retention rate and establishing industry leadership in smart hospitality experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hotel Room Control Demo -->
    <section v-if="solution?.slug === 'smart-hotel-design'" class="room-control-demo">
      <div class="page-container">
        <h2><i class="fas fa-magic"></i> Smart Room Control Experience</h2>
        <div class="demo-grid">
          <div class="demo-card">
            <div class="demo-icon">
              <i class="fas fa-door-open"></i>
            </div>
            <h4>Welcome Mode</h4>
            <p>Automatic lighting and climate control activation upon guest entry</p>
          </div>
          <div class="demo-card">
            <div class="demo-icon">
              <i class="fas fa-bed"></i>
            </div>
            <h4>Sleep Mode</h4>
            <p>Automated temperature adjustment and lighting optimization for restful sleep</p>
          </div>
          <div class="demo-card">
            <div class="demo-icon">
              <i class="fas fa-bath"></i>
            </div>
            <h4>Bathroom Intelligence</h4>
            <p>Motion-activated lighting, exhaust fans, and emergency SOS features</p>
          </div>
          <div class="demo-card">
            <div class="demo-icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h4>Energy Saving</h4>
            <p>Automated shutdown of vacant room systems and optimized resource usage</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conference Facilities Showcase -->
    <section v-if="solution?.slug === 'smart-hotel-design'" class="conference-showcase">
      <div class="page-container">
        <h2><i class="fas fa-video"></i> Advanced Conference Facilities</h2>
        <div class="conference-grid">
          <div class="conference-item">
            <h4>Banquet Hall (475m²)</h4>
            <ul>
              <li>30m² LED Video Wall</li>
              <li>Professional Audio System (103dB+)</li>
              <li>Stage Lighting & Mechanics</li>
              <li>Smart Central Control</li>
            </ul>
          </div>
          <div class="conference-item">
            <h4>Meeting Rooms</h4>
            <ul>
              <li>Grand Auditorium (142m²)</li>
              <li>Medium Conference (91m²)</li>
              <li>Executive Boardrooms</li>
              <li>Small Discussion Rooms</li>
            </ul>
          </div>
          <div class="conference-item">
            <h4>Technical Features</h4>
            <ul>
              <li>Video Conferencing</li>
              <li>Simultaneous Interpretation</li>
              <li>Camera Tracking Systems</li>
              <li>Wireless Microphones</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Healthcare Case Studies -->
    <section v-else-if="solution?.slug === 'smart-healthcare'" class="healthcare-case-studies">
      <div class="page-container">
        <h2><i class="fas fa-hospital"></i> Hospital Implementation Success</h2>
        <div class="healthcare-case-grid">
          <div class="healthcare-case-card">
            <div class="healthcare-case-image-placeholder">
              <i class="fas fa-building"></i>
              <span>Provincial Hospital</span>
            </div>
            <div class="healthcare-case-content">
              <h4>Guangdong Provincial Second People's Hospital</h4>
              <p>Implemented AI-powered medical big data platform with instant disease retrieval and automated surgical supply delivery systems</p>
            </div>
          </div>
          <div class="healthcare-case-card">
            <div class="healthcare-case-image-placeholder">
              <i class="fas fa-user-md"></i>
              <span>University Hospital</span>
            </div>
            <div class="healthcare-case-content">
              <h4>First Affiliated Hospital of Wenzhou Medical University</h4>
              <p>Deployed operating room self-service changing systems with 822 smart lockers and mobile clinic systems for remote consultations</p>
            </div>
          </div>
          <div class="healthcare-case-card">
            <div class="healthcare-case-image-placeholder">
              <i class="fas fa-robot"></i>
              <span>Medical Center</span>
            </div>
            <div class="healthcare-case-content">
              <h4>Renji Hospital Shanghai</h4>
              <p>Integrated Timi robots for radiation-free patient rounds and WeChat-based comprehensive medical process guidance</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies for Stadiums -->
    <section v-else-if="solution?.slug === 'stadiums-and-arenas'" class="case-studies">
      <div class="page-container">
        <h2><i class="fas fa-trophy"></i> Stadium Implementation Success</h2>
        <div class="case-grid">
          <div class="case-card">
            <div class="case-image-placeholder">
              <i class="fas fa-stadium"></i>
              <span>National Sports Center</span>
            </div>
            <div class="case-content">
              <h4>National Sports Center</h4>
              <p>50,000-seat stadium with integrated security, ticketing, and building management systems</p>
            </div>
          </div>
          <div class="case-card">
            <div class="case-image-placeholder">
              <i class="fas fa-music"></i>
              <span>Multi-purpose Arena</span>
            </div>
            <div class="case-content">
              <h4>City Multi-purpose Arena</h4>
              <p>Advanced audio-visual systems and crowd management for concerts and sports events</p>
            </div>
          </div>
          <div class="case-card">
            <div class="case-image-placeholder">
              <i class="fas fa-university"></i>
              <span>University Complex</span>
            </div>
            <div class="case-content">
              <h4>University Athletic Complex</h4>
              <p>Comprehensive venue management with energy optimization and security integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies for Smart Public Toilets -->
    <section v-else-if="solution?.slug === 'smart-public-toilet-solution'" class="toilet-case-studies">
      <div class="page-container">
        <h2><i class="fas fa-chart-bar"></i> Implementation Success Stories</h2>
        <div class="toilet-case-grid">
          <div class="toilet-case-card">
            <div class="toilet-case-image-placeholder">
              <i class="fas fa-city"></i>
              <span>Urban District Deployment</span>
            </div>
            <div class="toilet-case-content">
              <h4>Wuhou District Smart Facilities</h4>
              <p>Comprehensive deployment across 15 public restrooms with integrated environmental monitoring, cleaning management, and emergency response systems</p>
            </div>
          </div>
          <div class="toilet-case-card">
            <div class="toilet-case-image-placeholder">
              <i class="fas fa-shield-alt"></i>
              <span>Security Integration</span>
            </div>
            <div class="toilet-case-content">
              <h4>Public Safety Enhancement</h4>
              <p>Facial recognition system successfully identified multiple high-risk individuals, enhancing public safety in municipal facilities</p>
            </div>
          </div>
          <div class="toilet-case-card">
            <div class="toilet-case-image-placeholder">
              <i class="fas fa-leaf"></i>
              <span>Environmental Optimization</span>
            </div>
            <div class="toilet-case-content">
              <h4>Air Quality Improvement</h4>
              <p>30% reduction in complaint rates through real-time air quality monitoring and automated ventilation control systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import ApiService from "@/services/api";

export default {
  name: "SolutionDetailView",
  setup() {
    const route = useRoute();
    const solution = ref(null);
    const activeModule = ref(null);

    const loadSolution = async () => {
      const slug = route.params.slug;
      solution.value = await ApiService.findSolutionBySlug(slug);

      // Add placeholder image if modules don't have one
      solution.value?.modules?.forEach((mod) => {
        if (!mod.image) mod.image = "/images/test.jpg";
      });
    };

    const toggleModule = (index) => {
      activeModule.value = activeModule.value === index ? null : index;
    };

    onMounted(() => loadSolution());

    return { solution, activeModule, toggleModule };
  },
};
</script>

<style scoped>
:root {
  --primary-color: #0d244f;
  --secondary-color: #ff8c00;
  --white-color: #ffffff;
  --text-dark: #333333;
  --text-light: #666666;
  --border-color: #e0e0e0;
  --light-bg-color: #f8f9fa;
  --shadow-color: rgba(0, 0, 0, 0.1);
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.solution-detail {
  padding: 80px 0 40px;
  font-family: 'Inter', sans-serif;
  color: #1f2937;
}

/* Back Button */
.back-button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.back-button {
  background: linear-gradient(135deg, #4f46e5, #3b82f6);
  color: white;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}
.back-button:hover {
  background: linear-gradient(135deg, #4338ca, #2563eb);
  transform: scale(1.05);
}

/* Smart Hotel Hero Section */
.hotel-hero {
  position: relative;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.hotel-hero .hero-image-wrapper {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
}

.hotel-hero .hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.hotel-hero .hero-image-wrapper:hover .hero-image {
  transform: scale(1.03);
}

.hotel-hero-content {
  background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
  border-radius: 0 0 16px 16px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.hotel-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hotel-hero-content .subtitle {
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto 50px;
  font-weight: 500;
  line-height: 1.6;
}

/* Smart Healthcare Hero Section */
.healthcare-hero {
  position: relative;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.healthcare-hero .hero-image-wrapper {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
}

.healthcare-hero .hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.healthcare-hero .hero-image-wrapper:hover .hero-image {
  transform: scale(1.03);
}

.healthcare-hero-content {
  background: linear-gradient(135deg, #198754 0%, #0f5132 100%);
  border-radius: 0 0 16px 16px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.healthcare-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #20c997, #0dcaf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.healthcare-hero-content .subtitle {
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto 50px;
  font-weight: 500;
  line-height: 1.6;
}

/* Special Stadium Hero Section with Image ABOVE Title */
.stadium-hero {
  position: relative;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.stadium-hero .hero-image-wrapper {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
}

.stadium-hero .hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.stadium-hero .hero-image-wrapper:hover .hero-image {
  transform: scale(1.03);
}

.stadium-hero-content {
  background: linear-gradient(135deg, #0d244f 0%, #1e3a8a 100%);
  border-radius: 0 0 16px 16px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.stadium-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff8c00, #ffaa33);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.stadium-hero-content .subtitle {
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto 50px;
  font-weight: 500;
  line-height: 1.6;
}

/* Smart Public Toilet Hero Section */
.toilet-hero {
  position: relative;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

.toilet-hero .hero-image-wrapper {
  position: relative;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  margin-bottom: 0;
}

.toilet-hero .hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.toilet-hero .hero-image-wrapper:hover .hero-image {
  transform: scale(1.03);
}

.toilet-hero-content {
  background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
  border-radius: 0 0 16px 16px;
  padding: 60px 40px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.toilet-hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #20c997, #0dcaf0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.toilet-hero-content .subtitle {
  font-size: 1.4rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto 50px;
  font-weight: 500;
  line-height: 1.6;
}

/* Feature highlights */
.feature-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin: 40px 0;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 30px 25px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.feature-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.4);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hotel-hero .feature-icon {
  color: #FFD700;
}

.healthcare-hero .feature-icon {
  color: #20c997;
}

.stadium-hero .feature-icon {
  color: #ff8c00;
}

.toilet-hero .feature-icon {
  color: #20c997;
}

.feature-card h4 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 600;
}

.feature-card p {
  opacity: 0.9;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* System architecture visualization */
.system-architecture {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 60px 0;
  margin: 40px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.architecture-item {
  background: white;
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: all 0.3s ease;
  border-left: 4px solid var(--secondary-color);
}

.architecture-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.architecture-item i {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

.architecture-item h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 600;
}

.architecture-item p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Standard Hero Section */
.hero-section {
  position: relative;
  margin-bottom: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.hero-image-wrapper {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}
.hero-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.hero-image-wrapper:hover .hero-image {
  transform: scale(1.05);
}
.hero-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-shadow: 0 0 12px rgba(0, 0, 0, 0.7);
}
.hero-text h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 8px;
}
.hero-text p {
  font-size: 1.25rem;
  font-weight: 500;
}

/* Content Sections */
.intro-section,
.description-section,
.modules-section,
.benefits-section,
.tech-section,
.case-studies,
.toilet-case-studies,
.healthcare-case-studies,
.hotel-case-studies,
.room-control-demo,
.conference-showcase {
  padding: 60px 0;
}

.intro-section,
.description-section,
.tech-section {
  background: var(--white-color);
}

.modules-section,
.benefits-section {
  background: var(--light-bg-color);
}

.case-studies {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.toilet-case-studies {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 60px 0;
  margin: 40px 0;
}

.healthcare-case-studies {
  background: linear-gradient(135deg, #d1edff 0%, #a8d8ff 100%);
  border-radius: 12px;
  padding: 60px 0;
  margin: 40px 0;
}

.hotel-case-studies {
  background: linear-gradient(135deg, #FFF8DC 0%, #FFEBCD 100%);
  border-radius: 12px;
  padding: 60px 0;
  margin: 40px 0;
}

.room-control-demo {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 60px 0;
  margin: 40px 0;
}

.conference-showcase {
  background: white;
  padding: 60px 0;
}

/* Section Headings */
h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  gap: 12px;
}

h2 i {
  color: var(--secondary-color);
}

/* Module Cards */
.module-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: var(--white-color);
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.module-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}
.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 22px 25px;
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(90deg, #4f46e5 0%, #3b82f6 100%);
  border-bottom: 1px solid #e5e7eb;
  border-radius: 12px 12px 0 0;
}
.module-header h3 {
  display: flex;
  align-items: center;
  gap: 12px;
}
.module-body {
  padding: 25px;
  border-top: 1px solid #e5e7eb;
  background: #f9fafb;
  animation: fadeIn 0.5s ease;
}
.module-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  max-height: 400px;
}

/* Styled list */
.styled-list {
  list-style: none;
  padding-left: 0;
}
.styled-list li {
  margin-bottom: 15px;
  display: flex;
  align-items: flex-start;
  font-size: 16px;
  line-height: 1.7;
  color: #374151;
}

/* Benefits Section */
.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}
.benefit-card {
  background: linear-gradient(135deg, #e0f2fe, #bae6fd);
  border-radius: 12px;
  padding: 30px 25px;
  text-align: center;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #0ea5e9;
}
.benefit-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.benefit-card i {
  font-size: 2.2rem;
  color: #0ea5e9;
  margin-bottom: 15px;
}
.benefit-card p {
  font-size: 16px;
  line-height: 1.6;
}

/* Technical Highlights */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 30px;
}
.tech-card {
  background: linear-gradient(135deg, #fef9c3, #fde68a);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #facc15;
}
.tech-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.tech-card i {
  font-size: 2.2rem;
  color: #facc15;
  margin-bottom: 15px;
}
.tech-card p {
  font-size: 16px;
  line-height: 1.6;
}

/* Hotel Case studies section */
.hotel-case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.hotel-case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.hotel-case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.hotel-case-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 10px;
}

.hotel-case-image-placeholder i {
  font-size: 3rem;
  opacity: 0.9;
}

.hotel-case-content {
  padding: 25px;
}

.hotel-case-content h4 {
  color: var(--primary-color);
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

.hotel-case-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Room Control Demo */
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.demo-card {
  background: white;
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
  border-left: 4px solid #D2691E;
}

.demo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.demo-icon {
  font-size: 2.5rem;
  color: #D2691E;
  margin-bottom: 20px;
}

.demo-card h4 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.2rem;
  font-weight: 600;
}

.demo-card p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Conference Showcase */
.conference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.conference-item {
  background: #f8f9fa;
  padding: 30px 25px;
  border-radius: 12px;
  border-left: 4px solid #8B4513;
}

.conference-item h4 {
  color: var(--primary-color);
  margin-bottom: 20px;
  font-size: 1.3rem;
  font-weight: 600;
}

.conference-item ul {
  list-style: none;
  padding-left: 0;
}

.conference-item li {
  padding: 8px 0;
  border-bottom: 1px solid #e9ecef;
  color: var(--text-light);
}

.conference-item li:last-child {
  border-bottom: none;
}

/* Healthcare Case studies section */
.healthcare-case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.healthcare-case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.healthcare-case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.healthcare-case-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #198754 0%, #0f5132 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 10px;
}

.healthcare-case-image-placeholder i {
  font-size: 3rem;
  opacity: 0.9;
}

.healthcare-case-content {
  padding: 25px;
}

.healthcare-case-content h4 {
  color: var(--primary-color);
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

.healthcare-case-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Case studies section */
.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.case-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 10px;
}

.case-image-placeholder i {
  font-size: 3rem;
  opacity: 0.9;
}

.case-content {
  padding: 25px;
}

.case-content h4 {
  color: var(--primary-color);
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

.case-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Smart Public Toilet Case Studies */
.toilet-case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.toilet-case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.toilet-case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
}

.toilet-case-image-placeholder {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #20c997 0%, #0dcaf0 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  gap: 10px;
}

.toilet-case-image-placeholder i {
  font-size: 3rem;
  opacity: 0.9;
}

.toilet-case-content {
  padding: 25px;
}

.toilet-case-content h4 {
  color: var(--primary-color);
  margin-bottom: 12px;
  font-size: 1.3rem;
  font-weight: 700;
}

.toilet-case-content p {
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}

/* Fade-in animation */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Collapse transition */
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}

.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hotel-hero-content h1,
  .healthcare-hero-content h1,
  .stadium-hero-content h1,
  .toilet-hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hotel-hero .hero-image,
  .healthcare-hero .hero-image,
  .stadium-hero .hero-image,
  .toilet-hero .hero-image {
    height: 300px;
  }
  
  .hotel-hero-content,
  .healthcare-hero-content,
  .stadium-hero-content,
  .toilet-hero-content {
    padding: 40px 20px;
  }
  
  .feature-highlights {
    grid-template-columns: 1fr;
  }
  
  .architecture-grid {
    grid-template-columns: 1fr;
  }
  
  .hotel-case-grid,
  .healthcare-case-grid,
  .case-grid,
  .toilet-case-grid,
  .demo-grid,
  .conference-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-text h1 {
    font-size: 2rem;
  }
  
  .hero-text p {
    font-size: 1.1rem;
  }
  
  h2 {
    font-size: 1.8rem;
  }
  
  .benefits-grid,
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .module-header {
    padding: 18px 20px;
  }
  
  .hero-section,
  .hotel-hero,
  .healthcare-hero,
  .stadium-hero,
  .toilet-hero {
    padding: 0 15px;
  }
  
  .hotel-hero-content .subtitle,
  .healthcare-hero-content .subtitle,
  .stadium-hero-content .subtitle,
  .toilet-hero-content .subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .solution-detail {
    padding: 60px 0 20px;
  }
  
  .hotel-hero,
  .healthcare-hero,
  .stadium-hero,
  .toilet-hero {
    padding: 0 10px;
  }
  
  .hotel-hero-content h1,
  .healthcare-hero-content h1,
  .stadium-hero-content h1,
  .toilet-hero-content h1 {
    font-size: 2rem;
  }
  
  .hotel-hero .hero-image,
  .healthcare-hero .hero-image,
  .stadium-hero .hero-image,
  .toilet-hero .hero-image {
    height: 250px;
  }
  
  .hotel-hero-content .subtitle,
  .healthcare-hero-content .subtitle,
  .stadium-hero-content .subtitle,
  .toilet-hero-content .subtitle {
    font-size: 1.1rem;
    margin-bottom: 20px;
  }
  
  .module-header {
    font-size: 16px;
    padding: 15px 18px;
  }
  
  .hero-text h1 {
    font-size: 1.8rem;
  }
  
  .hero-text p {
    font-size: 1rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .feature-card {
    padding: 20px 15px;
  }
  
  .feature-highlights {
    gap: 15px;
  }
  
  .hotel-hero-content,
  .healthcare-hero-content,
  .stadium-hero-content,
  .toilet-hero-content {
    padding: 30px 15px;
  }
}
</style>