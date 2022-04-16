import Login from "./components/Views/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/Views/Dashboard";
import { withRouter } from "react-router-dom";
import { getToken } from "./configures/auth";
function App() {
  const isAuth = getToken();
  return (
    <Switch>
      <Route path="/login" component={Login}>
        {isAuth && <Redirect from="/login" to="/dashboard"></Redirect>}
      </Route>
      <Route path="/dashboard" component={Dashboard}>
        {!isAuth && <Redirect from="/dashboard" to="/login"></Redirect>}
      </Route>
      <Redirect exact from="/" to={isAuth ? "/dashboard" : "/login"} />
    </Switch>
  );
}

export default withRouter(App);
