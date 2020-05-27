import React from "react";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";

const FormNewPost = (props) => {
  const { onChangeCaption, onChangeFile, onSubmit } = props;
  return (
    <div className="Post">
      <Form
        className="FormLogin__input"
        onSubmit={onSubmit}
        method="POST"
        enctype="multipart/form-data"
      >
        <FormGroup>
          <InputGroup>
            <Input
              type="text"
              name="caption"
              id="caption"
              placeholder="caption..."
              className="FormLogin__email"
              onChange={onChangeCaption}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <InputGroup>
            <Input
              type="file"
              name="file"
              id="exampleFile"
              onChange={onChangeFile}
            />
          </InputGroup>
        </FormGroup>
        <Button color="primary" block className="FormLogin__btn">
          Đăng
        </Button>
      </Form>
    </div>
  );
};

export default FormNewPost;
