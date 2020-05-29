import React, { useContext } from "react";
import "./PostCard.css";
import Icon from "../Icon/Icon";
import Like from "../Icon/Like";
import Avatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
import UserContext from "../../contexts/UserContext";
const PostCard = (props) => {
  const { state } = useContext(UserContext);
  const { post, onChange, onSubmitComment, onLike } = props;
  let likeIcon = "https://image.flaticon.com/icons/svg/1077/1077035.svg";
  if (state.user) {
    likeIcon =
      post.likes.indexOf(state.user._id) !== -1
        ? "https://image.flaticon.com/icons/svg/1076/1076984.svg"
        : "https://image.flaticon.com/icons/svg/1077/1077035.svg";
  }

  return (
    <div className="PostCard">
      <div className="d-flex justify-content-between PostCard__header">
        <Avatar
          img={post.userId.avatarImage}
          size="small"
          username={post.userId.username}
        />
        <Icon img="https://image.flaticon.com/icons/svg/512/512142.svg" />
      </div>
      <div className="PostCard__body">
        <img src={post.image} className="PostCard__img" alt="PostImage" />
      </div>
      <div className="PostCard__footer">
        <div className="d-flex justify-content-between PostCard__icon">
          <div className="PostCard__icon-list">
            <Like img={likeIcon} onClicked={onLike} postId={post._id} />
            <Icon img="https://image.flaticon.com/icons/svg/2462/2462719.svg" />
            <Icon img="https://image.flaticon.com/icons/png/512/1932/1932893.png" />
          </div>
          <div>
            <Icon img="https://image.flaticon.com/icons/png/512/942/942176.png" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          {post.likes.length > 0 && <span>{post.likes.length} lượt thích</span>}
        </div>
        <div>
          {post.body !== "null" && (
            <Comment username={post.userId.username}>
              <span>{post.body}</span>
            </Comment>
          )}
          {post.comments.map((comment) => {
            return (
              <Comment username={comment.userId.username}>
                <span>{comment.body}</span>
              </Comment>
            );
          })}
        </div>
      </div>
      <form onSubmit={onSubmitComment(post._id)}>
        <div className="new-comment d-flex justify-content-between align-items-center">
          <input
            type="text"
            placeholder="Thêm bình luận..."
            onChange={onChange}
          />
          <button className="btn btn-light">Đăng</button>
        </div>
      </form>
    </div>
  );
};
export default PostCard;
