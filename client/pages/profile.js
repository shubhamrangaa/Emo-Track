import firebase from "firebase";
import firebaseApp from "../components/firebaseInit";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "../styles/profile.module.scss";
const db = firebaseApp.firestore();
import styled from "styled-components";
import Navbar from "../components/navbar";

const HeatItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 0.2rem;
  background-color: ${(props) => props.mood === "elated" && "#81F2A0"};
  background-color: ${(props) => props.mood === "happy" && "#85B6FF"};
  background-color: ${(props) => props.mood === "angry" && "#FF96AD"};
  background-color: ${(props) => props.mood === "depressed" && "#FFDE68"};
`;

export default function Journal() {
  const [emotionNote, setEmotionNote] = useState([{}]);
  const [input, setInput] = useState("");
  const [emoji, setEmoji] = useState("");

  const happy = document.getElementsByClassName("happy");

  //When the app loads we need to listen to the database and fetch new emotionNote as they get added/removed
  useEffect(() => {
    //This code gets fired when the app is refreshed
    db.collection("emotionNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((onsnapshot) => {
        console.log(onsnapshot.docs.map((doc) => doc.data()));
        setEmotionNote(
          onsnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            feeling: doc.data().feeling,
          }))
        );
      });
  }, []);

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className={styles.profileContainer}>
        <h1> Hi, Welcome Back</h1>

        <div className={styles.heatMapContainer}>
          {emotionNote.map((todo) => (
            //   <li key={todo.id}>{todo.todo}</li>
            <HeatItem mood={todo.feeling}></HeatItem>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
