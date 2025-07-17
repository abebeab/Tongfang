<template>
  <section id="products" class="section-container">
    <h2 class="section-title">Our Core Products</h2>
    <p class="section-subtitle">
      We provide a curated selection of enterprise-grade hardware and software, forming the backbone of our integrated solutions.
    </p>

    <div class="products-grid">
      <!-- Product Categories -->
      <div class="product-category-card">
        <div class="category-icon"><i class="fas fa-desktop"></i></div>
        <h3 class="category-title">Computing Devices</h3>
        <p>Industrial PCs, Servers, Workstations</p>
      </div>
      <div class="product-category-card">
        <div class="category-icon"><i class="fas fa-network-wired"></i></div>
        <h3 class="category-title">Networking Equipment</h3>
        <p>Routers, Switches, Firewalls</p>
      </div>
      <div class="product-category-card">
        <div class="category-icon"><i class="fas fa-video"></i></div>
        <h3 class="category-title">Surveillance & Security</h3>
        <p>IP Cameras, NVR, Access Control</p>
      </div>
      <div class="product-category-card">
        <div class="category-icon"><i class="fas fa-cogs"></i></div>
        <h3 class="category-title">Automation Devices</h3>
        <p>PLCs, HMIs, Smart Sensors</p>
      </div>
       <div class="product-category-card">
        <div class="category-icon"><i class="fas fa-broadcast-tower"></i></div>
        <h3 class="category-title">IoT Devices</h3>
        <p>Smart Energy Meters, Remote Monitoring Kits</p>
      </div>
      <div class="product-category-card-special">
         <h3 class="category-title">Need a specific product?</h3>
         <p>Download our full catalogs or contact us for custom hardware sourcing.</p>
         <a href="#contact" class="details-button">Inquire Now</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductsSection',
};
</script>

<style scoped>
#products {
  background-color: var(--white-color);
}
.products-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.product-category-card, .product-category-card-special {
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
}
.product-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
  border-color: var(--secondary-color);
}
.category-icon {
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
}
.category-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0 0 10px 0;
}
.product-category-card p {
  font-size: 1rem;
  color: var(--text-light);
  line-height: 1.6;
  margin: 0;
}
.product-category-card-special {
    background-color: var(--primary-color);
    color: var(--white-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.product-category-card-special .category-title {
    color: var(--white-color);
}
.product-category-card-special p {
    color: rgba(255,255,255,0.8);
    margin-bottom: 20px;
}
.details-button {
  margin-top: auto;
  padding: 12px 25px;
  background-color: var(--secondary-color);
  color: var(--white-color);
  font-weight: 600;
  border: 2px solid var(--secondary-color);
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
}
.details-button:hover {
  background-color: #d17f00;
  border-color: #d17f00;
}
</style>