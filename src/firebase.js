import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCTin2GF4BEfrq44qoYkxlzpJuy-HvCjpY",
  authDomain: "clone-8f4f2.firebaseapp.com",
  databaseURL: "https://clone-8f4f2.firebaseio.com",
  projectId: "clone-8f4f2",
  storageBucket: "clone-8f4f2.appspot.com",
  messagingSenderId: "258437352259",
  appId: "1:258437352259:web:1850d98d2e61c47cdc3df6",
  measurementId: "G-EC4SGJ2B88",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
