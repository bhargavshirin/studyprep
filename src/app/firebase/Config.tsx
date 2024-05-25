
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6S4sZZdG__2v7KbXQVw2PGxloHMwwa3g",
    authDomain: "studyprep-8b899.firebaseapp.com",
    projectId: "studyprep-8b899",
    storageBucket: "studyprep-8b899.appspot.com",
    messagingSenderId: "82027313568",
    appId: "1:82027313568:web:f04d73cb0735cba51e8cc5",
    measurementId: "G-JZ3QFVM30D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };