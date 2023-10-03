import { ReactElement, ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface IProps {
  title: string;
  titleBtnAgree: string;
  content?: string | ReactElement;
  isVisible: boolean;
  onClick: () => void;
  hide: () => void;
  children?: ReactNode;
}
export const Modal = ({
  isVisible,
  hide,
  title,
  content,
  onClick,
  children,
  titleBtnAgree,
}: IProps) => {
  return (
    <Dialog open={isVisible} onClose={hide}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={hide}>
          Cancel
        </Button>
        <Button color="secondary" onClick={onClick}>
          {titleBtnAgree}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
