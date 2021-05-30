import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import Navbar from "../components/navbar";
// import Link from "next/link ";

export default function Home() {
  return (
    <section>
      <Navbar></Navbar>
      <section className={styles.heroContainer}>
        <h1>
          Improving your Mental Health,<br></br> One click at a time!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
        {/* <Link href="./login"> */}
        <a>Get Started</a>
      </section>
      <section className={styles.resourcesContainer}>
        <h2> Resources </h2>
        <article className={styles.resourceItemContainer}>
          <article>Resource 1</article>
          <article>Resource 1</article>
          <article>Resource 1</article>
        </article>
      </section>
    </section>
  );
}
