<!--
  This is the complete, final version of App.vue.
  It includes all features:
  - Professional Color Palette
  - Shrinking Header on Scroll
  - Slide-out Mobile Menu with Overlay
  - Correct Component Imports and IDs for Navigation
-->
<template>
  <div id="app">
    <!-- Overlay for background dimming when mobile menu is active -->
    <div 
      class="menu-overlay" 
      :class="{ 'active': menuActive }" 
      @click="toggleMenu"
    ></div>

    <!-- The header dynamically gets a 'scrolled' class to shrink it -->
    <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
      <div class="logo">
        <span class="logo-text">TONGFANG</span>
        <span class="logo-subtext">System Integrated</span>
      </div>
      <nav class="navbar">
        <div class="hamburger" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        
        <!-- The 'ul' element is the navigation, which becomes the slide-out panel on mobile -->
        <ul :class="{ 'active': menuActive }">
          <li><a href="#home" @click.prevent="scrollToSection('#home')">Home</a></li>
          <li><a href="#about" @click.prevent="scrollToSection('#about')">About Us</a></li>
          <li><a href="#services" @click.prevent="scrollToSection('#services')">Services</a></li>
          <li><a href="#projects" @click.prevent="scrollToSection('#projects')">Projects</a></li>
          <li><a href="#contact" @click.prevent="scrollToSection('#contact')" class="contact-btn">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <!-- Each component needs an 'id' for the scroll navigation to work -->
      <HomeComponent id="home" />
      <AboutPage id="about" />
      <ServiceList id="services" />
      <ProjectList id="projects" />
      <ContactSection id="contact" />
    </main>

    <AppFooter />
  </div>
</template>

<script>
// Correctly importing all necessary components
import HomeComponent from './components/HomeComponent.vue';
import AboutPage from './components/AboutPage.vue';
import ServiceList from './components/ServiceList.vue';
import ProjectList from './components/ProjectList.vue';
import ContactSection from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    // Registering all imported components
    HomeComponent,
    AboutPage,
    ServiceList,
    ProjectList,
    ContactSection,
    AppFooter,
  },
  data() {
    return {
      menuActive: false,
      isHeaderScrolled: false, // State to track if the header should be small
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        this.menuActive = false; // Always close menu after clicking a link
      }
    },
    // Method to handle the scroll event
    handleScroll() {
      this.isHeaderScrolled = window.scrollY > 50;
    }
  },
  // Lifecycle hooks to safely add and remove the scroll listener
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
/* === FINAL GLOBAL BRAND COLORS & STYLES === */
:root {
  --primary-color: #0A2540;
  --secondary-color: #00D1B2;
  --background-light: #f4f7f8;
  --text-dark: #333333;
  --white-color: #ffffff;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: var(--white-color);
  color: var(--text-dark);
  scroll-behavior: smooth;
}

main {
  padding-top: 80px;
}

/* Header & Navbar Styles */
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
  transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
  height: 80px; /* Default large height */
}

/* Styles for the header when it is scrolled */
.header.scrolled {
  height: 60px; /* Reduced height */
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  transition: transform 0.3s ease-in-out;
}
.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
}
.logo-subtext {
  font-size: 0.8rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #777;
}
/* Scale down the logo in the scrolled header */
.header.scrolled .logo {
  transform: scale(0.85);
  transform-origin: left;
}

/* Desktop Navigation */
.navbar ul {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}
.navbar li {
  margin-left: 30px;
}
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
.navbar a:hover::after {
  width: 100%;
}
.contact-btn {
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 10px 20px !important;
  border-radius: 50px;
  transition: background-color 0.3s, color 0.3s;
}
.contact-btn:hover {
  background-color: var(--primary-color);
  color: var(--white-color) !important;
}
.contact-btn::after {
  display: none;
}

.hamburger {
  display: none;
  cursor: pointer;
  z-index: 1002;
}
.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 1001;
}
.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Fully Responsive Mobile Navigation */
@media (max-width: 992px) {
  .header {
    padding: 0 25px;
  }
  .hamburger {
    display: block;
  }
  .navbar ul {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 280px;
    background-color: var(--white-color);
    flex-direction: column;
    align-items: flex-start;
    padding: 100px 40px 40px 40px;
    box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1002;
  }
  .navbar ul.active {
    transform: translateX(0);
  }
  .navbar li {
    margin: 0 0 25px 0;
    width: 100%;
  }
  .contact-btn {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}
</style>