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

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logoutUser = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );
    console.log(currentUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, createUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
