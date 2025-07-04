<template>
  <section id="about">
    <div class="about-container">
      <div class="about-content">
        <h2 class="section-title">The Future of Building Management</h2>
        <p class="section-subtitle">We are Tongfang: Innovators in System Integration</p>
        <p>
          At Tongfang System Integrated PLC, our name embodies our core philosophy: <strong>"Moving Forward."</strong> We are driven by a relentless pursuit of progress, pushing the boundaries of technology to create smarter, more efficient, and secure building environments.
        </p>
        <p>
          Our expertise lies in designing and implementing comprehensive Building Management Integration Systems (BMIS). We unify complex systems—from security and surveillance to energy management and automation—into a single, intelligent, and easy-to-manage platform.
        </p>
        
        <!-- NEW: Core Principles Section for better structure -->
        <div class="core-principles">
            <h4>Our Goal is to Empower Clients With:</h4>
            <ul>
                <li><i class="fas fa-check-circle"></i> Cutting-edge solutions that reduce operational costs.</li>
                <li><i class="fas fa-check-circle"></i> Enhanced safety and security measures.</li>
                <li><i class="fas fa-check-circle"></i> An unparalleled, seamless user experience.</li>
            </ul>
        </div>
      </div>
      <div class="about-image">
         <img src="@/assets/tec.jpg" alt="Technology and Engineering">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

<style scoped>
#about {
  padding: 100px 20px;
  background-color: var(--white-color);
}

.about-container {
  display: flex;
  align-items: center;
  gap: 60px;
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
  color: var(--text-light);
  margin-bottom: 20px;
}

.core-principles {
    margin-top: 30px;
    background-color: #f9fbfc;
    padding: 20px;
    border-left: 4px solid var(--secondary-color);
    border-radius: 4px;
}

.core-principles h4 {
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.core-principles ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.core-principles li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    color: var(--text-light);
}

.core-principles i {
    color: var(--secondary-color);
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
    gap: 40px;
  }
  .section-title {
    font-size: 2.2rem;
    text-align: center;
  }
  .section-subtitle {
      text-align: center;
  }
}
</style>