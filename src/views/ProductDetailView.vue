<template>
  <div class="page-container" v-if="product">
    <!-- Main Product Section Layout -->
    <div class="product-detail-layout">
      
      <!-- Left Column: Large Product Image -->
      <div class="product-image-gallery">
        <img :src="product.image" :alt="product.name" class="main-product-image">
      </div>

      <!-- Right Column: Product Details -->
      <div class="product-details-content">
        <router-link to="/products" class="back-link">← Back to All Products</router-link>
        
        <span class="product-brand">{{ product.brand }}</span>
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="product-model">Model: {{ product.model }}</p>
        
        <hr class="divider" />

        <h3>Key Features</h3>
        <ul class="feature-list">
          <li v-for="feature in product.features" :key="feature">
            {{ feature }}
          </li>
        </ul>

        <router-link to="/contact" class="cta-button">Request a Quote</router-link>
      </div>
    </div>

    <!-- Full-Width Technical Specifications Section -->
    <div class="product-specs-section">
      <h2 class="specs-section-title">Technical Specifications</h2>
      <div class="specs-table-container">
        <table class="specs-table">
          <tbody>
            <tr v-for="(value, key) in product.specs" :key="key">
              <td class="spec-key">{{ key }}</td>
              <td class="spec-value">{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
  <div v-else-if="loading" class="page-container loading-state">
    <p>Loading product details...</p>
  </div>
  <div v-else class="page-container error-state">
    <h2>Product Not Found</h2>
    <p>The requested product could not be found.</p>
    <router-link to="/products" class="cta-button">Back to Products</router-link>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';

export default {
  name: 'ProductDetailView',
  data() {
    return {
      product: null,
      loading: true,
    };
  },
  async created() {
    try {
      this.loading = true;
      const productId = this.$route.params.id;
      
      // Check if the method exists
      if (ApiService.findProductById && typeof ApiService.findProductById === 'function') {
        this.product = await ApiService.findProductById(productId);
      } else {
        console.error('findProductById method not found in ApiService');
        this.product = null;
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
      this.product = null;
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
/* Main Layout */
.product-detail-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr; /* Image column is slightly smaller */
  gap: 50px;
  align-items: flex-start;
  margin-bottom: 60px;
}

/* Image Gallery (Left Column) */
.product-image-gallery .main-product-image {
  width: 100%;
  border-radius: 16px;
  background-color: var(--light-bg-color);
  box-shadow: 0 10px 30px var(--shadow-color);
  border: 1px solid var(--border-color);
}

/* Product Details (Right Column) */
.product-details-content {
  position: sticky;
  top: 140px; /* Adjust based on header height */
}
.back-link {
  display: inline-block;
  margin-bottom: 15px;
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
.back-link:hover {
  color: var(--primary-color);
}
.product-brand {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--secondary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.product-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 5px 0;
  line-height: 1.2;
}
.product-model {
  font-size: 1.1rem;
  color: var(--text-light);
  margin: 0 0 20px 0;
}
.divider {
  border: 0;
  height: 1px;
  background-color: var(--border-color);
  margin: 20px 0;
}
.product-details-content h3 {
  font-size: 1.4rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}
.feature-list li {
  padding-left: 30px;
  margin-bottom: 12px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-dark);
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F59805" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>') no-repeat left center;
}
.cta-button {
  display: inline-block;
  text-decoration: none;
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 15px 30px;
  border-radius: 8px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
}

/* Specifications Section */
.product-specs-section {
  padding: 50px 0;
  background-color: var(--light-bg-color);
  border-radius: 16px;
  margin: 40px 0;
}
.specs-section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
}
.specs-table-container {
  max-width: 800px;
  margin: 0 auto;
  background: var(--white-color);
  border-radius: 12px;
  box-shadow: 0 5px 25px var(--shadow-color);
  overflow: hidden;
}
.specs-table {
  width: 100%;
  border-collapse: collapse;
}
.specs-table tr:nth-child(even) {
  background-color: #fcfdfe;
}
.specs-table td {
  padding: 18px 25px;
  border-bottom: 1px solid var(--border-color);
  font-size: 1rem;
}
.specs-table tr:last-child td {
  border-bottom: none;
}
.spec-key {
  font-weight: 600;
  color: var(--primary-color);
  width: 40%;
}
.spec-value {
  color: var(--text-light);
}

/* Loading State & Responsive */
.loading-state {
  text-align: center;
  padding: 80px;
  font-size: 1.2rem;
  color: var(--text-light);
}

.error-state {
  text-align: center;
  padding: 80px;
}

.error-state h2 {
  color: var(--primary-color);
  margin-bottom: 20px;
}

.error-state p {
  color: var(--text-light);
  margin-bottom: 30px;
}

@media (max-width: 900px) {
  .product-detail-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .product-details-content {
    position: static; /* Remove sticky positioning on mobile */
  }
  .product-title {
    font-size: 2.2rem;
  }
}
</style>