import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IProps {
  children: ReactNode;
}
interface ILessons {
  id: string;
  currentSum: number;
  date: string;
  isPaid: boolean;
  price: number;
}

interface ILessonsContext {
  lessons: ILessons[];
}
const initialState = {
  lessons: [],
};

const LessonsContext = createContext<ILessonsContext>(initialState);

export const LessonsProvider = ({ children }: IProps) => {
  const [lessons, setLessons] = useState<ILessons[]>([]);
  useEffect(() => {}, []);

  return (
    <LessonsContext.Provider value={{ lessons }}>
      {children}
    </LessonsContext.Provider>
  );
};

export const useLessonsContext = () => useContext(LessonsContext);
