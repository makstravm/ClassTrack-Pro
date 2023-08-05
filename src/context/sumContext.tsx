import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSum } from "../api/header";
import { ISum } from "../types";

interface IProps {
  children: ReactNode;
}

// interface IInitialISumContextPropsState {}

interface ISumContextProps {
  sum: ISum | null;
}

const initialState = {
  sum: null,
};

const SumContext = createContext<ISumContextProps>(initialState);

export const SumProvider = ({ children }: IProps) => {
  const [sum, setSum] = useState<ISum | null>(null);

  const getSumData = async () => {
    const res = await getSum();
    setSum(res);
  };

  useEffect(() => {
    getSumData();
  }, []);

  return <SumContext.Provider value={{ sum }}>{children}</SumContext.Provider>;
};

export const useSumContext = (): ISumContextProps => useContext(SumContext);
