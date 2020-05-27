import React from "react";
import { cloneDeep } from "lodash";
import PostContext from "./UserContext";
import API from "../Services/api";
class PostProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    try {
      const result = await API.call("get", "post");
      this.setState({
        posts: result.posts,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  handlerCreateNewPost = (newPost) => {
    return (e) => {
      console.log(newPost);
      const clonePosts = cloneDeep(this.state.posts);
    };
  };
  handlerCreateNewComment = (newComment) => {
    return (e) => {
      const clonePosts = cloneDeep(this.state.posts);
      const post = clonePosts.find((item) => item._id === newComment.postId);
      post.comments.push(newComment);
      this.setState({
        posts: clonePosts,
      });
    };
  };
  render() {
    return (
      <PostContext.Provider
        value={{
          posts: this.state.posts,
          onCreateNewPost: this.handlerCreateNewPost,
          onCreateNewComment: this.handlerCreateNewComment,
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

export default PostProvider;
