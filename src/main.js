import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // <-- IMPORT GLOBAL CSS
console.log('Supabase URL:', process.env.VUE_APP_SUPABASE_URL)
console.log('Supabase Key:', process.env.VUE_APP_SUPABASE_ANON_KEY)

createApp(App).use(router).mount('#app')