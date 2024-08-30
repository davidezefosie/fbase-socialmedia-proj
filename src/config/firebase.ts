// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlL7k85_D8rSnOvxqtYyp_5mr-K_63YBs",
  authDomain: "socialmedia-project-99201.firebaseapp.com",
  projectId: "socialmedia-project-99201",
  storageBucket: "socialmedia-project-99201.appspot.com",
  messagingSenderId: "713051439472",
  appId: "1:713051439472:web:6c155b2d687949ef200fb5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// NOTE: DON'T PUBLISH CONFIG FILES ON GITHUB!!!
