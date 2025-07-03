<template>
  <section id="home">
    <div class="home-overlay"></div>
    <div class="home-content">
      <h1 class="home-title">Moving Forward</h1>
      <p class="home-subtitle">
        Integrating Tomorrow's Buildings, Today.
      </p>
      <p class="home-description">
        Tongfang specializes in advanced Building Management Integration Systems (BMIS), delivering efficiency, security, and automation for the next generation of smart infrastructure.
      </p>
      <a href="#services" class="cta-button">Discover Our Solutions</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeComponent',
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  position: relative;
  color: var(--white-color);
  /* Use a professional background image of a smart building or abstract tech */
  background: url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop') no-repeat center center/cover;
}

.home-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(10, 37, 64, 0.85), rgba(0, 209, 178, 0.6));
}

.home-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 0 20px;
  animation: fadeIn 1.5s ease-in-out;
}

.home-title {
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.home-subtitle {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.home-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.cta-button {
  display: inline-block;
  padding: 15px 35px;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--white-color);
  background-color: var(--secondary-color);
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 209, 178, 0.3);
}

.cta-button:hover {
  background-color: var(--white-color);
  color: var(--primary-color);
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .home-title { font-size: 3rem; }
  .home-subtitle { font-size: 1.4rem; }
}
</style>