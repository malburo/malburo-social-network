import React from "react";
import ForgotPassword from "../../components/Form/ForgotPassword/ForgotPassword";
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
class ResetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      formErrors: {
        email: "",
      },
      isComplete: false,
    };
  }
  handlerChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "email":
        formErrors.email =
          value.length < 3 ? "minimum 3 characaters required" : "";
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
    const { email } = this.state;

    let formErrors = { ...this.state.formErrors };

    if (email === null) {
      formErrors.email = "Xin hãy cung cấp email";
    }
    this.setState({
      formErrors,
    });

    if (formValid(this.state)) {
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
              <ForgotPassword
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

export default ResetPasswordPage;
