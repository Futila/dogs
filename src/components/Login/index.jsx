import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import LoginCreate from "./LoginCreate";
import LogiPasswordLost from "./LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset";

import { UserContext } from "../../context/UserContext";

import styles from "./Login.module.css";

function Login() {
  const { login } = React.useContext(UserContext);

  if (login) <Navigate to="/account" />;
  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="lost" element={<LogiPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </div>
  );
}

export default Login;
