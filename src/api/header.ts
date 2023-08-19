import { ISum } from "./../types/index";
import { db } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { initialSum } from "../context/sumContext";
import { notifyError, notifySuccess } from "../utils/toast";

export const getSumDB = async (id: string) => {
  const res = await getDoc(doc(db, "sum", id));
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
    notifyError("Something Wrong");
    return initialSum;
  }
};

export const updatePriceDB = async (
  newSum: Pick<ISum, "priceForLesson">,
  userId: string,
  cb: () => void
) => {
  try {
    await updateDoc(doc(db, "sum", userId), newSum);
    cb();
    notifySuccess(`The price of the lesson has been successfully changed`);
  } catch (e) {
    notifyError("Something Wrong");
    return initialSum;
  }
};

export const updateCurrentSumDB = async (
  newSum: Pick<ISum, "currentSum">,
  userId: string,
  cb: () => void
) => {
  try {
    console.log(newSum);
    await updateDoc(doc(db, "sum", userId), newSum);
    cb();
  } catch (e) {
    notifyError("Something Wrong");
    return initialSum;
  }
};
