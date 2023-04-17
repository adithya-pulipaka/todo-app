import {
  getFirestore,
  connectFirestoreEmulator,
  getDocs,
  query,
  orderBy,
  setDoc,
  doc,
  where,
} from "@firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const db = getFirestore();
if (process.env.NODE_ENV === "development") {
  connectFirestoreEmulator(db, "localhost", 8090);
}

const TODOS_COLLECTION = "todos";

export const createTask = async (todo) => {
  try {
    const docRef = await addDoc(collection(db, TODOS_COLLECTION), todo);
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getTasks = async () => {
  try {
    const queryRef = query(
      collection(db, TODOS_COLLECTION),
      where("active", "!=", false),
      orderBy("active"),
      orderBy("created", "desc")
    );
    const snap = await getDocs(queryRef);
    const result = snap.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return result;
  } catch (e) {
    console.error("Error retrieving documents: ", e);
  }
};

export const deleteTask = async (id) => {
  try {
    const docRef = doc(db, TODOS_COLLECTION, id);
    await setDoc(docRef, { active: false }, { merge: true });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const markAsCompleted = async (id) => {
  try {
    const docRef = doc(db, TODOS_COLLECTION, id);
    await setDoc(docRef, { completed: true }, { merge: true });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
