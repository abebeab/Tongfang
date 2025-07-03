<template>
  <section id="contact">
    <h2 class="contact-title">Contact US</h2>
    <p class="contact-description">
      Hey, you can contact US through any of your favorite social media links or email us directly!
    </p>

    <!-- Success Message -->
    <div v-if="formSubmitted" class="success-message">
      Thank You! The Message was Submitted Successfully!
    </div>

    <div class="contact-content">
      <div class="contact-info-left">
        <!-- Add your contact information here -->
      </div>

      <div class="contact-form-right">
        <!-- Form Element -->
        <form @submit.prevent="handleSubmit" ref="form">
          <div class="form-inputs">
            <input
              type="text"
              v-model="name"
              name="user_name"
              placeholder="Your Name"
              required
              class="input-field"
            />
            <input
              type="email"
              v-model="email"
              name="user_email"
              placeholder="Your Email"
              required
              class="input-field"
            />
          </div>
          <textarea v-model="message" name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
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
      name: '',
      email: '',
      message: '',
      formSubmitted: false,
    };
  },
  methods: {
    handleSubmit() {
      const form = this.$refs.form; // Reference the form

      // Step 1: Send the message to your email (admin email)
      emailjs
        .sendForm('service_u1gdw9v', 'template_bjp8zyb', form, 'KH3eyX6xnGJcbUd9R')
        .then(
          (result) => {
            console.log('Message sent to admin:', result.text);

            // Step 2: Send the auto-response email to the user
            this.sendAutoResponse();

            // Step 3: After successful submission, reset the form fields
            this.name = '';
            this.email = '';
            this.message = '';
            this.formSubmitted = true;

            // Step 4: Hide the success message after 3 seconds
            setTimeout(() => {
              this.formSubmitted = false;
            }, 3000); // 3 seconds for the success message
          },
          (error) => {
            console.log('Error sending message to admin:', error.text);
            alert('There was an error submitting your form. Please try again later.');
          }
        );

      // Optionally reset the form manually
      form.reset();
    },

    sendAutoResponse() {
      // Step 1: Prepare auto-response parameters
      const autoResponseParams = {
        user_name: this.name,
        user_email: this.email,
        message: this.message,
      };

      // Step 2: Send the auto-reply to the user
      emailjs
        .send('service_u1gdw9v', 'template_kutm8cg', autoResponseParams, 'KH3eyX6xnGJcbUd9R')
        .then(
          (result) => {
            console.log('Auto-response sent to user:', result.text);
          },
          (error) => {
            console.log('Error sending auto-response to user:', error.text);
            alert('There was an error sending the auto-response. Please try again later.');
          }
        );
    },
  },
};
</script>

<style scoped>
/* Section Styling */
section#contact {
  margin-top: 10px;
  padding: 40px 10px;
  padding-top: 30px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  background-color: #f4f7fb;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Success Message Styling */
.success-message {
  font-size: 1.5rem;
  color: green;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 0.5s forwards; /* Fade-in animation */
}

/* Success Message Animation */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* General Form Styling */
.contact-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.contact-description {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.contact-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.contact-info-left {
  width: 100%;
  text-align: center;
}

.contact-form-right {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form-right form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form-right input,
.contact-form-right textarea,
.contact-form-right button {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #ddd;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.contact-form-right textarea {
  height: 150px;
}

.contact-form-right button {
  padding: 10px 20px;
  background-color: #e9967a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form-right button:hover {
  background-color: #c67c56;
}

/* Responsive Design */
@media (max-width: 768px) {
  section#contact {
    flex-direction: column;
    align-items: center;
  }

  .contact-form-right {
    width: 100%;
  }

  .contact-form-right input,
  .contact-form-right textarea,
  .contact-form-right button {
    width: 90%;
  }
}
</style>
