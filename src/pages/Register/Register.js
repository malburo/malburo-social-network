import React from "react";
import axios from "axios";
import FormRegister from "../../components/Form/Register/FormRegister";
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
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      username: null,
      email: null,
      password: null,
      formErrors: {
        fullname: "",
        username: "",
        email: "",
        password: "",
      },
      isComplete: false,
    };
  }
  handlerChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "fullname":
        formErrors.fullname =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email =
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
    const { fullname, username, email, password } = this.state;

    let formErrors = { ...this.state.formErrors };

    if (fullname === null) {
      formErrors.fullname = "Xin hãy cung cấp họ và tên!";
    }
    if (username === null) {
      formErrors.username = "Xin hãy cung cấp username!";
    }
    if (email === null) {
      formErrors.email = "Xin hãy cung cấp email!";
    }
    if (password === null) {
      formErrors.password = "Xin hãy cung cấp password!";
    }
    this.setState({
      formErrors,
    });

    if (formValid(this.state)) {
      const newUser = { fullname, username, email, password };
      // axios
      //   .post("http://localhost:8080/api/accounts/register", newUser)
      //   .then((res) => console.log(res.data));
      this.setState({
        isComplete: true,
      });
      e.target.reset();
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
              <FormRegister
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

export default RegisterPage;
