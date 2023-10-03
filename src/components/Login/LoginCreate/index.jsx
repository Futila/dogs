import React from "react";

import { USER_POST } from "../../../services/api";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";
import { UserContext } from "../../../context/UserContext";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../../helpers/Error";

function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = useFetch();

  const handleCreateAccount = async (event) => {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Register</h1>
      <form onSubmit={handleCreateAccount}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Password" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Creating account</Button>
        ) : (
          <Button>Create account</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}

export default LoginCreate;
