import React from "react";
import { Navigate } from "react-router-dom";

export const SignRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return !token ? element : <Navigate to="/todo" />;
};

export const TodoRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/signin" />;
};
