import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcYVW4puefqDJvTS4SBdDsgDhlubu9D8Y",
  authDomain: "reauth-d680a.firebaseapp.com",
  projectId: "reauth-d680a",
  storageBucket: "reauth-d680a.firebasestorage.app",
  messagingSenderId: "429751733165",
  appId: "1:429751733165:web:d27060213033cf52cf6f24",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
