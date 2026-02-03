import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db, storage } from '@/firebase'
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

export const useProductTypeStore = defineStore('productType', () => {
  const productTypes = ref([])
  const isLoading = ref(true)

  // 封裝監聽函式
  const fetchProductTypes = () => {
    const q = query(collection(db, 'productTypes'))

    // onSnapshot 會回傳一個「取消監聽」的函式
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedData = []
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() })
        })
        productTypes.value = fetchedData
        isLoading.value = false
      },
      (error) => {
        console.error('Firebase 讀取失敗:', error)
        isLoading.value = false
      },
    )

    return unsubscribe
  }

  // 新增分類
  const addProductType = async (typeData) => {
    isLoading.value = true // 這裡可以使用你剛才提到的 isLoading
    try {
      // 使用解構運算子 ...typeData 將物件內容展開
      await addDoc(collection(db, 'productTypes'), {
        ...typeData,
        createdAt: new Date(), // 統一在 Store 加入建立時間
        updatedAt: new Date(),
      })
    } catch (error) {
      console.error('新增失敗:', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  // 修改分類
  const updateProductType = async (id, updateData) => {
    isLoading.value = true
    try {
      // 1. 取得指定文件的參考
      const docRef = doc(db, 'productTypes', id)

      // 2. 核心：先複製一份資料，再把 id 踢掉
      const cleanData = { ...updateData }
      delete cleanData.id // 這樣就不會發生變數名稱衝突或解構錯誤了！

      // 3. 執行更新
      await updateDoc(docRef, {
        ...cleanData,
        updatedAt: new Date(),
      })

      console.log('更新成功')
    } catch (error) {
      console.error('更新失敗：', error)
      throw error // 拋出錯誤讓組件可以 alert
    } finally {
      isLoading.value = false
    }
  }

  // 刪除分類
  const deleteProductType = async (id) => {
    isLoading.value = true
    try {
      const docRef = doc(db, 'productTypes', id)
      await deleteDoc(docRef)
      console.log('刪除成功')
    } catch (error) {
      console.error('刪除失敗：', error)
      throw error
    } finally {
      isLoading.value = false
    }
  }

  //上傳圖片
  const uploadImage = async (file) => {
    if (!file) return null

    try {
      // 1. 建立儲存路徑 (例如：product_types/檔名_時間戳記)
      const fileName = `${Date.now()}_${file.name}`
      const fileRef = storageRef(storage, `product_types/${fileName}`)

      // 2. 上傳檔案
      const snapshot = await uploadBytes(fileRef, file)

      // 3. 取得圖片的網址 (URL)
      const downloadURL = await getDownloadURL(snapshot.ref)

      return downloadURL // 傳回 URL 供後續存入 Firestore 使用
    } catch (error) {
      console.error('圖片上傳失敗：', error)
      throw error
    }
  }

  // 將資料與函式 return 出去，外部才能調用
  return {
    productTypes,
    isLoading,
    fetchProductTypes,
    addProductType,
    updateProductType,
    deleteProductType,
    uploadImage,
  }
})
