<template>
  <div v-if="categoryData" class="category-detail-page">
    <!-- Hero Section -->
    <section class="detail-hero" :style="{ backgroundImage: `url(${categoryData.hero.image})` }">
      <div class="hero-overlay-gradient"></div>
      <div class="hero-content-detail">
        <h1>{{ categoryData.hero.title }}</h1>
        <p>{{ categoryData.hero.subtitle }}</p>
        <button class="cta-button primary" @click="scrollToProducts">Learn More</button>
      </div>
    </section>

    <div class="page-container main-content-area">
      <!-- Intro and Sub-Categories Sections -->
      <section class="intro-section">
        <h2>{{ categoryData.name }}</h2>
        <p>{{ categoryData.introduction }}</p>
      </section>

      <section class="sub-categories-section">
        <h3>Product categories</h3>
        <div class="sub-category-cards">
          <div v-for="sub in categoryData.subCategories" :key="sub.name" class="sub-category-card">
            <img :src="sub.image" :alt="sub.name" />
            <div class="sub-category-info">
              <h4>{{ sub.name }}</h4>
              <p>{{ sub.description }}</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Main Product Listing with Sidebar -->
      <div class="product-listing-layout" id="product-listing">
        <aside class="filter-sidebar">
          <h4>Search List</h4>
          <div class="search-box">
            <input type="text" v-model="searchTerm" placeholder="Search Product Models" />
            <i class="fas fa-search"></i>
          </div>
          <div class="filter-group">
            <h5 @click="toggleFilter('subcategory')">
              Subcategory <i :class="['fas', filtersOpen.subcategory ? 'fa-minus' : 'fa-plus']"></i>
            </h5>
            <ul v-show="filtersOpen.subcategory">
              <li v-for="sub in categoryData.subCategories" :key="sub.name">
                <input type="checkbox" :id="sub.name" :value="sub.name" v-model="activeSubcategories" />
                <label :for="sub.name">{{ sub.name }}</label>
              </li>
            </ul>
          </div>
        </aside>

        <main class="product-grid-area">
          <div class="grid-header">
            <span>{{ filteredProducts.length }} Products Matches</span>
          </div>
          <div class="product-grid">
            <div 
              v-for="product in paginatedProducts" 
              :key="product.id"
              class="product-grid-item-wrapper"
            >
              <router-link :to="`/products/${product.id}`" class="product-link-area"></router-link>
              <ProductGridItem 
                :product="product"
                :is-compared="comparisonList.some(p => p.id === product.id)"
                @toggle-compare="handleToggleCompare"
              />
            </div>
          </div>
          <!-- FIX: Corrected the typo from class. to class= -->
          <div class="pagination">
             <button @click="prevPage" :disabled="currentPage === 1">&lt;</button>
             <span>Page {{ currentPage }} of {{ totalPages }}</span>
             <button @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
          </div>
        </main>
      </div>

       <!-- Application Scenarios Section -->
       <section class="application-scenarios">
        <h2>Application scenarios</h2>
        <div class="scenario-grid">
          <div class="scenario-card" v-for="scenario in categoryData.applicationScenarios" :key="scenario.name">
            <img :src="scenario.image" :alt="scenario.name">
            <div class="scenario-name">{{ scenario.name }}</div>
          </div>
        </div>
      </section>
    </div>
    
    <!-- The new ComparisonBar component -->
    <ComparisonBar 
      :products="comparisonList" 
      @remove="handleToggleCompare"
      @clear="comparisonList = []"
    />
  </div>
  <div v-else-if="loading" class="loading-state">Loading Category...</div>
  <div v-else class="error-state">
    <h2>Category Not Found</h2>
    <p>The requested product category could not be found.</p>
    <router-link to="/products" class="cta-button">Back to Products</router-link>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import ProductGridItem from '@/components/ProductGridItem.vue';
import ComparisonBar from '@/components/ComparisonBar.vue';

export default {
  name: 'ProductCategoryDetailView',
  components: { ProductGridItem, ComparisonBar },
  data() {
    return {
      categoryData: null,
      loading: true,
      searchTerm: '',
      activeSubcategories: [],
      filtersOpen: { subcategory: true, },
      currentPage: 1,
      itemsPerPage: 9,
      comparisonList: [],
    };
  },
  computed: {
    filteredProducts() {
      if (!this.categoryData) return [];
      let products = this.categoryData.products;
      if (this.searchTerm) {
        products = products.filter(p => p.model.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
      if (this.activeSubcategories.length > 0) {
        products = products.filter(p => this.activeSubcategories.includes(p.subCategory));
      }
      return products;
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredProducts.slice(start, end);
    }
  },
  methods: {
    async fetchCategoryData() {
      try {
        this.loading = true;
        const slug = this.$route.params.categorySlug;
        
        // Check if the method exists
        if (ApiService.fetchCategoryDetails && typeof ApiService.fetchCategoryDetails === 'function') {
          this.categoryData = await ApiService.fetchCategoryDetails(slug);
        } else {
          console.error('fetchCategoryDetails method not found in ApiService');
          this.categoryData = null;
        }
      } catch (error) {
        console.error('Error fetching category data:', error);
        this.categoryData = null;
      } finally {
        this.loading = false;
      }
    },
    toggleFilter(filter) {
      this.filtersOpen[filter] = !this.filtersOpen[filter];
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    scrollToProducts() {
      const el = document.getElementById('product-listing');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    handleToggleCompare(product) {
      const index = this.comparisonList.findIndex(p => p.id === product.id);
      if (index > -1) {
        this.comparisonList.splice(index, 1);
      } else {
        if (this.comparisonList.length < 4) {
          this.comparisonList.push(product);
        } else {
          alert('You can only compare up to 4 products at a time.');
        }
      }
    },
  },
  watch: {
    '$route.params.categorySlug': 'fetchCategoryData', // Re-fetch data when route changes
    activeSubcategories() { this.currentPage = 1; },
    searchTerm() { this.currentPage = 1; },
  },
  created() {
    this.fetchCategoryData();
  }
};
</script>

<style scoped>
/* All styles are correct and unchanged */
.product-grid-item-wrapper {
  position: relative;
}
.product-link-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px); 
  z-index: 1; 
}
.detail-hero { position: relative; height: 450px; background-size: cover; background-position: center; color: var(--white-color); display: flex; align-items: center; padding: 0 5%; }
.hero-overlay-gradient { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(90deg, #0d244f 10%, rgba(13, 36, 79, 0.5) 50%, transparent 100%); }
.hero-content-detail { position: relative; z-index: 2; max-width: 500px; }
.hero-content-detail h1 { font-size: 2.5rem; margin-bottom: 15px; }
.hero-content-detail p { font-size: 1.1rem; opacity: 0.9; margin-bottom: 25px; }
.main-content-area { padding-top: 50px; padding-bottom: 50px; }
.intro-section { text-align: center; max-width: 800px; margin: 0 auto 60px auto; }
.intro-section h2 { font-size: 2rem; margin-bottom: 15px; color: var(--primary-color); }
.intro-section p { color: var(--text-light); line-height: 1.7; }
.sub-categories-section { margin-bottom: 60px; }
.sub-categories-section h3 { font-size: 1.5rem; color: var(--primary-color); margin-bottom: 20px; }
.sub-category-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 20px; }
.sub-category-card { display: flex; gap: 20px; align-items: center; background: #f9fafb; border: 1px solid var(--border-color); border-radius: 8px; padding: 20px; }
.sub-category-card img { width: 80px; height: 80px; object-fit: contain; flex-shrink: 0; }
.sub-category-card h4 { margin: 0 0 5px 0; font-size: 1.1rem; }
.sub-category-card p { margin: 0; color: var(--text-light); font-size: 0.9rem; }
.product-listing-layout { display: grid; grid-template-columns: 280px 1fr; gap: 40px; }
.filter-sidebar { border-right: 1px solid var(--border-color); padding-right: 30px; }
.filter-sidebar h4 { font-size: 1.2rem; margin-bottom: 20px; }
.search-box { position: relative; margin-bottom: 20px; }
.search-box input { width: 100%; padding: 10px 35px 10px 10px; border-radius: 6px; border: 1px solid var(--border-color); }
.search-box i { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #aaa; }
.filter-group h5 { display: flex; justify-content: space-between; align-items: center; cursor: pointer; margin-bottom: 15px; font-size: 1rem; }
.filter-group ul { list-style: none; padding: 0; margin: 0; }
.filter-group li { margin-bottom: 10px; }
.filter-group label { margin-left: 8px; }
.grid-header { margin-bottom: 20px; color: var(--text-light); }
.product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.pagination { display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 40px; }
.pagination button { padding: 8px 12px; border: 1px solid var(--border-color); background: var(--white-color); cursor: pointer; }
.pagination button:disabled { cursor: not-allowed; opacity: 0.5; }
.application-scenarios { margin-top: 80px; text-align: center; }
.application-scenarios h2 { font-size: 2rem; margin-bottom: 40px; }
.scenario-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
.scenario-card { border-radius: 8px; overflow: hidden; }
.scenario-card img { width: 100%; height: 200px; object-fit: cover; display: block; }
.scenario-name { background: #f1f1f1; padding: 15px; font-weight: 500; }
.loading-state { text-align: center; padding: 80px; font-size: 1.2rem; color: var(--text-light); }
.error-state { text-align: center; padding: 80px; }
.error-state h2 { color: var(--primary-color); margin-bottom: 20px; }
.error-state p { color: var(--text-light); margin-bottom: 30px; }
@media (max-width: 992px) {
  .product-listing-layout { grid-template-columns: 1fr; }
  .filter-sidebar { border-right: none; border-bottom: 1px solid var(--border-color); padding-right: 0; padding-bottom: 30px; margin-bottom: 30px; }
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .sub-category-cards { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .product-grid { grid-template-columns: 1fr; }
}
</style>