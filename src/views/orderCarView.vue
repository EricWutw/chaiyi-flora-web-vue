<template>
  <div class="container mt-5 px-4" style="max-width: 800px">
    <div class="is-flex -content-center is-align-content-space-between">
      <div class="subtitle has-text-centered">購物清單</div>
      <button>清空購物車</button>
    </div>
    <hr />
    <div class="box p-0 shadow-sm">
      <div
        v-for="(item, index) in cart"
        :key="item.id"
        class="product-item px-4 py-3"
        :class="{ 'border-top-line': index !== 0 }"
      >
        <div class="columns is-vcentered is-mobile is-gapless-mobile">
          <div class="column is-narrow p-2">
            <figure class="image is-64x64-mobile is-96x96-tablet">
              <img
                :src="item.imageUrls[0]"
                class="is-rounded-small"
                style="object-fit: cover; height: 100%"
              />
            </figure>
          </div>

          <div class="column px-2">
            <h3 class="is-size-6-mobile is-size-5-tablet has-text-weight-bold mb-0">
              {{ item.name }}
            </h3>
            <p class="is-size-7-mobile">${{ item.price }} x {{ item.quantity }}</p>
          </div>

          <div class="column is-narrow">
            <div class="field has-addons">
              <p class="control">
                <button
                  class="button is-small-mobile is-light"
                  @click="item.quantity > 1 ? item.quantity-- : null"
                >
                  <i class="pi pi-minus"></i>
                </button>
              </p>
              <p class="control">
                <a class="button is-small">{{ item.quantity }}</a>
              </p>
              <p class="control">
                <button class="button is-small-mobile is-light" @click="item.quantity++">
                  <i class="pi pi-plus"></i>
                </button>
              </p>
              <p class="control ml-1">
                <button
                  class="button is-small-mobile is-danger is-light"
                  @click="handleRemove(item.id, item.name)"
                >
                  <i class="pi pi-trash"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-4 has-background-white-bis has-text-right border-top-line">
        <span class="mr-4"
          >總計: <strong>${{ calculateTotal }}</strong></span
        >
      </div>
    </div>
    <div style="margin-bottom: 60px">
      <div class="field">
        <label class="label">訂購人</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        <p class="help is-success">This username is available</p>
      </div>

      <div class="field">
        <div class="control">
          <label class="radio">
            <input type="radio" name="question" />
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>
      <div class="field">
        <label class="label">連絡電話/LineID</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">預計送貨地點</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>

      <div class="field">
        <label class="label">留言</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            我同意 <a href="" @click.prevent="">訂購條款</a>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button @click="handleSubmit" class="button is-link is-light">送出需求單</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'

import { useRouter } from 'vue-router'

const router = useRouter()

const handleSubmit = () => {
  // 這裡可以先放你想做的驗證...

  // 執行跳轉
  router.push('/ordercheck').then(() => {
    // 跳轉完成後，強制捲動到最上方
    window.scrollTo(0, 0)
  })
}

const orderStore = useOrderStore()
const { cart } = storeToRefs(orderStore)

// 計算總金額
const calculateTotal = computed(() => {
  return cart.value.reduce((total, item) => total + item.price * item.quantity, 0)
})

// 處理移除
const handleRemove = (id, name) => {
  // 實作你的移除邏輯
  orderStore.removeFromCart(id)
  confirm(`請確認是否移除 ${name}`)
}
</script>

<style scoped>
/* 讓寬度更緊湊 */
.product-item {
  transition: background-color 0.2s;
}

.border-top-line {
  border-top: 1px solid #f5f5f5;
}

.is-rounded-small {
  border-radius: 10px;
  object-fit: cover;
}

/* 移除 Bulma columns 預設的大間距 */
.columns.is-mobile {
  margin-left: 0;
  margin-right: 0;
}
/* 針對手機版按鈕的微調 */
@media screen and (max-width: 768px) {
  .is-small-mobile {
    height: 2rem !important;
    padding: 0 0.5rem !important;
    font-size: 0.75rem !important;
  }

  /* 讓欄位間距變小 */
  .is-gapless-mobile > .column {
    padding: 0.25rem !important;
  }
}

/* 確保圖片在手機上維持比例 */
.image.is-64x64-mobile {
  width: 64px !important;
  height: 64px !important;
}
</style>
