import { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import { UserContext } from "../../context/UserContext";
import useMedia from "../../hooks/useMedia";

import MyPhotos from "../../assets/feed.svg?react";
import Stats from "../../assets/estatisticas.svg?react";
import AddPhoto from "../../assets/adicionar.svg?react";
import Logout from "../../assets/sair.svg?react";

import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const navigate = useNavigate();
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleUserLogout = () => {
    userLogout();
    navigate("/login");
  };

  return (
    <>
      {mobile && (
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.mobileButton}  ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="Menu"
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav}  ${
          mobileMenu && styles.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
