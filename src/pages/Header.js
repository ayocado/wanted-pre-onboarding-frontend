import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <Link to="/">
        <h2>홈화면으로 이동하기</h2>
      </Link>
    </div>
  );
}

export default Header;
