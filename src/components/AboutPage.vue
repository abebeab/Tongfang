<template>
  <section id="about">
    <div class="about-container">
      <div class="about-content">
        <h2 class="section-title">The Future of Building Management</h2>
        <p class="section-subtitle">We are Tongfang: Innovators in System Integration</p>
        <p>
          At Tongfang System Integrated PLC, our name embodies our core philosophy: **"Moving Forward."** We are driven by a relentless pursuit of progress, pushing the boundaries of technology to create smarter, more efficient, and secure building environments.
        </p>
        <p>
          Our expertise lies in designing and implementing comprehensive Building Management Integration Systems (BMIS). We unify complex systems—from security and surveillance to energy management and automation—into a single, intelligent, and easy-to-manage platform. Our goal is to empower our clients with cutting-edge solutions that reduce operational costs, enhance safety, and provide an unparalleled user experience.
        </p>
      </div>
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1581092921445-95a22a453e95?q=80&w=2787&auto=format&fit=crop" alt="Technology and Engineering">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage', // <-- Change this line
};
</script>

<style scoped>
#about {
  padding: 80px 20px;
  background-color: var(--white-color);
}

.about-container {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-content {
  flex: 1.2;
}

.section-title {
  font-size: 2.8rem;
  color: var(--primary-color);
  font-weight: 700;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--secondary-color);
  font-weight: 600;
  margin-bottom: 30px;
}

.about-content p {
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
}

.about-image {
  flex: 1;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

@media (max-width: 992px) {
  .about-container {
    flex-direction: column-reverse;
  }
  .section-title {
    font-size: 2.2rem;
  }
}
</style>