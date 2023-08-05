import { TextField, Typography } from "@mui/material";
import { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
interface IProps {
  color: string;
  valueDefault: number;
}
export const EditPrice = ({ color, valueDefault }: IProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<number>(valueDefault);

  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = +e.currentTarget.value;
    if (typeof inputValue === "number" && !isNaN(inputValue))
      setValue(inputValue);
  };
  const onPressEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") changePrice();
  };
  const changePrice = () => {
    setIsEdit(!isEdit);
  };
  return (
    <>
      {!isEdit ? (
        <Typography
          component={"span"}
          textAlign={"center"}
          variant="h5"
          fontWeight={"bold"}
          onDoubleClick={() => setIsEdit(!isEdit)}
          color={color}
        >
          {valueDefault}
          <EditIcon fontSize="small" color="secondary" />
        </Typography>
      ) : (
        <TextField
          size="small"
          value={value}
          onChange={onChangeValue}
          onKeyDown={onPressEnter}
          onBlur={changePrice}
          component={"span"}
          label="change Price"
        />
      )}
    </>
  );
};
