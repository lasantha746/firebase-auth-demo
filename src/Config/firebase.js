import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuVwlLUkRnnDz4-_OzijKrtEnObhdkpI8",
    authDomain: "logingtest-fb563.firebaseapp.com",
    projectId: "logingtest-fb563",
    storageBucket: "logingtest-fb563.firebasestorage.app",
    messagingSenderId: "674777967697",
    appId: "1:674777967697:web:a2fa2d55712edbc0fc5c70",
    measurementId: "G-D4XY83LRRV"
};

const app = initializeApp(firebaseConfig);

// Auth exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
