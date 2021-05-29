import React, { useContext, useState } from "react";
import auth from "firebase/auth"
const AuthContext = React.createContext();

export useAuth(){
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(NULL)

  const value = {
    currentUser
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
