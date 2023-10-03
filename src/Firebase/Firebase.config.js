// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn9HhBB6qVIBYc9nhWD5Wb42mi23EYiZY",
  authDomain: "dreagon-projects.firebaseapp.com",
  projectId: "dreagon-projects",
  storageBucket: "dreagon-projects.appspot.com",
  messagingSenderId: "825527143854",
  appId: "1:825527143854:web:da414a767a3619d466cc3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;