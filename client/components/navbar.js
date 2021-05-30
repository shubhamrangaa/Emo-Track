import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className={styles.navContainer}>
        <Link href="./">
          <a className={styles.navItem}>Resources</a>
        </Link>

        <Link href="./journal">
          <a className={styles.navItem}>Mini Journal</a>
        </Link>

        <Link href="./profile">
          <a className={styles.navItem}>Profile</a>
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
