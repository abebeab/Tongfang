<template>
  <div>
    <!-- Section 1: Hero Section -->
    <section class="hero-section">
      <transition-group name="slide-fade" tag="div" class="hero-slideshow">
        <div
          v-for="slide in activeSlide"
          :key="slide.image"
          class="slide"
          :style="{ backgroundImage: `url(${slide.image})` }">
        </div>
      </transition-group>

      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">BMS System Integration</h1>
        <p class="hero-slogan">"Moving Forward" - We integrate technology, from factory to facility.</p>
        <div class="hero-cta-buttons">
          <router-link to="/solutions" class="cta-button primary">Explore Our Solutions</router-link>
          <router-link to="/contact" class="cta-button primary">Talk to Our Experts</router-link>
        </div>
      </div>

      <!-- VERTICALLY GROUPED SLIDE NAVIGATION CONTROLS -->
      <div class="slide-nav-group">
        <div 
          v-for="(slide, index) in slides" 
          :key="index" 
          class="slide-dot-wrapper" 
          :class="{ active: currentSlideIndex === index }"
          @click="goToSlide(index)">
          
          <div class="progress-container slide-nav-progress" v-if="currentSlideIndex === index">
              <svg class="progress-ring" width="40" height="40" viewBox="0 0 100 100">
                  <circle class="progress-bg" r="45" cx="50" cy="50" />
                  <circle
                      class="progress-fill"
                      r="45" cx="50" cy="50"
                      :style="{ 'stroke-dasharray': slideProgressDasharray, 'stroke-dashoffset': slideProgressDashoffset }"
                  />
              </svg>
              <div class="current-slide-number">{{ slideCountdownValue }}</div>
          </div>
          <div class="slide-dot" v-else></div> <!-- Regular dot when not active -->
        </div>
      </div>
    </section>

    <!-- The rest of your page remains exactly the same -->
    <section class="trusted-by-section">
      <div class="trusted-by-container">
        <h3 class="trusted-by-title">Trusted By Industry Leaders and Government Agencies in Ethiopia & Beyond</h3>
        <div class="logos-container">
          <i class="fas fa-building logo-placeholder" title="Commercial Real Estate"></i>
          <i class="fas fa-university logo-placeholder" title="Educational Institutions"></i>
          <i class="fas fa-hotel logo-placeholder" title="Hospitality Sector"></i>
          <i class="fas fa-industry logo-placeholder" title="Industrial Manufacturing"></i>
          <i class="fas fa-shield-alt logo-placeholder" title="Government & Security"></i>
        </div>
      </div>
    </section>

    <section class="core-services-section">
      <div class="page-container">
        <h2 class="section-title">A Complete Integration Partner</h2>
        <p class="section-subtitle">We don't just supply products; we deliver end-to-end engineered solutions that unify your operations.</p>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-cogs"></i></div>
            <h4>End-to-End System Integration</h4>
            <p>From initial design and architecture to hardware deployment and software configuration, we ensure all systems work in perfect harmony.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-tachometer-alt"></i></div>
            <h4>Building Management Systems (BMS)</h4>
            <p>Our intelligent BMS solutions provide a central command center to monitor, control, and optimize energy, security, and climate systems.</p>
          </div>
          <div class="service-card">
            <div class="service-icon"><i class="fas fa-server"></i></div>
            <h4>Enterprise Hardware & Factory Power</h4>
            <p>Leverage our direct access to enterprise-grade servers, networking gear, and custom-manufactured components from our own factories.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="why-choose-us-section">
      <div class="page-container why-choose-us-grid">
        <div class="why-choose-us-image">
          <img :src="require('@/assets/images/光电.png')" alt="Tongfang Engineering and Manufacturing">
        </div>
        <div class="why-choose-us-content">
          <h2 class="section-title" style="text-align: left;">The Tongfang Advantage</h2>
          <p class="section-subtitle" style="text-align: left; margin-left: 0;">We are unique because we control the entire lifecycle of your solution.</p>
          <ul>
            <li><strong>Factory Direct:</strong> As a manufacturer, we eliminate supply chain issues and provide hardware perfectly matched to your needs.</li>
            <li><strong>Expert Design:</strong> Our Addis Ababa-based engineers design and customize solutions for the local context and international standards.</li>
            <li><strong>Single Point of Contact:</strong> From the first blueprint to long-term support, you have one dedicated partner for your entire project.</li>
            <li><strong>Guaranteed Compatibility:</strong> By integrating our own hardware and software, we guarantee a seamless, reliable, and secure system.</li>
          </ul>
          <router-link to="/about" class="cta-button primary-outline">Learn More About Us</router-link>
        </div>
      </div>
    </section>

    <section class="featured-project-section">
      <div class="project-overlay"></div>
      <div class="page-container project-content">
        <h2 class="section-title">Featured Project: Addis Ababa Commercial Tower</h2>
        <p class="section-subtitle">A successful deployment of a fully integrated smart building solution, enhancing security and reducing energy costs by 35%.</p>
        <router-link to="/achievements" class="cta-button">View Our Achievements</router-link>
      </div>
    </section>

    <section class="final-cta-section">
      <div class="page-container">
        <h2>Let's Build the Future Together</h2>
        <p>Discuss your project with our integration experts today. We're ready to help you move forward.</p>
        <router-link to="/contact" class="cta-button">Get a Free Consultation</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentSlideIndex: 0,
      slideInterval: null,
      slides: [
        { image: require('@/assets/images/hero-bg-3.png') },
        { image: require('@/assets/images/pexels-jakubzerdzicki-18186205.jpg') },
        { image: require('@/assets/images/hero-bg-2.jpg') },
        { image: require('@/assets/images/hero-bg-4.png') },
      ],
      // NEW DATA FOR SLIDE NAVIGATION COUNTDOWN
      slideCountdownValue: 6, // Initial countdown value (matches slideInterval duration)
      initialSlideCountdownValue: 6,
      slideCountdownInterval: null,
    };
  },
  computed: {
    activeSlide() {
      return [this.slides[this.currentSlideIndex]];
    },
    // NEW COMPUTED PROPERTIES FOR SLIDE NAVIGATION COUNTDOWN
    slideCircumference() {
      // Circumference for the smaller progress ring (r=45 for SVG, but SVG itself is 40x40)
      // This means the effective radius in CSS pixels is 40/2 * (45/50) = 18px radius.
      // So, if SVG has r=45, and width/height is 40px, the scaling means the circle fills the 40x40.
      // We still use r=45 for stroke-dasharray calculations relative to viewBox.
      return 2 * Math.PI * 45; 
    },
    slideProgressDasharray() {
      return `${this.slideCircumference} ${this.slideCircumference}`;
    },
    slideProgressDashoffset() {
      // Calculate how much of the circle should be filled (0% to 100%)
      // As slideCountdownValue goes from initial (e.g., 7) down to 0,
      // the progress should go from 0% filled to 100% filled.
      const progressPercentage = (this.initialSlideCountdownValue - this.slideCountdownValue) / this.initialSlideCountdownValue;
      return this.slideCircumference * (1 - progressPercentage);
    },
  },
  methods: {
    startSlideTimer() {
      clearInterval(this.slideInterval);
      clearInterval(this.slideCountdownInterval); // Clear existing countdown
      this.slideCountdownValue = this.initialSlideCountdownValue; // Reset countdown
      this.startSlideCountdown(); // Start new countdown
      
      this.slideInterval = setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        clearInterval(this.slideCountdownInterval); // Clear on slide change
        this.slideCountdownValue = this.initialSlideCountdownValue; // Reset for new slide
        this.startSlideCountdown(); // Start countdown for the new slide
      }, 6000); // This is your main slide transition time
    },
    goToSlide(index) {
      this.currentSlideIndex = index;
      this.startSlideTimer(); // Reset both timers on manual navigation
    },
    // NEW METHOD FOR SLIDE NAVIGATION COUNTDOWN
    startSlideCountdown() {
      this.slideCountdownInterval = setInterval(() => {
        if (this.slideCountdownValue > 0) {
          this.slideCountdownValue--;
        } else {
          // The main slide timer handles the actual slide change,
          // this just ensures the number goes to 0 if the main timer lags slightly.
          clearInterval(this.slideCountdownInterval);
          this.slideCountdownInterval = null;
        }
      }, 1000); // Update every 1 second
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    clearInterval(this.slideInterval);
    clearInterval(this.slideCountdownInterval); // Clear both intervals
  }
}
</script>

<style scoped>
/* --- HERO SECTION STYLES (MERGED) --- */
.hero-section {
  display: flex; justify-content: center; align-items: center; text-align: center; height: calc(100vh - 110px); min-height: 650px;
  position: relative; color: var(--white-color); overflow: hidden;
}
.hero-slideshow {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1;
}
.slide {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-size: cover;
  background-position: center top;
  /* ✅ BRIGHTNESS MAXIMIZED: Pushed to 1.3 for a very bright effect */
  filter: brightness(1.3) contrast(1.1);
  image-rendering: -webkit-optimize-contrast;
  image-rendering: high-quality;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 1.5s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

/* NEW STYLES FOR VERTICALLY GROUPED SLIDE NAVIGATION (MODIFIED) */
.slide-nav-group {
  position: absolute;
  right: 40px; /* Adjust as needed */
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Spacing between dots */
}

/* Wrapper for both active progress bar and inactive dot */
.slide-dot-wrapper {
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: 40px; /* Fixed size for wrapper to maintain spacing */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Style for the inactive dot */
.slide-dot {
  width: 15px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.4); /* Light grey dot */
  border-radius: 50%;
  transition: all 0.3s ease;
}

.slide-dot-wrapper:hover .slide-dot {
  background-color: rgba(255, 255, 255, 0.7);
}


/* Styles for the active progress bar container */
.progress-container.slide-nav-progress {
    width: 40px;
    height: 40px;
    /* Remove default progress-container styles that might conflict */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Optional: add a subtle box-shadow for active state */
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    border-radius: 50%; /* To match the circular shape */
}

.progress-container.slide-nav-progress .progress-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg); /* Start progress from top */
}

.progress-container.slide-nav-progress .progress-bg {
    stroke-width: 4; /* Thinner stroke for smaller circle */
    stroke: rgba(255, 255, 255, 0.3); /* Lighter background for the ring */
    fill: transparent;
}

.progress-container.slide-nav-progress .progress-fill {
    stroke-width: 4; /* Matches background stroke width */
    stroke: var(--secondary-color); /* Your orange color */
    fill: transparent;
    transition: stroke-dashoffset 1s linear; /* Smooth transition */
    stroke-linecap: round;
}

.current-slide-number {
  color: var(--secondary-color); /* Orange number */
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1; /* Ensure text is centered vertically */
  position: relative; /* Keep text centered over the progress bar */
  z-index: 10; /* Ensure number is above SVG */
}


/* ✅ OVERLAY LIGHTENED MAXIMALLY: Opacity is now very low for maximum image visibility */
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, rgba(13, 36, 79, 0.2), rgba(13, 36, 79, 0.1)); z-index: 2; }
.hero-content { position: relative; z-index: 3; max-width: 950px; padding: 0 20px; animation: fadeIn 1.5s ease-in-out; }
.hero-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; letter-spacing: -1px; }
.hero-slogan { font-size: 1.8rem; font-weight: 500; font-style: italic; color: var(--secondary-color); margin-bottom: 2.5rem; opacity: 0.9; text-shadow: 0 1px 5px rgba(0,0,0,0.2); }
.hero-cta-buttons { display: flex; justify-content: center; gap: 200px; flex-wrap: wrap; }
.cta-button { text-decoration: none; }
.cta-button.primary { background-color: var(--secondary-color); color: var(--white-color); border: 2px solid var(--secondary-color); }
.cta-button.secondary { background-color: transparent; color: var(--white-color); border: 2px solid var(--white-color); }
.cta-button.secondary:hover { background-color: var(--white-color); color: var(--primary-color); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

/* --- [ALL YOUR OTHER EXISTING STYLES REMAIN UNCHANGED BELOW] --- */
.trusted-by-section { background-color: var(--light-bg-color); padding: 30px 20px; border-bottom: 1px solid var(--border-color); }
.trusted-by-container { max-width: 1200px; margin: 0 auto; text-align: center; }
.trusted-by-title { font-size: 1rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 25px; }
.logos-container { display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 40px; }
.logo-placeholder { font-size: 40px; color: #A0AEC0; transition: color 0.3s ease; }
.logo-placeholder:hover { color: var(--secondary-color); }

.core-services-section { background-color: var(--white-color); padding: 80px 20px; }
.page-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.section-title { text-align: center; font-size: 2.5rem; font-weight: 600; color: var(--primary-color); margin-bottom: 15px; }
.section-subtitle { text-align: center; font-size: 1.1rem; color: var(--text-light); max-width: 650px; margin: 0 auto 50px auto; }
.services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px; }
.service-card { text-align: center; padding: 30px; border: 1px solid var(--border-color); border-radius: 12px; transition: all 0.3s ease; }
.service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px var(--shadow-color); }
.service-icon { font-size: 2.5rem; color: var(--secondary-color); margin-bottom: 20px; }
.service-card h4 { font-size: 1.3rem; color: var(--primary-color); margin-bottom: 15px; }
.service-card p { color: var(--text-light); line-height: 1.7; }

.why-choose-us-section { background-color: var(--light-bg-color); padding: 80px 20px; }
.why-choose-us-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 50px; align-items: center; }
.why-choose-us-image img { width: 100%; border-radius: 12px; }
.why-choose-us-content ul { list-style: none; padding: 0; margin-top: 20px; margin-bottom: 30px; }
.why-choose-us-content li { padding-left: 30px; margin-bottom: 15px; background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="%23F59805" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>') no-repeat left center; }
.cta-button.primary-outline { background-color: transparent; color: var(--primary-color); border: 2px solid var(--secondary-color); }
.cta-button.primary-outline:hover { background-color: var(--secondary-color); color: var(--white-color); }

.featured-project-section { padding: 100px 20px; text-align: center; position: relative; background: url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200') no-repeat center center/cover; color: var(--white-color); }
.project-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(13, 36, 79, 0.85); }
.project-content { position: relative; z-index: 2; }
.project-content .section-title, .project-content .section-subtitle { color: var(--white-color); }
.project-content .section-subtitle { max-width: 600px; opacity: 0.9; }

.final-cta-section { padding: 80px 20px; text-align: center; background-color: var(--white-color); }
.final-cta-section h2 { font-size: 2.2rem; color: var(--primary-color); margin-bottom: 15px; }
.final-cta-section p { font-size: 1.1rem; color: var(--text-light); margin-bottom: 30px; }

@media (max-width: 900px) {
  .hero-title { font-size: 2.8rem; }
  .hero-slogan { font-size: 1.2rem; }
  .why-choose-us-grid { grid-template-columns: 1fr; text-align: center; }
  .why-choose-us-content .section-title, .why-choose-us-content .section-subtitle { text-align: center !important; margin-left: auto; margin-right: auto; }
  .why-choose-us-content ul { text-align: left; }
}
@media (max-width: 768px) {
  .hero-cta-buttons { flex-direction: column; align-items: center; }
}
</style>