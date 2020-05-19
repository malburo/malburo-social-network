import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import LoginPage from "./pages/Login/Login";
function App() {
  return (
    <Router>
      <Container fluid style={{ minHeight: "100vh" }} className="App">
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/accounts/login" component={LoginPage} />
          <Route exact path="/accounts/register" component={LoginPage} />
          <Route exact path="/:username" component={LoginPage} />
          <Route exact path="/accounts/edit" component={LoginPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
