// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1H9PXJEKYz-VToecWNjHVlhhBkvMzoR4",
  authDomain: "social-media-b8b8b.firebaseapp.com",
  projectId: "social-media-b8b8b",
  storageBucket: "social-media-b8b8b.appspot.com",
  messagingSenderId: "989622407992",
  appId: "1:989622407992:web:81332b1b034d39954967cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)