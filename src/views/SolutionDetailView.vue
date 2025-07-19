<template>
  <div class="page-container" v-if="solution">
    <div class="solution-header">
      <router-link to="/solutions" class="back-link">← Back to Solutions</router-link>
      <h1 class="solution-title">{{ solution.title }}</h1>
    </div>

    <img :src="solution.image" :alt="solution.title" class="solution-main-image">

    <div class="solution-content">
      <h3>Overview</h3>
      <p>{{ solution.description }}</p>

      <h3>Related Products for this Solution</h3>
      <div class="products-grid">
         <!-- This is an advanced feature showing how to fetch related products -->
         <ProductCard v-for="product in relatedProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
   <div v-else class="page-container">
    <p>Loading solution...</p>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'SolutionDetailView',
  components: { ProductCard },
  data() {
    return {
      solution: null,
      relatedProducts: [],
    }
  },
  async created() {
    const slug = this.$route.params.slug;
    this.solution = await ApiService.findSolutionBySlug(slug);

    if (this.solution && this.solution.relatedProducts) {
      // Fetch the full product details for each related product ID
      const productPromises = this.solution.relatedProducts.map(id => ApiService.findProductById(id));
      this.relatedProducts = await Promise.all(productPromises);
    }
  }
}
</script>

<style scoped>
.solution-header { text-align: center; margin-bottom: 30px; }
.back-link { display: block; margin-bottom: 20px; color: var(--secondary-color); text-decoration: none; font-weight: 600; }
.solution-title { font-size: 2.5rem; margin: 0; color: var(--primary-color); }
.solution-main-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 40px;
}
.solution-content h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.solution-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-light);
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
}
</style>