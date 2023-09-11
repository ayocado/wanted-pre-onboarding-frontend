import React from "react";
import { useInputValidation } from "../utils/useInputValidation";

const Signin = (props) => {
  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInputValidation("", emailValidation);
  const passwordInput = useInputValidation("", passwordValidation);

  return (
    <div>
      <form>
        <p>
          <label for="email">이메일</label>
          <input
            id="email"
            data-testid="email-input"
            value={emailInput.value}
            placeholder="@를 포함하여 입력해주세요"
            onChange={(e) => emailInput.handleChange(e.target.value)}
          />
        </p>
        <p>
          <label for="password">비밀번호</label>
          <input
            id="password"
            data-testid="password-input"
            value={passwordInput.value}
            placeholder="8자 이상 입력해주세요"
            onChange={(e) => passwordInput.handleChange(e.target.value)}
          />
        </p>
        <button
          data-testid="signin-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Signin;
