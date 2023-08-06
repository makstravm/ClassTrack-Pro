import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import useModal from "../hooks/useModal";
import { Modal } from "./Modal";
interface IProps {
  date: string;
  onClick: () => void;
}
export const DeleteBtn = ({ date, onClick }: IProps) => {
  const { isVisible, hide, show } = useModal();
  const handleOnClick = () => {
    onClick();
    hide();
  };
  return (
    <>
      <IconButton
        onClick={show}
        sx={{
          position: "absolute",
          right: "30px",
          top: "44%",
          transform: "translateY(-50%)",
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Modal
        title={`Remove lesson -  ${date}`}
        content={`Do you really want to delete a lesson for ${date}?`}
        titleBtnAgree="Delete"
        onClick={handleOnClick}
        isVisible={isVisible}
        hide={hide}
      />
    </>
  );
};
