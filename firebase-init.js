import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, writeBatch, setDoc, getDoc, collection, getDocs, deleteDoc, query, where, runTransaction } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = { 
    apiKey: "AIzaSyAfjCmscYLNyG2sIqfQqQ2FWG9_vWp-N0o", 
    authDomain: "vmi-portal.firebaseapp.com", 
    projectId: "vmi-portal", 
    storageBucket: "vmi-portal.firebasestorage.app", 
    messagingSenderId: "215224119153", 
    appId: "1:215224119153:web:7e1b272444c3c9d696d0d0" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export instances to be used across all your HTML files
export { db, doc, writeBatch, setDoc, getDoc, collection, getDocs, deleteDoc, query, where, runTransaction };