<template>
  <div class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-badge">Moving Forward</div>
      <h1 class="hero-title">The Future of Building Management, Simplified.</h1>
      <p class="hero-subtitle">We deliver smart, integrated solutions that enhance efficiency, security, and intelligence for modern infrastructure.</p>
      <a href="#products" class="hero-cta">Learn More</a>
    </div>
  </div>
</template>
<script>
export default { name: 'HeroSlider' };
</script>
<style scoped>
.hero { display: flex; align-items: center; justify-content: center; height: 600px; text-align: center; color: var(--white-color); position: relative; background: url('https://images.unsplash.com/photo-1604357209793-f5d6f9e47385?q=80&w=2832&auto=format&fit=crop') no-repeat center center/cover; }
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to top, rgba(26, 32, 44, 0.8), rgba(26, 32, 44, 0.4)); }
.hero-content { position: relative; z-index: 2; max-width: 800px; padding: 20px; }
.hero-badge { display: inline-block; background-color: rgba(245, 152, 5, 0.1); border: 1px solid rgba(245, 152, 5, 0.5); color: #ffdca8; padding: 8px 20px; border-radius: 50px; font-weight: 600; margin-bottom: 20px; }
.hero-title { font-size: 3.2rem; font-weight: 700; margin-bottom: 1rem; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(0,0,0,0.3); }
.hero-subtitle { font-size: 1.2rem; font-weight: 400; margin-bottom: 2.5rem; opacity: 0.9; max-width: 600px; margin-left: auto; margin-right: auto; }
.hero-cta { display: inline-block; padding: 16px 38px; font-size: 1.1rem; font-weight: 500; color: var(--white-color); background-color: var(--secondary-color); text-decoration: none; border-radius: 8px; transition: all 0.3s ease; }
.hero-cta:hover { background-color: #d17f00; transform: translateY(-3px); }
</style>