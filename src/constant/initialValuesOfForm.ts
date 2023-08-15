export const loginFormFields = [
  {
    id: String(Math.random()),
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    id: String(Math.random()),
    name: "password",
    type: "password",
    label: "Password",
  },
];

export const loginInitialValue = {
  email: "",
  password: "",
};

export const registrationFormFields = [
  {
    id: String(Math.random()),
    name: "name",
    type: "text",
    label: "Name",
  },
  {
    id: String(Math.random()),
    name: "email",
    type: "text",
    label: "Email",
  },
  {
    id: String(Math.random()),
    name: "password",
    type: "password",
    label: "Password",
  },
  {
    id: String(Math.random()),
    name: "confirmPassword",
    type: "password",
    label: "Confirm password",
  },
];

export const registrationInitialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
