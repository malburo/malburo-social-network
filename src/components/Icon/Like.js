import React from "react";
import "./Icon.css";
const Icon = (props) => {
  const { img, onClicked, postId } = props;
  return (
    <img
      src={img}
      alt="icon"
      className="Icon Icon-like"
      onClick={onClicked(postId)}
    />
  );
};

export default Icon;
