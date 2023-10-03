import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  date: string;
  onChangeDate: (d: string | null) => void;
}

export const MyDatePicker = ({ date, onChangeDate }: Props) => (
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker value={date} onChange={onChangeDate} />
  </LocalizationProvider>
);
