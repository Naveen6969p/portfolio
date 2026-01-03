import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_8WFUvW9iAQygLJqy8TJabS_q-VEskIw",
  authDomain: "firebse-cfa9e.firebaseapp.com",
  projectId: "firebse-cfa9e",
  storageBucket: "firebse-cfa9e.appspot.com",
  messagingSenderId: "832060706900",
  appId: "1:832060706900:web:002911320b95da7faa1dc1"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);