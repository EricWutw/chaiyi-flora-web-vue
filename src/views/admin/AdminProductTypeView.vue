<template>
  <div v-if="isLoading" class="section has-text-centered">
    <button class="button is-loading is-large is-white"></button>
  </div>
  <div>
    <p class="subtitle has-text-centered">產品類別維護</p>

    <button class="button is-info" @click="((isEdit = false), (showModal = true))">
      新增產品類別
    </button>
    <CardModal v-model="showModal">
      <template #header> {{ isEdit ? '修改產品類型' : '建立產品類型' }} </template>
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
        <div class="column">
          <div class="field">
            <label for="name" class="label">類型名稱</label>
            <div class="control">
              <input
                v-model="typeData.name"
                id="name"
                class="input"
                type="text"
                placeholder="Text input"
              />
            </div>
            <span v-if="error.name" class="help is-danger">{{ error.name }}</span>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox" for="isOpen">
                <input id="isOpen" v-model="typeData.isOpen" type="checkbox" />
                啟用
              </label>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  id="imageInput"
                  accept="image/*"
                  @change="onFileChange"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label"> 圖片 </span>
                </span>
                <span class="file-name"
                  >{{ selectedFile ? selectedFile.name : '請上傳圖片.....' }}
                </span>
              </label>
            </div>

            <div v-if="previewUrl" class="mt-3">
              <figure
                class="image is-256x256 is-inline-block"
                style="border: 1px solid #dbdbdb; padding: 5px"
              >
                <img :src="previewUrl" style="object-fit: cover; height: 100%" />
              </figure>
              <div class="mt-1">
                <button class="button is-small is-danger is-light" @click="clearSelectedFile">
                  移除圖片
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardModal>
    <hr />
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>index</th>
          <th>名稱</th>
          <th>img</th>
          <th>狀態</th>
          <th>功能</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(types, index) in productTypes" :key="index">
          <td class="is-vcentered">{{ index + 1 }}</td>

          <td class="is-vcentered has-text-weight-medium">{{ types.name }}</td>

          <td class="is-vcentered">
            <figure v-if="types.imageUrl" class="image is-64x64">
              <img
                :src="types.imageUrl"
                alt="類別圖片"
                style="object-fit: cover; height: 100%; width: 100%; border-radius: 4px"
              />
            </figure>
            <span v-else class="has-text-grey-light is-size-7">無圖片</span>
          </td>

          <td class="is-vcentered">
            <span :class="['tag', types.isOpen ? 'is-success is-light' : 'is-danger is-light']">
              {{ types.isOpen ? '開啟' : '關閉' }}
            </span>
          </td>

          <td class="is-vcentered">
            <div class="buttons">
              <button type="button" class="button is-small is-success" @click="handleEdit(types)">
                修改
              </button>
              <button
                type="button"
                class="button is-small is-danger"
                @click="remove(types.id, types.name)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useProductTypeStore } from '@/stores/productType' // 路徑依你實際設定為準
import { storeToRefs } from 'pinia'
import CardModal from '@/components/CrudModal.vue'

const store = useProductTypeStore()
// 使用 storeToRefs 可以保持資料的響應式 (Reactive)
const { productTypes, isLoading } = storeToRefs(store)
const showModal = ref(false)
const error = ref({ name: '', isOpen: true })
const typeData = ref({ name: '', isOpen: true })
const isEdit = ref(false)
const currentId = ref(null)
const isSaving = ref(false) // 專用的儲存狀態
const selectedFile = ref(null)
const previewUrl = ref('')

let unsubscribe = null

onMounted(() => {
  // 開始監聽 Firebase 資料
  unsubscribe = store.fetchProductTypes()
})

onUnmounted(() => {
  // 當組件卸載時，停止監聽，節省 Firebase 流量與記憶體
  if (unsubscribe) unsubscribe()
})

const handleEdit = (item) => {
  isEdit.value = true
  currentId.value = item.id // 紀錄是哪一筆要修改

  // 重要：使用展開運算子 {...item} 進行淺拷貝
  // 避免在 Modal 改動時直接影響到表格資料
  typeData.value = { ...item }
  // 2. 帶入原有圖片網址進行預覽
  // 如果 item 內有 imageUrl 就顯示，沒有就清空
  previewUrl.value = item.imageUrl || ''

  // 3. 重置選取檔案（因為還沒選新的）
  selectedFile.value = null

  showModal.value = true
}

const save = async () => {
  if (!Validate()) return
  if (isSaving.value) return // 門禁機制：如果正在存檔中，直接擋掉後續點擊
  isSaving.value = true // 開啟鎖定與轉圈
  try {
    let imageUrl = typeData.value.imageUrl || '' // 預設值

    // 如果有選取新檔案，先上傳
    if (selectedFile.value) {
      imageUrl = await store.uploadImage(selectedFile.value)
    }

    const finalData = {
      ...typeData.value,
      imageUrl: imageUrl, // 將圖片網址塞進物件
    }

    if (isEdit.value) {
      await store.updateProductType(currentId.value, finalData)
    } else {
      await store.addProductType(finalData)
    }

    closeModal()
    selectedFile.value = null
    previewUrl.value = ''
    alert('儲存成功！')
  } catch (err) {
    alert('操作失敗', err)
  } finally {
    isSaving.value = false // 無論成功或失敗，最後都要解鎖
  }
}

const remove = async (id, name) => {
  // 顯示二次確認視窗，提升安全性
  if (confirm(`確定要刪除「${name}」這個分類嗎？此動作無法復原。`)) {
    console.log('Store delete function:', store.deleteProductType)
    try {
      await store.deleteProductType(id)
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
  typeData.value = { name: '', isOpen: true }
  error.value = { name: '' }
  selectedFile.value = null
  previewUrl.value = ''
}
const cancel = () => {
  closeModal()
}

// 當使用者選取檔案時
const onFileChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    selectedFile.value = file
    // 建立本地預覽網址
    previewUrl.value = URL.createObjectURL(file)
  }
}

const clearSelectedFile = () => {
  selectedFile.value = null
  // 如果是編輯模式，移除預覽會讓 imageUrl 變為空，存檔後就會刪除該筆資料的圖片
  previewUrl.value = ''

  const fileInput = document.getElementById('imageInput')
  if (fileInput) fileInput.value = ''

  // 同步更新 typeData，確保存檔時 imageUrl 是空的
  typeData.value.imageUrl = ''
}

const Validate = () => {
  error.value = { name: '', isOpen: true }
  if (!typeData.value.name) {
    error.value.name = '請輸入作品類型'
  } // 如果 name 沒錯且 age 沒錯，回傳 true
  return !error.value.name
}
</script>
