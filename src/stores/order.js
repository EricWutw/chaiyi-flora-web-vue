import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  collection,
  onSnapshot,
  query,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '@/firebase'
// import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'

export const useOrderStore = defineStore('order', () => {
  const orders = ref([])
  const pisLoading = ref(true)
  const cart = ref([]) // 這是前台使用者當下的購物車內容

  // 計算購物車總數量
  const cartCount = computed(() => {
    return cart.value.reduce((total, item) => total + (item.quantity || 1), 0)
  })

  const addToCart = (product) => {
    // 檢查購物車是否已經有這件商品
    const existingItem = cart.value.find((item) => item.id === product.id)

    if (existingItem) {
      // 如果已有，數量 +1
      existingItem.quantity++
    } else {
      // 如果沒有，把商品加進去並設定初始數量為 1
      cart.value.push({ ...product, quantity: 1 })
    }
  }
  // stores/order.js
  const removeFromCart = (id) => {
    // 找出所有 id 不等於目標 id 的商品，重新賦值給 cart
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  // 封裝監聽函式
  const fetchOrders = () => {
    const q = query(collection(db, 'products'))

    // onSnapshot 會回傳一個「取消監聽」的函式
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedData = []
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() })
        })
        orders.value = fetchedData
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
  const addOrder = async (orderData) => {
    pisLoading.value = true // 這裡可以使用你剛才提到的 isLoading
    try {
      // 使用解構運算子 ...typeData 將物件內容展開
      await addDoc(collection(db, 'orders'), {
        ...orderData,
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
  const updateOrder = async (id, updateData) => {
    pisLoading.value = true
    try {
      // 1. 取得指定文件的參考
      const docRef = doc(db, 'orders', id)

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
  const deleteOrder = async (id) => {
    pisLoading.value = true
    try {
      const docRef = doc(db, 'orders', id)
      await deleteDoc(docRef)
      console.log('刪除成功')
    } catch (error) {
      console.error('刪除失敗：', error)
      throw error
    } finally {
      pisLoading.value = false
    }
  }

  // 將資料與函式 return 出去，外部才能調用
  return {
    orders,
    cart,
    cartCount,
    addToCart,
    pisLoading,
    fetchOrders,
    addOrder,
    updateOrder,
    deleteOrder,
    removeFromCart,
  }
})
