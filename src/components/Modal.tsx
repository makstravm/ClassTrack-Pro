import { ReactNode, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useModalContext } from "../context/modalContext";

interface IProps {
  title: string;
  titleBtnAgree: string;
  content: string;
  onClick?: () => void;
  children?: ReactNode;
}
export const Modal = ({
  title,
  content,
  onClick,
  children,
  titleBtnAgree,
}: IProps) => {
  const { isVisible, hide } = useModalContext();

  return (
    <Dialog open={isVisible} onClose={hide}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={hide}>Cancel</Button>
        <Button onClick={onClick}>{titleBtnAgree}</Button>
      </DialogActions>
    </Dialog>
  );
};
