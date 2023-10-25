import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxdfZ2y6F1LP96nJxm7EzkjnWqACmSTHc",
  authDomain: "taller-app-11ee6.firebaseapp.com",
  projectId: "taller-app-11ee6",
  storageBucket: "taller-app-11ee6.appspot.com",
  messagingSenderId: "999554574100",
  appId: "1:999554574100:web:ef1edd31f6116899a44401"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const auth = getAuth(app);

export {app, auth , firestore};