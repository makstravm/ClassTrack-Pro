import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { getSumDB, updateCurrentSumDB, updatePriceDB } from "../api/header";
import { ISum } from "../types";

interface IProps {
  children: ReactNode;
}

interface ISumContextProps {
  sum: ISum;
  updatePrice: (par: number) => void;
  updateCurrentSum: (par: number) => void;
}

export const initialSum: ISum = {
  priceForLesson: 0,
  currentSum: 0,
  totalSum: 0,
};

const initialState = {
  sum: initialSum,
  updatePrice: () => {},
  updateCurrentSum: () => {},
};

const SumContext = createContext<ISumContextProps>(initialState);

export const SumProvider = ({ children }: IProps) => {
  const [sum, setSum] = useState<ISum>(initialSum);

  const getSum = async () => {
    const res = await getSumDB();
    setSum(res);
  };

  const updatePrice = async (val: number) => {
    await updatePriceDB({ priceForLesson: val }, () =>
      setSum({ ...sum, priceForLesson: val })
    );
  };

  const updateCurrentSum = async (currentSum: number) => {
    console.log(2);
    await updateCurrentSumDB({ currentSum }, () =>
      setSum({ ...sum, currentSum })
    );
  };

  useEffect(() => {
    getSum();
  }, []);

  return (
    <SumContext.Provider value={{ sum, updatePrice, updateCurrentSum }}>
      {children}
    </SumContext.Provider>
  );
};

export const useSumContext = (): ISumContextProps => useContext(SumContext);
