import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDnOOa-rog5OWE8_gsExP_vvMLqtTpd420',
  authDomain: 'kartikthakur-me.firebaseapp.com',
  databaseURL: 'https://kartikthakur-me-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'kartikthakur-me',
  storageBucket: 'kartikthakur-me.firebasestorage.app',
  messagingSenderId: '523396796054',
  appId: '1:523396796054:web:0ab0b7bd48bd6982127cb7',
  measurementId: 'G-NFXTKPF31K',
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

export { database }
