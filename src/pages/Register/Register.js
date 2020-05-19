import React from "react";
import RegisterLogin from "../../components/Form/Register/FormRegister";
import { Container, Row, Col } from "reactstrap";
const RegisterPage = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <RegisterLogin />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
