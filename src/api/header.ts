import { ISum } from "./../types/index";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { initialSum } from "../context/sumContext";

export const getSumDB = async () => {
  const res = await getDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"));
  if (res.exists()) {
    return res.data() as ISum;
  } else {
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
    console.log(3);
    await updateDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"), newSum);
    console.log(4);
    cb();
  } catch (e) {
    return initialSum;
  }
};
