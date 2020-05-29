import React from "react";
import ForgotPassword from "../../components/Form/ForgotPassword/ForgotPassword";
import { Container, Row, Col } from "reactstrap";

class ResetPasswordPage extends React.PureComponent {
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
    // axios
    //   .post("http://localhost:8080/api/accounts/register", newUser)
    //   .then((res) => console.log(res.data));
    this.setState({
      isComplete: true,
    });
    e.target.reset();
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
