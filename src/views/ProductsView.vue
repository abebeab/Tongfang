<template>
  <div class="page-container">
    <h1 class="section-title">Our Products</h1>
    <p class="section-subtitle">Explore our curated selection of enterprise-grade hardware, software, and the core components that form the backbone of our integrated solutions.</p>

    <div class="products-layout">
      <!-- Sidebar for Filters -->
      <aside class="products-sidebar">
        <h4>Categories</h4>
        <ul>
          <li 
            v-for="category in categories" 
            :key="category" 
            @click="filterByCategory(category)"
            :class="{ active: activeCategory === category }">
            {{ category }}
          </li>
        </ul>
      </aside>

      <!-- Main Product Grid -->
      <div class="products-grid-wrapper">
        <div v-if="isLoading" class="loader">Loading products...</div>
        <div v-else class="products-grid">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'ProductsView',
  components: { ProductCard },
  data() {
    return {
      products: [],
      categories: [],
      activeCategory: 'All Categories',
      isLoading: false,
    };
  },
  async created() {
    this.isLoading = true;
    this.categories = await ApiService.fetchProductCategories();
    this.products = await ApiService.fetchProducts();
    this.isLoading = false;
  },
  methods: {
    async filterByCategory(category) {
      this.isLoading = true;
      this.activeCategory = category;
      this.products = await ApiService.fetchProducts(category);
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.products-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 40px;
}
.products-sidebar h4 {
  font-size: 1.3rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
}
.products-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.products-sidebar li {
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}
.products-sidebar li:hover {
  background-color: var(--light-bg-color);
  color: var(--primary-color);
}
.products-sidebar li.active {
  background-color: var(--secondary-color);
  color: var(--white-color);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.loader {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
}
@media (max-width: 900px) {
  .products-layout { grid-template-columns: 1fr; }
  .products-sidebar ul { display: flex; flex-wrap: wrap; gap: 10px; }
}
</style>