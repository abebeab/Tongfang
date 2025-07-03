<template>
  <div id="app">
    <!-- Header Section -->
    <header class="header">
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
        <ul :class="{ 'active': menuActive }">
          <li><a href="#home" @click="scrollToSection('#home')">Home</a></li>
          <li><a href="#about" @click="scrollToSection('#about')">About Us</a></li>
          <li><a href="#services" @click="scrollToSection('#services')">Services</a></li>
          <li><a href="#projects" @click="scrollToSection('#projects')">Projects</a></li>
          <li><a href="#contact" @click="scrollToSection('#contact')" class="contact-btn">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main Content Sections -->
    <main>
      <HomeComponent />
      <AboutPage />
      <ServiceList />
      <ProjectList />
      <Contact />
    </main>

    <!-- Footer Section -->
    <AppFooter />
  </div>
</template>

<script>
// Import your components for the Tongfang website
import HomeComponent from './components/HomeComponent.vue';
import AboutPage from './components/AboutPage.vue';
import ServiceList from './components/ServiceList.vue';
import ProjectList from './components/ProjectList.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    Contact,
    AppFooter,
    AboutPage,
    ServiceList,
    ProjectList
  },
  data() {
    return {
      menuActive: false,
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
        this.menuActive = false; // Close mobile menu on click
      }
    },
  },
};
</script>

<style>
/* Your styles remain the same... */
:root {
  --primary-color: #0A2540; /* Professional Deep Blue */
  --secondary-color: #00D1B2; /* Tech Teal/Cyan Accent */
  --text-color: #333;
  --light-gray: #f4f7f8;
  --white-color: #ffffff;
}

body {
  font-family: 'Poppins', sans-serif; /* A modern, clean font */
  margin: 0;
  background-color: var(--white-color);
  color: var(--text-color);
}

main {
  padding-top: 80px; /* Offset for the fixed header */
}

/* Header Styles */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: var(--white-color);
  color: var(--primary-color);
  width: 100%;
  box-sizing: border-box;
  height: 80px;
  position: fixed;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.logo-subtext {
  font-size: 0.8rem;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #777;
}

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
  display: none; /* No underline for the button */
}

.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  background-color: var(--primary-color);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 992px) {
  .navbar ul {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: var(--white-color);
    box-shadow: 0 10px 10px rgba(0,0,0,0.05);
    padding: 20px 0;
  }
  .navbar ul.active {
    display: flex;
  }
  .navbar li {
    margin: 15px 0;
    text-align: center;
  }
  .hamburger {
    display: block;
  }
}
</style>