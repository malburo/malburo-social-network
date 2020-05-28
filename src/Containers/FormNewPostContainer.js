import React from "react";
import API from "../Services/api";
import FormNewPost from "../components/Form/NewPost/FormNewPost";
import PostContext from "../contexts/PostContext";
class FormNewPostContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      postImg: null,
      caption: "",
      isPending: false,
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
    this.setState({
      isPending: true,
    });
    const { onCreateNewPost } = this.context;
    const { postImg, caption } = this.state;
    let formData = new FormData();
    formData.append("image", postImg);
    formData.append("caption", caption);
    const res = await API.call("post", `post`, formData);

    this.setState({
      isPending: false,
      caption: "",
    });
    onCreateNewPost(res.newPost)();
  };
  render() {
    return (
      <FormNewPost
        onChangeCaption={this.handlerChange}
        onChangeFile={this.handlerFile}
        onSubmitForm={this.handlerSubmit}
        isPending={this.state.isPending}
        caption={this.state.caption}
      />
    );
  }
}
FormNewPostContainer.contextType = PostContext;
export default FormNewPostContainer;
