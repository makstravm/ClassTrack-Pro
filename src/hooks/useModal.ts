import { useState } from "react";

type Props = {
  open?: boolean;
  onShow?: () => void;
};

export type ModalHookProps = {
  show: () => void;
  hide: () => void;
  isVisible: boolean;
};

export default function useModal(props: Props = {}): ModalHookProps {
  const { open, onShow } = props;

  const [isVisible, setIsVisible] = useState(!!open);

  const show = () => {
    onShow?.();
    setIsVisible(true);
  };

  const hide = () => setIsVisible(false);

  return { show, hide, isVisible };
}
