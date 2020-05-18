import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NewsfeedPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/update/:username" component={UpdateProfilePage} />
      </Switch>
    </Router>
  );
}

export default App;
