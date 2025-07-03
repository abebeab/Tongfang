<template>
  <footer class="site-footer">
    <div class="footer-container">
      
      <!-- Column 1: About the Company -->
      <div class="footer-about">
        <h3>TONGFANG</h3>
        <p class="footer-subtext">System Integrated</p>
        <p class="slogan">"Moving Forward" - Innovating the future of smart building management.</p>
      </div>

      <!-- Column 2: Quick Links -->
      <div class="footer-links">
        <h4>Site Map</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Solutions</a></li>
          <li><a href="#projects">Landmark Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>

      <!-- Column 3: Contact Details -->
      <div class="footer-contact">
        <h4>Get in Touch</h4>
        <p><i class="fas fa-map-marker-alt"></i> Addis Ababa, Ethiopia</p>
        <p><i class="fas fa-phone-alt"></i> <a href="tel:+251911249722">+251 911 249722</a></p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:info@tongfang-integrated.com">info@tongfang-integrated.com</a></p>
      </div>

    </div>
    
    <!-- Bottom Bar with Copyright -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Tongfang System Integrated PLC. All Rights Reserved. </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
.site-footer {
  background-color: var(--primary-color);
  color: #a0aec0; /* A softer white for text */
  padding: 60px 20px 0 20px;
  font-size: 0.9rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding-bottom: 40px;
}

.footer-about h3 {
  color: var(--white-color);
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
}

.footer-subtext {
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 20px;
}

.slogan {
  line-height: 1.6;
}

.footer-links h4, .footer-contact h4 {
  color: var(--white-color);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a, .footer-contact a {
  text-decoration: none;
  color: #a0aec0;
  transition: color 0.3s ease, padding-left 0.3s ease;
  position: relative;
}

.footer-links a:hover, .footer-contact a:hover {
  color: var(--secondary-color);
  padding-left: 5px;
}

.footer-contact p {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.footer-contact i {
  color: var(--secondary-color);
  margin-right: 12px;
  width: 15px;
  text-align: center;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid #1a324d;
  text-align: center;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-container {
    text-align: center;
  }
  .footer-contact p {
    justify-content: center;
  }
}
</style>