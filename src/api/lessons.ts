import { ISum } from "../types/index";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { initialSum } from "../context/sumContext";

export const addLesson = async (lesson: any) => {
  try {
    await setDoc(doc(db, "lessons", lesson.date), lesson);
  } catch (e) {
    return initialSum;
  }
};

export const getLesson = async () => {
  try {
    const res = await getDocs(collection(db, "lessons"));
    let lessons: any = [];
    res.forEach((doc) => {
      lessons.push({ id: doc.id, ...doc.data() });
    });
    return lessons;
  } catch (e) {
    return initialSum;
  }
};
