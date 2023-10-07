import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import MyPhotos from "../../assets/feed.svg?react";
import Stats from "../../assets/estatisticas.svg?react";
import AddPhoto from "../../assets/adicionar.svg?react";
import Logout from "../../assets/sair.svg?react";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const [mobile, setMobile] = useState(null);
  const navigate = useNavigate();

  const handleUserLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        {" "}
        <MyPhotos />
        {mobile && "My Account"}
      </NavLink>
      <NavLink to="/account/stats">
        <Stats />
        {mobile && "Stats"}
      </NavLink>
      <NavLink to="/account/post">
        <AddPhoto />
        {mobile && "photo"}
      </NavLink>
      <button onClick={handleUserLogout}>
        <Logout />
        {mobile && "Logout"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
