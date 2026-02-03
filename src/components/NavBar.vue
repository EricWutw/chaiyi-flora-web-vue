<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
    style="height: 100px"
  >
    <div class="navbar-brand is-align-items-center" style="margin-left: 50px">
      <div class="navbar-item is-hidden-desktop" style="width: 3.25rem; height: 100%"></div>

      <RouterLink
        to="/"
        class="navbar-item title mb-0 is-flex is-justify-content-center is-expanded"
      >
        采依花藝 <span class="icon"><i class="fas fa-leaf"></i></span>
      </RouterLink>

      <a
        role="button"
        class="navbar-burger has-text-black"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
      @click="isActive = false"
    >
      <div class="navbar-end">
        <RouterLink class="navbar-item" to="/admin">去後台管理</RouterLink>
        <a class="navbar-item"> 關於采依花藝 </a>

        <a class="navbar-item"> 服務項目 </a>
        <a class="navbar-item"> 證照課程 </a>
        <RouterLink class="navbar-item" to="/products">花藝禮品</RouterLink>
        <!-- <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> More </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> About </a>
            <a class="navbar-item"> Jobs </a>
            <a class="navbar-item"> Contact </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div> -->

        <div class="navbar-item"><button class="button is-black is-light">登入</button></div>
        <div class="navbar-item">
          <RouterLink to="/ordercar" class="cart-wrapper">
            <i class="fa-solid fa-cart-shopping subtitle mb-0"></i>

            <span v-if="cartCount > 0" class="badge" :key="cartCount">
              {{ cartCount }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isActive = ref(false)
import { onMounted, onUnmounted, ref } from 'vue' // 記得導入 computed
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

const orderStore = useOrderStore()
// 從 store 取出 cartCount
const { cartCount } = storeToRefs(orderStore)

let unsubscribe = null
onMounted(() => {
  // 開始監聽 Firebase 資料
  unsubscribe = orderStore.fetchOrders()
})

onUnmounted(() => {
  // 當組件卸載時，停止監聽，節省 Firebase 流量與記憶體
  if (unsubscribe) unsubscribe()
})
</script>

<style scoped>
.cart-wrapper {
  position: relative;
  display: inline-block;
  padding: 5px; /* 增加一點點空間讓標籤不會被切掉 */
}

.badge {
  position: absolute;
  top: -5px; /* 往上移動 */
  right: -8px; /* 往右移動 */
  background-color: #ff3860; /* Bulma 的 is-danger 顏色 */
  color: white;
  border-radius: 290486px; /* 圓角 */
  padding: 2px 6px;
  font-size: 0.65rem;
  font-weight: bold;
  line-height: 1;
  min-width: 18px;
  text-align: center;
  box-shadow: 0 0 0 2px white; /* 加上白邊會更有質感，像 APP 一樣 */
}

/* 如果購物車圖標太小，可以微調 */
.fa-cart-shopping {
  font-size: 1.5rem;
}
.badge {
  /* ... 原本的樣式 ... */
  animation: pop-in 0.3s ease-out;
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
