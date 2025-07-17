<template>
  <div id="app">
    <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
      <!-- TOP BAR -->
      <div class="header-top-bar">
        <div class="top-bar-container">
          <div class="contact-info-top">
            <span><i class="fas fa-phone-alt"></i> +251-911-249-722</span>
            <span><i class="fas fa-envelope"></i> info@tongfangbms.com</span>
          </div>
          <div class="language-selector">
            <div class="current-language">
              <i class="fas fa-globe"></i>
              <span>EN</span>
              <i class="fas fa-chevron-down dropdown-arrow"></i>
            </div>
            <ul class="language-dropdown">
              <li><a href="#">English (EN)</a></li>
              <li><a href="#">中文 (ZH)</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- MAIN HEADER -->
      <div class="header-main">
        <div class="logo-container" @click="scrollToSection('#home')">
          <img src="/logo.png" alt="Tongfang Logo" class="logo-img" />
          <div class="logo-text-group">
            <span class="logo-text">TONGFANG</span>
            <span class="logo-subtext">System Integration</span>
          </div>
        </div>
        <nav class="navbar">
          <!-- LINKS NOW HAVE ACTIVE CLASS BINDING -->
          <ul class="nav-links">
            <li><a @click="scrollToSection('#about')" :class="{'active-link': activeSection === 'about'}">About Us</a></li>
            <li><a @click="scrollToSection('#solutions')" :class="{'active-link': activeSection === 'solutions'}">Solutions</a></li>
            <li><a @click="scrollToSection('#products')" :class="{'active-link': activeSection === 'products'}">Products</a></li>
            <li><a @click="scrollToSection('#partner')" :class="{'active-link': activeSection === 'partner'}">Partner</a></li>
            <li><a @click="scrollToSection('#support')" :class="{'active-link': activeSection === 'support'}">Support</a></li>
            <li><a @click="scrollToSection('#contact')" :class="{'active-link': activeSection === 'contact'}">Contact Us</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <a href="#" class="action-icon" aria-label="Search" @click.prevent="toggleSearch">
            <i class="fas fa-search"></i>
          </a>
          <div class="action-icon-wrapper">
            <a href="/login" class="action-icon" aria-label="Login">
              <i class="fas fa-user"></i>
            </a>
            <div class="tooltip">Login</div>
          </div>
        </div>
      </div>
    </header>

    <!-- SEARCH OVERLAY -->
    <div class="search-overlay" :class="{ 'active': isSearchActive }" @click.self="toggleSearch">
      <div class="search-dialog">
        <div class="search-bar-container">
            <i class="fas fa-search search-icon-inside"></i>
            <input type="text" placeholder="What are you looking for?" class="search-input" autofocus>
        </div>
        <button class="close-search-btn" @click="toggleSearch" aria-label="Close search">
            <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <main>
      <HomeComponent id="home" />
      <TrustedBy id="trusted-by" />
      <AboutPage id="about" />
      <Solutions id="solutions" />
      <Products id="products" />
      <Support id="support" />
      <Partner id="partner" />
      <Contact id="contact" />
    </main>

    <AppFooter />
  </div>
</template>

<script>
// Imports remain the same
import HomeComponent from './components/HomeComponent.vue';
import TrustedBy from './components/TrustedBy.vue';
import AboutPage from './components/AboutPage.vue';
import Solutions from './components/Solutions.vue';
import Products from './components/Products.vue';
import Support from './components/Support.vue';
import Partner from './components/Partner.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    HomeComponent, TrustedBy, AboutPage, Solutions, Products, Support, Partner, Contact, AppFooter
  },
  data: () => ({
    isHeaderScrolled: false,
    isSearchActive: false,
    activeSection: 'home',
  }),
  methods: {
    scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
        const headerOffset = 110;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    },
    handleScroll() {
      this.isHeaderScrolled = window.scrollY > 20;
      
      const sections = ['home', 'about', 'solutions', 'products', 'partner', 'support', 'contact'];
      let currentSection = '';

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      if (currentSection) {
        this.activeSection = currentSection;
      }
    },
    toggleSearch() {
      this.isSearchActive = !this.isSearchActive;
      document.body.style.overflow = this.isSearchActive ? 'hidden' : '';
    }
  },
  // --- CORRECTED WATCH BLOCK ---
  // This block watches the 'isSearchActive' data property.
  // When it becomes 'true', it waits for Vue to update the DOM,
  // then it finds the search input and focuses it.
  watch: {
    isSearchActive(newValue) {
      if (newValue) {
        this.$nextTick(() => {
          const searchInput = this.$el.querySelector('.search-input');
          if (searchInput) {
            searchInput.focus();
          }
        });
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = '';
  }
};
</script>

<style>
/* Global Styles */
:root {
  --primary-color: #0D244F;
  --secondary-color: #F59805;
  --white-color: #FFFFFF;
  --light-bg-color: #F8F9FA;
  --text-dark: #1A202C;
  --text-light: #5A677B;
  --border-color: #E2E8F0;
  --shadow-color: rgba(0, 0, 0, 0.1);
}
html { scroll-behavior: smooth; }
body { font-family: 'Poppins', sans-serif; margin: 0; background-color: var(--white-color); color: var(--text-dark); -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
main { padding-top: 110px; }

/* Section Animation */
.section-container { padding: 80px 20px; }
.section-title, .section-subtitle {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
}
.section-subtitle { animation-delay: 0.2s; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

/* Header Styles */
.header { position: fixed; width: 100%; top: 0; z-index: 1000; transition: background-color 0.3s, box-shadow 0.3s; background-color: var(--white-color); box-shadow: 0 4px 15px transparent; }
.header.scrolled { box-shadow: 0 4px 15px var(--shadow-color); }
.header-top-bar { background-color: var(--primary-color); color: var(--white-color); padding: 0 40px; transition: all 0.3s ease; height: 40px; display: flex; align-items: center; }
.header.scrolled .header-top-bar { height: 0; padding: 0 40px; opacity: 0; overflow: hidden; }
.top-bar-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; font-size: 0.85rem; }
.contact-info-top span { margin-right: 20px; }
.contact-info-top i { color: var(--secondary-color); margin-right: 8px; }
.language-selector { position: relative; cursor: pointer; }
.current-language { display: flex; align-items: center; font-weight: 500; transition: color 0.3s; }
.language-selector:hover .current-language { color: var(--secondary-color); }
.current-language i { margin: 0 5px; }
.dropdown-arrow { font-size: 0.6rem; transition: transform 0.3s ease; }
.language-selector:hover .dropdown-arrow { transform: rotate(180deg); }
.language-dropdown { position: absolute; top: 120%; right: 0; background-color: var(--white-color); border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 10px 20px var(--shadow-color); list-style: none; padding: 10px 0; margin: 5px 0 0 0; width: 160px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.3s ease; z-index: 1001; }
.language-selector:hover .language-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.language-dropdown li a { display: block; padding: 10px 20px; color: var(--text-dark); text-decoration: none; font-size: 0.9rem; }
.language-dropdown li a:hover { background-color: var(--light-bg-color); color: var(--secondary-color); }
.header-main { display: flex; justify-content: space-between; align-items: center; height: 70px; padding: 0 40px; max-width: 1400px; margin: 0 auto; }
.logo-container { display: flex; align-items: center; gap: 12px; cursor: pointer; flex-shrink: 0; }
.logo-img { width: 45px; height: auto; transition: transform 0.3s ease; }
.logo-container:hover .logo-img { transform: rotate(-10deg) scale(1.1); }
.logo-text-group { display: flex; flex-direction: column; line-height: 1.1; }
.logo-text { font-size: 1.8rem; font-weight: 800; color: var(--primary-color); }
.logo-subtext { font-size: 0.8rem; letter-spacing: 0.5px; color: var(--text-light); }
.navbar { display: flex; justify-content: center; margin: 0 auto; flex-grow: 1; padding-left: 50px; }
.nav-links { list-style: none; display: flex; align-items: center; gap: 35px; }
.navbar a { text-decoration: none; font-size: 1rem; font-weight: 600; color: var(--primary-color); padding: 5px 0; position: relative; transition: color 0.3s; white-space: nowrap; cursor: pointer; }
.navbar a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; transform: translateX(-50%); background-color: var(--secondary-color); transition: width 0.3s ease; }
.navbar a:hover::after, a.active-link::after { width: 100%; }
.navbar a.active-link { color: var(--secondary-color); }
.navbar a:hover { color: var(--secondary-color); }
.header-actions { display: flex; align-items: center; gap: 25px; flex-shrink: 0; }
.action-icon { font-size: 1.2rem; color: var(--text-dark); text-decoration: none; transition: all 0.3s ease; }
.action-icon:hover { color: var(--secondary-color); transform: scale(1.1); }
.action-icon-wrapper { position: relative; }
.tooltip { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(12px); background-color: var(--primary-color); color: var(--white-color); padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; white-space: nowrap; opacity: 0; visibility: hidden; transition: all 0.3s ease; pointer-events: none; z-index: 10; }
.action-icon-wrapper:hover .tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(8px); }

/* Search Overlay */
.search-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 2000; display: flex; justify-content: center; align-items: flex-start; padding-top: 15vh; opacity: 0; visibility: hidden; transition: opacity 0.4s ease, visibility 0.4s ease; }
.search-overlay.active { opacity: 1; visibility: visible; }
.search-dialog { position: relative; width: 100%; max-width: 700px; transform: scale(0.95); transition: transform 0.4s ease; }
.search-overlay.active .search-dialog { transform: scale(1); }
.search-bar-container { position: relative; }
.search-icon-inside { position: absolute; top: 50%; left: 25px; transform: translateY(-50%); color: #aaa; font-size: 1.3rem; }
.search-input { width: 100%; height: 70px; padding: 0 80px 0 70px; font-size: 1.5rem; font-weight: 500; border: none; border-radius: 12px; outline: none; box-shadow: 0 10px 40px rgba(0,0,0,0.15); box-sizing: border-box; }
.close-search-btn { position: absolute; top: 50%; right: 25px; transform: translateY(-50%); background: none; border: none; font-size: 1.5rem; color: var(--text-light); cursor: pointer; transition: all 0.3s; }
.close-search-btn:hover { color: var(--primary-color); transform: translateY(-50%) rotate(90deg); }

/* Responsive Styles */
@media (max-width: 1024px) { .navbar { display: none; } .header-main { justify-content: space-between; } }
@media (max-width: 768px) { .contact-info-top span:first-child { display: none; } .header-top-bar, .header-main { padding: 0 20px; } .search-input { font-size: 1.1rem; height: 60px; } .search-dialog { padding: 0 20px; box-sizing: border-box; } }
</style>