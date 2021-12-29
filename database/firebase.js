import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0VQRncwwrwJyEaxYk_8yIyyYhdX-mqMo",
  authDomain: "room-for-rent-2106f.firebaseapp.com",
  projectId: "room-for-rent-2106f",
  storageBucket: "room-for-rent-2106f.appspot.com",
  messagingSenderId: "253245532400",
  appId: "1:253245532400:web:e6574130cf8659c3903a35",
  measurementId: "G-K0PPW4KKT1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  if (typeof window !== "undefined") {
    if ("measurementID" in firebaseConfig) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
