<template>
  <div>
    <div class="mb-0 is-mobile p-3">
      <div class="column is-one-quarter">
        <AdminListBar />
      </div>

      <main class="main-content">
        <div class="p-5">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminListBar from '@/components/AdminListBar.vue'
</script>
