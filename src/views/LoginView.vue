<template>
  <div class="login-page">
    <div class="login-container">
      <!-- Left Side: Branding and Welcome Message -->
      <div class="login-branding">
        <div class="branding-content">
          <router-link to="/" class="logo-link">
            <img src="/logo.png" alt="Tongfang Logo" class="logo-img" />
            <h2>TONGFANG</h2>
          </router-link>
          <h1>Partner Portal Access</h1>
          <p>Unlock exclusive resources, training materials, and support by logging into your partner account.</p>
        </div>
      </div>

      <!-- Right Side: Login Form -->
      <div class="login-form-section">
        <div class="form-wrapper">
          <h3>Welcome Back</h3>
          <p class="form-subtext">Please enter your credentials to log in.</p>
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">Email Address</label>
              <div class="input-wrapper">
                <i class="fas fa-envelope icon"></i>
                <input type="email" id="email" v-model="email" placeholder="you@example.com" required>
              </div>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <div class="input-wrapper">
                <i class="fas fa-lock icon"></i>
                <input :type="passwordFieldType" id="password" v-model="password" placeholder="••••••••" required>
                <!-- NEW: Password Toggle Button -->
                <button type="button" class="password-toggle" @click="togglePasswordVisibility" aria-label="Toggle password visibility">
                  <i :class="['fas', passwordFieldType === 'password' ? 'fa-eye' : 'fa-eye-slash']"></i>
                </button>
              </div>
            </div>
            <div class="form-options">
              <div class="remember-me">
                <input type="checkbox" id="remember" v-model="rememberMe">
                <label for="remember">Remember Me</label>
              </div>
              <a href="#" class="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" class="login-button">
              <i class="fas fa-sign-in-alt"></i> Log In
            </button>
          </form>
          <div class="signup-link">
            <p>Don't have an account? <router-link to="/contact">Become a Partner</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      // NEW: Data property to control the input type
      passwordFieldType: 'password', 
    };
  },
  methods: {
    handleLogin() {
      console.log('Logging in with:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });
      alert('Login functionality would be handled here!');
    },
    // NEW: Method to toggle the password field type
    togglePasswordVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--light-bg-color);
  padding: 40px 20px;
}
.login-container {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  max-width: 1100px;
  width: 100%;
  background: var(--white-color);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  overflow: hidden;
}

/* --- Branding Side --- */
.login-branding {
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a3a7a 100%);
  color: var(--white-color);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.branding-content .logo-link {
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: var(--white-color);
  margin-bottom: 25px;
}
.branding-content .logo-img {
  width: 50px;
  height: auto;
}
.branding-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.2;
}
.branding-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.8;
}

/* --- Form Side --- */
.login-form-section {
  padding: 60px 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-wrapper {
  width: 100%;
  max-width: 400px;
}
.form-wrapper h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 8px;
}
.form-subtext {
  color: var(--text-light);
  margin-bottom: 30px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text-dark);
}
.input-wrapper {
  position: relative;
}
.input-wrapper .icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  z-index: 2; /* Ensure icon is above input */
}
.form-group input {
  width: 100%;
  padding: 12px 12px 12px 45px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: #f7f9fc;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.form-group input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 3px rgba(245, 152, 5, 0.2);
}

/* --- NEW: Password Toggle Styles --- */
input[type="password"], input[type="text"] {
  padding-right: 45px; /* Add space for the icon on the right */
}
.password-toggle {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 45px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
}
.password-toggle:hover {
  color: var(--secondary-color);
}
/* --- END: New Styles --- */

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 30px;
}
.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
}
.remember-me label {
  cursor: pointer;
  color: var(--text-light);
}
.forgot-password {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
}
.login-button {
  width: 100%;
  padding: 15px;
  background-color: var(--primary-color);
  color: var(--white-color);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.login-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.signup-link {
  text-align: center;
  margin-top: 30px;
  color: var(--text-light);
}
.signup-link a {
  color: var(--secondary-color);
  font-weight: 600;
  text-decoration: none;
}

/* --- Responsive Design --- */
@media (max-width: 900px) {
  .login-container {
    grid-template-columns: 1fr;
  }
  .login-branding {
    display: none;
  }
  .login-form-section {
    padding: 40px;
  }
}
</style>