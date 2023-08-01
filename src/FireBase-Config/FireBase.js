import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyx5oCtZwurvtubg_mngyWYswFzW0l66U",
  authDomain: "movie-app-011.firebaseapp.com",
  projectId: "movie-app-011",
  storageBucket: "movie-app-011.appspot.com",
  messagingSenderId: "1018787158052",
  appId: "1:1018787158052:web:c251f5eaac17ca372220b1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
