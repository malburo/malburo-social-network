import React from "react";
import "./Comment.css";
const Comment = (props) => {
  return (
    <div className="Comment">
      <a href="#">{props.username}</a>
      <p>{props.children}</p>
    </div>
  );
};

export default Comment;
