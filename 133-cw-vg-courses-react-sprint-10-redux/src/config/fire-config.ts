// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnLqxeyGBF2_8OlGqT_eR3AlOjOGAK_QY",
  authDomain: "dss-oos.firebaseapp.com",
  projectId: "dss-oos",
  storageBucket: "dss-oos.appspot.com",
  messagingSenderId: "1086129472110",
  appId: "1:1086129472110:web:8ebbb9989ba0c5c402dc7f"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);
export default appFire;