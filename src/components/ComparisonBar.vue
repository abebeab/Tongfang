<template>
  <transition name="slide-up">
    <div v-if="products.length > 0" class="comparison-bar">
      <div class="comparison-container">
        <div class="comparison-items">
          <div v-for="product in products" :key="product.id" class="item-card">
            <img :src="product.image" :alt="product.model" class="item-image">
            <span class="item-model">{{ product.model }}</span>
            <button class="remove-item" @click="$emit('remove', product)" aria-label="Remove item">&times;</button>
          </div>
          <div v-for="i in (4 - products.length)" :key="`placeholder-${i}`" class="item-placeholder">
            <span>Add Product</span>
          </div>
        </div>
        <div class="comparison-actions">
          <button class="compare-btn" :disabled="products.length < 2">
            Compare ({{ products.length }}/4)
          </button>
          <button class="clear-btn" @click="$emit('clear')">Clear All</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ComparisonBar',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  emits: ['remove', 'clear'],
};
</script>

<style scoped>
.comparison-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--primary-color);
  color: var(--white-color);
  z-index: 1100;
  box-shadow: 0 -5px 20px rgba(0,0,0,0.2);
  border-top: 3px solid var(--secondary-color);
}
.comparison-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comparison-items {
  display: flex;
  gap: 15px;
}
.item-card, .item-placeholder {
  width: 120px;
  height: 70px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px dashed rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  padding: 8px;
  position: relative;
}
.item-card {
  border-style: solid;
}
.item-placeholder {
  justify-content: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}
.item-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
}
.item-model {
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.2;
}
.remove-item {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 1rem;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}
.remove-item:hover {
  transform: scale(1.1);
}
.comparison-actions {
  display: flex;
  gap: 15px;
}
.compare-btn, .clear-btn {
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}
.compare-btn {
  background-color: var(--secondary-color);
  color: white;
}
.compare-btn:disabled {
  background-color: #777;
  cursor: not-allowed;
  opacity: 0.6;
}
.clear-btn {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}
.clear-btn:hover {
  background-color: white;
  color: var(--primary-color);
}
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
}
</style>