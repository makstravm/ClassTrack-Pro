import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, getIn, FormikProps } from "formik";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink, useNavigate } from "react-router-dom";

import {
  FormFieldType,
  InitialSchemaFormType,
  InitialValuesFormType,
} from "../types";

export type Props = {
  initialValues: InitialValuesFormType;
  formFields: FormFieldType[];
  title: string;
  titleLink: string;
  link: string;
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
  validationSchema,
}: Props) => {
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
  }, [validationSchema]);

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
            onSubmit={(values) => onSubmit(values, navigate)}
          >
            {({
              errors,
              touched,
              handleChange,
              isValidating,
              isValid,
              dirty,
            }: FormikProps<InitialValuesFormType>) => (
              <Form>
                <Grid container justifyContent="center" spacing={2}>
                  {formFields.map(({ id, name, type, label }) => (
                    <Grid key={id} item xs={10}>
                      <TextField
                        name={name}
                        label={label}
                        type={type}
                        size="small"
                        color="secondary"
                        autoComplete="given-name"
                        fullWidth
                        error={!!(getIn(touched, name) && getIn(errors, name))}
                        helperText={getIn(touched, name) && getIn(errors, name)}
                        onChange={handleChange}
                        inputProps={{ "data-testid": `input-${name}` }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 3, mb: 2 }} textAlign="center">
                  <Button
                    data-testid="qq"
                    variant="outlined"
                    color="secondary"
                    type="submit"
                    disabled={!isValid && !dirty && !isValidating}
                  >
                    {buttonText}
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