import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LogiPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

import { UserContext } from "../../context/UserContext";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login) <Navigate to="/account" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LogiPasswordLost />} />
        <Route path="reset" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}

export default Login;
