import { FormikErrors, FormikTouched } from "formik";
import * as Yup from "yup";

export interface ISum {
  currentSum: number;
  priceForLesson: number;
  totalSum: number;
  lastAddFunds: string;
}
export interface ILessonsAmount {
  lessonsAmount: number;
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
type EmailAndPassword = {
  email: string;
  password: string;
};
export type LoginInitialValueType = EmailAndPassword & {
  rememberMe: boolean;
};

export type RegistrationInitialValueType = EmailAndPassword & {
  name: string;
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

export type PasswordFieldErrorType = FormikErrors<InitialValuesFormType>;

export type PasswordFieldTouchedType = FormikTouched<InitialValuesFormType>;
