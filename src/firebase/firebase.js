// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
// import firebaseConfig from './firebaseConfig.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
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
  
  export const addProduct = async (uid, name, category, supplier, image, description, price) => {
    try {
        const productsRef = collection(db, "Clientes", uid, "Produtos");
        await setDoc(doc(productsRef), {
            name: name,
            category: category,
            supplier: supplier,
            image: image,
            description: description,
            price: price
        });
        console.log("Product added successfully!");
    } catch (error) {
        console.error("Error adding product: ", error);
        throw error; // Rethrow the error for handling in the calling code
    }
  };

  export const getProduct = async (uid) => {
    try {
        const q = query(collection(db, "Clientes", uid, "Produtos"));
        const querySnapshot = await getDocs(q);
        const products = []; // Initialize an empty array to store products
        querySnapshot.forEach((doc) => {
            // Push each product into the array
            products.push({
                id: doc.id, // Use the document ID as the product ID
                ...doc.data() // Spread the document data into the product object
            });
        });
        return products; // Return the array of products
    } catch (error) {
        console.error("Error fetching products: ", error);
        throw error; // Rethrow the error for handling in the calling code
    }
};

export { auth, db }
export default app