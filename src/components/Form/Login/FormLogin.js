import React from "react";
import "./FormLogin.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const FormLogin = (props) => {
  return (
    <div className="wrap">
      <div className="FormLogin">
        <h1 className="FormLogin__logo">Malburo</h1>
        <Form className="FormLogin__input">
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Tên người dùng hoặc email"
              className="FormLogin__email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Mật khẩu"
              className="FormLogin__password"
            />
          </FormGroup>
          <Button color="primary" block className="FormLogin__btn">
            Đăng nhập
          </Button>
          <a href="#">Quên mật khẩu?</a>
        </Form>
      </div>
      <div className="register">
        <span>Bạn không có tài khoản? </span>
        <a href="#">Đăng ký</a>
      </div>
    </div>
  );
};
export default FormLogin;
