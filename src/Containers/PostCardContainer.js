import React from "react";
import { cloneDeep } from "lodash";
import API from "../Services/api";
import PostCard from "../components/Card/PostCard";
class PostCardContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newComment: "",
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
  handlerChangeComment = (e) => {
    this.setState({
      newComment: e.target.value,
    });
  };

  handlerSubmitComment = (postId) => {
    return async (e) => {
      const newComment = {
        body: this.state.newComment,
        postId,
      };
      const res = await API.call("post", `comment`, newComment);
      const clonePosts = cloneDeep(this.state.posts);
      const post = clonePosts.find((item) => item._id === res.postId);
      post.comments.push(res);
      this.setState({
        posts: clonePosts,
      });
    };
  };
  render() {
    const data = this.state.posts;
    let posts;
    if (data) {
      posts = data.map((post) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            onChange={this.handlerChangeComment}
            onClick={this.handlerSubmitComment}
          />
        );
      });
    }
    return <React.Fragment>{posts}</React.Fragment>;
  }
}

export default PostCardContainer;
