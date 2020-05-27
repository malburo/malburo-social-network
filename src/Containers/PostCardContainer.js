import React from "react";
import API from "../Services/api";
import PostCard from "../components/Card/PostCard";
import PostContext from "../contexts/PostContext";

class PostCardContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      newComment: "",
    };
  }
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
      onCreateNewComment(res);
    };
  };
  render() {
    const { posts } = this.context;
    let postsList;
    if (posts) {
      postsList = data.map((post) => {
        return (
          <PostCard
            post={posts}
            key={post._id}
            onChange={this.handlerChangeComment}
            onClick={this.handlerSubmitComment}
          />
        );
      });
    }
    return <React.Fragment>{postsList}</React.Fragment>;
  }
}
PostCardContainer.contextType = PostContext;
export default PostCardContainer;
