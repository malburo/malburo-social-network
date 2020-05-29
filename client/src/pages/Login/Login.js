import React from "react";
import FormLogin from "../../components/Form/Login/FormLogin";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import UserContext from "../../contexts/UserContext";
import API from "../../Services/api";
class LoginPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: "",
      },
    };
  }
  handlerChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "username":
        formErrors.username =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({
      formErrors,
      [name]: value,
    });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const { onLogin } = this.context;
    const { username, password } = this.state;
    let formErrors = { ...this.state.formErrors };
    const user = { username, password };

    try {
      const data = await API.call("post", `accounts/login`, user);
      localStorage.accessToken = data.accessToken;
      API.setToken(data.accessToken);
      onLogin(data.user);
    } catch (err) {
      formErrors = { ...err.response.data };
      this.setState({
        formErrors,
      });
    }
  };
  render() {
    const { state } = this.context;
    if (state.isAuthenticate) {
      return <Redirect to={`/`} />;
    }
    return (
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <FormLogin
                onChangeHandler={this.handlerChange}
                onSubmit={this.handlerSubmit}
                errors={this.state.formErrors}
                isComplete={this.state.isLogin}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
LoginPage.contextType = UserContext;
export default LoginPage;
