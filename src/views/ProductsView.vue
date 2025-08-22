<template>
  <div class="products-page">
    <section class="products-hero">
      <div class="hero-content">
        <h1 class="hero-title">Pioneering Security and Integrated Solutions</h1>
        <p class="hero-subtitle">The hardware and software backbone for your integrated solutions.</p>
      </div>
      <div class="hero-wave"></div>
    </section>

    <div class="page-container">
      <h2 class="section-title">Product Categories</h2>
    </div>

    <div class="page-container">
      <section
        v-for="(group, groupKey) in productGroups"
        :key="groupKey"
        :id="groupKey"
        class="categories-section"
      >
        <h2 class="group-title">{{ group.title }}</h2>
        <div class="category-grid">
          <!-- --- FIX 2: UPDATED THE LINK TO MATCH THE NEW ROUTE --- -->
          <router-link
            v-for="category in group.items"
            :key="category.name"
            :to="'/products/category/' + category.slug" 
            class="category-card"
          >
            <div class="category-image-wrapper">
              <img :src="category.image" :alt="category.name" class="category-image" />
            </div>
            <h3 class="category-name">{{ category.name }}</h3>
          </router-link>
        </div>
      </section>
    </div>

    <section class="related-links-section page-container">
      <h2 class="section-title">Related links</h2>
      <div class="links-grid">
        <router-link to="/solutions" class="related-link-card">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800"
            alt="Solutions"
          />
          <div class="link-card-overlay"></div>
          <h3>Solutions</h3>
        </router-link>
        <router-link to="/achievements" class="related-link-card">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
            alt="Success Stories"
          />
          <div class="link-card-overlay"></div>
          <h3>Success Stories</h3>
        </router-link>
        <router-link to="/about" class="related-link-card">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
            alt="Core Technologies"
          />
          <div class="link-card-overlay"></div>
          <h3>Core Technologies</h3>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
// Script remains unchanged
export default {
  name: 'ProductsView',
  data() {
    return {
      productGroups: {
        computing: {
          title: 'Computing Devices',
          items: [
            { name: 'HT-IPC Industrial PCs', slug: 'industrial-pcs', image: require('@/assets/images/products/jpg.jpg'), },
            { name: 'Power Distribution Units', slug: 'pdus', image: require('@/assets/images/products/distribution.jpg'), },
            { name: 'Integrated Management Software', slug: 'bms-software', image: require('@/assets/images/products/software.jpg'), },
          ],
        },
        surveillance: {
          title: 'Surveillance & Security',
          items: [
            { name: 'IP Network Cameras', slug: 'ip-cameras', image: require('@/assets/images/products/network-products.jpg'), },
            { name: 'HD Analog Cameras', slug: 'analog-cameras', image: require('@/assets/images/products/turbo-hd.jpg'), },
            { name: 'Thermal Imaging Systems', slug: 'thermal-systems', image: require('@/assets/images/products/thermal.png'), },
            { name: 'Intelligent Alarm Systems', slug: 'alarm-system', image: require('@/assets/images/products/alarm.png'), },
            { name: 'Security Inspection Gates', slug: 'inspection-gates', image: require('@/assets/images/products/inspection.jpg'), },
            { name: 'HiLook by TONGFANG', slug: 'hilook', image: require('@/assets/images/products/hilook.jpg'), },
          ],
        },
        automation: {
          title: 'Automation Devices',
          items: [
            { name: 'Smart Access Control', slug: 'access-control', image: require('@/assets/images/products/access-control.jpg'), },
            { name: 'Building Video Intercom', slug: 'video-intercom', image: require('@/assets/images/products/intercom.jpg'), },
            { name: 'Automated Speed Gates', slug: 'speed-gates', image: require('@/assets/images/products/turnstile.png'), },
            { name: 'Intelligent Traffic Control', slug: 'traffic-control', image: require('@/assets/images/products/traffic.png'), },
            { name: 'Parking Management Systems', slug: 'parking-management', image: require('@/assets/images/products/parking.jpg'), },
            { name: 'Perimeter Radar Detection', slug: 'radar-detection', image: require('@/assets/images/products/radar.png'), },
          ],
        },
        networking: {
          title: 'Networking Equipment',
          items: [
            { name: 'Enterprise Switches & Routers', slug: 'networking-hardware', image: require('@/assets/images/products/networking.png'), },
            { name: 'Audio & Sensing Devices', slug: 'audio-sensing', image: require('@/assets/images/products/audio.png'), },
            { name: 'Cabling & Accessories', slug: 'accessories', image: require('@/assets/images/products/accessories.jpg'), },
            { name: 'Central Control Displays', slug: 'display-control', image: require('@/assets/images/products/display.jpeg'), },
            { name: 'Commercial LED Displays', slug: 'led-displays', image: require('@/assets/images/products/led.png'), },
            { name: 'Interactive Smart Panels', slug: 'interactive-panels', image: require('@/assets/images/products/interactive-flat-panel.png'), },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
/* Styles remain unchanged */
.products-page { background-color: var(--white-color); }
.products-hero { background-color: #3103daea; color: var(--white-color); padding: 80px 40px; text-align: center; position: relative; overflow: hidden; }
.hero-title { font-size: 2.8rem; font-weight: 700; margin: 0 0 10px 0; }
.hero-subtitle { font-size: 1.2rem; font-weight: 400; opacity: 0.9; }
.hero-wave { position: absolute; bottom: 0; left: 0; width: 100%; height: 100px; background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3e%3cpath class='elementor-shape-fill' d='M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z' fill='%23fff'%3e%3c/path%3e%3c/svg%3e"); background-size: 100% 100%; }
.category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
.category-card { text-decoration: none; background-color: var(--white-color); border-radius: 12px; text-align: center; border: 1px solid transparent; padding: 20px; transition: all 0.3s ease; cursor: pointer; }
.category-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.12); border-color: var(--border-color); }
.category-image-wrapper { height: 180px; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; }
.category-image { max-width: 100%; max-height: 100%; object-fit: contain; }
.category-name { font-size: 1.1rem; font-weight: 500; color: var(--text-dark); }
.related-links-section { padding-bottom: 80px; }
.links-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
.related-link-card { position: relative; height: 250px; border-radius: 12px; overflow: hidden; color: var(--white-color); text-decoration: none; display: flex; align-items: flex-end; justify-content: flex-start; padding: 25px; transition: transform 0.3s ease; }
.related-link-card:hover { transform: translateY(-5px); }
.related-link-card img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.related-link-card:hover img { transform: scale(1.05); }
.link-card-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%); }
.related-link-card h3 { position: relative; z-index: 2; font-size: 1.5rem; font-weight: 600; }
.section-title { text-align: center; font-size: 2.2rem; font-weight: 600; color: var(--primary-color); margin-bottom: 15px; }
.categories-section:first-of-type { padding-top: 10px; }
.group-title { font-size: 2rem; font-weight: 600; color: var(--primary-color); margin-top: 0; margin-bottom: 30px; border-bottom: 2px solid var(--border-color); padding-bottom: 10px; }
</style>