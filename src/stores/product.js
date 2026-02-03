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

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const pisLoading = ref(true)

  // 封裝監聽函式
  const fetchProducts = () => {
    const q = query(collection(db, 'products'))

    // onSnapshot 會回傳一個「取消監聽」的函式
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedData = []
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() })
        })
        products.value = fetchedData
        pisLoading.value = false
      },
      (error) => {
        console.error('Firebase 讀取失敗:', error)
        pisLoading.value = false
      },
    )

    return unsubscribe
  }

  // 新增分類
  const addProduct = async (typeData) => {
    pisLoading.value = true // 這裡可以使用你剛才提到的 isLoading
    try {
      // 使用解構運算子 ...typeData 將物件內容展開
      await addDoc(collection(db, 'products'), {
        ...typeData,
        createdAt: new Date(), // 統一在 Store 加入建立時間
        updatedAt: new Date(),
      })
    } catch (error) {
      console.error('新增失敗:', error)
      throw error
    } finally {
      pisLoading.value = false
    }
  }

  // 修改分類
  const updateProduct = async (id, updateData) => {
    pisLoading.value = true
    try {
      // 1. 取得指定文件的參考
      const docRef = doc(db, 'products', id)

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
      pisLoading.value = false
    }
  }

  // 刪除分類
  const deleteProduct = async (id) => {
    pisLoading.value = true
    try {
      const docRef = doc(db, 'products', id)
      await deleteDoc(docRef)
      console.log('刪除成功')
    } catch (error) {
      console.error('刪除失敗：', error)
      throw error
    } finally {
      pisLoading.value = false
    }
  }

  // 在 useProductStore 內補強
  const uploadMultipleImages = async (files) => {
    if (!files || files.length === 0) return []

    try {
      const uploadPromises = files.map(async (file) => {
        const fileName = `${Date.now()}_${file.name}`
        const fileRef = storageRef(storage, `products/${fileName}`)
        const snapshot = await uploadBytes(fileRef, file)
        return await getDownloadURL(snapshot.ref)
      })

      // Promise.all 會同時啟動所有上傳，速度最快
      return await Promise.all(uploadPromises)
    } catch (error) {
      console.error('多圖上傳失敗：', error)
      throw error
    }
  }

  // 將資料與函式 return 出去，外部才能調用
  return {
    products,
    pisLoading,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    uploadMultipleImages,
  }
})
