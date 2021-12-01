import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
    authDomain: "test-2a962.firebaseapp.com",
    databaseURL:
      "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-2a962",
    storageBucket: "test-2a962.appspot.com",
    messagingSenderId: "377052867142",
    appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const Auth = getAuth(app);

  return <p> this is a test page and nothing more than that </p>;
};
export default firebase;
