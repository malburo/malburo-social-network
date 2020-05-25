import React from "react";
import { Button, Form, FormGroup, Input, InputGroup } from "reactstrap";
import API from "../../../Services/api";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postImg: null,
      caption: null,
    };
  }
  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handlerFile = (e) => {
    const postImg = e.target.files[0];
    this.setState({ postImg });
  };

  handlerSubmit = async (e) => {
    e.preventDefault();
    const { postImg, caption } = this.state;
    let formData = new FormData();
    formData.append("image", postImg);
    formData.append("caption", caption);
    await API.call("post", `post`, formData);
  };
  render() {
    return (
      <div className="Post">
        <Form
          className="FormLogin__input"
          onSubmit={this.handlerSubmit}
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
                onChange={this.handlerChange}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <Input
                type="file"
                name="file"
                id="exampleFile"
                onChange={this.handlerFile}
              />
            </InputGroup>
          </FormGroup>
          <Button color="primary" block className="FormLogin__btn">
            Đăng
          </Button>
        </Form>
      </div>
    );
  }
}
export default Post;
