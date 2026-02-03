<template>
  <NavBar></NavBar>
  <main style="margin-top: 100px">
    <RouterView />
  </main>
  <div class="contact-fab-group">
    <a href="#" class="button is-rounded contact-btn line-color is-danger is-light" title="LINE">
      <span class="icon">
        <i class="fab fa-line"></i>
      </span>
    </a>
    <a href="#" class="button is-rounded contact-btn is-danger is-light" title="Messenger">
      <span class="icon">
        <i class="pi pi-facebook"></i>
      </span>
    </a>
    <a href="#" class="button is-rounded contact-btn is-danger is-light" title="Instagram">
      <span class="icon">
        <i class="pi pi-instagram"></i>
      </span>
    </a>
  </div>

  <div class="bottom-center-container">
    <button
      v-show="showBackToTop"
      class="button is-dark is-rounded top-btn-center"
      @click="scrollToTop"
    >
      <span class="icon"><i class="pi pi-chevron-up"></i></span>
      <span class="ml-1">TOP</span>
    </button>
  </div>
  <FooTer></FooTer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'

const showBackToTop = ref(false)

// 監聽捲動事件
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

// 執行平滑捲動到頂端
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 平滑捲動
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 聯絡組保持右下角 */
.contact-fab-group {
  position: fixed;
  bottom: 30px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2000;
}

/* 正下方回到頂端容器 */
.bottom-center-container {
  position: fixed;
  bottom: 20px; /* 貼近底部 */
  left: 50%;
  transform: translateX(-50%); /* 關鍵：位移修正達成置中 */
  z-index: 2000;
}

.top-btn-center {
  background-color: rgba(51, 51, 51, 0.8) !important; /* 稍微透明增加質感 */
  color: white !important;
  border: none;
  padding: 0 20px;
  height: 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.top-btn-center:hover {
  background-color: #000 !important;
  bottom: 25px; /* 滑過時稍微往上跳動 */
}

/* 聯絡按鈕樣式 (米金色) */
.contact-btn {
  width: 55px;
  height: 55px;
  border: none;
  /* background-color: #e9d5b0 !important; */
  color: #4a4a4a !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
/* 聯絡按鈕樣式放大圖標 */
.contact-btn .icon {
  width: 100%; /* 讓容器佔滿 */
  height: 100%;
}

.contact-btn .icon i {
  /* 強制放大圖標比例 */
  font-size: 2rem !important;
  /* 如果是 Font Awesome，可以使用 transform 微調重心 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 針對 LINE 稍微再放大一點 (因為 Font Awesome 的 LINE 圖標視覺上較小) */
.line-color i {
  font-size: 2.2rem !important;
}
</style>
