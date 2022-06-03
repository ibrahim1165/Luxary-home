// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYXdBv_Kf-lypXTWukfTnWUQBh0J_dDfg",
  authDomain: "luxury-living-1815d.firebaseapp.com",
  projectId: "luxury-living-1815d",
  storageBucket: "luxury-living-1815d.appspot.com",
  messagingSenderId: "640638405344",
  appId: "1:640638405344:web:55f5b145b68e673da55e85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;