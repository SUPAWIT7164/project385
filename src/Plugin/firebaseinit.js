import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAfzA98SpA_LJrAMAJz8bDhuDUvzojFybI",

  authDomain: "project-53f5e.firebaseapp.com",

  projectId: "project-53f5e",

  storageBucket: "project-53f5e.appspot.com",

  messagingSenderId: "554984554982",

  appId: "1:554984554982:web:e43f17d95890596d875627",

  measurementId: "G-MV13G3LJ0H",
});

const db = getFirestore(firebaseConfig);

export { db };
