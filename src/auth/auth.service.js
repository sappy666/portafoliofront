import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdzw6q8rAdrFENwTLqFVhhj9_IGYPzgLI",
    authDomain: "adweb-2f85c.firebaseapp.com",
    projectId: "adweb-2f85c",
    storageBucket: "adweb-2f85c.appspot.com",
    messagingSenderId: "830212848640",
    appId: "1:830212848640:web:8e35b03eb37e26da692ce5"
  };

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    auth,
    db
};

