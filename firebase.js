// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpfuH5WekQXgmZWpTuJa3wR2UVvrqaq3I",
  authDomain: "hspantryapp-60902.firebaseapp.com",
  projectId: "hspantryapp-60902",
  storageBucket: "hspantryapp-60902.appspot.com",
  messagingSenderId: "517186324671",
  appId: "1:517186324671:web:ebbdd81e540113f393de0a",
  measurementId: "G-H2KV6Q2ZFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export {app, firestore}
const analytics = getAnalytics(app);