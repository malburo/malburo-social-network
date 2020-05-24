import React from "react";
import FormRegister from "../../components/Form/Register/FormRegister";
import { Container, Row, Col } from "reactstrap";
import API from "../../Services/api";
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
        isExistsEmail: "",
        isExistsUsername: "",
      },
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
  handlerSubmit = async (e) => {
    e.preventDefault();
    const { fullname, username, email, password } = this.state;

    let formErrors = { ...this.state.formErrors };

    const newUser = { fullname, username, email, password };
    try {
      const data = await API.call("post", `accounts/register`, newUser);
    } catch (err) {
      formErrors = { ...err.response.data };
      this.setState({
        formErrors,
      });
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
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegisterPage;
