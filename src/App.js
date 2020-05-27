import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ResetPasswordPage from "./pages/ResetPassword/ResetPassword";
import NewsfeedPage from "./pages/Newsfeed/Newsfeed";
import UserProvider from "./contexts/UserProvider";
import API from "./Services/api";
function App() {
  if (localStorage.accessToken) {
    API.setToken(localStorage.accessToken);
  }
  return (
    <Router>
      <UserProvider>
        <div style={{ minHeight: "100vh" }} className="App">
          <Switch>
            <Route exact path="/" component={NewsfeedPage} />
            <Route exact path="/:username" component={LoginPage} />
            <Route exact path="/accounts/login" component={LoginPage} />
            <Route exact path="/accounts/register" component={RegisterPage} />
            <Route
              exact
              path="/accounts/password/reset"
              component={ResetPasswordPage}
            />
            <Route exact path="/accounts/edit" component={LoginPage} />
          </Switch>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
