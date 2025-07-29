<template>
  <header class="header" :class="{ 'scrolled': isHeaderScrolled }">
    <!-- TOP BAR -->
    <div class="header-top-bar">
      <div class="top-bar-container">
        <div class="contact-info-top">
          <span><i class="fas fa-phone-alt"></i> +251-911-249-722</span>
          <!-- The class is still here, but the CSS rule to hide it is now gone -->
          <span class="desktop-only-text"><i class="fas fa-envelope"></i> info@tongfangbms.com</span>
        </div>
        <div class="language-selector" @mouseenter="isLangOpen = true" @mouseleave="isLangOpen = false">
          <div class="current-language">
            <i class="fas fa-globe"></i> <span>EN</span>
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

      <!-- Hamburger Menu Button -->
      <button class="mobile-nav-toggle" ref="mobileToggle" @click="isMobileNavOpen = !isMobileNavOpen" aria-label="Toggle navigation">
        <i :class="isMobileNavOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- DESKTOP Navigation -->
      <nav class="navbar-desktop" ref="navLinksContainer">
        <ul class="nav-links">
          <li
            v-for="link in navLinks"
            :key="link.name"
            @mouseenter="activeDropdown = link.name"
            @mouseleave="activeDropdown = null"
          >
            <router-link :to="link.path">
              {{ link.name }}
              <i v-if="link.megaMenu || link.simpleDropdown" class="fas fa-chevron-down nav-arrow"></i>
            </router-link>

            <!-- MEGA MENU DROPDOWN (for Solutions) -->
            <div class="mega-menu" v-if="link.megaMenu && activeDropdown === link.name">
              <div class="mega-menu-content">
                <div class="mega-menu-column" v-for="category in link.megaMenu.categories" :key="category.title">
                  <h4>{{ category.title }}</h4>
                  <ul>
                    <li v-for="subLink in category.links" :key="subLink.name" @click="activeDropdown = null">
                      <router-link :to="subLink.path">
                        <i :class="subLink.icon"></i> {{ subLink.name }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- SIMPLE DROPDOWN (for Products) -->
            <div class="simple-dropdown" v-if="link.simpleDropdown && activeDropdown === link.name">
                <ul>
                    <li v-for="subLink in link.simpleDropdown.links" :key="subLink.name" @click="activeDropdown = null">
                      <router-link :to="subLink.path">
                        <i :class="subLink.icon"></i> {{ subLink.name }}
                      </router-link>
                    </li>
                </ul>
            </div>
          </li>
        </ul>
      </nav>

      <!-- MOBILE / TABLET Slide-out Navigation -->
      <nav class="navbar-mobile" ref="mobileNav" :class="{ 'active': isMobileNavOpen }">
        <ul class="nav-links-mobile">
          <li v-for="link in navLinks" :key="link.name" @click="handleMobileLinkClick">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
           <li class="mobile-only-actions">
                <router-link to="/login" class="action-icon mobile" aria-label="Login"><i class="fas fa-user"></i> Partner Login</router-link>
                <a href="#" class="action-icon mobile" aria-label="Search" @click.prevent="openSearch"><i class="fas fa-search"></i> Search</a>
            </li>
        </ul>
      </nav>
      
      <!-- Header Actions -->
      <div class="header-actions">
        <a href="#" class="action-icon" aria-label="Search" @click.prevent="$emit('toggle-search')"><i class="fas fa-search"></i></a>
        <div class="action-icon-wrapper">
          <router-link to="/login" class="action-icon" aria-label="Login"><i class="fas fa-user"></i></router-link>
          <div class="tooltip">Partner Login</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  emits: ['toggle-search'],
  data() {
    return {
      isMobileNavOpen: false, isHeaderScrolled: false, isLangOpen: false,
      activeDropdown: null,
      navLinks: [
        { name: 'About Us', path: '/about' },
        {
          name: 'Solutions', path: '/solutions',
          megaMenu: {
            categories: [
              { title: 'By Industry', links: [
                  { name: 'Smart Cities & Public Safety', path: '/solutions#solutions-by-industry', icon: 'fas fa-city' },
                  { name: 'Education & Smart Campus', path: '/solutions#solutions-by-industry', icon: 'fas fa-school' },
                  { name: 'Energy & Industrial Parks', path: '/solutions#solutions-by-industry', icon: 'fas fa-industry' },
              ]},
              { title: 'By Function', links: [
                  { name: 'Building Management', path: '/solutions#solutions-by-function', icon: 'fas fa-sitemap' },
                  { name: 'Security & Safety', path: '/solutions#solutions-by-function', icon: 'fas fa-shield-alt' },
                  { name: 'Energy Efficiency', path: '/solutions#solutions-by-function', icon: 'fas fa-leaf' },
              ]}
            ]
          }
        },
        {
          name: 'Products', path: '/products',
          simpleDropdown: {
            links: [
              { name: 'Computing Devices', path: '/products', icon: 'fas fa-desktop' },
              { name: 'Surveillance & Security', path: '/products', icon: 'fas fa-video' },
              { name: 'Automation Devices', path: '/products', icon: 'fas fa-cogs' },
              { name: 'Networking Equipment', path: '/products', icon: 'fas fa-network-wired' },
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
  watch: {
    '$route'() {
      this.isLangOpen = false;
      this.isMobileNavOpen = false;
      this.activeDropdown = null;
    }
  },
  methods: {
    handleScroll() { this.isHeaderScrolled = window.scrollY > 20; },
    handleMobileLinkClick() { if (this.isMobileNavOpen) { this.isMobileNavOpen = false; } },
    openSearch(){ this.isMobileNavOpen = false; this.$emit('toggle-search'); },
    handleClickOutside(event) {
      // Logic for desktop hover dropdowns
      const navContainer = this.$refs.navLinksContainer;
      if (this.activeDropdown && navContainer && !navContainer.contains(event.target)) {
        this.activeDropdown = null;
      }
      // Logic for mobile slide-out menu
      const mobileNav = this.$refs.mobileNav;
      const mobileToggle = this.$refs.mobileToggle;
      if (this.isMobileNavOpen) {
        if (mobileNav && !mobileNav.contains(event.target) && mobileToggle && !mobileToggle.contains(event.target)) {
          this.isMobileNavOpen = false;
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('click', this.handleClickOutside);
  }
};
</script>

<style scoped>
/* Base Styles */
.header { position: fixed; width: 100%; top: 0; z-index: 1000; transition: background-color 0.3s, box-shadow 0.3s; background-color: var(--white-color); }
.header.scrolled { box-shadow: 0 4px 15px var(--shadow-color); }
.header-top-bar { background-color: var(--primary-color); color: var(--white-color); padding: 0 40px; transition: all 0.3s ease; height: 40px; display: flex; align-items: center; }
.header.scrolled .header-top-bar { height: 0; padding-top: 0; padding-bottom: 0; opacity: 0; visibility: hidden; }
.top-bar-container { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; font-size: 0.85rem; }
.contact-info-top span { margin-right: 20px; }
.contact-info-top i { color: var(--secondary-color); margin-right: 8px; }
.header-main { display: flex; justify-content: space-between; align-items: center; height: 70px; padding: 0 40px; max-width: 1400px; margin: 0 auto; }
.logo-container { display: flex; align-items: center; gap: 12px; text-decoration: none; flex-shrink: 0; }
.logo-img { width: 45px; height: auto; }
.logo-text-group { display: flex; flex-direction: column; line-height: 1.1; }
.logo-text { font-size: 1.8rem; font-weight: 800; color: var(--primary-color); }
.logo-subtext { font-size: 0.8rem; letter-spacing: 0.5px; color: var(--text-light); }
.language-selector { position: relative; cursor: pointer; }
.current-language { display: flex; align-items: center; font-weight: 500; }
.dropdown-arrow { font-size: 0.7rem; margin-left: 8px; transition: transform 0.3s ease; }
.dropdown-arrow.open { transform: rotate(180deg); }
.language-dropdown { position: absolute; top: 120%; right: 0; background-color: var(--white-color); border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 10px 20px var(--shadow-color); list-style: none; padding: 10px 0; width: 160px; opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.3s ease; z-index: 1001; }
.language-dropdown.active { opacity: 1; visibility: visible; transform: translateY(0); }
.language-dropdown li a { display: block; padding: 10px 20px; color: var(--text-dark); text-decoration: none; }

/* Slide-out Menu (Mobile/Tablet) */
.mobile-nav-toggle { display: none; }
.navbar-mobile { position: fixed; top: 0; right: -100%; width: 300px; max-width: 90vw; height: 100vh; background-color: var(--white-color); box-shadow: -10px 0 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; padding: 100px 30px 30px; transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); z-index: 1001; }
.navbar-mobile.active { right: 0; }
.nav-links-mobile { list-style: none; padding: 0; margin: 0; width: 100%; }
.nav-links-mobile > li { width: 100%; padding: 10px 0; }
.nav-links-mobile a { text-decoration: none; font-size: 1.2rem; font-weight: 600; color: var(--primary-color); }
.mobile-only-actions { display: flex; flex-direction: column; width: 100%; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--border-color); gap: 20px; }
.mobile-only-actions .action-icon.mobile { font-size: 1.2rem; color: var(--text-dark); display: flex; align-items: center; gap: 15px; }
.mobile-only-actions .action-icon.mobile i { color: var(--secondary-color); width: 20px; }

/* Desktop Navigation */
.navbar-desktop { display: none; margin-left: auto; flex-grow: 1; justify-content: center; }
.nav-links { list-style: none; display: flex; align-items: center; gap: 35px; margin: 0; padding: 0; }
.nav-links > li { position: relative; padding: 26px 0; }
.nav-links a { text-decoration: none; font-size: 1rem; font-weight: 600; color: var(--primary-color); padding: 5px 0; position: relative; transition: color 0.3s; display: flex; align-items: center; gap: 8px; }
.nav-arrow { font-size: 0.7rem; transition: transform 0.3s ease; }
.nav-links > li:hover .nav-arrow { transform: rotate(180deg); }
.nav-links a::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; transform: translateX(-50%); background-color: var(--secondary-color); transition: width 0.3s ease; }
.nav-links a:hover::after, .nav-links a.router-link-exact-active::after { width: 100%; }
.nav-links a:hover, .nav-links a.router-link-exact-active { color: var(--secondary-color); }

/* Desktop Header Actions */
.header-actions { display: none; align-items: center; gap: 25px; position: relative; z-index: 1001; }
.action-icon { font-size: 1.2rem; color: var(--text-dark); text-decoration: none; transition: all 0.3s ease; }
.action-icon:hover { color: var(--secondary-color); transform: scale(1.1); }
.action-icon-wrapper { position: relative; }
.tooltip { position: absolute; top: 100%; left: 50%; transform: translateX(-50%) translateY(12px); background-color: var(--primary-color); color: var(--white-color); padding: 6px 12px; border-radius: 4px; font-size: 0.85rem; opacity: 0; visibility: hidden; transition: all 0.3s ease; pointer-events: none; }
.action-icon-wrapper:hover .tooltip { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(8px); }

/* Dropdown Styles */
.mega-menu, .simple-dropdown { position: absolute; top: 100%; left: 50%; background-color: var(--white-color); border-radius: 0 0 12px 12px; box-shadow: 0 15px 40px var(--shadow-color); border-top: 3px solid var(--secondary-color); opacity: 0; visibility: hidden; transform: translateX(-50%) translateY(10px); transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s; z-index: 1000; }
.nav-links > li:hover .mega-menu, .nav-links > li:hover .simple-dropdown { opacity: 1; visibility: visible; transform: translateX(-50%) translateY(0); }
.mega-menu { padding: 30px; width: max-content; }
.mega-menu-content { display: flex; gap: 40px; }
.mega-menu-column h4 { font-size: 1rem; font-weight: 700; color: var(--primary-color); margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border-color); padding-bottom: 10px; }
.mega-menu-column ul, .simple-dropdown ul { list-style: none; padding: 0; margin: 0; }
.mega-menu-column li a, .simple-dropdown li a { font-size: 0.95rem; font-weight: 500; color: var(--text-light); }
.mega-menu-column li a { padding: 8px 0; }
.mega-menu-column li a i { color: var(--secondary-color); width: 18px; text-align: center; }
.mega-menu-column li a::after, .simple-dropdown li a::after { display: none; }
.mega-menu-column li a:hover, .simple-dropdown li a:hover { color: var(--secondary-color); }
.simple-dropdown { padding: 15px; min-width: 250px; }
.simple-dropdown li a { display: flex; align-items: center; gap: 12px; padding: 12px 15px; border-radius: 6px; }
.simple-dropdown li a i { color: var(--secondary-color); width: 18px; text-align: center; }

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  .header-main { padding: 0 25px; }
  .mobile-nav-toggle { display: block; margin-left: auto; background: none; border: none; font-size: 1.5rem; color: var(--primary-color); cursor: pointer; z-index: 1002; }
  .navbar-desktop, .header-actions { display: none; }
}
@media (max-width: 480px) {
  .header-main { padding: 0 20px; }
  .header-top-bar { padding: 0 20px; font-size: 0.75rem; }
  /* --- THIS IS THE FIX --- */
  /* This CSS rule that was hiding the email has been removed. */
  /* .desktop-only-text { display: none; } */
  .logo-text { font-size: 1.5rem; }
  .logo-subtext { display: none; }
}
@media (min-width: 1025px) {
  .mobile-nav-toggle, .navbar-mobile { display: none; }
  .navbar-desktop, .header-actions { display: flex; }
}
</style>