<template>
  <div class="page-container">
    <h1 class="section-title">Support Center</h1>
    <p class="section-subtitle">We are committed to your success long after deployment. Find resources, downloads, and contact information here.</p>
    
    <div class="support-section">
      <h3>Download Center</h3>
      <p>Access the latest manuals, datasheets, drivers, and firmware for your Tongfang products.</p>
      <div class="download-table-wrapper">
        <table class="download-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Type</th>
              <th>Related Product</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in downloads" :key="file.id">
              <td>{{ file.title }}</td>
              <td><span class="file-type" :class="file.type.toLowerCase()">{{ file.type }}</span></td>
              <td>{{ file.productId.toUpperCase() }}</td>
              <td><a href="#" class="download-link">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="support-section">
        <h3>Need Help?</h3>
        <p>If you can't find what you are looking for, our expert team is ready to assist you. Please visit our contact page for direct support.</p>
        <router-link to="/contact" class="cta-button">Contact Support</router-link>
    </div>
  </div>
</template>

<script>
import { ApiService } from '@/services/api.js';

export default {
  name: 'SupportView',
  data() {
    return { downloads: [] }
  },
  async created() {
    this.downloads = await ApiService.fetchDownloads();
  }
}
</script>

<style scoped>
.support-section {
  background-color: var(--light-bg-color);
  padding: 40px;
  border-radius: 12px;
  margin-bottom: 40px;
}
.support-section h3 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-top: 0;
}
.support-section p {
  color: var(--text-light);
  line-height: 1.7;
  max-width: 800px;
  margin-bottom: 30px;
}
.download-table-wrapper { overflow-x: auto; }
.download-table { width: 100%; min-width: 600px; border-collapse: collapse; text-align: left; background-color: var(--white-color); }
.download-table th, .download-table td { padding: 15px; border-bottom: 1px solid var(--border-color); }
.download-table thead { background-color: var(--primary-color); color: var(--white-color); }
.download-link { color: var(--secondary-color); text-decoration: none; font-weight: 600; }
.file-type {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--white-color);
}
.file-type.datasheet { background-color: #007bff; }
.file-type.manual { background-color: #28a745; }
.file-type.firmware { background-color: #dc3545; }
</style>