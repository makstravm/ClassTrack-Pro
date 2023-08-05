import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { addLessonDB, getLessonsDB } from "../api/lessons";
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
}
const initialState = {
  lessons: [],
  addLesson: () => {},
};

const LessonsContext = createContext<ILessonsContext>(initialState);

export const LessonsProvider = ({ children }: IProps) => {
  const [lessons, setLessons] = useState<ILessons[]>([]);
  const {
    sum: { priceForLesson, currentSum },
    updateCurrentSum,
  } = useSumContext();

  const addLesson = async () => {
    const date = getCurrentDate();
    const lesson = {
      id: `id-${date}`,
      date,
      currentSum: currentSum - priceForLesson,
      isPaid: false,
      price: priceForLesson,
    };
    await addLessonDB(lesson);
    console.log(1);
    updateCurrentSum(lesson.currentSum);
    setLessons([...lessons, lesson]);
  };

  const getLessons = async () => {
    const res = await getLessonsDB();
    setLessons(res);
  };

  useEffect(() => {
    getLessons();
  }, []);

  return (
    <LessonsContext.Provider value={{ lessons, addLesson }}>
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessonsContext = () => useContext(LessonsContext);
