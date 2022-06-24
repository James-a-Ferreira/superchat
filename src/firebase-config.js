
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_APP_ID
};
  
// const firebaseConfig = {
//   apiKey: "AIzaSyB7V6cD5bMf8FJhZ__I_s7q-U9jHm9bFGY",
//   authDomain: "superchat2-61170.firebaseapp.com",
//   projectId: "superchat2-61170",
//   storageBucket: "superchat2-61170.appspot.com",
//   messagingSenderId: "438362869460",
//   appId: "1:438362869460:web:fc6e9fca6c327d0480b541"
// };
  const fbApp = initializeApp(firebaseConfig);
  const db = getFirestore(fbApp);
  const fbAuth = getAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(fbAuth, provider);
  }

  export {db, fbApp, fbAuth, signInWithGoogle}
