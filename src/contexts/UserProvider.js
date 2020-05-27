import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import UserContext from "./UserContext";
import API from "../Services/api";
class UserProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticate: false,
    };
  }
  async componentDidMount() {
    try {
      const data = await axios.get("http://localhost:8080/api/accounts/auth");
      this.setState({
        user: data.data.user,
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
  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          onLogin: this.onLogin,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default withRouter(UserProvider);
