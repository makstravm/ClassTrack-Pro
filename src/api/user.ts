import { FirebaseError } from "firebase/app";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { LoginInitialValueType, RegistrationInitialValueType } from "../types";
import { handleErrorMessage } from "../helpers/handleError";
import { notifyError } from "../utils/toast";
import { addNewUserCollectionDB } from "./lessons";

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
    await addNewUserCollectionDB(response.user.uid);
    await setPersistence(auth, browserSessionPersistence);
    return true;
  } catch (e) {
    if (e instanceof FirebaseError) {
      notifyError(handleErrorMessage(e.code));
      return false;
    }

    notifyError("Something wrong");
    return false;
  }
};

export const signInUser = async ({
  email,
  password,
  rememberMe,
}: LoginInitialValueType) => {
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(auth, email as string, password as string);
    await setPersistence(
      auth,
      rememberMe ? browserLocalPersistence : browserSessionPersistence
    );
    return true;
  } catch (e) {
    if (e instanceof FirebaseError) {
      notifyError(handleErrorMessage(e.code));
      return false;
    }

    notifyError("Something wrong");
    return false;
  }
};

export const signOutUser = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (e) {
    if (e instanceof FirebaseError) {
      return notifyError(handleErrorMessage(e.code));
    }
    return notifyError("Something wrong");
  }
};
