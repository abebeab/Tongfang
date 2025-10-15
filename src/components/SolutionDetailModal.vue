<template>
  <transition name="modal-fade">
    <div v-if="visible" class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-dialog">
        <button class="modal-close-btn" @click="$emit('close')" aria-label="Close modal">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-content" v-if="solution">
          <div class="modal-image-wrapper">
            <img :src="solution.hero ? solution.hero.image : solution.image" :alt="solution.title" class="modal-image">
          </div>
          <div class="modal-details">
            <h2 class="modal-title">{{ solution.hero ? solution.hero.title : solution.title }}</h2>
            <p class="modal-description">{{ solution.introduction || solution.fullDescription || solution.description }}</p>
            
            <div v-if="solution.features || solution.benefits" class="modal-features">
              <h4>Key Benefits</h4>
              <ul>
                <li v-for="item in (solution.features || solution.benefits)" :key="item">{{ item }}</li>
              </ul>
            </div>
            
            <router-link :to="`/solutions/${solution.slug}`" class="cta-button" @click="$emit('close')">
              View Full Details <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SolutionDetailModal',
  props: {
    solution: {
      type: Object,
      default: null,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 36, 79, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-dialog {
  background: var(--white-color);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  display: flex;
}
.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(0,0,0,0.3);
  color: white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 10;
}
.modal-close-btn:hover {
  background: var(--secondary-color);
  transform: rotate(90deg);
}
.modal-content {
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: 100%;
}
.modal-image-wrapper {
  overflow: hidden;
}
.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.modal-details {
  padding: 40px;
  overflow-y: auto;
}
.modal-title {
  font-size: 2rem;
  color: var(--primary-color);
  margin: 0 0 15px 0;
}
.modal-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 25px;
}
.modal-features h4 {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}
.modal-features ul {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}
.modal-features li {
  padding-left: 25px;
  margin-bottom: 8px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2328a745" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>') no-repeat left center;
}
.cta-button {
  text-decoration: none;
}
.cta-button i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}
.cta-button:hover i {
  transform: translateX(5px);
}

/* Transitions */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.4s ease;
}
.modal-fade-enter-active .modal-dialog, .modal-fade-leave-active .modal-dialog {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-from .modal-dialog, .modal-fade-leave-to .modal-dialog {
  transform: scale(0.95) translateY(20px);
}

@media (max-width: 768px) {
  .modal-content { grid-template-columns: 1fr; }
  .modal-image-wrapper { height: 200px; }
  .modal-details { padding: 30px; }
  .modal-title { font-size: 1.6rem; }
}
</style>