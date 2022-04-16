import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import LoginForm from "../Forms/LoginForm";
import RegisterForm from "../Forms/RegisterForm";
import ContainedButton from "../Button/ContainedButton";
function Login() {
  const [isRegister, setRegister] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <Box>
      <Typography variant="h4" component="div" gutterBottom>
        Dijital Kartvizit Uygulaması
      </Typography>
      <ContainedButton
        onClick={() => {
          setRegister(!isRegister);
        }}
      >
        {isRegister ? "Giriş Yap" : "Kayıt Ol"}
      </ContainedButton>
      {!isRegister ? <LoginForm /> : <RegisterForm />}
    </Box>
  );
}

export default Login;
