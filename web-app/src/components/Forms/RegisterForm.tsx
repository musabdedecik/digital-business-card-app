import { useState } from "react";
import { Formik, FormikErrors } from "formik";
import Form from "./Form";
import StandartTextField from "../TextFields/StandartTextField";
import ContainedButton from "../Button/ContainedButton";
import { FormControl, FormHelperText } from "@mui/material";
import { ISocialMedia, IUser } from "../../configures/interfaces";

const RegisterForm = () => {
  const user: IUser = {
    name: "",
    surname: "",
    email: "",
    password: "",
    title: "",
    birthday: new Date(),
    SocialMedia: [],
    phone: "",
    address: "",
  };
  //   const [socialMedia, setSocialMedia] = useState<ISocialMedia>();
  const handleFormInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
    handleChange: any
  ) => {
    // setUser({ ...user, [e.target.name]: e.target.value });
    handleChange(e);
  };
  return (
    <Formik
      initialValues={user}
      validate={(values) => {
        const errors: FormikErrors<IUser> = {};
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
              type="text"
              name="name"
              label="Ad"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.name}
              aria-describedby="q0"
            />
            <FormHelperText id="q0">
              {errors.name && touched.name && errors.name}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="text"
              name="surname"
              label="Soyad"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.surname}
              aria-describedby="q1"
            />
            <FormHelperText id="q1">
              {errors.surname && touched.surname && errors.surname}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="text"
              name="title"
              label="Ünvan"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.title}
              aria-describedby="q3"
            />
            <FormHelperText id="q3">
              {errors.title && touched.title && errors.title}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="date"
              name="birthday"
              label="Doğum Tarihi"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.birthday}
              aria-describedby="q4"
            />
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="text"
              name="phone"
              label="Telefon Numarası"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.phone}
              aria-describedby="q5"
            />
            <FormHelperText id="q5">
              {errors.phone && touched.phone && errors.phone}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="text"
              name="address"
              label="Adres"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.address}
              aria-describedby="q6"
            />
            <FormHelperText id="q6">
              {errors.address && touched.address && errors.address}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="email"
              name="email"
              label="E-Posta"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.email}
              aria-describedby="q7"
            />
            <FormHelperText id="q7">
              {errors.email && touched.email && errors.email}
            </FormHelperText>
          </FormControl>
          <FormControl error>
            <StandartTextField
              type="password"
              name="password"
              label="Parola"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleFormInputChanges(event, handleChange);
              }}
              onBlur={handleBlur}
              value={values.password}
              aria-describedby="q8"
            />
            <FormHelperText id="q8">
              {errors.password && touched.password && errors.password}
            </FormHelperText>
          </FormControl>
          <ContainedButton type="submit" disabled={isSubmitting}>
            Kayıt Ol
          </ContainedButton>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
