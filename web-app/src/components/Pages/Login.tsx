import Box from "@mui/material/Box";
import LoginForm from "../Views/Forms/LoginForm";
import logo from "../../assets/logo.png";

function Login() {
  return (
    <Box className="overlay-login">
      <img alt="Logo" src={logo} width="150px" />
      <LoginForm />
    </Box>
  );
}

export default Login;