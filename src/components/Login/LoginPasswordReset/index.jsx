import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import useFetch from "../../../hooks/useFetch";

import { PASSWORD_RESET } from "../../../services/api";

import Input from "../../Forms/Input";
import Button from "../../Forms/Button";
import Error from "../../../helpers/Error";
import Head from "../../../helpers/Head";

function LoginPasswordReset() {
  const [key, setKey] = useState("");
  const [login, setLogin] = useState("");

  const password = useForm();
  const { error, loading, request } = useFetch();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const key = params.get("key");
    const login = params.get("login");

    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);

      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Reset password" />
      <h1 className="title">Reset the password</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="New password"
          type="password"
          name="password"
          {...password}
        />

        {loading ? <Button>Reseting</Button> : <Button>Reset password</Button>}
      </form>

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordReset;
