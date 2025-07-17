<template>
  <div class="quick-access-wrapper">
    <div class="quick-access-container">
      <a href="#" class="access-item">
        <div class="access-icon"><i class="fas fa-file-alt"></i></div>
        <span>Blogs</span>
      </a>
      <a href="#" class="access-item">
        <div class="access-icon"><i class="fas fa-book-open"></i></div>
        <span>Success Stories</span>
      </a>
      <a href="#" class="access-item">
        <div class="access-icon"><i class="fas fa-handshake"></i></div>
        <span>Partners</span>
      </a>
      <a href="#" class="access-item">
        <div class="access-icon"><i class="fas fa-leaf"></i></div>
        <span>Sustainability</span>
      </a>
    </div>
  </div>
</template>
<script>
export default { name: 'QuickAccess' };
</script>
<style scoped>
.quick-access-wrapper { background-color: var(--white-color); padding: 40px 20px; border-bottom: 1px solid var(--border-color); }
.quick-access-container { display: flex; justify-content: space-around; align-items: center; max-width: 900px; margin: 0 auto; }
.access-item { display: flex; flex-direction: column; align-items: center; text-decoration: none; color: var(--text-light); transition: color 0.3s; }
.access-item:hover { color: var(--secondary-color); }
.access-icon { width: 60px; height: 60px; border: 1px solid var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 15px; color: var(--text-dark); transition: all 0.3s; }
.access-icon i { font-size: 1.8rem; }
.access-item:hover .access-icon { border-color: var(--secondary-color); color: var(--secondary-color); }
.access-item span { font-weight: 500; font-size: 1rem; }
</style>