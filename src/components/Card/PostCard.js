import React from "react";
import "./PostCard.css";
import Icon from "../Icon/Icon";
import Avatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
const PostCard = (props) => {
  return (
    <div className="PostCard">
      <div className="d-flex justify-content-between PostCard__header">
        <Avatar
          img="https://res.cloudinary.com/malburo/image/upload/v1588831342/trkuncv3xuxwjgn5a6wy.jpg"
          size="small"
          username="nguyennkua_"
        />
        <Icon img="https://image.flaticon.com/icons/svg/512/512142.svg" />
      </div>
      <div className="PostCard__body">
        <img
          src="https://res.cloudinary.com/malburo/image/upload/v1588831342/trkuncv3xuxwjgn5a6wy.jpg"
          className="PostCard__img"
          alt="PostImage"
        />
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
          <Comment username="thegioicuabao">
            <span>Ratetiulie</span>
          </Comment>
        </div>
      </div>
      <div className="new-comment d-flex justify-content-between align-items-center">
        <input type="text" placeholder="Thêm bình luận..." />
        <a href="#">Đăng</a>
      </div>
    </div>
  );
};
export default PostCard;
