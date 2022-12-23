import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZJwLr-AkUm9QUcRmH746oFnnUdPUxO1E",
  authDomain: "chat-app-170e1.firebaseapp.com",
  projectId: "chat-app-170e1",
  storageBucket: "chat-app-170e1.appspot.com",
  messagingSenderId: "485271138654",
  appId: "1:485271138654:web:ebffac55e204fc5a0c1fcf"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
