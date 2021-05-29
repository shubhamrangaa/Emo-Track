import styled from "styled-components";
import styles from "../styles/TIGOLBITTIES.module.scss";

import firebaseApp from "../components/firebaseInit";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionDate } from "react-firebase-hooks/firestore";

const auth = firebase.auth();
const firestore = firebase.firestore();

export default function Login() {
  const user = useAuthState(auth);
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
        <Signin></Signin>
      </section>
    </div>
  );
}

function Signin() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}
