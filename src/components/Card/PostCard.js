import React from "react";
import "./PostCard.css";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";

const PostCard = (props) => {
  const { post, onChange, onClick } = props;
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
            <Icon img="https://image.flaticon.com/icons/svg/1077/1077035.svg" />
            <Icon img="https://image.flaticon.com/icons/svg/2462/2462719.svg" />
            <Icon img="https://image.flaticon.com/icons/png/512/1932/1932893.png" />
          </div>
          <div>
            <Icon img="https://image.flaticon.com/icons/png/512/942/942176.png" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span>71 lượt thích</span>
        </div>
        <div>
          <Comment username={post.userId.username}>
            <span>{post.body}</span>
          </Comment>
          {post.comments.map((comment) => {
            return (
              <Comment username={comment.userId.username}>
                <span>{comment.body}</span>
              </Comment>
            );
          })}
        </div>
      </div>
      <div className="new-comment d-flex justify-content-between align-items-center">
        <input
          type="text"
          placeholder="Thêm bình luận..."
          onChange={onChange}
        />
        <button className="btn btn-light" onClick={onClick(post._id)}>
          Đăng
        </button>
      </div>
    </div>
  );
};
export default PostCard;
