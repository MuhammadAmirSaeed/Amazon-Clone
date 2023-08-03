import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7KoMo0JhK9ZagZBb-Amin8xYGq2PsD6c",
  authDomain: "clone-ddf6f.firebaseapp.com",
  projectId: "clone-ddf6f",
  storageBucket: "clone-ddf6f.appspot.com",
  messagingSenderId: "62851496024",
  appId: "1:62851496024:web:82435dee9395043307322d",
  measurementId: "G-XKK7NBF2X7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
