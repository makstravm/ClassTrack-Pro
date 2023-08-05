import { ISum } from "./../types/index";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getSum = async () => {
  const res = await getDoc(doc(db, "sum", "tK7romW0nc7zx4jTkdXp"));
  if (res.exists()) {
    return res.data() as ISum;
  } else {
    return null;
  }
};
