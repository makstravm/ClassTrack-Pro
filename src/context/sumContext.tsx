import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  addFundsDB,
  getSumDB,
  updateCurrentSumDB,
  updatePriceDB,
} from "../api/sum";
import { ISum } from "../types";
import { getCurrentDate } from "../utils/getCurrentDate";
import { useUserContext } from "./userContext";

interface IProps {
  children: ReactNode;
}

interface ISumContextProps {
  sum: ISum;
  updatePrice: (par: number) => void;
  updateCurrentSum: (par: number) => void;
  addFunds: (par: number) => void;
}

export const initialSum: ISum = {
  priceForLesson: 0,
  currentSum: 0,
  lastAddFunds: "",
  totalSum: 0,
};

const initialState = {
  sum: initialSum,
  updatePrice: () => {},
  updateCurrentSum: () => {},
  addFunds: () => {},
};

const SumContext = createContext<ISumContextProps>(initialState);

export const SumProvider = ({ children }: IProps) => {
  const { user } = useUserContext();
  const [sum, setSum] = useState<ISum>(initialSum);

  const getSum = async (id: string) => {
    const res = await getSumDB(id);
    setSum(res);
  };

  const updatePrice = async (val: number) => {
    if (user) {
      await updatePriceDB({ priceForLesson: val }, user.uid, () =>
        setSum({ ...sum, priceForLesson: val })
      );
    }
  };

  const updateCurrentSum = async (currentSum: number) => {
    if (user) {
      await updateCurrentSumDB({ currentSum }, user.uid, () =>
        setSum({ ...sum, currentSum })
      );
    }
  };

  const addFunds = async (amount: number) => {
    const newSum = {
      ...sum,
      totalSum: sum.totalSum + amount,
      currentSum: sum.currentSum + amount,
      lastAddFunds: getCurrentDate(),
    };

    if (user) {
      await addFundsDB(newSum, user.uid, () => setSum(newSum));
    }
  };

  useEffect(() => {
    if (user) {
      getSum(user.uid);
    }
  }, [user]);

  return (
    <SumContext.Provider
      value={{ sum, updatePrice, updateCurrentSum, addFunds }}
    >
      {children}
    </SumContext.Provider>
  );
};

export const useSumContext = (): ISumContextProps => useContext(SumContext);
