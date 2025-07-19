<template>
  <div id="app">
    <!-- 
      The header component now emits an event called 'toggle-search'.
      We listen for that event here using '@toggle-search' and run the code
      to change the value of 'isSearchActive'.
    -->
    <AppHeader @toggle-search="isSearchActive = !isSearchActive" />

    <!-- 
      This is the Search Overlay. It is always in the HTML,
      but it is hidden by default with CSS. We add the 'active' class
      based on the 'isSearchActive' data property to make it visible.
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
    
    <!-- This is where Vue Router renders the current page (Home, About, etc.) -->
    <main>
      <router-view/>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  // We add a 'data' property to this component to hold the state
  // of whether the search overlay is open or closed.
  data() {
    return {
      isSearchActive: false,
    }
  },
  // We use a 'watch' property to perform an action whenever
  // a data property changes. In this case, when 'isSearchActive' changes,
  // we want to prevent the main page from scrolling in the background.
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
/* 
  These styles are for the Search Overlay feature. 
  You can keep them here or move them to your global 'src/assets/main.css' file.
*/
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

/* Responsive styles for the search bar */
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