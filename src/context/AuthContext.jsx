import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set the user object
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logIn = async (email, password) => {
    await     signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      setUserUid(userCredential.uid)
      // console.log(userUid)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error: ',errorCode,errorMessage)
    });
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      // setUser(null); // Set user to null after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, userUid, setUserUid }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
