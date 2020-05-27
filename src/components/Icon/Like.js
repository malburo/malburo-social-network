import React from "react";
import "./Icon.css";
const Icon = (props) => {
  const { img, onClicked } = props;
  return (
    <img src={img} alt="icon" className="Icon Icon-like" onClick={onClicked} />
  );
};

export default Icon;
