import { useEffect, useId, useRef, useState } from "react";
import { Formik, FormikErrors } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import DefaultButton from "../Button/DefaultButton";
import { Alert, FormControl, FormHelperText, Typography } from "@mui/material";
import { setToken } from "../../../configures/auth";
import { FormValues } from "../../../configures/interfaces";
import { findUser } from "../../../redux/actions/userActions";


const LoginForm = () => {
  const id = useId();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<Boolean>(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const validateInputs = (values:FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = "E-posta zorunludur!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Geçersiz e-posta adresi!";
    }
    return errors;
  };


  const handleSubmit = async (values:FormValues) => {
    const isUser = await findUser(values); 
    if (isUser) {
      if (setToken(id)) {
        window.location.href = "/dashboard";
      }
    } else {
      setError(true);
    }
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateInputs}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom style={{ borderBottom: '1px solid #777', paddingBottom: '10px', fontWeight: 100 }}>
            Dijital Kartvizit Uygulaması
          </Typography>
          <FormControl sx={{ mt: 3, width: '100%' }} error>
            <StandartTextField
              type="email"
              name="email"
              label="E-Posta"
              inputRef={emailRef}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              aria-describedby="component-error-text"
            />
            <FormHelperText id="component-error-text">
              {errors.email && touched.email && errors.email}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ mt: 3, width: '100%' }} error>
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
          {error && <Alert style={{marginTop:24}} severity="error">Kullanıcı adı veya şifre hatalı!</Alert>}
          <DefaultButton style={{ width: '30ch', marginLeft: "auto", marginRight: "auto", marginTop: "24px" }} type="submit" variant="contained">
            Giriş Yap
          </DefaultButton>
          <Typography style={{marginTop:24, alignSelf:'flex-start'}} variant="caption">E-Posta: musabdedecik6@gmail.com</Typography>
          <Typography style={{marginTop:5, alignSelf:'flex-start'}} variant="caption">Parola: 123</Typography>
        </Form>
      )}
    </Formik>
  )
};

export default LoginForm;