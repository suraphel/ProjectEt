import React, { useState } from "react";

const AuthContext = React.createContext({
  uid: "",
  login: (uid) => {},
  logout: () => {},
  isLoggedIn: false,
});

// this is exported as a name export
export const AuthContextProvider = (props) => {
  const [uid, setIsLoggedIn] = useState(null);
  const userIsLoggedIn = !!uid;
  console.log(userIsLoggedIn + " check if it true or false");
  console.log(uid + " this is coming from the Context page");

  const loginHandler = (uid) => {
    setIsLoggedIn(uid);
  };

  const logoutHandler = () => {
    setIsLoggedIn(null);
  };

  const contextValue = {
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  console.log(contextValue.isLoggedIn + " coming from the Context page");

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
// exported as a default value
