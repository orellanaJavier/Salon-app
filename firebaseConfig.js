import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbBFnVG0zfpg0xjVakfPPFr7PRPflBAUU",
    authDomain: "gemelas-salon.firebaseapp.com",
    projectId: "gemelas-salon",
    storageBucket: "gemelas-salon.appspot.com",
    messagingSenderId: "661492547",
    appId: "1:661492547:web:9b328f80b6e8f7d55695f6",
    measurementId: "G-17X40GW5MQ"
  };
  
  // Initialize Firebase
  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
  export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
