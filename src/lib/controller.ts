import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

export const keywordsCollection = collection(firestore, "keywords");

export const addKeyword = async (data: any) => {
  const newKeyword = await addDoc(keywordsCollection, { ...data });
};
