// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCrH4DZEzL3n0GdqgAxVeHDuS4JMYU-z-c",
  authDomain: "travel-website-auth-3c58a.firebaseapp.com",
  projectId: "travel-website-auth-3c58a",
  storageBucket: "travel-website-auth-3c58a.appspot.com",
  messagingSenderId: "749153668740",
  appId: "1:749153668740:web:c3f4b3814ec31b6cd43cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app;

const auth = getAuth(app);
export default auth;