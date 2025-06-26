// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbHaaqJYA1M10mIg_c9KmXskR7S7B0h0c",
  authDomain: "proyecto-react-75a12.firebaseapp.com",
  projectId: "proyecto-react-75a12",
  storageBucket: "proyecto-react-75a12.firebasestorage.app",
  messagingSenderId: "536329035099",
  appId: "1:536329035099:web:08d21d98e2fe1ea66f4e7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)
