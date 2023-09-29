import React from "react";

import { USER_POST } from "../../../services/api";
import useForm from "../../../hooks/useForm";
import { UserContext } from "../../../context/UserContext";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

function LoginCreate() {
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const response = await fetch(url, options);
    if (response.ok) userLogin(username.value, password.value);
    const json = await response.json();

    console.log(response);
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Register</h1>
      <form onSubmit={handleCreateAccount}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        <Button>Create account</Button>
      </form>
    </section>
  );
}

export default LoginCreate;
