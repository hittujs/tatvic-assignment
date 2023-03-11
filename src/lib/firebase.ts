import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9HZjfm591Z98S9JCa_QFo1WZX4B0qiJw",
  authDomain: "tatvic-assignment.firebaseapp.com",
  projectId: "tatvic-assignment",
  storageBucket: "tatvic-assignment.appspot.com",
  messagingSenderId: "1085632692071",
  appId: "1:1085632692071:web:86033d8a2b68fa15ca39c2",
  measurementId: "G-64V7WXMFS5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
