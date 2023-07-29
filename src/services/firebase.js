import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC83yrO07tpFfsiZzaB_OoP3ud3DXUkPCk",
  authDomain: "proyecto-final--waltergonzalez.firebaseapp.com",
  projectId: "proyecto-final--waltergonzalez",
  storageBucket: "proyecto-final--waltergonzalez.appspot.com",
  messagingSenderId: "891346635105",
  appId: "1:891346635105:web:a96f8a133919e9b9275d20"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);