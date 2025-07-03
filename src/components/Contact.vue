<template>
  <section id="contact">
    <div class="contact-overlay"></div>
    <div class="contact-container">
      <div class="contact-form-wrapper">
        <h2 class="section-title">Build a Smarter Future</h2>
        <p class="section-description">
          Ready to enhance your building's efficiency and security? Contact us today for a consultation or quote. Our team will get back to you within 24 hours.
        </p>
        
        <form @submit.prevent="handleSubmit" ref="form">
          <div class="form-row">
            <input type="text" name="user_name" placeholder="Your Name" required v-model="form.name" />
            <input type="email" name="user_email" placeholder="Your Email" required v-model="form.email" />
          </div>
          <textarea name="message" placeholder="Tell us about your project..." required v-model="form.message"></textarea>
          <button type="submit" :disabled="isSending">
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
      formStatus: '', // Will be 'success' or 'error'
      statusMessage: '',
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // --- START OF DIAGNOSTIC LOGS ---
      // This will help us see if the .env variables are loading correctly.
      console.log('--- Attempting to send email with this config: ---');
      console.log('Service ID:', process.env.VUE_APP_EMAILJS_SERVICE_ID);
      console.log('Template ID:', process.env.VUE_APP_EMAILJS_TEMPLATE_ID);
      console.log('Public Key:', process.env.VUE_APP_EMAILJS_PUBLIC_KEY);
      // --- END OF DIAGNOSTIC LOGS ---

      this.isSending = true;
      this.statusMessage = '';

      emailjs.sendForm(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        this.$refs.form,
        process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('SUCCESS! Message sent to admin.', result.text);
        this.sendAutoResponse(); // Trigger auto-response on success
        this.formStatus = 'success';
        this.statusMessage = 'Thank you! Your message has been sent successfully.';
        this.$refs.form.reset(); // The best way to clear the form
      }, (error) => {
        console.error('FAILED to send message to admin:', error);
        this.formStatus = 'error';
        this.statusMessage = 'Sorry, an error occurred. Please check the console for details.';
      })
      .finally(() => {
        this.isSending = false;
        // Hide the status message after 5 seconds
        setTimeout(() => { this.statusMessage = ''; }, 5000);
      });
    },

    sendAutoResponse() {
      console.log('--- Attempting to send auto-response ---');
      console.log('Auto-Reply Template ID:', process.env.VUE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID);

      const autoResponseParams = {
        user_name: this.form.name,
        user_email: this.form.email,
        message: this.form.message,
      };

      emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        autoResponseParams,
        process.env.VUE_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log('Auto-response sent to user successfully.', result.text);
      }, (error) => {
        console.error('Failed to send auto-response:', error);
      });
    },
  }
};
</script>

<style scoped>
#contact {
  padding: 100px 20px;
  position: relative;
  background: url('https://images.unsplash.com/photo-1558021211-6514f395939a?q=80&w=2940&auto=format&fit=crop') no-repeat center center/cover;
  color: var(--white-color);
}
.contact-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(45deg, rgba(10, 37, 64, 0.95), rgba(10, 37, 64, 0.85));
}
.contact-container {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  text-align: center;
}
.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 15px;
}
.section-description {
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: 0.8;
  line-height: 1.7;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
input, textarea {
  width: 100%;
  padding: 15px;
  border: 1px solid #4a5a6a;
  background-color: rgba(26, 50, 77, 0.7);
  color: var(--white-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: border-color 0.3s, box-shadow 0.3s;
}
input::placeholder, textarea::placeholder {
  color: #a0aec0;
}
input:focus, textarea:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(0, 209, 178, 0.3);
}
textarea {
  height: 140px;
  resize: vertical;
}
button {
  padding: 15px 30px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: all 0.3s ease;
}
button:hover:not(:disabled) {
  background-color: var(--white-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
button:disabled {
  background-color: #555;
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
  background-color: rgba(0, 209, 178, 0.2);
  color: #00D1B2;
  border: 1px solid #00D1B2;
}
.status-message.error {
  background-color: rgba(255, 69, 58, 0.2);
  color: #FF453A;
  border: 1px solid #FF453A;
}
@media (max-width: 768px) {
  .form-row { grid-template-columns: 1fr; }
}
</style>