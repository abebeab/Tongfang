<template>
  <div class="page-container" v-if="product">
    <div class="product-header">
      <router-link to="/products" class="back-link">← Back to Products</router-link>
      <h1 class="product-title">{{ product.name }}</h1>
      <p class="product-model">Model: {{ product.model }}</p>
    </div>

    <div class="product-layout">
      <div class="product-gallery">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="product-info">
        <h3>Key Features</h3>
        <ul>
          <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
        </ul>
      </div>
    </div>

    <div class="product-specs">
      <h3>Technical Specifications</h3>
      <table class="specs-table">
        <tbody>
          <tr v-for="(value, key) in product.specs" :key="key">
            <td>{{ key }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="page-container">
    <p>Loading product...</p>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';

export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const productId = this.$route.params.id;
    this.product = await ApiService.findProductById(productId);
  }
}
</script>

<style scoped>
.product-header { text-align: center; margin-bottom: 40px; }
.back-link { display: block; margin-bottom: 20px; color: var(--secondary-color); text-decoration: none; font-weight: 600; }
.product-title { font-size: 2.5rem; margin: 0; color: var(--primary-color); }
.product-model { font-size: 1.1rem; color: var(--text-light); }
.product-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.product-gallery img { width: 100%; border-radius: 12px; }
.product-info h3 { font-size: 1.5rem; color: var(--primary-color); margin-top: 0; }
.product-info ul { list-style: none; padding: 0; }
.product-info li { background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F59805" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>') no-repeat left center; padding-left: 30px; margin-bottom: 12px; font-size: 1rem; }
.product-specs h3 { font-size: 1.5rem; text-align: center; margin-bottom: 20px; }
.specs-table { width: 100%; border-collapse: collapse; }
.specs-table td { padding: 15px; border-bottom: 1px solid var(--border-color); }
.specs-table tr:nth-child(even) { background-color: var(--light-bg-color); }
.specs-table td:first-child { font-weight: 600; color: var(--primary-color); }

@media (max-width: 768px) {
  .product-layout { grid-template-columns: 1fr; }
}
</style>