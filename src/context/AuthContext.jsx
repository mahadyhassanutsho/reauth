/* eslint-disable react-refresh/only-export-components */
import { use, useState, useEffect, createContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebase";

export const AuthContext = createContext({
  currentUser: null,
  pending: true,
  // eslint-disable-next-line no-unused-vars
  createUser: async (email, password) => {},
  // eslint-disable-next-line no-unused-vars
  loginUser: async (email, password) => {},
  logoutUser: async () => {},
});

export const useAuth = () => {
  const auth = use(AuthContext);
  if (!auth) throw new Error("Cannot use useAuth outside of AuthProvider");
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  const createUser = (email, password) => {
    setPending(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setPending(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setPending(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });

    console.log(currentUser);

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, pending, createUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
