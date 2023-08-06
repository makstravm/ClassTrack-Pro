import { ISum } from "./../types/index";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { initialSum } from "../context/sumContext";

export const getSumDB = async () => {
  const res = await getDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"));
  if (res.exists()) {
    return res.data() as ISum;
  } else {
    return initialSum;
  }
};

export const addFundsDB = async (newSum: ISum, cb: () => void) => {
  try {
    await setDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"), newSum);
    cb();
  } catch (e) {
    return initialSum;
  }
};

export const updatePriceDB = async (
  newSum: Pick<ISum, "priceForLesson">,
  cb: () => void
) => {
  try {
    await updateDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"), newSum);
    cb();
  } catch (e) {
    return initialSum;
  }
};

export const updateCurrentSumDB = async (
  newSum: Pick<ISum, "currentSum">,
  cb: () => void
) => {
  try {
    await updateDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"), newSum);
    cb();
  } catch (e) {
    return initialSum;
  }
};
