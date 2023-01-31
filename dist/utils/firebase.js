// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT8geM0sR70ZZlzqyoFNNr_AXkWszBPIU",
    authDomain: "react-ecommerce-e78ea.firebaseapp.com",
    projectId: process.env.REACT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.REACT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.REACT_PUBLIC_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
