import React from "react";
import ForgotPassword from "../../components/Form/ForgotPassword/ForgotPassword";
import { Container, Row, Col } from "reactstrap";
const ResetPasswordPage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <ForgotPassword />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPasswordPage;
