// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh_K6ZmfnQvwA_OfKLZNPQPhj3z9UVMvU",
  authDomain: "learning-hero-bc48d.firebaseapp.com",
  projectId: "learning-hero-bc48d",
  storageBucket: "learning-hero-bc48d.appspot.com",
  messagingSenderId: "79520057704",
  appId: "1:79520057704:web:c95e300d0c4439a68c6edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;