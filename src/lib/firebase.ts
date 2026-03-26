import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDad78dDrCfmd-1kBPes9Gkwgr9gfjgXvI",
  authDomain: "smart-savings-4be47.firebaseapp.com",
  projectId: "smart-savings-4be47",
  storageBucket: "smart-savings-4be47.firebasestorage.app",
  messagingSenderId: "538090496490",
  appId: "1:538090496490:web:d41e15cd4f74571dd05293",
  measurementId: "G-L894D6YLXM"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app, "smart-learn");