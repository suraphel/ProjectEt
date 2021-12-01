import { initializeApp } from "Firebase/app";
// import { getAuth } from "@firebase/auth";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
const auth = getAuth(app);

export {
  auth,
  app,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
