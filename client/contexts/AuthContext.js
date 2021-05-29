import React, { createContext, useContext, useState, useEffect } from "react";
import fireApp from "../components/firebaseInit";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup() {
    const provider = new fireApp.auth().GoogleAuthProvider();
    return fireApp
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  // function login(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password);
  // }

  // function logout() {
  //   return auth.signOut();
  // }

  // function resetPassword(email) {
  //   return auth.sendPasswordResetEmail(email);
  // }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email);
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password);
  // }

  useEffect(() => {
    const unsubscribe = fireApp.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // const value = {
  //   currentUser,
  //   login,
  //   signup,
  //   logout,
  //   resetPassword,
  //   updateEmail,
  //   updatePassword,
  // };
  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
