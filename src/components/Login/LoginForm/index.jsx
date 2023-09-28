import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";

import { UserContext } from "../../../context/UserContext";

import Error from "../../../helpers/Error";
import Input from "../../Forms/Input";
import Button from "../../Forms/Button";

import styles from "./LoginForm.module.css";
import stylesButton from "../../Forms/Button.module.css";

function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <Input label="User" type="text" name="username" {...username} />
        <Input label="Password" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Login</Button>
        )}

        <Error error={error} />
      </form>
      <Link to="/login/lost" className={styles.lost}>
        Forgot password?
      </Link>

      <div className={styles.registration}>
        <h2 className={styles.subtitle}>Resgister</h2>
        <p>Don't have an account yet? register on the website.</p>
        <Link className={stylesButton.button} to="/login/create">
          Create new account
        </Link>
      </div>
    </section>
  );
}

export default LoginForm;
