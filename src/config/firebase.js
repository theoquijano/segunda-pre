import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBRBD2ZHsAk_NW_NxtuEveMVdIFStlMVkU",
  authDomain: "proyectofinal-57862.firebaseapp.com",
  projectId: "proyectofinal-57862",
  storageBucket: "proyectofinal-57862.appspot.com",
  messagingSenderId: "761135973213",
  appId: "1:761135973213:web:b8a1e534643d6e03771eb4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()