import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

function LoginForm() {
  const username = useForm();
  const password = useForm();
  console.log(username);

  const handleLogin = (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(/*{
        username,
        password,
      }*/),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
