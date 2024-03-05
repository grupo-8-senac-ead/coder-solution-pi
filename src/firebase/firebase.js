// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
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
const auth = getAuth();
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error: ',errorCode,errorMessage)
    });
  };
  
  // Function to log in an existing user
  export const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error: ',errorCode,errorMessage)
      });
  };

  export const addProduct = async (uid, name, category, supplier, image, description, price) => {
    await setDoc(doc(db, uid, "Produtos"), {
      name: name,
      category: category,
      supplier: supplier,
      image: image,
      description: description,
      price: price
    });
  }

export default app