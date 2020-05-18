import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./FormRegister.css";
const FormRegister = (props) => {
  return (
    <div className="wrap">
      <div className="FormRegister">
        <h1 className="FormRegister__logo">Malburo</h1>
        <p className="FormRegister__subtitle">
          Đăng ký để xem ảnh và video từ bạn bè.
        </p>
        <Form className="FormRegister__input">
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="FormRegister__item"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Tên đầy đủ"
              className="FormRegister__item"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Tên người dùng"
              className="FormRegister__item"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Mật khẩu"
              className="FormRegister__item"
            />
          </FormGroup>
          <Button color="primary" block className="FormRegister__btn">
            Đăng Ký
          </Button>
          <div className="roles">
            <p>
              Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu
              và Chính sách cookie của chúng tôi.
            </p>
          </div>
        </Form>
      </div>
      <div className="login">
        <span>Bạn có tài khoản? </span>
        <a href="#">Đăng Nhập</a>
      </div>
    </div>
  );
};
export default FormRegister;
