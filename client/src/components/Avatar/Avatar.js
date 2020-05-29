import React from "react";
import "./Avatar.css";
const Avatar = (props) => {
  return (
    <div className="Avatar">
      <img src={props.img} alt="icon" className={props.size} />
      {props.username && <a href="#">{props.username}</a>}
    </div>
  );
};

export default Avatar;
