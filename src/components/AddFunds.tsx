import { Box, Button, TextField } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";
import { useLessonsContext } from "../context/lessonsContext";
import { Modal } from "./Modal";
import { useModalContext } from "../context/modalContext";

export const AddFunds = () => {
  const [value, setValue] = useState<number>(500);
  const { updateIsPaidForLesson } = useLessonsContext();
  const { show, hide } = useModalContext();

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(+e.currentTarget.value);

  const addFunds = () => {
    updateIsPaidForLesson(value);
    hide();
  };
  return (
    <Box sx={{ position: "fixed", bottom: "3vw", right: "3vw" }}>
      <Button
        variant="contained"
        onClick={show}
        startIcon={<MonetizationOnIcon />}
        sx={{ borderRadius: "50%", width: 100, height: 100 }}
      >
        Funds
      </Button>
      <Modal
        title="Add funds"
        onClick={addFunds}
        content=" Enter the amount to replenish the balance"
        titleBtnAgree="Add Funds"
      >
        <TextField
          autoFocus
          margin="dense"
          id="name"
          value={value}
          onChange={onChangeValue}
          inputProps={{
            min: 0,
          }}
          label="Amount"
          type="number"
          fullWidth
          variant="standard"
        />
      </Modal>
    </Box>
  );
};
