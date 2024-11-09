// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER: DO not shere config publicly

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Rqb-KwHO13XbmwAxmWoQz5qgGEvrqTc",
  authDomain: "simpule-firebase2.firebaseapp.com",
  projectId: "simpule-firebase2",
  storageBucket: "simpule-firebase2.firebasestorage.app",
  messagingSenderId: "838828199827",
  appId: "1:838828199827:web:10dcab35bd1d8402a96266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
