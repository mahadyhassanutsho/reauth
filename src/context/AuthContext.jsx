/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";
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
  createUser: async () => {},
  loginUser: async () => {},
  logoutUser: async () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setPending(false);
    });

    return () => unsubscribe();
  }, []);

  const createUser = async (email, password) => {
    setPending(true);
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = async (email, password) => {
    setPending(true);
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = async () => {
    setPending(true);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, pending, createUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
