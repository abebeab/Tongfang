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
          <ul class="nav-links">
            <!-- UPDATED: Looping through new navLinks data structure -->
            <li 
              v-for="link in navLinks" 
              :key="link.name"
              @mouseenter="activeMegaMenu = link.name"
              @mouseleave="activeMegaMenu = null"
            >
              <a @click="scrollToSection(link.path)" :class="{'active-link': activeSection === link.id}">
                {{ link.name }}
                <!-- Add dropdown arrow if mega menu exists -->
                <i v-if="link.megaMenu" class="fas fa-chevron-down nav-arrow"></i>
              </a>

              <!-- MEGA MENU DROPDOWN -->
              <div class="mega-menu" v-if="link.megaMenu && activeMegaMenu === link.name">
                <div class="mega-menu-content">
                  <div class="mega-menu-column" v-for="category in link.megaMenu.categories" :key="category.title">
                    <h4>{{ category.title }}</h4>
                    <ul>
                      <li v-for="subLink in category.links" :key="subLink.name">
                        <a @click="scrollToSection(subLink.path)">
                          <i :class="subLink.icon"></i> {{ subLink.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
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
      <AchievementsSection id="achievements" />
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
import AchievementsSection from './components/Achievements.vue';
import Support from './components/Support.vue';
import Partner from './components/Partner.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    HomeComponent, TrustedBy, AboutPage, Solutions, Products, AchievementsSection, Support, Partner, Contact, AppFooter
  },
  data: () => ({
    isHeaderScrolled: false,
    isSearchActive: false,
    activeSection: 'home',
    activeMegaMenu: null, // Tracks which mega menu is open
    // NEW: Data structure for navigation links with mega menus
    navLinks: [
      { name: 'About Us', path: '#about', id: 'about' },
      {
        name: 'Solutions',
        path: '#solutions',
        id: 'solutions',
        megaMenu: {
          categories: [
            {
              title: 'By Industry',
              links: [
                { name: 'Offices', path: '#solutions', icon: 'fas fa-building' },
                { name: 'Schools', path: '#solutions', icon: 'fas fa-school' },
                { name: 'Airports', path: '#solutions', icon: 'fas fa-plane-departure' },
                { name: 'Hotels', path: '#solutions', icon: 'fas fa-hotel' },
                { name: 'Apartments', path: '#solutions', icon: 'fas fa-city' },
                { name: 'Manufacturing', path: '#solutions', icon: 'fas fa-industry' },
              ]
            },
            {
              title: 'By Technology',
              links: [
                { name: 'BMS Decoration', path: '#solutions', icon: 'fas fa-paint-brush' },
                { name: 'ERP Integration', path: '#solutions', icon: 'fas fa-cogs' },
                { name: 'Data Centers', path: '#solutions', icon: 'fas fa-server' },
                { name: 'IoT & Smart Devices', path: '#solutions', icon: 'fas fa-wifi' },
              ]
            }
          ]
        }
      },
      {
        name: 'Products',
        path: '#products',
        id: 'products',
        megaMenu: {
          categories: [
            {
              title: 'Core Hardware',
              links: [
                { name: 'Computing Devices', path: '#products', icon: 'fas fa-desktop' },
                { name: 'Networking Equipment', path: '#products', icon: 'fas fa-network-wired' },
                { name: 'Surveillance & Security', path: '#products', icon: 'fas fa-video' },
                { name: 'Automation Devices', path: '#products', icon: 'fas fa-cogs' },
                { name: 'IoT Devices', path: '#products', icon: 'fas fa-broadcast-tower' },
              ]
            }
          ]
        }
      },
      { name: 'Achievements', path: '#achievements', id: 'achievements' },
      { name: 'Partner', path: '#partner', id: 'partner' },
      { name: 'Support', path: '#support', id: 'support' },
      { name: 'Contact Us', path: '#contact', id: 'contact' },
    ]
  }),
  methods: {
    scrollToSection(id) {
      this.activeMegaMenu = null; // Close menu on click
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
      
      const sections = ['home', 'about', 'solutions', 'products', 'achievements', 'partner', 'support', 'contact'];
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
/* Global Styles remain the same */
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

.section-container { padding: 80px 20px; }
.section-title, .section-subtitle {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
}
.section-subtitle { animation-delay: 0.2s; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

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
/* NEW: Added position relative to list item for dropdown positioning */
.nav-links > li {
  position: relative;
  padding: 26px 0; /* Add padding to create a larger hover area */
}
.navbar a { text-decoration: none; font-size: 1rem; font-weight: 600; color: var(--primary-color); padding: 5px 0; position: relative; transition: color 0.3s; white-space: nowrap; cursor: pointer; display: flex; align-items: center; gap: 8px; }
.nav-arrow { font-size: 0.7rem; transition: transform 0.3s ease; }
.nav-links > li:hover .nav-arrow {
  transform: rotate(180deg);
}

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

/* --- NEW: MEGA MENU STYLES --- */
.mega-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--white-color);
  padding: 30px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 15px 40px var(--shadow-color);
  border-top: 3px solid var(--secondary-color);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateX(-50%) translateY(10px);
  z-index: -1;
}
/* Show menu on hover */
.nav-links > li:hover .mega-menu {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
  z-index: 1000;
}
.mega-menu-content {
  display: flex;
  gap: 40px;
}
.mega-menu-column h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 10px;
}
.mega-menu-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.mega-menu-column li a {
  padding: 8px 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-light);
  gap: 12px;
}
.mega-menu-column li a:hover {
  color: var(--secondary-color);
}
.mega-menu-column li a i {
  color: var(--secondary-color);
  width: 15px;
  text-align: center;
}
.mega-menu-column li a::after {
  display: none; /* Disable underline effect for sub-links */
}

/* Search Overlay Styles remain the same */
.search-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 2000; display: flex; justify-content: center; align-items: flex-start; padding-top: 15vh; opacity: 0; visibility: hidden; transition: opacity 0.4s ease, visibility 0.4s ease; }
.search-overlay.active { opacity: 1; visibility: visible; }
.search-dialog { position: relative; width: 100%; max-width: 700px; transform: scale(0.95); transition: transform 0.4s ease; }
.search-overlay.active .search-dialog { transform: scale(1); }
.search-bar-container { position: relative; }
.search-icon-inside { position: absolute; top: 50%; left: 25px; transform: translateY(-50%); color: #aaa; font-size: 1.3rem; }
.search-input { width: 100%; height: 70px; padding: 0 80px 0 70px; font-size: 1.5rem; font-weight: 500; border: none; border-radius: 12px; outline: none; box-shadow: 0 10px 40px rgba(0,0,0,0.15); box-sizing: border-box; }
.close-search-btn { position: absolute; top: 50%; right: 25px; transform: translateY(-50%); background: none; border: none; font-size: 1.5rem; color: var(--text-light); cursor: pointer; transition: all 0.3s; }
.close-search-btn:hover { color: var(--primary-color); transform: translateY(-50%) rotate(90deg); }

/* Responsive Styles remain the same */
@media (max-width: 1024px) { .navbar { display: none; } .header-main { justify-content: space-between; } }
@media (max-width: 768px) { .contact-info-top span:first-child { display: none; } .header-top-bar, .header-main { padding: 0 20px; } .search-input { font-size: 1.1rem; height: 60px; } .search-dialog { padding: 0 20px; box-sizing: border-box; } }
</style>