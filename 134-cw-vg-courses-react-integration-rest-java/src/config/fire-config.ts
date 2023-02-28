// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBCwWyZfGnmmPUa_CbQTph6uYWkmAtecQ",
  authDomain: "courses-1cbdd.firebaseapp.com",
  projectId: "courses-1cbdd",
  storageBucket: "courses-1cbdd.appspot.com",
  messagingSenderId: "23448221831",
  appId: "1:23448221831:web:780717f5c7f38e03192022"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
export default appFire;