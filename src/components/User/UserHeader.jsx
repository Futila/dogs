import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserHeaderNav from "./UserHeaderNav";

import styles from "./UserHeader.module.css";

const UserHeader = () => {
  const [title, setTitle] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    switch (pathname) {
      case "/account/stats":
        setTitle("Stats");
        break;
      case "/account/post":
        setTitle("Post your photo");
        break;
      default:
        setTitle("My account");
    }
  }, [pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
