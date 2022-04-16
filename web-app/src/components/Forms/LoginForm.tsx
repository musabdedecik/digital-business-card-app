import React from "react";
import { Formik, FormikErrors } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import ContainedButton from "../Button/ContainedButton";
import { FormControl, FormHelperText } from "@mui/material";
interface FormValues {
  email: string;
  password: string;
}
const LoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.email) {
        errors.email = "E-posta zorunludur!";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Geçersiz e-posta adresi!";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <Form onSubmit={handleSubmit}>
        <FormControl error>
          <StandartTextField
            type="email"
            name="email"
            label="E-Posta"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">
            {errors.email && touched.email && errors.email}
          </FormHelperText>
        </FormControl>
        <FormControl error>
          <StandartTextField
            type="password"
            name="password"
            label="Parola"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            aria-describedby="componensa"
          />
          <FormHelperText id="componensa">
            {errors.password && touched.password && errors.password}
          </FormHelperText>
        </FormControl>
        <ContainedButton type="submit" disabled={isSubmitting}>
          Giriş Yap
        </ContainedButton>
      </Form>
    )}
  </Formik>
);

export default LoginForm;
