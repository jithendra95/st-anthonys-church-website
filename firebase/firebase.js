// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCphmOzPdNWcWmXQyFT7rn8tCtafp1leOE",
  authDomain: "church-web-mahar.firebaseapp.com",
  projectId: "church-web-mahar",
  storageBucket: "church-web-mahar.appspot.com",
  messagingSenderId: "1028660436145",
  appId: "1:1028660436145:web:4cecb6a1b1af6c2c575690",
  measurementId: "G-577L1YT774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}


const firestore = getFirestore();

export {firestore};
export {analytics};