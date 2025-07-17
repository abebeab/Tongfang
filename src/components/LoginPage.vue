<template>
  <div class="login-page-container">
    <div class="login-panel">
      <!-- Back to Home Link -->
      <a href="/" class="back-link"><i class="fas fa-arrow-left"></i> Back to Home</a>
      
      <div class="login-header">
        <img src="/logo.png" alt="Tongfang Logo" class="login-logo" />
        <h2>Partner Portal Login</h2>
        <p>Access your partner resources, tools, and support.</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="input-wrapper">
            <i class="fas fa-envelope input-icon"></i>
            <input type="email" id="email" v-model="email" placeholder="you@example.com" required />
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <i class="fas fa-lock input-icon"></i>
            <input type="password" id="password" v-model="password" placeholder="••••••••" required />
          </div>
        </div>

        <div class="form-options">
          <label class="checkbox-label">
            <input type="checkbox" v-model="rememberMe" />
            Remember me
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>

        <button type="submit" class="login-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Signing In...' : 'Sign In' }}
        </button>
      </form>

      <div class="form-footer">
        <p>Don't have an account? <a href="#">Become a Partner</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      isSubmitting: false,
    };
  },
  methods: {
    handleLogin() {
      if (this.isSubmitting) return;

      this.isSubmitting = true;
      console.log('Login attempt with:', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });

      // --- In a real application, you would make an API call here ---
      // For demonstration, we'll simulate a network request
      setTimeout(() => {
        // Mock success or failure
        alert(`Login attempt successful for ${this.email}! In a real app, you would be redirected.`);
        this.isSubmitting = false;
        // On success, you would typically redirect the user:
        // this.$router.push('/dashboard'); 
      }, 1500);
    },
  },
};
</script>

<style scoped>
.login-page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 40px 20px;
  box-sizing: border-box;
}

.login-panel {
  position: relative;
  background-color: var(--white-color);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  text-align: center;
  border-top: 5px solid var(--secondary-color);
}

.back-link {
  position: absolute;
  top: 20px;
  left: 20px;
  text-decoration: none;
  color: var(--text-light);
  font-weight: 500;
  transition: color 0.3s;
}
.back-link:hover {
  color: var(--secondary-color);
}
.back-link i {
  margin-right: 8px;
}


.login-header {
  margin-bottom: 30px;
}

.login-logo {
  width: 60px;
  height: auto;
  margin-bottom: 15px;
}

.login-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 10px 0;
}

.login-header p {
  color: var(--text-light);
  font-size: 1rem;
  margin: 0;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.input-wrapper {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  pointer-events: none;
}

.form-group input {
  width: 100%;
  height: 50px;
  padding: 0 20px 0 45px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  transition: border-color 0.3s, box-shadow 0.3s;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 4px rgba(245, 152, 5, 0.2);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: var(--text-light);
  cursor: pointer;
}
.checkbox-label input {
  margin-right: 8px;
}

.forgot-password {
  font-size: 0.9rem;
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 500;
}

.login-button {
  width: 100%;
  height: 50px;
  padding: 0 20px;
  background-color: var(--secondary-color);
  color: var(--white-color);
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-button:hover:not(:disabled) {
  background-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.login-button:disabled {
  background-color: #A0AEC0;
  cursor: not-allowed;
}

.form-footer {
  margin-top: 30px;
  font-size: 0.9rem;
}

.form-footer p {
  color: var(--text-light);
}

.form-footer a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
}
</style>