// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANA1q0_HhD_AUCkWRlm1nB1qzPO2MAi8",
  authDomain: "auth-e18cd.firebaseapp.com",
  projectId: "auth-e18cd",
  storageBucket: "auth-e18cd.appspot.com",
  messagingSenderId: "954601990064",
  appId: "1:954601990064:web:9767cf9789586670441875",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const provider = new firebase.default.auth.GoogleAuthProvider();

const auth = firebase.auth();

export { auth, provider };
