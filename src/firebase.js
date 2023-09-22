// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    apiKey: "AIzaSyBuxw26gnwBssAEMjHepXRO8akKJhVpv7A",
    authDomain: "artfinastudio-95248.firebaseapp.com",
    projectId: "artfinastudio-95248",
    storageBucket: "artfinastudio-95248.appspot.com",
    messagingSenderId: "284933890064",
    appId: "1:284933890064:web:06fde9e01b2faa06a72a95"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);