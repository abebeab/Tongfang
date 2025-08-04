<template>
  <div id="app">
    <!-- The Global Loading Indicator (from the previous fix) -->
    <GlobalLoadingIndicator :is-loading="isRouteLoading" />

    <!-- 
      RESTORED: The header now listens for the @toggle-search event again.
    -->
    <AppHeader @toggle-search="isSearchActive = !isSearchActive" />

    <!-- 
      RESTORED: The entire search overlay div and its logic are back.
    -->
    <div class="search-overlay" :class="{ 'active': isSearchActive }" @click.self="isSearchActive = false">
      <div class="search-dialog">
        <div class="search-bar-container">
            <i class="fas fa-search search-icon-inside"></i>
            <input type="text" placeholder="What are you looking for?" class="search-input" autofocus>
        </div>
        <button class="close-search-btn" @click="isSearchActive = false" aria-label="Close search">
            <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    
    <!-- The main content area that correctly pushes the footer down -->
    <main>
      <router-view/>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import GlobalLoadingIndicator from './components/GlobalLoadingIndicator.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    GlobalLoadingIndicator,
  },
  data() {
    return {
      isRouteLoading: false, // For the global loading bar
      isSearchActive: false, // RESTORED: The state for the search overlay
    }
  },
  created() {
    // This logic controls the loading bar and is correct.
    this.$router.beforeEach((to, from, next) => {
      this.isRouteLoading = true;
      next();
    });
    this.$router.afterEach(() => {
      setTimeout(() => {
        this.isRouteLoading = false;
      }, 200);
    });
  },
  // RESTORED: The watcher to lock the body scroll when the search overlay is active.
  watch: {
    isSearchActive(newValue) {
      if (newValue) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
};
</script>

<style>
/* --- Main Application Layout (Sticky Footer Fix) --- */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}

/* --- Search Overlay Styles (Restored) --- */
.search-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 15vh;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.search-overlay.active {
  opacity: 1;
  visibility: visible;
}

.search-dialog {
  position: relative;
  width: 100%;
  max-width: 700px;
  transform: scale(0.95);
  transition: transform 0.4s ease;
}

.search-overlay.active .search-dialog {
  transform: scale(1);
}

.search-bar-container {
  position: relative;
}

.search-icon-inside {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 1.3rem;
}

.search-input {
  width: 100%;
  height: 70px;
  padding: 0 80px 0 70px;
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  outline: none;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  box-sizing: border-box;
}

.close-search-btn {
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.3s;
}

.close-search-btn:hover {
  color: var(--primary-color);
  transform: translateY(-50%) rotate(90deg);
}

@media (max-width: 768px) {
  .search-input {
    font-size: 1.1rem;
    height: 60px;
  }
  .search-dialog {
    padding: 0 20px;
    box-sizing: border-box;
  }
}
</style>