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
// ổn lắm bạn 
// biết chi component thành component con thế là ok rồi đó 
// trong khi lập trình mình nên chia nhỏ logic ra 
// ví dụ code 1 controller thì bạn có thể tách fucntion ra, mỗi fucnction làm 1 nheiemjvuj rồi ghép nó thành 1 fucntion lớn , dạ