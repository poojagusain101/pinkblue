// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAy5XJjHkQFsQ74MeiNC8WSEhSwjkWyv3c",
  authDomain: "pinkblue-682eb.firebaseapp.com",
  projectId: "pinkblue-682eb",
  storageBucket: "pinkblue-682eb.appspot.com",
  messagingSenderId: "883328109912",
  appId: "1:883328109912:web:9f71c4d71fc3a3b016e92d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);

const auth=getAuth();
export const provider=new GoogleAuthProvider();

export { app,auth };
