import { TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import { useSumContext } from "../context/sumContext";
interface IProps {
  color: string;
  valueDefault: number;
}
export const EditPrice = ({ color }: IProps) => {
  const {
    sum: { priceForLesson },
    updatePrice,
  } = useSumContext();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [value, setValue] = useState<number>(priceForLesson);

  useEffect(() => {
    setValue(priceForLesson);
  }, [priceForLesson]);

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
    if (priceForLesson !== value) {
      updatePrice(value);
    }
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
          {priceForLesson}
          <EditIcon fontSize="small" color="secondary" />
        </Typography>
      ) : (
        <TextField
          autoFocus
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
