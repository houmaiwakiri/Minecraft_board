import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_ArcOzxczI4ZvECIwhKTZmZKzxJliCNs",
    authDomain: "minecraftboard-57cea.firebaseapp.com",
    projectId: "minecraftboard-57cea",
    storageBucket: "minecraftboard-57cea.appspot.com",
    messagingSenderId: "1091892727029",
    appId: "1:1091892727029:web:970bd181621d0a5498c9bc"
});

const db = firebaseApp.firestore();

export { db };