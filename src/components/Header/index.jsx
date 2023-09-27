import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Dogs from "../../assets/dogs.svg?react";

import styles from "./Header.module.css";

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={styles.login} to="/account">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Create
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
