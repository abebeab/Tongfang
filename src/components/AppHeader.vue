<template>
  <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
    <!-- TOP BAR -->
    <div class="header-top-bar">
      <div class="top-bar-container">
        <div class="contact-info-top">
          <span><i class="fas fa-phone-alt"></i> +251-911-249-722</span>
          <span><i class="fas fa-envelope"></i> info@tongfangbms.com</span>
        </div>
        <!-- Language Selector -->
        <div class="language-selector" @mouseenter="isLangOpen = true" @mouseleave="isLangOpen = false">
          <div class="current-language">
            <i class="fas fa-globe"></i>
            <span>EN</span>
            <i class="fas fa-chevron-down dropdown-arrow" :class="{ 'open': isLangOpen }"></i>
          </div>
          <ul class="language-dropdown" :class="{ 'active': isLangOpen }">
            <li><a href="#">English (EN)</a></li>
            <li><a href="#">中文 (ZH)</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- MAIN HEADER -->
    <div class="header-main">
      <router-link to="/" class="logo-container">
        <img src="/logo.png" alt="Tongfang Logo" class="logo-img" />
        <div class="logo-text-group">
          <span class="logo-text">TONGFANG</span>
          <span class="logo-subtext">System Integration</span>
        </div>
      </router-link>
      <nav class="navbar">
        <ul class="nav-links">
          <!-- Looping through our navLinks data -->
          <li 
            v-for="link in navLinks" 
            :key="link.name"
            @mouseenter="activeMegaMenu = link.megaMenu ? link.name : null"
            @mouseleave="activeMegaMenu = null">
            <router-link :to="link.path">
              {{ link.name }}
              <i v-if="link.megaMenu" class="fas fa-chevron-down nav-arrow"></i>
            </router-link>

            <!-- MEGA MENU DROPDOWN -->
            <div class="mega-menu" v-if="link.megaMenu && activeMegaMenu === link.name">
              <div class="mega-menu-content">
                <div class="mega-menu-column" v-for="category in link.megaMenu.categories" :key="category.title">
                  <h4>{{ category.title }}</h4>
                  <ul>
                    <li v-for="subLink in category.links" :key="subLink.name">
                      <!-- Use router-link for internal navigation -->
                      <router-link :to="subLink.path">
                        <i :class="subLink.icon"></i> {{ subLink.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <!-- Header Actions: Search and Login -->
      <div class="header-actions">
        <a href="#" class="action-icon" aria-label="Search" @click.prevent="$emit('toggle-search')">
          <i class="fas fa-search"></i>
        </a>
        <div class="action-icon-wrapper">
          <router-link to="/login" class="action-icon" aria-label="Login">
            <i class="fas fa-user"></i>
          </router-link>
          <div class="tooltip">Partner Login</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  emits: ['toggle-search'], // Declare the event that will be emitted to the parent
  data() {
    return {
      isHeaderScrolled: false,
      isLangOpen: false,
      activeMegaMenu: null,
      // NEW data structure for navigation links with mega menus
      navLinks: [
        { name: 'About Us', path: '/about' },
        {
          name: 'Solutions',
          path: '/solutions',
          megaMenu: {
            categories: [
              {
                title: 'By Industry',
                links: [
                  { name: 'Smart Offices', path: '/solutions/smart-offices', icon: 'fas fa-building' },
                  { name: 'Airport Integration', path: '/solutions/airport-integration', icon: 'fas fa-plane-departure' },
                  { name: 'Hotels & Hospitality', path: '/solutions', icon: 'fas fa-hotel' },
                  { name: 'Educational Campuses', path: '/solutions', icon: 'fas fa-school' },
                ]
              },
              {
                title: 'By Technology',
                links: [
                  { name: 'BMS Decoration', path: '/solutions', icon: 'fas fa-paint-brush' },
                  { name: 'Data Center Solutions', path: '/solutions', icon: 'fas fa-server' },
                  { name: 'IoT & Smart Devices', path: '/solutions', icon: 'fas fa-wifi' },
                ]
              }
            ]
          }
        },
        {
          name: 'Products',
          path: '/products',
          megaMenu: {
            categories: [
              {
                title: 'Core Hardware',
                links: [
                  { name: 'Computing Devices', path: '/products', icon: 'fas fa-desktop' },
                  { name: 'Networking Equipment', path: '/products', icon: 'fas fa-network-wired' },
                  { name: 'Surveillance & Security', path: '/products', icon: 'fas fa-video' },
                  { name: 'Automation Devices', path: '/products', icon: 'fas fa-cogs' },
                ]
              }
            ]
          }
        },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Partner', path: '/partner' },
        { name: 'Support', path: '/support' },
        { name: 'Contact Us', path: '/contact' },
      ]
    };
  },
  methods: {
    handleScroll() {
      this.isHeaderScrolled = window.scrollY > 20;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Paste ALL CSS from your original header file here, then ADD the new styles below */
.header { position: fixed; width: 100%; top: 0; z-index: 1000; transition: background-color 0.3s, box-shadow 0.3s; background-color: var(--white-color); box-shadow: 0 4px 15px transparent; }
.header.scrolled { box-shadow: 0 4px 15px var(--shadow-color); }
.header-top-bar { background-color: var(--primary-color); color: var(--white-color); padding: 0 40px; transition: all 0.3s ease; height: 40px; display: flex; align-items: center; }
.header.scrolled .header-top-bar { height: 0; padding: 0 40px; opacity: 0; overflow: hidden; }
.top-bar-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; font-size: 0.85rem; }
.contact-info-top span { margin-right: 20px; }
.contact-info-top i { color: var(--secondary-color); margin-right: 8px; }
.header-main { display: flex; justify-content: space-between; align-items: center; height: 70px; padding: 0 40px; max-width: 1400px; margin: 0 auto; }
.logo-container { display: flex; align-items: center; gap: 12px; cursor: pointer; flex-shrink: 0; text-decoration: none; }
.logo-img { width: 45px; height: auto; transition: transform 0.3s ease; }
.logo-text-group { display: flex; flex-direction: column; line-height: 1.1; }
.logo-text { font-size: 1.8rem; font-weight: 800; color: var(--primary-color); }
.logo-subtext { font-size: 0.8rem; letter-spacing: 0.5px; color: var(--text-light); }
.navbar { display: flex; justify-content: center; margin: 0 auto; flex-grow: 1; padding-left: 50px; }
.nav-links { list-style: none; display: flex; align-items: center; gap: 35px; margin: 0; padding: 0; }
.nav-links > li { position: relative; padding: 26px 0; }
.nav-links a { text-decoration: none; font-size: 1rem; font-weight: 600; color: var(--primary-color); padding: 5px 0; position: relative; transition: color 0.3s; white-space: nowrap; cursor: pointer; display: flex; align-items: center; gap: 8px; }
.nav-arrow { font-size: 0.7rem; transition: transform 0.3s ease; }
.nav-links > li:hover .nav-arrow { transform: rotate(180deg); }
.nav-links a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; transform: translateX(-50%); background-color: var(--secondary-color); transition: width 0.3s ease; }
.nav-links a:hover::after, .nav-links a.router-link-exact-active::after { width: 100%; }
.nav-links a:hover, .nav-links a.router-link-exact-active { color: var(--secondary-color); }

/* --- NEW STYLES FOR INTERACTIVE ELEMENTS --- */

/* Language Selector Dropdown */
.language-selector { position: relative; cursor: pointer; }
.current-language { display: flex; align-items: center; font-weight: 500; transition: color 0.3s; }
.language-selector:hover .current-language { color: var(--secondary-color); }
.dropdown-arrow { font-size: 0.6rem; transition: transform 0.3s ease; }
.dropdown-arrow.open { transform: rotate(180deg); }
.language-dropdown {
  position: absolute; top: 120%; right: 0; background-color: var(--white-color); border: 1px solid var(--border-color);
  border-radius: 8px; box-shadow: 0 10px 20px var(--shadow-color); list-style: none; padding: 10px 0; margin: 5px 0 0 0;
  width: 160px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.3s ease; z-index: 1001;
}
.language-dropdown.active { opacity: 1; visibility: visible; transform: translateY(0); }
.language-dropdown li a { display: block; padding: 10px 20px; color: var(--text-dark); text-decoration: none; font-size: 0.9rem; }
.language-dropdown li a:hover { background-color: var(--light-bg-color); color: var(--secondary-color); }

/* Header Actions: Search & Login */
.header-actions { display: flex; align-items: center; gap: 25px; flex-shrink: 0; }
.action-icon { font-size: 1.2rem; color: var(--text-dark); text-decoration: none; transition: all 0.3s ease; }
.action-icon:hover { color: var(--secondary-color); transform: scale(1.1); }
.action-icon-wrapper { position: relative; }
.tooltip {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(12px); background-color: var(--primary-color);
  color: var(--white-color); padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; white-space: nowrap; opacity: 0;
  visibility: hidden; transition: all 0.3s ease; pointer-events: none; z-index: 10;
}
.action-icon-wrapper:hover .tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(8px); }

/* Mega Menu Styles */
.mega-menu {
  position: absolute; top: 100%; left: 50%; background-color: var(--white-color); padding: 30px; border-radius: 0 0 12px 12px;
  box-shadow: 0 15px 40px var(--shadow-color); border-top: 3px solid var(--secondary-color); opacity: 0; visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease; transform: translateX(-50%) translateY(10px); z-index: -1;
}
.nav-links > li:hover .mega-menu {
  opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); z-index: 1000;
}
.mega-menu-content { display: flex; gap: 40px; }
.mega-menu-column h4 {
  font-size: 1rem; font-weight: 700; color: var(--primary-color); margin: 0 0 15px 0; text-transform: uppercase;
  letter-spacing: 0.5px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px;
}
.mega-menu-column ul { list-style: none; padding: 0; margin: 0; }
.mega-menu-column li a { padding: 8px 0; font-size: 0.95rem; font-weight: 500; color: var(--text-light); gap: 12px; }
.mega-menu-column li a:hover { color: var(--secondary-color); }
.mega-menu-column li a i { color: var(--secondary-color); width: 15px; text-align: center; }
.mega-menu-column li a::after { display: none; } /* Disable underline for sub-links */
</style>