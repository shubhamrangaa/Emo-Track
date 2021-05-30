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
          In these difficult times, a lot of people around the world suffered
          from various mental health-related issues. We came across this problem
          when a campaign related to it was being run at our University. On
          in-depth research, our team found out that in spite of mental health
          being extremely crucial for the overall development of the person
          there existed a very few to none solution fulfilling the demand of the
          person.
        </p>
        {/* <Link href="./login"> */}
        <a href="#" target="_blank">
          Get Started
        </a>
      </section>
      <section className={styles.resourcesContainer}>
        <h2> Download Our App! </h2>
      </section>
    </section>
  );
}
