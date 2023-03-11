import { getAPIKey } from "config";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: getAPIKey(),
  authDomain: "tatvic-assignment.firebaseapp.com",
  projectId: "tatvic-assignment",
  storageBucket: "tatvic-assignment.appspot.com",
  messagingSenderId: "1085632692071",
  appId: "1:1085632692071:web:86033d8a2b68fa15ca39c2",
  measurementId: "G-64V7WXMFS5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
