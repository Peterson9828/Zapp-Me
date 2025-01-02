import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const config = {
  apiKey: 'AIzaSyAMXyNDdG9DWPRLaz611oIPBrinPuaF9nY',
  authDomain: 'zappme-prod.firebaseapp.com',
  projectId: 'zappme-prod',
  storageBucket: 'zappme-prod.firebasestorage.app',
  messagingSenderId: '405488303648',
  appId: '1:405488303648:web:784dfe53d7727c638b8645',
  measurementId: 'G-QDNZTE7HQC',
}
export function initialize() {
  const firebaseApp = initializeApp(config)
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)
  return { firebaseApp, auth, firestore, storage }
}
