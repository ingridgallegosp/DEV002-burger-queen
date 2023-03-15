// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import { getFirestore, collection, query, where } from "firebase/firestore";


import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDERING_ID, APP_ID} from './secrets.js';

// Web app's Firebase configuration
export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDERING_ID,
  appId: APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Log in
export const logIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password);

// Log out
export const logOut = () => signOut(auth);

/* // Auth state listener
export const onAuthState = onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    //console.log(uid)
  } else {
    console.log("no user")
  }
  return user
}); */

// Current user
export const currentUser = auth.currentUser