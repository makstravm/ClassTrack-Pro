export interface ISum {
  currentSum: number;
  priceForLesson: number;
  totalSum: number;
  lastAddFunds: string;
}

export interface ILessons {
  id: string;
  currentSum: number;
  date: string;
  isPaid: boolean;
  price: number;
}
