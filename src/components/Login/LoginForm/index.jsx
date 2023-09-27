import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";

import { UserContext } from "../../../context/UserContext";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const context = React.useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      context.userLogin(username.value, password.value);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        <Button>Login</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
