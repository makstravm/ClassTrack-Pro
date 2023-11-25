import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import "dayjs/locale/ru";

interface Props {
  onChangeDate: (d: string) => void;
}

export const MyDatePicker = ({ onChangeDate }: Props) => {
  const [newDate, setNewDate] = useState<string | null>(null);
  const handleOnChange = (value: any) => {
    const formattedDate = value.$d.toLocaleDateString("ru-RU");
    setNewDate(value);
    onChangeDate(formattedDate);
  };
  console.log(dayjs(newDate || new Date()));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        value={dayjs(newDate || new Date())}
        onChange={handleOnChange}
        autoFocus
        slotProps={{ textField: { size: "small" } }}
      />
    </LocalizationProvider>
  );
};
