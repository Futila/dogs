import React from "react";

import Dogs from "../../assets/dogs-footer.svg?react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Some rights reserved.</p>
    </footer>
  );
};

export default Footer;
