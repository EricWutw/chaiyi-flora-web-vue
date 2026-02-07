<template>
  <div v-if="pisLoading" class="section has-text-centered">
    <button class="button is-loading is-large is-white"></button>
  </div>
  <div class="container p-5">
    <!-- Modal -->
    <CardModal v-model="showModal">
      <template #header>
        <div
          style="display: flex; justify-content: space-between; align-items: center; width: 100%"
        >
          <h2 class="title is-4" style="margin-bottom: 0">{{ productData.name }}</h2>

          <div class="tags">
            <span class="tag is-info is-light is-medium">{{
              getTypeName(productData.typeId)
            }}</span>
            <span class="tag is-warning is-light is-large">$ {{ productData.price }}</span>

            <button class="delete" aria-label="close" @click="handleClose"></button>
          </div>
        </div>
      </template>

      <div class="columns">
        <div class="column is-three-fifths">
          <Galleria
            v-if="images.length > 0"
            :value="images"
            :responsiveOptions="responsiveOptions"
            :numVisible="5"
            containerStyle="width: 100%"
          >
            <template #item="slotProps">
              <img
                :src="slotProps.item.itemImageSrc"
                style="width: 100%; display: block; height: 400px; object-fit: contain"
              />
            </template>
            <template #thumbnail="slotProps">
              <img
                :src="slotProps.item.thumbnailImageSrc"
                style="display: block; width: 60px; height: 60px; object-fit: cover"
              />
            </template>
          </Galleria>
        </div>
        <div class="column"><div class="content" v-html="productData.description"></div></div>
      </div>
      <!-- 固定聯絡方式 -->
      <div class="product-specifications">
        <article class="message is-info is-light mb-5">
          <div class="message-body has-text-centered">
            <strong>商品規格與訂購方式</strong><br />
            詢問／訂購請［務必］點擊右下角 <strong>LINE 圖示</strong> 加入好友
          </div>
        </article>

        <div class="content mb-5">
          <p class="tag is-dark is-medium">顏色皆可訂製</p>
        </div>

        <hr />

        <div class="mb-5">
          <h3 class="subtitle is-5 has-text-weight-bold">
            <span class="icon-text">
              <span class="icon"><i class="fas fa-info-circle"></i></span>
              <span>《 訂購須知 》</span>
            </span>
          </h3>
          <p class="is-size-6 has-text-grey-dark">
            每一款作品主體色系跟樣式不會改變。如遇材料短缺，皆依照花材／材料現貨為主。
          </p>
        </div>

        <div class="mb-5">
          <h3 class="subtitle is-5 has-text-weight-bold">
            <span class="icon-text">
              <span class="icon"><i class="fas fa-credit-card"></i></span>
              <span>《 付款方式 》</span>
            </span>
          </h3>
          <div class="tags">
            <span class="tag is-light">信用卡支付</span>
            <span class="tag is-light">現金轉帳付款</span>
            <span class="tag is-light">LINE PAY </span>
          </div>
          <p class="is-size-7 has-text-info mt-2">* 支援銀角零卡分期 (3/6/12/24期)</p>
        </div>

        <hr />

        <div class="mb-0">
          <h3 class="subtitle is-5 has-text-weight-bold">
            <span class="icon-text">
              <span class="icon"><i class="fas fa-map-marker-alt"></i></span>
              <span>《 店面資訊 》</span>
            </span>
          </h3>
          <p class="is-size-6">
            <strong>采依花藝</strong><br />
            高雄市XXXXXXX
          </p>
        </div>
      </div>
      <template #footer>
        <div
          class="buttons"
          style="display: flex; justify-content: flex-end; align-items: center; width: 100%"
        >
          <button
            class="button is-danger is-light rounded"
            @click.stop="handleAddOrder(productData)"
            title="加入購物車"
          >
            <span class="icon">
              <i class="fa-solid fa-cart-plus"></i>
            </span>
          </button>
          <button class="button is-light" @click="handleClose">關閉</button>
        </div>
      </template>
    </CardModal>
    <!-- 搜尋列 -->
    <div class="">
      <div class="columns is-vcentered">
        <div class="column">
          <div class="field is-grouped is-grouped-multiline">
            <div class="control" v-for="type in productTypes" :key="type.id">
              <label class="checkbox tag is-light">
                <input type="checkbox" :value="type.id" v-model="selectedTypeIds" class="mr-2" />
                {{ type.name }}
              </label>
            </div>
            <button class="button is-info is-light is-small" @click="selectAllTypes">全選</button>
            <button class="button is-light is-small" @click="unselectAllTypes">清空</button>
          </div>
        </div>

        <div class="column is-3">
          <div class="field has-addons">
            <div class="control has-icons-left is-expanded">
              <input v-model="searchKeyword" class="input" type="text" placeholder="搜尋..." />
              <span class="icon is-left"><i class="fas fa-search"></i></span>
            </div>
            <div class="control">
              <button class="button is-light" @click="clearKeyword">清空</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- card內容 -->
    <div class="columns is-multiline">
      <div
        class="column is-12-mobile is-6-tablet is-3-desktop"
        v-for="product in finalFilteredProducts"
        :key="product.id"
      >
        <div class="card product-card">
          <div class="card-image" style="position: relative">
            <figure class="image is-4by3">
              <img
                :src="product.imageUrls?.[0] || 'placeholder.png'"
                alt="Product Image"
                style="object-fit: cover"
              />
            </figure>
          </div>

          <div class="card-content">
            <div class="media-content">
              <div class="tags mb-1">
                <span class="tag is-info is-light is-small">{{ getTypeName(product.typeId) }}</span>
              </div>
              <p class="is-size-5 has-text-black has-text-weight-bold mb-1">{{ product.name }}</p>
              <div
                class="has-text-weight-bold is-flex is-align-items-center is-justify-content-space-between mt-3"
                v-if="product.price > 0"
              >
                <div>購買產品：NT$ {{ product.price }}</div>

                <button
                  class="button is-danger is-light is-small"
                  @click.stop="handleAddOrder(product, 'product', '購買產品', product.price)"
                  title="加入購物車"
                >
                  <span><i class="fa-solid fa-cart-plus"></i> 產品 </span>
                </button>
              </div>
              <div
                class="has-text-weight-bold is-flex is-align-items-center is-justify-content-space-between mt-3"
                v-if="product.classPrice > 0"
              >
                <div>體驗課：NT$ {{ product.classPrice }}</div>

                <button
                  class="button is-danger is-light is-small"
                  @click.stop="handleAddOrder(product, 'class', '單堂體驗課', product.classPrice)"
                  title="加入購物車"
                >
                  <span><i class="fa-solid fa-cart-plus"></i> 體驗課 </span>
                </button>
              </div>
              <div
                class="has-text-weight-bold is-flex is-align-items-center is-justify-content-space-between mt-3"
                v-if="product.matetialPrice > 0"
              >
                <div>材料包：NT$ {{ product.matetialPrice }}</div>

                <button
                  class="button is-danger is-light is-small"
                  @click.stop="handleAddOrder(product, 'material', '材料包', product.matetialPrice)"
                  title="加入購物車"
                >
                  <span><i class="fa-solid fa-cart-plus"></i> 材料包 </span>
                </button>
              </div>
            </div>

            <button
              class="button is-light is-fullwidth is-small mt-3"
              @click="handleDetail(product)"
            >
              查看詳情
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, computed } from 'vue'
import { useProductTypeStore } from '@/stores/productType' // 路徑依你實際設定為準
import { useProductStore } from '@/stores/product' // 路徑依你實際設定為準
import { useOrderStore } from '@/stores/order'
import { storeToRefs } from 'pinia'
import CardModal from '@/components/CrudModal.vue'

import Galleria from 'primevue/galleria'
const images = computed(() => {
  if (!productData.value.imageUrls || productData.value.imageUrls.length === 0) {
    return []
  }
  return productData.value.imageUrls.map((url) => ({
    itemImageSrc: url,
    thumbnailImageSrc: url,
    alt: productData.value.name,
  }))
})

// 定義 Galleria 的響應式選項
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
])

const typeStore = useProductTypeStore()
const productStore = useProductStore()
const orderStore = useOrderStore()

// 使用 storeToRefs 可以保持資料的響應式 (Reactive)
const { productTypes } = storeToRefs(typeStore)
const { products, pisLoading } = storeToRefs(productStore)

// 當使用者點擊「加入購物車」按鈕
const handleAddOrder = (product, type, label, price) => {
  // 1. 執行 Store 的動作
  orderStore.addToCart(product, type, label, price)
  // 2. (選用) 加入一點視覺回饋
  alert(`已將 ${product.name} 加入購物車！`)
}
const showModal = ref(false)

// 搜尋用的響應式變數
const searchKeyword = ref('')
const selectedTypeIds = ref([]) // 存勾選的 ID 陣列
const finalFilteredProducts = ref([]) // 真正顯示在畫面上的陣列
const currentId = ref(null)
const productData = ref({})

// 將原本的 isModalLoading 改為 loadingId
const loadingId = ref(null)

const handleDetail = (item) => {
  if (loadingId.value) return
  loadingId.value = item.id

  // 1. 預讀第一張主圖
  if (item.imageUrls && item.imageUrls.length > 0) {
    const img = new Image()
    img.src = item.imageUrls[0]
    img.onload = () => {
      // 第一張圖抓到了，再開啟 Modal
      productData.value = item
      showModal.value = true
      loadingId.value = null
    }
    img.onerror = () => {
      // 即使圖片載入失敗也要能開啟 Modal
      productData.value = item
      showModal.value = true
      loadingId.value = null
    }
  } else {
    // 沒圖的話直接開
    productData.value = item
    showModal.value = true
    loadingId.value = null
  }
}

const handleClose = () => {
  currentId.value = null
  productData.value = {}
  showModal.value = false
}
// 搜尋觸發函式
const handleSearch = () => {
  // 增加安全性檢查，確保 products.value 存在
  if (!products.value) return

  finalFilteredProducts.value = products.value.filter((product) => {
    // 1. 狀態比對 (必須是啟用的產品才會顯示在此頁面)
    // 只有當 product.isOpen 為 true 時，才繼續後續的關鍵字與類別判斷
    const matchStatus = product.isOpen === true

    // 2. 關鍵字比對 (名稱) - 加上 ?. 確保安全
    const name = product.name || ''
    const matchKeyword = name.toLowerCase().includes(searchKeyword.value.toLowerCase())

    // 3. 類別比對
    // 檢查產品的 typeId 是否被包含在使用者勾選的 selectedTypeIds 陣列中
    const matchType = selectedTypeIds.value.includes(product.typeId)

    // 三個條件都必須符合 (AND 邏輯)
    return matchStatus && matchKeyword && matchType
  })
}

// 監聽搜尋關鍵字與勾選的類別，達成 "onchange" 效果
watch(
  [searchKeyword, selectedTypeIds],
  () => {
    handleSearch()
  },
  { deep: true },
)

// 原本監聽 products 的部分保留，確保資料庫變動時也會更新
watch(
  products,
  () => {
    handleSearch()
  },
  { deep: true, immediate: true },
)

let debounceTimeout = null

watch(searchKeyword, () => {
  clearTimeout(debounceTimeout)
  debounceTimeout = setTimeout(() => {
    handleSearch()
  }, 300) // 使用者停止打字 0.3 秒後才執行搜尋
})

const getTypeName = (typeId) => {
  // 從 Pinia 的 productTypes 陣列中尋找對應的物件
  const type = productTypes.value.find((item) => item.id === typeId)

  // 如果找到了就回傳 name，沒找到就顯示 '未分類'
  return type ? type.name : '未分類'
}

const unsubs = []
// 初始設定：當類別抓到時，預設全勾
onMounted(() => {
  unsubs.push(typeStore.fetchProductTypes())
  unsubs.push(productStore.fetchProducts())

  // 監聽 productTypes，一旦有資料就全勾
  const stopWatch = watch(productTypes, (newTypes) => {
    if (newTypes.length > 0) {
      selectedTypeIds.value = newTypes.map((t) => t.id)
      handleSearch() // 執行初始搜尋
      stopWatch() // 只跑一次就停止監聽
    }
  })
})

onUnmounted(() => {
  unsubs.forEach((unsub) => unsub && unsub())
})

// 1. 全選：將所有 productTypes 的 ID 塞進陣列
const selectAllTypes = () => {
  selectedTypeIds.value = productTypes.value.map((t) => t.id)
  // handleSearch 會透過 watch 自動觸發
}

// 2. 全不選：直接給空陣列
const unselectAllTypes = () => {
  selectedTypeIds.value = []
  // 列表會變空，直到使用者勾選任何一個
}

// 3. 清空資料 (僅針對文字)
const clearKeyword = () => {
  searchKeyword.value = ''
}
</script>

<style scoped>
/* 1. 強制顯示工具列 */
:deep(.p-editor-container) {
  display: block !important;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
}

/* 2. 修正工具列按鈕散開的問題 */
:deep(.ql-toolbar.ql-snow) {
  border: none !important;
  border-bottom: 1px solid #dbdbdb !important;
  display: flex !important;
  flex-wrap: wrap;
}

/* 3. 確保輸入區域有白色背景 */
:deep(.ql-editor) {
  min-height: 200px;
  background-color: white !important;
}
.card-image figure {
  overflow: hidden; /* 確保圖片裁切後不會超出圓角 */
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
/* 鎖定 figure 下的圖片樣式 */
.image.is-4by3 img {
  /* 關鍵屬性：讓圖片填滿容器且不變形 */
  object-fit: cover;

  /* 設定對齊位置：center 為中心裁切，也可以設 top 或 bottom */
  object-position: center;

  /* 確保寬高撐滿容器 */
  width: 100%;
  height: 100%;
}

/* 給 Galleria 一個預設佔位高度 */
:deep(.p-galleria-item-wrapper) {
  min-height: 400px;
  background-color: #f9f9f9; /* 加個淡灰底色，視覺上像在讀取 */
}

/* 提升渲染性能 */
img {
  content-visibility: auto; /* 現代瀏覽器優化 */
  image-rendering: -webkit-optimize-contrast;
}
/* 修正標籤內部的對齊 */
.checkbox.tag {
  display: inline-flex; /* 使用 flex 佈局 */
  align-items: center; /* 垂直置中 */
  justify-content: center; /* 水平置中 */
  height: 2.5em; /* 稍微加高一點，讓視覺更平衡 */
  padding: 0 0.75em; /* 左右留白 */
  cursor: pointer; /* 增加手型游標，體驗更好 */
}

/* 確保 checkbox 本身不會被壓縮，並與文字保持對齊 */
.checkbox.tag input {
  margin-right: 0.5rem;
  margin-bottom: 0; /* 移除有些瀏覽器預設的下邊距 */
  vertical-align: middle;
}
/* 當對應的 ID 被選中時，改變標籤背景色 (這需要一點 Vue 輔助) */
/* 或者簡單地讓滑鼠滑過時有反應 */
.checkbox.tag:hover {
  border: 1px solid #3273dc; /* 增加藍色邊框 */
  background-color: #f5f5f5;
}
.product-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 確保圖片裁切一致 */
.image.is-4by3 img {
  object-fit: cover;
}
</style>
