import React from "react";

const Button = ({ children, disabled, bgColor, ...props }) => {
  return (
    <button disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </button>
  );
};

export default Button;
