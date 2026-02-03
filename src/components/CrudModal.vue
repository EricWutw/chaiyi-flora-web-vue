<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <slot name="header">
          <p class="modal-card-title has-text-warning">請父元件提供Slot</p>
        </slot>
      </header>
      <section class="modal-card-body">
        <slot>請父元件提供Slot</slot>
      </section>
      <footer class="modal-card-foot">
        <slot name="footer">
          <div class="buttons">
            <button class="button" @click="showModal = false">OK</button>
          </div>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script setup>
const showModal = defineModel({ type: Boolean, default: false })
</script>

<style scoped>
:deep(.modal-content),
:deep(.modal-card) {
  width: 90vw; /* 寬度佔視窗 90% */
  max-width: 1000px; /* 但最大不超過 1000px */
}
</style>
