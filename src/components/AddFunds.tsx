import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useState } from "react";
import { useSumContext } from "../context/sumContext";

export const AddFunds = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<number>(0);
  const { addFunds } = useSumContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setValue(+e.currentTarget.value);

  const handleClose = () => {
    setOpen(false);
  };

  const onAddFunds = () => addFunds(value);

  return (
    <Box sx={{ position: "fixed", bottom: "3vw", right: "3vw" }}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<MonetizationOnIcon />}
        sx={{ borderRadius: "50%", width: 100, height: 100 }}
      >
        Funds
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add funds</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the amount to replenish the balance
          </DialogContentText>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onAddFunds}>Add Funds</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
