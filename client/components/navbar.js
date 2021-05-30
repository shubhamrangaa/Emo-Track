import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className={styles.navContainer}>
        <div>
          <img src="https://res.cloudinary.com/shubhamrangaa/image/upload/v1622337749/HowYouDoinLogo_ui5web.png"></img>
        </div>
        <div className={styles.navLinks}>
          <Link href="./">
            <a className={styles.navItem}>Resources</a>
          </Link>

          <Link href="./journal">
            <a className={styles.navItem}>Mini Journal</a>
          </Link>

          <Link href="./profile">
            <a className={styles.navItem}>Profile</a>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
