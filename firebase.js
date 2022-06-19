var firebase = require('firebase');
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCKM2XbKC6Ouuh_1J_jXKnvC_mDR_UlTaA",
  authDomain: "instanative-900a2.firebaseapp.com",
  projectId: "instanative-900a2",
  storageBucket: "instanative-900a2.appspot.com",
  messagingSenderId: "214715814886",
  appId: "1:214715814886:web:c89bc2d87a698ea5a43c27"
};



// const app = initializeApp(firebaseConfig);
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export  {firebase, db}