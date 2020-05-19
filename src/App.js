import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ResetPasswordPage from "./pages/ResetPassword/ResetPassword";
import NewsfeedPage from "./pages/Newsfeed/Newsfeed";
function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh" }} className="App">
        <Switch>
          <Route exact path="/" component={NewsfeedPage} />
          <Route exact path="/accounts/login" component={LoginPage} />
          <Route exact path="/accounts/register" component={RegisterPage} />
          <Route
            exact
            path="/accounts/password/reset"
            component={ResetPasswordPage}
          />
          <Route exact path="/accounts/edit" component={LoginPage} />
          <Route exact path="/:username" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
