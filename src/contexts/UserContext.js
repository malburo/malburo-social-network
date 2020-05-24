import React from "react";

export const UserContext = React.createContext();

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticate: false,
    };
  }
  componentWillMount() {
    if (localStorage.user) {
      this.setState({
        user: JSON.parse(localStorage.user),
        isAuthenticate: true,
      });
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
