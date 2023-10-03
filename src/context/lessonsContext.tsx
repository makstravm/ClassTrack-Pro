import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addLessonDB,
  delLessonDB,
  getLessonsAmountDB,
  getLessonsDB,
  updateIsPaidForLessonDB,
  updateLessonsAmount,
} from "../api/lessons";
import { useSumContext } from "./sumContext";
import { ILessons } from "../types";
import { notifyError, notifySuccess } from "../utils/toast";
import { useUserContext } from "./userContext";
import { parseDate } from "../utils/parseDate";

interface IProps {
  children: ReactNode;
}

interface ILessonsContext {
  lessons: ILessons[];
  addLesson: (date: string) => void;
  delLesson: (lesson: ILessons) => void;
  updateIsPaidForLesson: (par: number) => void;
}

export const initialLessons = {
  lessons: [],
  addLesson: () => {},
  delLesson: () => {},
  updateIsPaidForLesson: (par: number) => {},
};

const LessonsContext = createContext<ILessonsContext>(initialLessons);

export const LessonsProvider = ({ children }: IProps) => {
  const [lessons, setLessons] = useState<ILessons[]>([]);
  const [lessonsAmount, setLessonsAmount] = useState<number>(0);

  const {
    sum: { priceForLesson, currentSum },
    updateCurrentSum,
    addFunds,
  } = useSumContext();
  const { user } = useUserContext();

  const addLesson = async (date: string) => {
    const sum = currentSum - priceForLesson;
    const lesson = {
      id: `id-${date}`,
      date,
      currentSum: sum,
      isPaid: sum > 0 ? true : false,
      price: priceForLesson,
    };

    const isLessonExist = lessons.find((l) => l.date === date);
    if (user && !isLessonExist) {
      const newLessonsAmount = lessonsAmount + 1;
      await addLessonDB(lesson, user.uid);
      await updateLessonsAmount({ lessonsAmount: newLessonsAmount }, user.uid);
      updateCurrentSum(lesson.currentSum);
      setLessons([...lessons, lesson]);
      setLessonsAmount(newLessonsAmount);
      notifySuccess(`Lesson successfully added for ${date}`);
    }
    if (isLessonExist) {
      notifyError(`The lesson already exists. Choose the right date.`);
    }
  };

  const getLessons = async (id: string) => {
    const { lessonsAmount } = await getLessonsAmountDB(id);
    if (lessonsAmount) {
      const res = await getLessonsDB(id);

      setLessons(
        res.sort(
          (a: ILessons, b: ILessons) => +parseDate(b.date) - +parseDate(a.date)
        )
      );
    }

    setLessonsAmount(lessonsAmount);
  };

  const updateIsPaidForLesson = async (amount: number) => {
    const newLessons = lessons.map((l) => {
      if (!l.isPaid) {
        let newL;
        if (l.currentSum + amount >= 0) {
          newL = { ...l, isPaid: true, currentSum: 0 };
        } else {
          newL = { ...l, currentSum: l.currentSum + amount };
        }

        user && updateIsPaidForLessonDB(newL, user?.uid);
        return newL;
      } else {
        return l;
      }
    });
    addFunds(amount);
    setLessons(newLessons);
    notifySuccess(`Successful added ${amount}`);
  };

  const delLesson = async (lesson: ILessons) => {
    if (user) {
      const newLessonsAmount = lessonsAmount - 1;
      await delLessonDB(lesson, user.uid);
      await updateLessonsAmount({ lessonsAmount: newLessonsAmount }, user.uid);
      updateCurrentSum(currentSum + lesson.price);
      setLessons(lessons.filter((l) => l.id !== lesson.id));
      setLessonsAmount(newLessonsAmount);
      notifySuccess(`Successfully was deleted lesson`);
    }
  };
  useEffect(() => {
    if (user) {
      getLessons(user.uid);
    }
  }, [user]);

  return (
    <LessonsContext.Provider
      value={{
        lessons,
        addLesson,
        updateIsPaidForLesson,
        delLesson,
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessonsContext = () => useContext(LessonsContext);
