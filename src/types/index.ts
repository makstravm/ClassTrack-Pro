import * as Yup from "yup";

export enum RoutePath {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
}
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

export type FormFieldType = {
  id: string;
  name: string;
  type: string;
  label: string;
};

export type LoginInitialValueType = {
  email: string;
  password: string;
};

export type RegistrationInitialValueType = LoginInitialValueType & {
  name: string;
  lastName: string;
  confirmPassword: string;
};

export type InitialValuesFormType =
  | RegistrationInitialValueType
  | LoginInitialValueType;

export type FormicValuesType = Record<string, string>;

export type LoginValidationSchema = {
  email: Yup.StringSchema<string>;
  password: Yup.StringSchema<string>;
};

export type RegisterValidationSchema = LoginValidationSchema & {
  name: Yup.StringSchema<string>;
  confirmPassword: Yup.StringSchema<string>;
};

export type InitialSchemaFormType =
  | LoginValidationSchema
  | RegisterValidationSchema;
