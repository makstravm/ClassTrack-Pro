import { User, onAuthStateChanged } from "firebase/auth";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase";
interface IProps {
  children: ReactNode;
}

interface IUserContext {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<IUserContext>({
  user: null,
  isLoading: false,
});

export const UserProvider = ({ children }: IProps) => {
  const [userData, setUserData] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserData(user);
      setIsLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user: userData, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): IUserContext => useContext(UserContext);
