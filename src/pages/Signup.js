import React from "react";
import { useInputValidation } from "../utils/useInputValidation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupApi } from "../apis/api";
import Button from "../component/common/Button";

const Signup = (props) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInputValidation("", emailValidation);
  const passwordInput = useInputValidation("", passwordValidation);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signupApi(emailInput.value, passwordInput.value);
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={emailInput.value}
          placeholder="@를 포함하여 입력해주세요"
          onChange={(e) => emailInput.handleChange(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={passwordInput.value}
          placeholder="8자 이상 입력해주세요"
          onChange={(e) => passwordInput.handleChange(e.target.value)}
        />
        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button
          type="submit"
          data-testid="signup-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          회원가입
        </Button>
      </form>
    </div>
  );
};

export default Signup;
