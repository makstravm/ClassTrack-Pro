import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { LoginInitialValueType, RegistrationInitialValueType } from "../types";
import { ContactEmergencySharp } from "@mui/icons-material";

export const signUpUser = async ({
  email,
  password,
  name,
}: RegistrationInitialValueType) => {
  const auth = getAuth();
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email as string,
      password as string
    );

    await updateProfile(response.user, {
      displayName: name as string,
    });
  } catch (e) {
    console.log({ error: e as FirebaseError });
  }
};

export const handleError = (errMessage: string): string => {
  const [, message] = errMessage.split("/");
  return message
    .split("-")
    .map((word, i) =>
      !i ? word[0].charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join(" ");
};
export const signInUser = async ({
  email,
  password,
}: LoginInitialValueType) => {
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(auth, email as string, password as string);
  } catch (e) {
    if (e instanceof FirebaseError) {
      console.log(handleError(e.code));
    }

    return "Something wrong";
  }
};
