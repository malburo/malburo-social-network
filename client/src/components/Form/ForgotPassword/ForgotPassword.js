import React from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  FormFeedback,
} from "reactstrap";

const ForgotPassword = (props) => {
  const { onChangeHandler, onSubmit, errors, isComplete } = props;
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
        <Form
          className="FormForgotPassword__input"
          onSubmit={onSubmit}
          method="POST"
        >
          <FormGroup>
            <InputGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="FormForgotPassword__item"
                onChange={onChangeHandler}
                invalid={errors.email}
              />
              <FormFeedback invalid={true}>{errors.email}</FormFeedback>
            </InputGroup>
          </FormGroup>
          {isComplete && <p>Email đã được gửi!</p>}
          <Button color="primary" block className="FormForgotPassword__btn">
            Gửi liên kết đăng nhập
          </Button>
        </Form>
      </div>
      <div className="FormForgotPassword__footer">
        <Link to="/accounts/login">Quay lại đăng Nhập</Link>
      </div>
    </div>
  );
};
export default ForgotPassword;
