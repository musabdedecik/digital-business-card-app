
import { Redirect, Route } from "react-router-dom";
import { getToken } from "../configures/auth";
import Login from "./Views/Login";

function ProtectedRoute({ component:Component, ...restOfProps}: any) {
  const isAuthenticated = getToken();
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Login /> 
      }
    />
  );
}

export default ProtectedRoute;