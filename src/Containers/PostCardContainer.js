import React from "react";
import API from "../Services/api";
import PostCard from "../components/Card/PostCard";
import PostContext from "../contexts/PostContext";

class PostCardContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
      isLike: false,
    };
  }
  handlerLike = (postId) => {
    return async (e) => {
      const { onLike } = this.context;
      const newLike = { postId, isLike: this.state.isLike };
      const res = await API.call("post", `like`, newLike);

      this.setState({
        isLike: res.isLike,
      });
      onLike(postId, res.userId, res.isLike)();
    };
  };
  handlerChangeComment = (e) => {
    this.setState({
      newComment: e.target.value,
    });
  };

  handlerSubmitComment = (postId) => {
    return async (e) => {
      const { onCreateNewComment } = this.context;
      const newComment = {
        body: this.state.newComment,
        postId,
      };
      const res = await API.call("post", `comment`, newComment);
      onCreateNewComment(res)();
    };
  };
  render() {
    const { posts } = this.context;
    let postsList;
    if (posts) {
      postsList = posts.map((post) => {
        return (
          <PostCard
            post={post}
            key={post._id}
            onChange={this.handlerChangeComment}
            onSubmitComment={this.handlerSubmitComment}
            onLike={this.handlerLike}
          />
        );
      });
    }
    return <React.Fragment>{postsList}</React.Fragment>;
  }
}
PostCardContainer.contextType = PostContext;
export default PostCardContainer;
