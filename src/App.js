import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import ResetPasswordPage from "./pages/ResetPassword/ResetPassword";
import NewsfeedPage from "./pages/Newsfeed/Newsfeed";

function App() {
  return (
    // phan route em để ở đây dc ko a
    // tam tohi ban de day van ok khong sao ca. Nhu the naoy la ok lam roi ,ok anh hehe.   
    // ban ok roi thi minh lam tiep day hehee, dạ e cảm ơn anh nhiều lắm
    // ban nho up len git nha :D , dạ em up hằng ngày mà anh.
    // deploy len heroku & firebase roi link vo github. Nho setup readme.md cho nguoi khac vo doc :D 
    // nhung project nay co the danh cho nhung ban khoaa sau tham khao do ban :D WOW TUYET VAY ANH :D
    // khong biet co submit vo do duocc khog :v, mấy bài đó em chưa biết làm luon
    // tap lam cai nho truoc ban ak
    // ban co them vo day cung duoc ne, giờ em mới biet tinh năng này luon á anh :D
    // thoi tre roi ban hoc ngur som nha, dạ bye anh, chúc anh buổi tối vui vẻ
    <Router>
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
    </Router>
  );
}

export default App;
