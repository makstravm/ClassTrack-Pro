import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addLessonDB,
  getLessonsDB,
  updateIsPaidForLessonDB,
} from "../api/lessons";
import { useSumContext } from "./sumContext";
import { getCurrentDate } from "../utils/getCurrentDate";

interface IProps {
  children: ReactNode;
}
export interface ILessons {
  id: string;
  currentSum: number;
  date: string;
  isPaid: boolean;
  price: number;
}

interface ILessonsContext {
  lessons: ILessons[];
  addLesson: () => void;
  updateIsPaidForLesson: (par: number) => void;
}
export const initialLessons = {
  lessons: [],
  addLesson: () => {},
  updateIsPaidForLesson: (par: number) => {},
};

const LessonsContext = createContext<ILessonsContext>(initialLessons);

export const LessonsProvider = ({ children }: IProps) => {
  const [lessons, setLessons] = useState<ILessons[]>([]);
  const {
    sum: { priceForLesson, currentSum },
    updateCurrentSum,
    addFunds,
  } = useSumContext();

  const addLesson = async () => {
    const date = getCurrentDate();
    const sum = currentSum - priceForLesson;
    const lesson = {
      id: `id-${date}`,
      date,
      currentSum: sum,
      isPaid: sum >= 0 ? true : false,
      price: priceForLesson,
    };
    await addLessonDB(lesson);
    updateCurrentSum(lesson.currentSum);
    setLessons([...lessons, lesson]);
  };

  const getLessons = async () => {
    const res = await getLessonsDB();
    setLessons(res);
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

        updateIsPaidForLessonDB(newL);
        return newL;
      } else {
        return l;
      }
    });
    addFunds(amount);
    setLessons(newLessons);
  };

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <LessonsContext.Provider
      value={{ lessons, addLesson, updateIsPaidForLesson }}
    >
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessonsContext = () => useContext(LessonsContext);
