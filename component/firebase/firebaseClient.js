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
}

//auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//Firestore Exports
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const increment = firebase.firestore.FieldValue.increment;

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
  };
}
