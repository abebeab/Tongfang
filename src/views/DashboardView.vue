<template>
  <div class="dashboard-page">
    <h1>Welcome to the Dashboard!</h1>
    <p>This is your authenticated area.</p>
    <button @click="handleLogout">Log Out</button>
  </div>
</template>

<script>
import { supabase } from '@/supabase'; // Import the supabase client

export default {
  name: 'DashboardView',
  methods: {
    async handleLogout() { // Make method async
      try {
        const { error } = await supabase.auth.signOut();

        if (error) {
          throw error;
        }

        console.log('Supabase: User logged out successfully!');
        // Clear local storage items that your app might use for custom flags
        // Supabase client usually handles its own session data cleanup.
        localStorage.removeItem('userLoggedIn'); 
        
        alert('You have been logged out.'); // Optional: provide user feedback
        this.$router.push('/login'); // Redirect to login page after logout
      } catch (error) {
        console.error('Supabase Logout Error:', error.message);
        alert('An error occurred during logout: ' + error.message);
      }
    }
  }
}
</script>

<style scoped>
.dashboard-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f2f5;
  text-align: center;
  padding: 20px;
}
h1 {
  color: var(--primary-color); /* Assuming you have primary-color defined globally */
  margin-bottom: 20px;
}
p {
  color: var(--text-dark); /* Assuming you have text-dark defined globally */
  margin-bottom: 30px;
}
button {
  padding: 12px 25px;
  background-color: var(--secondary-color); /* Assuming you have secondary-color defined globally */
  color: var(--white-color); /* Assuming you have white-color defined globally */
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: #d88904; /* A slightly darker shade for hover */
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
</style>