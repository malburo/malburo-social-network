import React from "react";
import axios from "axios";
import FormLogin from "../../components/Form/Login/FormLogin";
import { Container, Row, Col } from "reactstrap";

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: "",
        password: "",
      },
      isComplete: false,
    };
  }
  handlerChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
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
  handlerSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    let formErrors = { ...this.state.formErrors };

    if (username === null) {
      formErrors.username = "Xin hãy cung cấp username!";
    }
    if (password === null) {
      formErrors.password = "Xin hãy cung cấp password!";
    }
    this.setState({
      formErrors,
    });

    if (formValid(this.state)) {
      const User = { username, password };
      this.setState({
        isComplete: true,
      });
      e.target.reset();
      axios
        .post("http://localhost:8080/api/accounts/login", User)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e));
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <FormLogin
                onChangeHandler={this.handlerChange}
                onSubmit={this.handlerSubmit}
                errors={this.state.formErrors}
                isComplete={this.state.isComplete}
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LoginPage;
