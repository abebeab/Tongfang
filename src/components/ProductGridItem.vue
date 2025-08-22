<template>
  <div class="product-card-item">
    <div v-if="product.new" class="new-badge">NEW</div>
    <div class="product-image-container">
        <img :src="product.image" :alt="product.model">
    </div>
    <div class="product-info">
        <h5>{{ product.model }}</h5>
        <p>{{ product.name }}</p>
        <!-- FIX: This is now a controlled component that emits an event -->
        <div class="compare-box">
            <input 
              type="checkbox" 
              :id="`compare-${product.id}`"
              :checked="isCompared"
              @change="toggleCompare"
            >
            <label :for="`compare-${product.id}`">Compare</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGridItem',
  props: {
    product: {
      type: Object,
      required: true
    },
    // FIX: Receives its "compared" state from the parent
    isCompared: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-compare'],
  methods: {
    // FIX: Emits an event to the parent view instead of managing its own state
    toggleCompare() {
      this.$emit('toggle-compare', this.product);
    }
  }
}
</script>

<style scoped>
.product-card-item {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  text-align: center;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.3s;
}
.product-card-item:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.07);
}
.new-badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background-color: #e53935;
    color: white;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 3px 7px;
    border-radius: 4px;
}
.product-image-container {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
}
.product-image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
.product-info h5 {
    margin: 0 0 5px 0;
    font-size: 1rem;
    color: var(--primary-color);
}
.product-info p {
    font-size: 0.9rem;
    color: var(--text-light);
    margin: 0 0 15px 0;
    min-height: 2.7em; /* to align compare boxes */
}
.compare-box {
    text-align: left;
}
</style>