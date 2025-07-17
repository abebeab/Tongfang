<template>
  <div class="clients-section">
    <div class="clients-container">
      <h3 class="clients-title">Trusted by Industry Leaders and Government Agencies</h3>
      <div class="logos-container">
        <!-- Replace with your actual client or partner logos -->
        <img src="/path/to/client-logo1.png" alt="Client 1">
        <img src="/path/to/client-logo2.png" alt="Client 2">
        <img src="/path/to/client-logo3.png" alt="Client 3">
        <img src="/path/to/client-logo4.png" alt="Client 4">
        <img src="/path/to/client-logo5.png" alt="Client 5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clients',
}
</script>

<style scoped>
.clients-section { background-color: var(--light-bg-color); padding: 40px 20px; }
.clients-container { max-width: 1200px; margin: 0 auto; text-align: center; }
.clients-title { font-size: 1rem; font-weight: 600; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 30px; }
.logos-container { display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap; gap: 30px; }
.logos-container img {
  height: 40px; /* Adjust height as needed */
  max-width: 150px;
  opacity: 0.6;
  filter: grayscale(100%);
  transition: all 0.3s ease;
}
.logos-container img:hover {
  opacity: 1;
  filter: grayscale(0%);
}
</style>