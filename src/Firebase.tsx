// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd2ES9HBnAkrdeWkgcegRXnlV7fES-_w8",
  authDomain: "my-portfolio-80b3c.firebaseapp.com",
  projectId: "my-portfolio-80b3c",
  storageBucket: "my-portfolio-80b3c.appspot.com",
  messagingSenderId: "223488091679",
  appId: "1:223488091679:web:7d3a4eef2b537873b6172a",
  measurementId: "G-5YNS4L520H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);