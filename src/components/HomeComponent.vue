<template>
  <section id="home">
    <div class="home-overlay"></div>
    <div class="home-content">
      <h1 class="home-title">BMS System Integration</h1>
      
      <!-- UPDATED SLOGAN -->
      <p class="home-slogan">
        "Moving Forward"
      </p>
      
      <div class="home-cta-buttons">
        <a @click="scrollToSection('#solutions')" class="cta-button primary">🔹 Explore Our Solutions</a>
        <a @click="scrollToSection('#contact')" class="cta-button secondary">🔹 Talk to Our Experts</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeComponent',
  methods: {
    // This method is needed for the CTA buttons to work
    scrollToSection(id) {
      const section = document.querySelector(id);
      if (section) {
        const headerOffset = 110;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
#home {
  display: flex; justify-content: center; align-items: center; text-align: center; height: calc(100vh - 110px); min-height: 600px;
  position: relative; color: var(--white-color); background: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop') no-repeat center center/cover;
}
.home-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(45deg, rgba(13, 36, 79, 0.9), rgba(13, 36, 79, 0.7)); }
.home-content { position: relative; z-index: 2; max-width: 950px; padding: 0 20px; animation: fadeIn 1.5s ease-in-out; }
.home-title { font-size: 3.5rem; font-weight: 700; margin-bottom: 1.5rem; letter-spacing: -1px; }

/* NEW SLOGAN STYLE */
.home-slogan {
  font-size: 2rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  color: var(--secondary-color);
  text-shadow: 0 1px 5px rgba(0,0,0,0.2);
}

.home-cta-buttons { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
.cta-button { display: inline-block; padding: 16px 35px; font-size: 1.1rem; font-weight: 600; text-decoration: none; border-radius: 8px; transition: all 0.3s ease; box-shadow: 0 5px 20px rgba(0,0,0, 0.2); cursor: pointer; }
.cta-button.primary { background-color: var(--secondary-color); color: var(--white-color); }
.cta-button.primary:hover { background-color: #d17f00; transform: translateY(-3px); }
.cta-button.secondary { background-color: transparent; color: var(--white-color); border: 2px solid var(--white-color); }
.cta-button.secondary:hover { background-color: var(--white-color); color: var(--primary-color); transform: translateY(-3px); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@media (max-width: 768px) { .home-title { font-size: 2.5rem; } .home-slogan { font-size: 1.5rem; } .home-cta-buttons { flex-direction: column; align-items: center; } }
</style>