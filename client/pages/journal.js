import firebase from "firebase";
import firebaseApp from "../components/firebaseInit";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import styles from "../styles/Journal.module.scss";
import Navbar from "../components/navbar";
const db = firebaseApp.firestore();

export default function Journal() {
  const [emotionNote, setEmotionNote] = useState([{}]);
  const [input, setInput] = useState("");
  const [emoji, setEmoji] = useState("");

  //When the app loads we need to listen to the database and fetch new emotionNote as they get added/removed
  useEffect(() => {
    //This code gets fired when the app is refreshed
    db.collection("emotionNote")
      .orderBy("timestamp", "desc")
      .onSnapshot((onsnapshot) => {
        console.log(onsnapshot.docs.map((doc) => doc.data()));
        setEmotionNote(
          onsnapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addtodo = (event) => {
    //This will fire off when the Add button is clicked
    event.preventDefault(); //This will prevent the form from REFRESHING
    setEmotionNote([...emotionNote, input]);

    db.collection("emotionNote").add({
      todo: input,
      feeling: emoji,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput(""); //This will help clear the dialog box without refreshing the page
  };

  const emojiClick = (param, e) => {
    console.log(param);
    setEmoji(param);
    
  };

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className={styles.journalContainer}>
        <h1> How do you feel today?</h1>
        <div className={styles.emojiContainer}>
          <button 
          
            className={styles.emoji1}
            //   onClick={emojiClick(value)}
            onClick={(e) => emojiClick("elated", e)}
          >
            🥳
          </button>
          <button id="happy"
            className={styles.emoji2}
            //   onClick={emojiClick(value)}
            onClick={(e) => emojiClick("happy", e)}
          >
            😀
          </button>
          <button id="angry"
            className={styles.emoji3}
            //   onClick={emojiClick(value)}
            onClick={(e) => emojiClick("angry", e)}
          >
            🤬
          </button>
          <button
            className={styles.emoji4}
            //   onClick={emojiClick(value)}
            onClick={(e) => emojiClick("depressed", e)}
          >
            😢
          </button>
        </div>
        <form>
          <FormControl>
            <InputLabel>✔️ Write Something</InputLabel>

            <Input
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </FormControl>

          <Button
            disabled={!input}
            type="submit"
            onClick={addtodo}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
          {/* <button type='submit' onClick={addtodo}>Add</button> */}
        </form>

        <ul className={styles.notes_container} >
          {emotionNote.map((todo) => (

            <div className={styles.note_container_item}>
              <p key={todo.id}  className={styles.note_item_text}>{todo.todo}
              
              {/* <li>
              {todo.id}
              </li> */}

              
              </p>
            </div>
            
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
