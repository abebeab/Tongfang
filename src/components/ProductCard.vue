<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-content">
      <span class="product-category">{{ product.category }}</span>
      <h4 class="product-name">{{ product.name }}</h4>
      <p class="product-model">Model: {{ product.model }}</p>
      <router-link :to="`/products/${product.id}`" class="details-button">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--shadow-color);
}
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  background-color: var(--light-bg-color);
}
.product-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.product-category {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--secondary-color);
  text-transform: uppercase;
  margin-bottom: 5px;
}
.product-name {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 0 0 5px 0;
}
.product-model {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0 0 20px 0;
  flex-grow: 1;
}
.details-button {
  text-align: center;
  text-decoration: none;
  background: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: auto;
}
.details-button:hover {
  background: var(--secondary-color);
  color: var(--white-color);
}
</style>