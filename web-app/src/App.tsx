import "./App.css";
import Login from "./components/Views/Login";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Views/Dashboard";
import { withRouter } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Switch>
      <ProtectedRoute path="/login" exact component={Dashboard} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/" component={Dashboard} exact />
    </Switch>
  );
}

export default withRouter(App);
