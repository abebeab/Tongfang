<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Contact Information -->
      <div class="contact-info">
        <p class="contact-text">Email: <a href="mailto:abebetafere988@gmail.com">abebetafere988@gmail.com</a></p>
        <p class="contact-text">Location: Addis Ababa, Ethiopia</p>
      </div>

      <!-- Copyright Notice -->
      <p class="footer-text">&copy; 2025 All rights reserved. This portfolio is made with ❤️ by Abebe Tafere</p>

      <!-- "Super Digital Hitec" Announcement Section -->
      <div class="company-announcement">
        <p class="company-name"><strong>Super Digital Hi-Tec</strong></p>
        <p class="coming-soon-text">🚀 Launching Soon! Stay tuned for the future !!</p> </div>
      <!-- Social Media Links (Right-aligned) -->
      <div class="social-links">
        <a href="https://www.linkedin.com/in/abebe-tafere-6176781a2/" target="_blank" class="social-icon">
          <img src="../assets/icons/linkedin-icon.jpg" alt="LinkedIn" />
        </a>
        <a href="https://t.me/ab_se7p" target="_blank" class="social-icon">
          <img src="../assets/icons/telegram-icon.jpg" alt="Telegram" />
        </a>
        <a href="https://github.com/abebeab" target="_blank" class="social-icon">
          <img src="../assets/icons/github-icon.jpg" alt="GitHub" />
        </a>
        <a href="https://www.upwork.com/freelancers/~01d347dbe89190526d?mp_source=share" target="_blank" class="social-icon">
          <img src="../assets/icons/upwork-icon.jpg" alt="Upwork" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
/* Footer Styling */
.footer {
  background: linear-gradient(135deg, #6a1b9a, #ff4081); /* Gradient background */
  color: #fff; /* White text color for contrast */
  padding: 40px 20px;
  text-align: center;
  position: relative;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow on the top */
}

/* Footer Container */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Contact Information */
.contact-info {
  margin-bottom: 20px;
}

.contact-text {
  font-size: 1.1rem;
  margin: 5px 0;
}

.contact-text a {
  color: #fff;
  text-decoration: none;
}

.contact-text a:hover {
  text-decoration: underline;
}

/* Footer Text */
.footer-text {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 20px;
}

/* Company Announcement Section */
.company-announcement {
  margin-top: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.company-name {
  font-size: 2rem;
  font-weight: bold;
  color: #ff6347;
  text-transform: uppercase;
}

.coming-soon-text {
  font-size: 1.3rem;
  margin-top: 10px;
  color: #fff;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1px;
}

/* Social Media Links */
.social-links {
  display: flex;
  gap: 15px; /* Space between icons */
  justify-content: flex-end;
  margin-top: 20px;
}

.social-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-icon img {
  width: 50px; /* Adjust icon size */
  height: 50px;
  border-radius: 50%; /* Make the icons circular */
  transition: transform 0.3s ease;
}

.social-icon:hover img {
  transform: scale(1.2); /* Slightly enlarge icon on hover */
}

/* Responsive Design for smaller screens */
@media (max-width: 768px) {
  .footer-container {
    padding: 15px;
  }

  .contact-info {
    margin-bottom: 15px;
  }

  .footer-text {
    font-size: 1rem;
  }

  .company-announcement {
    margin-top: 30px;
    padding: 15px;
  }

  .company-name {
    font-size: 1.6rem;
  }

  .coming-soon-text {
    font-size: 1.1rem;
  }

  .social-icon img {
    width: 35px;
    height: 35px;
  }
}
</style>
