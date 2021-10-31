
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Tuqi8i-oLVaDZARV17AN3iNnLmzMx6c",
  authDomain: "book-store-a1f62.firebaseapp.com",
  projectId: "book-store-a1f62",
  storageBucket: "book-store-a1f62.appspot.com",
  messagingSenderId: "4772049025",
  appId: "1:4772049025:web:8e10b52b3b818f47eb1d80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)