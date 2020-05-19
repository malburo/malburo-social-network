import React from "react";
import FormLogin from "../../components/Form/Login/FormLogin";
import { Container, Row, Col } from "reactstrap";
const LoginPage = (props) => {
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
};

export default LoginPage;
