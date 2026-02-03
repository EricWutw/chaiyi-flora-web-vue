<template>
  <div v-if="pisLoading" class="section has-text-centered">
    <button class="button is-loading is-large is-white"></button>
  </div>
  <div class="container p-5">
    <div class="level">
      <h1 class="subtitle has-text-weight-bold">產品維護列表</h1>
      <button class="button is-info" @click="showModal = true">新增產品</button>
    </div>
    <CardModal v-model="showModal">
      <template #header>
        <span
          :class="isEdit ? 'tag is-large has-text-success' : 'tag is-large has-text-info'"
          class="has-text-weight-bold"
        >
          {{ isEdit ? '修改產品' : '建立產品' }}
        </span>
      </template>
      <template #footer>
        <div class="buttons">
          <button
            class="button is-success"
            :class="{ 'is-loading': isSaving }"
            :disabled="isSaving"
            @click="save"
          >
            確認
          </button>

          <button class="button is-danger" :disabled="isSaving" @click="cancel">取消</button>
        </div>
      </template>
      <div class="columns">
        <div class="column is-three-fifths">
          <div class="field">
            <label for="name" class="label">產品名稱</label>
            <div class="control">
              <input
                v-model="productData.name"
                id="name"
                class="input"
                type="text"
                placeholder="請輸入名稱"
              />
            </div>
            <span v-if="error.name" class="help is-danger">{{ error.name }}</span>
          </div>
          <div class="field">
            <label class="label">產品類別</label>
            <div class="control" :class="{ 'is-loading': isLoading }">
              <div class="select is-fullwidth">
                <select v-model="productData.typeId" :disabled="isLoading">
                  <option value="" disabled>
                    {{ isLoading ? '載入類別中...' : '請選擇產品類別' }}
                  </option>
                  <option v-for="type in productTypes" :key="type.id" :value="type.id">
                    {{ type.name }}
                  </option>
                </select>
              </div>
            </div>
            <p v-if="error.typeId" class="help is-danger">{{ error.typeId }}</p>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label for="price" class="label">價格</label>
            <div class="control">
              <input
                v-model="productData.price"
                id="price"
                class="input"
                type="number"
                placeholder="請輸入價格"
                min="0"
                step="1"
              />
            </div>
            <span v-if="error.price" class="help is-danger">{{ error.price }}</span>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox has-text-weight-bold" for="isOpen">
                <input id="isOpen" v-model="productData.isOpen" type="checkbox" />
                啟用
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div style="border: 1px solid #dbdbdb; border-radius: 4px">
            <Editor v-model="productData.description" editorStyle="height: 200px" />
          </div>
        </div>
      </div>
      <hr />
      <div class="column is-12">
        <label class="label">作品圖片 (可多張)</label>
        <div class="file has-name is-fullwidth">
          <label class="file-label">
            <input
              class="file-input"
              type="file"
              multiple
              @change="onFileChange"
              accept="image/*"
              id="imageInput"
            />
            <span class="file-cta">
              <span class="file-icon"><i class="fas fa-upload"></i></span>
              <span class="file-label">選取圖片</span>
            </span>
          </label>
        </div>

        <div class="columns is-multiline mt-3">
          <div
            class="column is-3-desktop is-4-tablet is-6-mobile"
            v-for="(url, index) in previewUrls"
            :key="index"
          >
            <div class="card p-1">
              <div class="card-image">
                <figure class="image is-1by1">
                  <img :src="url" style="object-fit: cover; border-radius: 4px" />
                </figure>
              </div>
              <footer class="card-footer">
                <a
                  href="#"
                  class="card-footer-item has-text-danger"
                  @click.prevent="removeImage(index)"
                >
                  <span class="icon"><i class="fas fa-trash"></i></span> 刪除
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </CardModal>

    <div class="">
      <div class="columns is-vcentered">
        <div class="column">
          <label class="label">篩選類別</label>
          <div class="field is-grouped is-grouped-multiline">
            <div class="control" v-for="type in productTypes" :key="type.id">
              <label class="checkbox tag is-light">
                <input type="checkbox" :value="type.id" v-model="selectedTypeIds" class="mr-2" />
                {{ type.name }}
              </label>
            </div>
          </div>
        </div>

        <div class="column is-5">
          <div class="field has-addons">
            <div class="control has-icons-left is-expanded">
              <input
                v-model="searchKeyword"
                class="input"
                type="text"
                placeholder="關鍵字搜尋..."
              />
              <span class="icon is-left"><i class="fas fa-search"></i></span>
            </div>
            <div class="control">
              <button class="button is-info" @click="handleSearch">搜尋</button>
            </div>
            <div class="control">
              <button class="button is-light" @click="resetSearch">清空</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div
        class="column is-12-mobile is-6-tablet is-4-desktop"
        v-for="product in finalFilteredProducts"
        :key="product.id"
      ></div>
    </div>
    <hr />

    <div class="columns is-multiline">
      <div
        class="column is-12-mobile is-6-tablet is-4-desktop"
        v-for="product in finalFilteredProducts"
        :key="product.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                :src="
                  product.imageUrls?.length > 0
                    ? product.imageUrls[0]
                    : 'https://bulma.io/assets/images/placeholders/1280x960.png'
                "
                alt="Product Image"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="media-content">
              <div class="tags">
                <span class="tag is-info">類別：{{ getTypeName(product.typeId) }}</span>
                <span class="tag" :class="product.isOpen ? 'is-success' : 'is-danger'">
                  {{ product.isOpen ? '開啟' : '停售' }}
                </span>
                <span class="tag is-info is-light">
                  <span class="icon is-small mr-1">
                    <i class="fas fa-images"></i>
                  </span>
                  {{ product.imageUrls?.length || 0 }} 張作品圖
                </span>
              </div>
              <p class="is-5">作品：{{ product.name }}</p>
              <p class="has-text-danger has-text-weight-bold">價格：${{ product.price }}</p>
            </div>

            <div class="content mt-3">
              <div class="buttons">
                <button class="button is-success is-light" @click="handleEdit(product)">
                  編輯
                </button>
                <button class="button is-danger is-light" @click="remove(product.id, product.name)">
                  刪除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useProductTypeStore } from '@/stores/productType' // 路徑依你實際設定為準
import { useProductStore } from '@/stores/product' // 路徑依你實際設定為準
import { storeToRefs } from 'pinia'
import CardModal from '@/components/CrudModal.vue'
import Editor from 'primevue/editor'
// 必須載入 Quill 的樣式，否則 Editor 會崩潰
// 必須有主題 CSS，否則邊框會消失

const typeStore = useProductTypeStore()
const productStore = useProductStore()
// 使用 storeToRefs 可以保持資料的響應式 (Reactive)
const { productTypes, isLoading } = storeToRefs(typeStore)
const { products, pisLoading } = storeToRefs(productStore)
const isSaving = ref(false)
const showModal = ref(false)

const error = ref({
  name: '',
  price: 0,
  isOpen: true,
  typeId: '',
  description: '',
  imageUrl: [],
})
const productData = ref({
  name: '',
  price: 0,
  isOpen: true,
  typeId: '',
  description: '',
  imageUrl: [],
})
const isEdit = ref(false)
const currentId = ref(null)

const selectedFiles = ref([]) // 這裡存放 File 物件，準備上傳用
const previewUrls = ref([]) // 這裡存放本地預覽網址

// 搜尋用的響應式變數
const searchKeyword = ref('')
const selectedTypeIds = ref([]) // 存勾選的 ID 陣列
const finalFilteredProducts = ref([]) // 真正顯示在畫面上的陣列

// 搜尋觸發函式
const handleSearch = () => {
  // 增加安全性檢查，確保 products.value 存在
  if (!products.value) return

  finalFilteredProducts.value = products.value.filter((product) => {
    // 1. 關鍵字比對 (名稱) - 加上 ?. 確保安全
    const name = product.name || ''
    const matchKeyword = name.toLowerCase().includes(searchKeyword.value.toLowerCase())

    // 2. 類別比對
    // 檢查產品的 typeId 是否被包含在使用者勾選的 selectedTypeIds 陣列中
    const matchType = selectedTypeIds.value.includes(product.typeId)

    return matchKeyword && matchType
  })
}

// 監聽原始 products 變化（例如刪除或新增後），自動更新顯示列表
// 在 script setup 中增加 deep: true 確保陣列內容變化也能捕捉
watch(
  products,
  () => {
    handleSearch()
  },
  { deep: true, immediate: true },
)

const getTypeName = (typeId) => {
  // 從 Pinia 的 productTypes 陣列中尋找對應的物件
  const type = productTypes.value.find((item) => item.id === typeId)

  // 如果找到了就回傳 name，沒找到就顯示 '未分類'
  return type ? type.name : '未分類'
}

// 模擬從 Firebase 抓回來的資料格式

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

const handleEdit = (item) => {
  isEdit.value = true
  currentId.value = item.id // 紀錄是哪一筆要修改

  // 重要：使用展開運算子 {...item} 進行淺拷貝
  // 避免在 Modal 改動時直接影響到表格資料
  productData.value = { ...item }
  // 2. 帶入原有圖片網址進行預覽
  // 這樣 Modal 打開時才會看到原本的圖片
  previewUrls.value = item.imageUrls ? [...item.imageUrls] : []

  // 重置新選取的檔案
  selectedFiles.value = []
  showModal.value = true
}

const save = async () => {
  if (!Validate()) return

  isSaving.value = true
  try {
    // 1. 先處理圖片上傳
    let newImageUrls = []
    if (selectedFiles.value.length > 0) {
      newImageUrls = await productStore.uploadMultipleImages(selectedFiles.value)
    }

    // 2. 整理要存入的資料
    // 如果是編輯，要保留舊圖加上新圖；如果是新增，就直接用新圖
    const finalData = {
      ...productData.value,
      // 假設資料庫欄位叫 imageUrls
      imageUrls: isEdit.value
        ? [...(productData.value.imageUrls || []), ...newImageUrls]
        : newImageUrls,
    }

    // 3. 呼叫 Store 存入 Firebase
    if (isEdit.value) {
      await productStore.updateProduct(currentId.value, finalData)
    } else {
      await productStore.addProduct(finalData)
    }

    alert('儲存成功！')
    closeModal()
    // 清空暫存檔案
    selectedFiles.value = []
    previewUrls.value = []
  } catch (err) {
    alert('儲存發生錯誤，請查看 Console', err)
  } finally {
    isSaving.value = false
  }
}

const remove = async (id, name) => {
  // 顯示二次確認視窗，提升安全性
  if (confirm(`確定要刪除「${name}」這個產品？此動作無法復原。`)) {
    console.log('Store delete function:', productStore.deleteProduct)
    try {
      await productStore.deleteProduct(id)
      alert('已成功刪除')
    } catch (error) {
      alert('刪除失敗，請稍後再試', error)
    }
  }
}
const closeModal = () => {
  showModal.value = false
  isEdit.value = false
  currentId.value = null
  productData.value = { name: '', price: 0, isOpen: true, imageUrls: [] }
  previewUrls.value = [] // 👈 務必清空
  selectedFiles.value = [] // 👈 務必清空
  error.value = { name: '' }
}
const cancel = () => {
  closeModal()
}

import imageCompression from 'browser-image-compression' // 記得在 script setup 頂端 import

const onFileChange = async (e) => {
  const files = Array.from(e.target.files)

  // 設定壓縮參數
  const options = {
    maxSizeMB: 0.8, // 最大檔案大小 (0.8MB 是畫質與速度的平衡點)
    maxWidthOrHeight: 1280, // 最大邊長 (足以應付 4:3 預覽與詳細資料 Galleria)
    useWebWorker: true, // 使用 Web Worker 避免畫面卡死
    fileType: 'image/jpeg', // 統一轉成 jpeg 檔案會更小
  }

  for (const file of files) {
    try {
      // 執行壓縮
      const compressedFile = await imageCompression(file, options)

      // 將壓縮後的 File 物件存入上傳清單
      selectedFiles.value.push(compressedFile)

      // 產生預覽網址
      previewUrls.value.push(URL.createObjectURL(compressedFile))
    } catch (error) {
      console.error('圖片壓縮失敗:', error)
    }
  }

  // 重設 input 讓同檔案可重複選取
  e.target.value = ''
}

const removeImage = (index) => {
  const targetUrl = previewUrls.value[index]

  // 1. 從預覽陣列移除
  previewUrls.value.splice(index, 1)

  // 2. 如果是「本地新選」的圖（Blob 開頭），要從待上傳檔案移除
  if (targetUrl.startsWith('blob:')) {
    // 找到它在 selectedFiles 裡面的位置（這需要一點索引對應技巧）
    // 簡單做法：重新過濾 selectedFiles
    selectedFiles.value = selectedFiles.value.filter(
      (file) => URL.createObjectURL(file) !== targetUrl,
    )
  } else {
    // 3. 如果是「雲端舊圖」，要從 productData.imageUrls 移除，存檔時才會同步
    productData.value.imageUrls = productData.value.imageUrls.filter((url) => url !== targetUrl)
  }
}
const Validate = () => {
  // 1. 初始化錯誤訊息 (清空舊的報錯)
  error.value = {
    name: '',
    typeId: '',
    price: '',
  }

  let isValid = true

  // 2. 檢查產品名稱
  if (!productData.value.name || productData.value.name.trim() === '') {
    error.value.name = '請輸入產品名稱'
    isValid = false
  }

  // 3. 檢查類別是否已選擇 (不得為空)
  if (!productData.value.typeId) {
    error.value.typeId = '請選擇產品類別'
    isValid = false
  }

  // 4. 檢查價格：必須是大於 0 的整數
  const price = productData.value.price
  if (price === null || price === undefined || price === '') {
    error.value.price = '請輸入價格'
    isValid = false
  } else if (price <= 0) {
    error.value.price = '價格必須大於 0'
    isValid = false
  } else if (!Number.isInteger(Number(price))) {
    error.value.price = '價格必須是整數'
    isValid = false
  }

  return isValid
}

// 清空搜尋條件
const resetSearch = () => {
  // 1. 清空關鍵字
  searchKeyword.value = ''

  // 2. 還原為全選類別 (從 productTypes 裡面抓所有 ID)
  selectedTypeIds.value = productTypes.value.map((t) => t.id)

  // 3. 立即觸發一次搜尋，恢復原始列表顯示
  handleSearch()
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
</style>
