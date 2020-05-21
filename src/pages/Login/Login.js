import React from "react";
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
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center mt-5">
              <FormLogin />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LoginPage;
