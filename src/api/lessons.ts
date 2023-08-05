import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { initialSum } from "../context/sumContext";
import { ILessons } from "../context/lessonsContext";

export const addLessonDB = async (lesson: ILessons) => {
  try {
    await setDoc(doc(db, "lessons", lesson.id), lesson);
  } catch (e) {
    return initialSum;
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
    return initialSum;
  }
};
