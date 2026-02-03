<template>
  <div class="container">
    <section class="has-text-danger title">頁面不存在</section>
    <p class="has-text-warning subtitle">Current route path: {{ route.fullPath }}</p>
    <hr />
    <div class="buttons">
      <button class="button is-info is-large" @click="clicked" type="button">回首頁</button>
      <br />
      <router-link class="button is-danger is-large" :to="{ name: 'home' }"
        >回到首頁(推薦router-linK)</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const clicked = () => {
  router.push({ name: 'home' })
}
</script>
