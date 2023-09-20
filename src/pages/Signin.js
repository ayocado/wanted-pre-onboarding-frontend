import React, { useState } from "react";
import { useInputValidation } from "../utils/useInputValidation";
import { useNavigate } from "react-router-dom";
import { signinApi } from "../apis/api";
import Button from "../component/common/Button";

const Signin = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInputValidation("", emailValidation);
  const passwordInput = useInputValidation("", passwordValidation);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signinApi(emailInput.value, passwordInput.value);
      localStorage.setItem("token", response.data.access_token);
      console.log(response.data.access_token);
      navigate("/todo");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <p>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            data-testid="email-input"
            value={emailInput.value}
            placeholder="@를 포함하여 입력해주세요"
            onChange={(e) => emailInput.handleChange(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            data-testid="password-input"
            value={passwordInput.value}
            placeholder="8자 이상 입력해주세요"
            onChange={(e) => passwordInput.handleChange(e.target.value)}
          />
        </p>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button
          type="submit"
          data-testid="signin-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          로그인
        </Button>
      </form>
    </div>
  );
};

export default Signin;
