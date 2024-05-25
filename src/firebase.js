// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtaEDn709CsMO1c08_Zf5QrXH_vweWMgc",
    authDomain: "anus-4a5b5.firebaseapp.com",
    projectId: "anus-4a5b5",
    storageBucket: "anus-4a5b5.appspot.com",
    messagingSenderId: "951243017188",
    appId: "1:951243017188:web:2d41ea810ad399aae3d5f1",
    measurementId: "G-8MFHYNSV0T"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
