// firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHBCWzzaz6MShsA-4sqRWyavSm3w1eEBU",
  authDomain: "email-password-auth-5dce2.firebaseapp.com",
  projectId: "email-password-auth-5dce2",
  storageBucket: "email-password-auth-5dce2.firebasestorage.app",
  messagingSenderId: "1083090981220",
  appId: "1:1083090981220:web:055d6fc8ac0d8edb01aa71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Export the auth object