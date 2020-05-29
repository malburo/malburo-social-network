import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  FormFeedback,
  InputGroup,
} from "reactstrap";
import "./FormRegister.css";
import { Alert } from "reactstrap";
const FormRegister = (props) => {
  const { onChangeHandler, onSubmit, errors, isSuccess } = props;
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
              <FormFeedback invalid="true">{errors.fullname}</FormFeedback>
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
                invalid={errors.username || errors.isExistsUsername}
              />
              <FormFeedback invalid="true">
                {errors.username || errors.isExistsUsername}
              </FormFeedback>
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
                invalid={errors.email || errors.isExistsEmail}
              />
              <FormFeedback invalid="true">
                {errors.email || errors.isExistsEmail}
              </FormFeedback>
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
              <FormFeedback invalid="true">{errors.password}</FormFeedback>
            </InputGroup>
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            block
            className="FormRegister__btn"
          >
            Đăng Ký
          </Button>
          {isSuccess && (
            <Alert color="success">
              Đăng kí thành công - <Link to="/accounts/login">Đăng nhập</Link>
            </Alert>
          )}

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
        <Link to="/accounts/login">Đăng nhập</Link>
      </div>
    </div>
  );
};
export default FormRegister;
