<template>
  <nav
    class="navbar is-fixed-top is-light shadow-sm"
    role="navigation"
    aria-label="main navigation"
    style="margin-top: 100px"
  >
    <div class="container is-fluid">
      <div class="navbar-brand">
        <RouterLink class="navbar-item has-text-weight-bold is-size-5" to="/admin">
          後台管理
        </RouterLink>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': isBurgerActive }"
          @click="isBurgerActive = !isBurgerActive"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isBurgerActive }">
        <div class="navbar-start">
          <RouterLink class="navbar-item" to="/admin/producttype" @click="isBurgerActive = false">
            產品類型維護
          </RouterLink>
          <RouterLink class="navbar-item" to="/admin/adminprodut" @click="isBurgerActive = false">
            產品維護
          </RouterLink>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-danger is-light is-small" @click="handleLogout">登出</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isBurgerActive = ref(false)

const handleLogout = () => {
  // 你的登出邏輯
  console.log('Logout')
}
</script>

<style scoped>
.shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
/* 確保固定在頂部時，與下方內容有區隔 */
.navbar {
  border-bottom: 1px solid #eee;
}
</style>
