import React from "react";
import { withRouter } from "react-router-dom";
import UserContext from "./UserContext";
import API from "../Services/api";
class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticate: false,
    };
  }
  async componentDidMount() {
    try {
      const data = await API.call("get", "accounts/auth");
      this.setState({
        user: data.user,
        isAuthenticate: true,
      });
    } catch (err) {
      localStorage.removeItem("accessToken");
      this.setState({
        user: null,
        isAuthenticate: false,
      });
      this.props.history.push("/accounts/login");
    }
  }
  onLogin = (user) => {
    this.setState({
      user: user,
      isAuthenticate: true,
    });
  };
  onLogout = (e) => {
    localStorage.removeItem("accessToken");
    this.setState({
      user: null,
      isAuthenticate: false,
    });
    this.props.history.push("/accounts/login");
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          onLogin: this.onLogin,
          onLogout: this.onLogout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withRouter(UserProvider);
