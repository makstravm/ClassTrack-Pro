import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { LoginInitialValueType, RegistrationInitialValueType } from "../types";
import { handleErrorMessage } from "../helpers/handleError";
import { notifyError } from "../utils/toast";

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
    if (e instanceof FirebaseError) {
      return notifyError(handleErrorMessage(e.code));
    }

    return notifyError("Something wrong");
  }
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
      return notifyError(handleErrorMessage(e.code));
    }

    return notifyError("Something wrong");
  }
};
