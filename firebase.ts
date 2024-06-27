// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyYQJN6GLt-VIrhqh_4-tXlcCdEDuQhCI",
  authDomain: "smkkusumabangsa-b2018.firebaseapp.com",
  projectId: "smkkusumabangsa-b2018",
  storageBucket: "smkkusumabangsa-b2018.appspot.com",
  messagingSenderId: "276863808834",
  appId: "1:276863808834:web:83485361b8fecc92cfc4db",
  measurementId: "G-1DSMJWY1WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);