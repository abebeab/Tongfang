<template>
  <div id="app">
    <!-- Header with dynamic classes for scrolling and mobile menu -->
    <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
      <div class="logo-container" @click="scrollToSection('#home')">
        <!-- Logo image -->
        <img src="/logo.png" alt="Logo" class="logo-img" />
        <!-- Brand text -->
        <div class="logo-text-group">
          <span class="logo-text">TONGFANG</span>
          <span class="logo-subtext">System Integration</span>
        </div>
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

<script>
import HomeComponent from './components/HomeComponent.vue';
import AboutPage from './components/AboutPage.vue';
import ServiceList from './components/ServiceList.vue';
import ProjectList from './components/ProjectList.vue';
import ContactSection from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    AboutPage,
    ServiceList,
    ProjectList,
    ContactSection,
    AppFooter
  },
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
      this.$nextTick(() => {
        const sections = document.querySelectorAll('main section');
        if (sections.length === 0) {
          console.warn("No sections found.");
          return;
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
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style>
:root {
  --brand-color: #f59805;
  --black-color: #000000;
  --white-color: #ffffff;
}

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  background-color: var(--white-color);
  color: var(--black-color);
}

main {
  padding-top: 80px;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: var(--white-color);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 80px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: height 0.3s ease, padding 0.3s ease, box-shadow 0.3s ease;
}

.header.scrolled {
  height: 65px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.logo-img {
  width: 50px;
  height: auto;
  object-fit: contain;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-text,
.logo-subtext {
  color: var(--black-color);
}

.logo-text {
  font-size: 2.8rem;
  font-weight: 800;
  letter-spacing: -1px;
}

.logo-subtext {
  font-size: 1.0rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.header.scrolled .logo-container {
  transform: scale(0.9);
  transform-origin: left;
}

/* Navbar Links */
.navbar .nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding-right: 20px;
  gap: 30px;
}

.navbar li:last-child {
  margin-right: 10px;
}

.navbar a {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: var(--black-color);
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
  background-color: var(--brand-color);
  transition: width 0.3s ease;
}

.navbar a:hover,
.navbar a.active-link {
  color: var(--brand-color);
}

.navbar a.active-link::after {
  width: 100%;
}

/* Contact Button */
.contact-btn {
  background-color: var(--brand-color);
  color: var(--white-color) !important;
  padding: 10px 25px !important;
  border-radius: 50px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  white-space: nowrap;
}

.contact-btn:hover {
  background-color: #b36e00;
  transform: translateY(-2px);
}

.contact-btn::after {
  display: none !important;
}

/* Hamburger Menu */
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
  background-color: var(--black-color);
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
}

.hamburger.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.active .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Project Section Background */
section#projects {
  background-color: var(--black-color);
  color: var(--white-color);
  padding: 50px 20px;
}

/* Mobile Responsive */
@media (max-width: 992px) {
  .header {
    padding: 0 25px;
  }
  .hamburger {
    display: block;
  }
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--white-color);
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
  .navbar li {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
  .contact-btn {
    display: inline-block;
    width: auto;
    padding: 12px 35px !important;
  }
}
</style>
