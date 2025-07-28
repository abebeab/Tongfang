<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-about">
        <h3>TONGFANG</h3>
        <p class="footer-subtext">System Integration</p>
        <p class="footer-slogan">"Moving Forward - Innovating the future..."</p>
        <div class="social-links">
          <a href="https://t.me/admassb" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
          <a href="https://www.instagram.com/tongfang_system_integrated1" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@tongfangbmis" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/solutions">Solutions</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/achievements">Achievements</router-link></li>
          <li><router-link to="/partner">Partner</router-link></li>
          <li><router-link to="/support">Support</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4>Contact & Location</h4>
        <p><i class="fas fa-globe-asia"></i> Headquarters: Beijing, China</p>
        <p><i class="fas fa-building"></i> Branch Office: Bole Bulbula, Addis Ababa, Ethiopia</p>
        <p><i class="fas fa-phone-alt"></i> <a href="tel:+251911249722">+251-911-249-722</a></p>
        <p><i class="fas fa-envelope"></i> <a href="mailto:info@tongfangbms.com">info@tongfangbms.com</a></p>
        <p><i class="fas fa-headset"></i> Service: 24/7 Customer Support</p>
      </div>
      <div class="footer-map">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5328209167046!2d38.77678621522729!3d9.034121993507252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b854440a5ea17%3A0x91a4933ac17a8e44!2sBole%20Bulbula%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1690079170016!5m2!1sen!2set"
            width="100%" height="100%" style="border:0;"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} TONGFANG System Integration. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default { name: 'AppFooter' }
</script>

<style scoped>
.site-footer { background-color: var(--primary-color); color: #E2E8F0; padding: 50px 20px 15px; font-size: 0.9rem; border-top: 4px solid var(--secondary-color); }
.footer-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; padding-bottom: 30px; }
.footer-about h3 { color: var(--white-color); font-size: 1.5rem; font-weight: 700; margin: 0 0 5px; }
.footer-subtext { font-size: 0.75rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--secondary-color); margin-bottom: 10px; }
.footer-slogan { font-style: italic; color: #CBD5E0; font-size: 0.85rem; margin-bottom: 15px; }
.social-links { display: flex; gap: 12px; }
.social-links a { color: var(--white-color); background-color: rgba(255, 255, 255, 0.08); width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 1rem; transition: background-color 0.3s ease, transform 0.3s ease; }
.social-links a:hover { background-color: var(--secondary-color); transform: translateY(-3px); }
.footer-links h4, .footer-contact h4 { color: var(--white-color); font-size: 1.2rem; font-weight: 600; margin-bottom: 20px; }
.footer-links ul { list-style: none; padding: 0; margin: 0; }
.footer-links li { margin-bottom: 10px; }
.footer-links a { text-decoration: none; color: #A0AEC0; transition: color 0.3s ease, padding-left 0.3s ease; }
.footer-links a:hover { color: var(--secondary-color); padding-left: 5px; }
.footer-contact p { margin-bottom: 12px; display: flex; align-items: center; color: #A0AEC0; }
.footer-contact i { color: var(--secondary-color); margin-right: 12px; width: 18px; text-align: center; flex-shrink: 0; }
.footer-contact a { color: #A0AEC0; text-decoration: none; transition: color 0.3s ease; }
.footer-contact a:hover { color: var(--secondary-color); }
.footer-map { border-radius: 8px; overflow: hidden; min-height: 200px; }
.footer-bottom { max-width: 1200px; margin: 0 auto; padding: 25px 0 10px 0; border-top: 1px solid #2D3748; text-align: center; font-size: 0.8rem; color: #94A3B8; }

@media (max-width: 992px) {
    .footer-container { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
}

@media (max-width: 768px) {
  .site-footer { padding-top: 40px; }
  .footer-container {
    /* This centers the content blocks */
    text-align: center;
    gap: 45px;
    grid-template-columns: 1fr;
  }
  .footer-about, .footer-links, .footer-contact, .footer-map {
    max-width: 350px;
    margin: 0 auto;
  }
  
  /* --- THIS IS THE FIX --- */
  /* We keep the social links centered as they are a single line. */
  .social-links {
    justify-content: center;
  }
  /* For the multi-line contact info, we set text-align to left to align the icons,
     and use inline-block to respect the parent's text-align: center. */
  .footer-contact {
    text-align: left;
    display: inline-block;
  }
}
</style>