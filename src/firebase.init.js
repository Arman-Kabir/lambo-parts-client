// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: "AIzaSyC_RQH4kABDPaEORQqjyUVKOY0upXCurCs",
  // authDomain: "lambo-parts.firebaseapp.com",
  // projectId: "lambo-parts",
  // storageBucket: "lambo-parts.appspot.com",
  // messagingSenderId: "598635833098",
  // appId: "1:598635833098:web:61fa69bdb064e6face3cf3"


  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;