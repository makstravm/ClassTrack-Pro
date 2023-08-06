import { ReactNode, createContext, useContext, useState } from "react";

type IProps = {
  children: ReactNode;
};

export type IModalContext = {
  show: () => void;
  hide: () => void;
  isVisible: boolean;
};

const initialModal = {
  show: () => {},
  hide: () => {},
  isVisible: false,
};

const ModalContext = createContext<IModalContext>(initialModal);

export const ModalProvider = ({ children }: IProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => setIsVisible(false);

  return (
    <ModalContext.Provider value={{ show, hide, isVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
