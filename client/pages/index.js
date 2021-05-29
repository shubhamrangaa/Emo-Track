import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const HomeContainer = styled.section`
  background: black;
  color: white;
`;

export default function Home() {
  return (
    <HomeContainer>
      <h1>Emo Track</h1>
      
    </HomeContainer>
  );
}
