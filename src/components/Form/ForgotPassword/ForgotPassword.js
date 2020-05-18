import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./ForgotPassword.css";
const ForgotPassword = (props) => {
  return (
    <div className="wrap">
      <div className="FormForgotPassword">
        <img
          src="https://image.flaticon.com/icons/png/512/481/481195.png"
          className="FormForgotPassword__icon"
          alt="lock_icon"
        />
        <p className="FormForgotPassword__title">
          Bạn đang gặp sự cố khi đăng nhập ?
        </p>
        <p className="FormForgotPassword__subtitle">
          Hãy nhập tên người dùng hoặc email của bạn và chúng tôi sẽ gửi cho bạn
          liên kết để truy cập lại vào tài khoản.
        </p>
        <Form className="FormForgotPassword__input">
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="FormForgotPassword__item"
            />
          </FormGroup>
          <Button color="primary" block className="FormForgotPassword__btn">
            Gửi liên kết đăng nhập
          </Button>
        </Form>
      </div>
      <div className="login">
        <a href="#">Quay lại đăng Nhập</a>
      </div>
    </div>
  );
};
export default ForgotPassword;
