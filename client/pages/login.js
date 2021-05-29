import styled from "styled-components";
import styles from "../styles/TIGOLBITTIES.module.scss";

import firebaseApp from "../components/firebaseInit";
import { auth } from "../components/firebaseInit";
// import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDate } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/AuthContext";

// const firestore = firebase.firestore();

export default function Login() {
  const { signup } = useAuth();
  // const user = useAuthState(auth);

  function handleSubmit() {
    signup();
  }
  return (
    <div>
      <section>
        <h1>Login</h1>
        {/* <div>
          <form>
            <input
              className={styles.inputform}
              type="text"
              name="Username"
              placeholder="Username"
            ></input>
            <br></br>
            <input
              className={styles.inputform}
              type="text"
              name="Password"
              placeholder="Password"
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div> */}
        <button onClick={handleSubmit}>Sign in with Google</button>;
      </section>
    </div>
  );
}

// function Signin() {
//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   };
//   return <button onClick={handleSubmit}>Sign in with Google</button>;
// }
