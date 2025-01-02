import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const config = {
  apiKey: 'AIzaSyDUXFhQuYMj3UJxNiCVw6v0Man59h4QCCQ',
  authDomain: 'zappme-c489a.firebaseapp.com',
  projectId: 'zappme-c489a',
  storageBucket: 'zappme-c489a.firebasestorage.app',
  messagingSenderId: '1043230845067',
  appId: '1:1043230845067:web:65f3fb11de5d0ce1b20c8e',
  measurementId: 'G-YEH9G4QCBN',
}
export function initialize() {
  const firebaseApp = initializeApp(config)
  const auth = getAuth(firebaseApp)
  const firestore = getFirestore(firebaseApp)
  const storage = getStorage(firebaseApp)
  return { firebaseApp, auth, firestore, storage }
}
