import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBckAxCHmvWKnwfAbgfzGgDpAdFkE39pE4",
  authDomain: "emo-track-d908e.firebaseapp.com",
  projectId: "emo-track-d908e",
  storageBucket: "emo-track-d908e.appspot.com",
  messagingSenderId: "346401263246",
  appId: "1:346401263246:web:61402e42998db2f7c4c3df",
  measurementId: "G-155FH4Z942",
};

export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
