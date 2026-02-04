import { createApp } from 'vue'
import '@/assets/global.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura' // 👈 必須引入這個預設主題
// main.js 頂部
import AnimateOnScroll from 'primevue/animateonscroll'
// main.js 補上這一行
import 'primeicons/primeicons.css'

// 在 app.mount('#app') 之前執行
const htmlElement = document.documentElement
htmlElement.classList.remove('p-dark') // 移除 PrimeVue 可能誤加的 dark class
htmlElement.style.colorScheme = 'light'

const app = createApp(App)
const pinia = createPinia()

app.directive('animateonscroll', AnimateOnScroll)

app.use(router)
app.use(pinia)
app.use(PrimeVue, {
  theme: {
    preset: Aura, // 👈 關鍵：有了這個，Editor 的框線才會跑出來
    options: {
      darkModeSelector: 'none', // 先關閉深色模式干擾
    },
  },
})
app.mount('#app')
