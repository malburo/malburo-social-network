import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  InputGroup,
} from "reactstrap";
import "./FormRegister.css";
const FormRegister = (props) => {
  const { onChangeHandler, onSubmit, errors, isComplete } = props;
  return (
    <div className="wrap">
      <div className="FormRegister">
        <h1 className="FormRegister__logo">Malburo</h1>
        <p className="FormRegister__subtitle">
          Đăng ký để xem ảnh và video từ bạn bè.
        </p>
        <Form className="FormRegister__input" onSubmit={onSubmit} method="POST">
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Tên đầy đủ"
                className="FormRegister__item"
                onChange={onChangeHandler}
                invalid={errors.fullname}
              />
              <FormFeedback invalid={true}>{errors.fullname}</FormFeedback>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Tên người dùng"
                className="FormRegister__item"
                onChange={onChangeHandler}
                invalid={errors.username}
              />
              <FormFeedback invalid={true}>{errors.username}</FormFeedback>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="FormRegister__item"
                onChange={onChangeHandler}
                invalid={errors.email}
              />
              <FormFeedback invalid={true}>{errors.email}</FormFeedback>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Mật khẩu"
                className="FormRegister__item"
                onChange={onChangeHandler}
                invalid={errors.password}
              />
              <FormFeedback invalid={true}>{errors.password}</FormFeedback>
            </InputGroup>
          </FormGroup>
          {isComplete && <p>Đăng kí thành công</p>}
          <Button
            type="submit"
            color="primary"
            block
            className="FormRegister__btn"
          >
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
      <div className="FormRegister__footer">
        <span>Bạn có tài khoản? </span>
        <a href="#">Đăng Nhập</a>
      </div>
    </div>
  );
};
export default FormRegister;
