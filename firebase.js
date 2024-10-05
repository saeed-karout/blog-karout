// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2doMeRSMiRmTTbhxeZa7RC4SsmYFrGOw",
  authDomain: "mern-blog-29225.firebaseapp.com",
  projectId: "mern-blog-29225",
  storageBucket: "mern-blog-29225.appspot.com",
  messagingSenderId: "459035856261",
  appId: "1:459035856261:web:5726deba4c46778b9248ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);