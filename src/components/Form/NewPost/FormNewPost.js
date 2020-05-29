import React from "react";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import { Spinner } from "reactstrap";
import { CustomInput } from "reactstrap";
import "./FormNewPost.css";
const FormNewPost = (props) => {
  const {
    onChangeCaption,
    onChangeFile,
    onSubmitForm,
    isPending,
    caption,
  } = props;
  return (
    <React.Fragment>
      <div className="form-new-post__header">
        <span>Tạo bài viết mới</span>
      </div>
      <div className="form-new-post">
        <Form onSubmit={onSubmitForm} id="form-new-post-container">
          <FormGroup>
            <InputGroup>
              <Input
                type="text"
                name="caption"
                id="caption"
                value={caption}
                placeholder="Bạn đang nghĩ gì vậy?"
                className="form-new-post__input"
                onChange={onChangeCaption}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <CustomInput
              type="file"
              id="file"
              name="file"
              label="Chọn hình ảnh...!"
              onChange={onChangeFile}
              key={caption || Math.random()}
            />
          </FormGroup>
          <Button color="primary" block className="form-new-post__btn">
            {isPending ? <Spinner size="sm" color="light" /> : "Đăng"}
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default FormNewPost;
