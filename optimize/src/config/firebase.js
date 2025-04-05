// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAd1rVo3_IVJrzjOf2-cLgW2w92rqjyS7M",
  authDomain: "react-9e5ee.firebaseapp.com",
  projectId: "react-9e5ee",
  storageBucket: "react-9e5ee.firebasestorage.app",
  messagingSenderId: "495128391464",
  appId: "1:495128391464:web:d64c880032da174179ea1d",
  measurementId: "G-PV0JSN4DSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth=getAuth(app)

export const googleAuth=async()=>{
    const provider=new GoogleAuthProvider()
    return await signInWithPopup(auth,provider)
}

export const signupwithEmail=async()=>{
    return await createUserWithEmailAndPassword(auth,email,password)
}

export const signin=async()=>{
    return await signInWithEmailAndPassword(auth,email,password)
}


// project-495128391464


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional