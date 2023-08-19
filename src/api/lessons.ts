import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { initialLessons } from "../context/lessonsContext";
import { ILessons, ILessonsAmount } from "../types";
import { notifyError } from "../utils/toast";

export const addLessonDB = async (lesson: ILessons, userId: string) => {
  try {
    await setDoc(
      doc(db, `lessonsStore/${userId}/lessonsList`, lesson.id),
      lesson
    );
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const updateLessonsAmount = async (
  lessonsAmount: ILessonsAmount,
  userId: string
) => {
  console.log("first)", lessonsAmount);
  try {
    await setDoc(doc(db, `lessonsStore`, userId), lessonsAmount);
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const delLessonDB = async (lesson: ILessons, userId: string) => {
  try {
    await deleteDoc(doc(db, `lessonsStore/${userId}/lessonsList`, lesson.id));
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const getLessonsDB = async (id: string) => {
  try {
    const res = await getDocs(collection(db, `lessonsStore/${id}/lessonsList`));
    let lessons: any = [];
    res.forEach((doc) => {
      lessons.push({ id: doc.id, ...doc.data() });
    });
    console.log(lessons);
    return lessons;
  } catch (error) {}
};

export const getLessonsAmountDB = async (id: string) => {
  const res = await getDoc(doc(db, "lessonsStore", id));
  if (res.exists()) {
    return res.data() as ILessonsAmount;
  }
  return { lessonsAmount: 0 };
};

export const updateIsPaidForLessonDB = async (
  { id, ...rest }: ILessons,
  userId: string
) => {
  try {
    await setDoc(doc(db, `lessonsStore/${userId}/lessonsList`, id), {
      id,
      ...rest,
    });
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};

export const addNewUserCollectionDB = async (id: string) => {
  try {
    await setDoc(doc(db, "sum", id), {
      currentSum: 0,
      priceForLesson: 0,
      totalSum: 0,
      lastAddFunds: 0,
    });

    await setDoc(doc(db, "lessonsStore", id), { lessonsAmount: 0 });
  } catch (e) {
    notifyError("Something Wrong");
    return initialLessons;
  }
};
