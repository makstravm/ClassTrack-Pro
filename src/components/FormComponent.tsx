import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, getIn, FormikProps } from "formik";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";

import {
  FormFieldType,
  InitialSchemaFormType,
  InitialValuesFormType,
  RoutePath,
} from "../types";
import PasswordField from "./PasswordField";
import { FieldsTypes } from "../constant/fieldsTypes";

export type Props = {
  initialValues: InitialValuesFormType;
  formFields: FormFieldType[];
  title: string;
  titleLink: string;
  link: string;
  isRememberMe: boolean;
  buttonText: string;
  onSubmit: Function; //(vSalues: FormicValuesType, navigate: NavigateFunction) => void;
  validationSchema: InitialSchemaFormType;
};

export const FormComponent = ({
  initialValues,
  formFields,
  title,
  titleLink,
  link,
  buttonText,
  onSubmit,
  isRememberMe,
  validationSchema,
}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [propsFormik, setPropsFormik] = useState<
    Pick<Props, "initialValues" | "validationSchema">
  >({
    initialValues,
    validationSchema,
  });

  const hasInitialDataFormik =
    propsFormik.initialValues &&
    Object.keys(propsFormik.initialValues).length ===
      Object.keys(initialValues).length;

  useEffect(() => {
    setPropsFormik({
      initialValues,
      validationSchema,
    });
  }, [validationSchema, initialValues]);

  const handleSubmit = async (values: InitialValuesFormType) => {
    setIsLoading(true);
    const isSuccess = await onSubmit(values);
    setIsLoading(false);
    if (isSuccess) {
      navigate(RoutePath.SUCCESS_SIGN_IN, { replace: true });
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 1, px: 2 }}>
        <Typography variant="h4" align="center" sx={{ pb: 2 }}>
          {title}
        </Typography>
        {hasInitialDataFormik && (
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape(validationSchema)}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({
              errors,
              touched,
              handleChange,
              isValid,
              dirty,
            }: FormikProps<InitialValuesFormType>) => (
              <Form>
                <Grid container justifyContent="center" spacing={2}>
                  {formFields.map(({ id, name, type, label }) => (
                    <Grid key={id} item xs={11}>
                      {type === FieldsTypes.TEXT ? (
                        <TextField
                          name={name}
                          label={label}
                          type={type}
                          size="small"
                          color="secondary"
                          fullWidth
                          error={
                            !!(getIn(touched, name) && getIn(errors, name))
                          }
                          helperText={
                            !!(getIn(touched, name) && getIn(errors, name)) &&
                            getIn(errors, name)
                          }
                          onChange={handleChange}
                        />
                      ) : (
                        <PasswordField
                          name={name}
                          label={label}
                          type={type}
                          errors={errors}
                          touched={touched}
                          handleChange={handleChange}
                        />
                      )}
                    </Grid>
                  ))}
                  {isRememberMe && (
                    <Grid item xs={10}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="secondary"
                            name="rememberMe"
                            onChange={handleChange}
                          />
                        }
                        label={"Remember Me"}
                        componentsProps={{
                          typography: {
                            fontSize: ".9rem",
                          },
                        }}
                      />
                    </Grid>
                  )}
                </Grid>
                <Box sx={{ mt: 3, mb: 2 }} textAlign="center">
                  <Button
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    disabled={isLoading || (!isValid && !dirty)}
                  >
                    {!isLoading ? (
                      buttonText
                    ) : (
                      <CircularProgress color="inherit" size="1.5rem" />
                    )}
                  </Button>
                </Box>
                <Box textAlign="center">
                  <NavLink className="nav-link" to={link}>
                    <Button color="secondary">{titleLink}</Button>
                  </NavLink>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Box>
    </Container>
  );
};
