import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import styles from "../styles/TIGOLBITTIES.module.scss";

const FormContainer = styled.section`
  background: black;
  color: white;
  width: 30em;
  margin: 5em auto 10em auto;
  padding: 3em;
  border-radius: 20px;
`;

const FormHeading = styled.section`
  color: white;
  font-size: 2em;
  text-align: center;
  padding: 1em 0em 1em 0em;
  border-radius: 20px;
`;

export default function Login() {
  return (
    <div>
      <FormContainer>
        <FormHeading>Login</FormHeading>
        <div>
          <form>
            <input
              class={styles.inputform}
              type="text"
              name="Username"
              placeholder="Username"
            ></input>
            <br></br>
            {/* test */}
            <input
              class={styles.inputform}
              type="text"
              name="Password"
              placeholder="Password"
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </FormContainer>
    </div>
  );
}
