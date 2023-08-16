import { ChangeEvent, FC, useState } from "react";
import { getIn } from "formik";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FieldsTypes } from "../constant/fieldsTypes";
import { PasswordFieldErrorType, PasswordFieldTouchedType } from "../types";

export interface IProps {
  name: string;
  label: string;
  type: string;
  errors: PasswordFieldErrorType;
  touched: PasswordFieldTouchedType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const { TEXT, PASSWORD } = FieldsTypes;

const PasswordField: FC<IProps> = ({
  name,
  label,
  handleChange,
  errors,
  touched,
}) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <FormControl
      size="small"
      variant="outlined"
      fullWidth
      color="secondary"
      error={!!(getIn(touched, name) && getIn(errors, name))}
    >
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name={name}
        type={isShowPassword ? TEXT : PASSWORD}
        onChange={handleChange}
        endAdornment={
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setIsShowPassword(!isShowPassword)}
            edge="end"
          >
            {isShowPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        }
        label={label}
      />
      {!!(getIn(touched, name) && getIn(errors, name)) && (
        <FormHelperText id="component-error-text">
          {getIn(errors, name)}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PasswordField;
