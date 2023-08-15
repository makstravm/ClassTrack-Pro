import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import { RegistrationInitialValueType } from "../types";

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
