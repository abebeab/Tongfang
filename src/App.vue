<template>
  <div id="app">
    <!-- Header with dynamic classes for scrolling and mobile menu -->
    <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
      <div class="logo-container" @click="scrollToSection('#home')">
        <span class="logo-text">TONGFANG</span>
        <span class="logo-subtext">System Integrated</span>
      </div>
      <nav class="navbar">
        <!-- Hamburger menu icon -->
        <div class="hamburger" @click="toggleMenu" :class="{ 'active': menuActive }">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <!-- Navigation links -->
        <ul class="nav-links" :class="{ 'active': menuActive }">
          <li><a href="#home" @click.prevent="scrollToSection('#home')" :class="{ 'active-link': activeSection === 'home' }">Home</a></li>
          <li><a href="#about" @click.prevent="scrollToSection('#about')" :class="{ 'active-link': activeSection === 'about' }">About Us</a></li>
          <li><a href="#services" @click.prevent="scrollToSection('#services')" :class="{ 'active-link': activeSection === 'services' }">Services</a></li>
          <li><a href="#projects" @click.prevent="scrollToSection('#projects')" :class="{ 'active-link': activeSection === 'projects' }">Projects</a></li>
          <li><a href="#contact" @click.prevent="scrollToSection('#contact')" class="contact-btn">Contact Us</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <HomeComponent id="home" />
      <AboutPage id="about" />
      <ServiceList id="services" />
      <ProjectList id="projects" />
      <ContactSection id="contact" />
    </main>

    <AppFooter />
  </div>
</template>

// In App.vue

<script>
import HomeComponent from './components/HomeComponent.vue';
import AboutPage from './components/AboutPage.vue';
import ServiceList from './components/ServiceList.vue';
import ProjectList from './components/ProjectList.vue';
import ContactSection from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { HomeComponent, AboutPage, ServiceList, ProjectList, ContactSection, AppFooter },
  data: () => ({
    menuActive: false,
    isHeaderScrolled: false,
    activeSection: 'home',
    observer: null,
  }),
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
        const headerOffset = this.isHeaderScrolled ? 65 : 80;
        // Use window.scrollY for better cross-browser compatibility
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        this.menuActive = false;
      }
    },
    handleScroll() {
      this.isHeaderScrolled = window.scrollY > 50;
    },
    initIntersectionObserver() {
      // Use $nextTick to ensure the DOM is fully rendered
      this.$nextTick(() => {
        const sections = document.querySelectorAll('main section');
        
        // **CRITICAL FIX**: Check if sections exist before proceeding
        if (sections.length === 0) {
            console.warn("IntersectionObserver: No sections found to observe. Will not initialize.");
            return; // Exit the function if no sections are found
        }

        const options = {
          rootMargin: '-40% 0px -60% 0px',
          threshold: 0,
        };

        this.observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id;
            }
          });
        }, options);

        sections.forEach(section => {
          this.observer.observe(section);
        });
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.initIntersectionObserver();
  },
  beforeUnmount() {
    // **CRITICAL FIX**: Ensure observer exists before trying to disconnect
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
/* --- Global & Root Styles --- */
:root {
  --primary-color: #0A2540; /* Dark Blue */
  --secondary-color: #00D1B2; /* Teal/Turquoise */
  --accent-color: #2a9d8f; /* Another shade of teal for variety */
  --background-light: #f4f7f8;
  --text-dark: #333333;
  --text-light: #555;
  --white-color: #ffffff;
}
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: var(--white-color);
  color: var(--text-dark);
}
main {
  /* This prevents content from hiding behind the fixed header */
  padding-top: 80px;
}

/* --- Header & Navigation --- */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: var(--white-color);
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: height 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
  height: 80px;
}
.header.scrolled {
  height: 65px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.logo-container {
  display: flex;
  flex-direction: column;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}
.logo-text {
  font-size: 3.0rem;
  font-weight: 800;
  color: var(--primary-color);
  letter-spacing: -1px;
}
.logo-subtext {
  font-size: 1.0rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #777;
}
.header.scrolled .logo-container {
  transform: scale(0.9);
  transform-origin: left;
}
.navbar .nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.navbar li { margin-left: 35px; }
.navbar a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--primary-color);
  padding: 8px 0;
  position: relative;
  transition: color 0.3s;
}
.navbar a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: var(--secondary-color);
  transition: width 0.3s ease;
}
.navbar a:hover, .navbar a.active-link {
  color: var(--secondary-color);
}
.navbar a.active-link::after {
  width: 100%;
}
.contact-btn {
  background-color: var(--secondary-color);
  color: var(--white-color) !important;
  padding: 10px 22px !important;
  border-radius: 50px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
}
.contact-btn:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}
.contact-btn::after { display: none !important; }

/* --- Hamburger Menu & Mobile --- */
.hamburger { display: none; cursor: pointer; z-index: 1002; }
.bar { display: block; width: 25px; height: 3px; margin: 5px auto; background-color: var(--primary-color); border-radius: 2px; transition: all 0.3s ease-in-out; }
.hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger.active .bar:nth-child(2) { opacity: 0; }
.hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

@media (max-width: 992px) {
  .header { padding: 0 25px; }
  .hamburger { display: block; }
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(5px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    padding: 20px 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .nav-links.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .navbar li { margin: 10px 0; width: 100%; text-align: center; }
  .contact-btn { display: inline-block; width: auto; padding: 12px 35px !important; }
}
</style>