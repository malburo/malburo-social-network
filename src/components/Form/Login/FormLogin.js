import React from "react";
import "./FormLogin.css";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  FormFeedback,
} from "reactstrap";
const FormLogin = (props) => {
  const { onChangeHandler, onSubmit, errors, isComplete } = props;
  return (
    <div className="wrap">
      <div className="FormLogin">
        <h1 className="FormLogin__logo">Malburo</h1>
        <Form className="FormLogin__input" onSubmit={onSubmit} method="POST">
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Tên người dùng"
                className="FormLogin__email"
                onChange={onChangeHandler}
                invalid={errors.username}
              />
              <FormFeedback invalid={true}>{errors.username}</FormFeedback>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Mật khẩu"
                className="FormLogin__password"
                onChange={onChangeHandler}
                invalid={errors.password}
              />
              <FormFeedback invalid={true}>{errors.password}</FormFeedback>
            </InputGroup>
          </FormGroup>
          {isComplete && <p>Đăng Nhập thành công</p>}
          <Button color="primary" block className="FormLogin__btn">
            Đăng nhập
          </Button>
          <Link to="/accounts/password/reset">Quên mật khẩu?</Link>
        </Form>
      </div>
      <div className="FormLogin__footer">
        <span>Bạn không có tài khoản? </span>
        <Link to="/accounts/register">Đăng ký</Link>
      </div>
    </div>
  );
};
export default FormLogin;
