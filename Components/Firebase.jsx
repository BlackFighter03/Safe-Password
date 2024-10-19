import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from '@firebase/auth';
import { getFirestore } from "firebase/firestore"; // Importa getFirestore
import { getFunctions } from 'firebase/functions';
import { getStorage } from "firebase/storage";

/**
 * Configurazioni per firebase
 * */
const firebaseConfig = {
  apiKey: "AIzaSyA4U_dccfM_KVnUBD-576JjDaX8G2hG-KI",
  authDomain: "password-safe-66f8f.firebaseapp.com",
  projectId: "password-safe-66f8f",
  storageBucket: "password-safe-66f8f.appspot.com",
  messagingSenderId: "334381153577",
  appId: "1:334381153577:web:edad6e8b42d4c7509b4b38"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Inizializza Firestore
export const db = getFirestore(app); 

export const functions = getFunctions(app); // Inizializza e esporta "functions"
export const auth = getAuth(app); 
export const createUser = createUserWithEmailAndPassword; 
export const signInUser = signInWithEmailAndPassword; 
export const onAuthStateChange = onAuthStateChanged; 
export const signOutUser = signOut; 
export const storage = getStorage(app);