<template>
  <section id="contact">
    <div class="contact-container">
      <!-- Contact Info -->
      <div class="contact-details">
        <h2 class="section-title">Let's Build Together</h2>
        <p class="section-description">
          Ready to enhance your building's efficiency and security? Contact us today for a consultation. Our experts are ready to help you move forward.
        </p>
        <div class="info-list">
          <div class="info-item">
            <div class="info-icon-wrapper"><i class="fas fa-phone-alt"></i></div>
            <div class="info-text">
              <h4>Call Us Directly</h4>
              <a href="tel:+251911249722">+251 911 249722</a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon-wrapper"><i class="fab fa-weixin"></i></div>
            <div class="info-text">
              <h4>Chat on WeChat</h4>
              <a href="weixin://user/wxid_3jxtp7rz3p8e22" target="_blank" rel="noopener noreferrer">Contact via WeChat</a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon-wrapper"><i class="fas fa-envelope"></i></div>
            <div class="info-text">
              <h4>Email for Inquiries</h4>
              <a href="mailto:info@tongfangbms.com">info@tongfangbms.com</a>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon-wrapper"><i class="fas fa-map-marker-alt"></i></div>
            <div class="info-text">
              <h4>Our Office</h4>
              <p>Bole Bulbula, Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form-wrapper">
        <form @submit.prevent="handleSubmit" ref="form">
          <h4>Send Us a Message</h4>
          <div class="form-group">
            <input type="text" name="user_name" placeholder="Your Name" required v-model="form.name" />
            <input type="email" name="user_email" placeholder="Your Email" required v-model="form.email" />
          </div>
          <textarea name="message" placeholder="Tell us about your project..." required v-model="form.message"></textarea>
          <!-- FIX: Button now uses the global branded cta-button class -->
          <button type="submit" class="cta-button" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Send Inquiry' }}
          </button>
        </form>
        <div v-if="statusMessage" :class="['status-message', formStatus]">
          {{ statusMessage }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactSection',
  data() {
    return {
      isSending: false,
      formStatus: '',
      statusMessage: '',
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      this.isSending = true;
      this.statusMessage = '';

      const templateParams = {
        user_name: this.form.name,
        user_email: this.form.email,
        message: this.form.message,
      };

      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      )
        .then(() => {
          this.sendAutoResponse(templateParams);
          this.formStatus = 'success';
          this.statusMessage = 'Thank you! Your message has been sent successfully.';
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        })
        .catch((err) => {
          this.formStatus = 'error';
          this.statusMessage = 'Sorry, an error occurred. Please try again later.';
          console.error('FAILED...', err);
        })
        .finally(() => {
          this.isSending = false;
          setTimeout(() => {
            this.statusMessage = '';
          }, 5000);
        });
    },
    sendAutoResponse(params) {
      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        params,
        process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      )
        .then(() => console.log('Auto-response sent.'))
        .catch((err) => console.error('Auto-response failed:', err));
    },
  },
};
</script>

<style scoped>
#contact {
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--white-color) 0%, #f0f4f8 100%);
  color: var(--primary-color);
}
.contact-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  align-items: center;
}
.contact-details {
  text-align: left;
}
.section-title {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 15px;
}
.section-description {
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: #555;
  line-height: 1.7;
}
.info-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.info-item {
  display: flex;
  align-items: center;
}
.info-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e6f7f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
}
.info-icon-wrapper i {
  color: var(--secondary-color);
  font-size: 1.3rem;
}
.info-icon-wrapper .fa-weixin {
  color: #09B83E;
}
.info-text h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--primary-color);
}
.info-text p, .info-text a {
  margin: 0;
  font-size: 0.95rem;
  color: #555;
  text-decoration: none;
  transition: color 0.3s;
}
.info-text a:hover {
  color: var(--secondary-color);
}
.contact-form-wrapper {
  background: var(--white-color);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}
.contact-form-wrapper h4 {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
input, textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #dddddd;
  background-color: #faf9fb;
  color: var(--text-dark);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}
input::placeholder, textarea::placeholder {
  color: #888;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(245, 152, 5, 0.2);
}
textarea {
  height: 120px;
  resize: vertical;
}
/* FIX: Removed old button styles; it now uses the global .cta-button class */
button:disabled {
  background-color: #999;
  border-color: #999;
  cursor: not-allowed;
}
.status-message {
  margin-top: 20px;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}
.status-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
.status-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-details {
    text-align: center;
  }
  .info-item {
    flex-direction: column;
    text-align: center;
  }
  .info-icon-wrapper {
    margin: 0 0 15px 0;
  }
}
@media (max-width: 768px) {
  .contact-form-wrapper {
    padding: 30px;
  }
}
</style>