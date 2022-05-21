// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: "AIzaSyBNAqkIqxEOU7uXglWeSb-qsQuogDsYArc",
  // authDomain: "doctors-portal-4ffe3.firebaseapp.com",
  // projectId: "doctors-portal-4ffe3",
  // storageBucket: "doctors-portal-4ffe3.appspot.com",
  // messagingSenderId: "40640104946",
  // appId: "1:40640104946:web:a86c35e071167ebb7f836b"
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth