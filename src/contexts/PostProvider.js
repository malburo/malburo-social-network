import React from "react";
import { cloneDeep } from "lodash";
import PostContext from "./PostContext";
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
      const clonePosts = [newPost, ...this.state.posts];
      this.setState({
        posts: clonePosts,
      });
    };
  };
  handlerLike = (postId, userId, isLike) => {
    return (e) => {
      const clonePosts = cloneDeep(this.state.posts);
      const post = clonePosts.find((item) => item._id === postId);
      if (isLike) {
        if (post.likes.indexOf(userId) === -1) {
          post.likes.push(userId);
        }
        this.setState({
          posts: clonePosts,
        });
      } else {
        const unLike = post.likes.filter((item) => {
          return item !== userId;
        });
        post.likes = unLike;
        this.setState({
          posts: clonePosts,
        });
      }
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
          onLike: this.handlerLike,
          onCreateNewComment: this.handlerCreateNewComment,
        }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}

export default PostProvider;
