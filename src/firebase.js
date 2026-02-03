// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: 'chaiyi-flora-web.firebaseapp.com',
  projectId: 'chaiyi-flora-web',
  storageBucket: 'chaiyi-flora-web.firebasestorage.app',
  messagingSenderId: '177570472936',
  appId: '1:177570472936:web:84b00ce20183bb5edc3a5d',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
export { db, storage }
