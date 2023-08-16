import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { initialLessons } from "../context/lessonsContext";
import { ILessons } from "../types";
import { notifyError } from "../utils/toast";

export const addLessonDB = async (lesson: ILessons) => {
  try {
    await setDoc(doc(db, "lessons", lesson.id), lesson);
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const delLessonDB = async (lesson: ILessons) => {
  try {
    await deleteDoc(doc(db, "lessons", lesson.id));
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};
export const getLessonsDB = async () => {
  try {
    const res = await getDocs(collection(db, "lessons"));
    let lessons: any = [];
    res.forEach((doc) => {
      lessons.push({ id: doc.id, ...doc.data() });
    });
    return lessons;
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const updateIsPaidForLessonDB = async ({ id, ...rest }: ILessons) => {
  try {
    await setDoc(doc(db, "lessons", id), { ...rest });
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};
