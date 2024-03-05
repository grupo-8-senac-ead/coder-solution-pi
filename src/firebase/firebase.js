// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgAqsVUOWES8x-nL4MFBqizGU3dYxt6n4",
  authDomain: "coder-solution-senac.firebaseapp.com",
  projectId: "coder-solution-senac",
  storageBucket: "coder-solution-senac.appspot.com",
  messagingSenderId: "1055580344759",
  appId: "1:1055580344759:web:bd898f84cedc5d887ad832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app