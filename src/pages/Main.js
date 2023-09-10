import React from "react";
import { Link } from "react-router-dom";

const Main = (props) => {
  return (
    <div>
      <ul>
        <Link to="/signup">
          <li>회원가입</li>
        </Link>
        <Link to="/signin">
          <li>로그인</li>
        </Link>
        <Link to="/todo">
          <li>Todo 리스트</li>
        </Link>
      </ul>
    </div>
  );
};

export default Main;
