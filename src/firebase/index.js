// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQ9gx0akF2b271QKeMwM3Y5UvrYFG9M6M",
    authDomain: "design-scribe-website.firebaseapp.com",
    projectId: "design-scribe-website",
    storageBucket: "design-scribe-website.firebasestorage.app",
    messagingSenderId: "466318913057",
    appId: "1:466318913057:web:f652eabd7425d78736fd60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;