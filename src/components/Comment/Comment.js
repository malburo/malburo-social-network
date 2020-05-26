import React from "react";
import "./Comment.css";
const Comment = (props) => {
  return (
    <div className="Comment">
      <a href="#">{props.username}</a>
      {props.children}
    </div>
  );
};

export default Comment;
