import * as Yup from "yup";

const nameValid = Yup.string().required("Field required");
const lastNameValid = Yup.string().required("Field required");

const confirmPasswordValid = Yup.string()
  .oneOf([Yup.ref("password")], "Password don't match")
  .trim("Field cann't contain spaces")
  .required();

const emailValid = Yup.string()
  .email("Invalid email")
  .trim("Field cann't contain spaces")
  .required("Field required");

const passwordValid = Yup.string()
  .trim("Field cann't contain spaces")
  .matches(/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, {
    message: "Password is incorrect",
  })
  .required("Field required");

export const registerValidationSchema = {
  name: nameValid,
  lastName: lastNameValid,
  email: emailValid,
  password: passwordValid,
  confirmPassword: confirmPasswordValid,
};

export const loginValidationSchema = {
  email: emailValid,
  password: passwordValid,
};
