// import React, { useState, useEffect } from "react";
// import AuthForm from "../../pages/AuthForm0";
// //******* to be separated  */
// import { createContext, useContext, Context } from "react";

// // creating the authUser: to be used if a user has been logged and if the user has access to other resuources on the site

// const formatAuthUser = (user)=> ({
// uid: user.uid,
// email:user.email
// });

// //--------------------------------------------------

// export default function userFirebaseAuth(){
//   const[authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const authStateChanged = async(authUser) => {
//     if(!authUser){
//       setAuthUser(null)
//       setLoading(false)
//       return;
//     }
//     setLoading(true)
//     let formattedUser = formatAuthUser(authState);
//     setAuthUser(formatteUser);
//     setLoading(false);
//   };

//   // state change listener

//   useEffect(()=>{
//     const unsubscribe = Firebase.Auth().onAuthStateChanged(authStateChanged);
//     return() => unsubscribe();
//   },[]);

//   return {
//     authUser,
//     loading
//   };

//     //********************************** */

//     const authUserContext = createContext({
//       authUser: null,
//       loading: true,
//     });

// function AuthUserProvider({children}){
//   const auth = userFirebaseAuth();
//   return <authUserContext.provider value ={auth}>{children}</authUserContext.provider>;
// }

// // const uid = "";

// signInWithEmailAndPassword(auth, "test@test.com", "test@test.com")
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     console.log("SignIn greacefully and successfully");
//     console.log(" user that has logged in " + user.uid);
//     // ...
//     setLoading(true);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// //

// const token = onAuthStateChanged(auth, (user) => {
//   if (user) {
//     var uid = user.uid;
//     console.log("user id " + uid);
//     const userEmail = user.email;
//     console.log(userEmail);
//   } else {
//     console.log("No user is logged in");
//   }
//   return uid;
//   console.log(uid);
// });

// onAuthStateChanged(auth, (user) => {
//   const uid = user.uid;
//   console.log(uid + " from the function body");
//   return uid;
// });

// const tokens = onAuthStateChanged();
// console.log(tokens + "and some otjer things");
// // console.log(+"from the bottom ");

// let logoutTimer;

// const AuthenContext = React.createContext({
//   token: "",
//   login: (token) => {},
//   IsloggedIn: false,
//   logout: () => {},
// });

// const timeCalculator = (expirationTime) => {
//   const startTime = new Date().getTime();
//   const endingTime = new Date(expirationTime).getTime();
//   const remainingTime = endingTime - startTime;
//   return remainingTime;
// };

// const gettingStoredToken = (token) => {
//   const idToken = uid;
//   console.log(idToken + " coming from the auth page");

//   // const testing = window.localStorage.getItem();
//   // console.log(testing + " from the local storgage ");

//   const storedToken = localhost.getItem("token");

//   const storedExpirationTime = localStorage.getItem("expirationTime");
//   const remainingTime = timeCalculator(storedExpirationTime);

//   if (remainingTime < 7200) {
//     localStorage.removeItem("token");
//   }
//   return {
//     token: storedToken,
//     duration: remainingTime,
//   };
// };

// export const AuthContextProvider = (props) => {
//   const tokenData = gettingStoredToken();
//   let startToken;
//   if (startToken) {
//     startToken = tokenData.data;
//   }
//   const [token, setToken] = useState(startToken);
//   const userIsLoggedIn = !!token; // flips the bool value.

//   const logoutHandler = () => {
//     setToken(null);
//     localStorage.removeItem("token");
//     if (logoutTimer) {
//       clearTimeout(logoutTimer);
//     }
//   };

//   const loginHandler = (token, expirationTime) => {
//     setToken("token");
//     localStorage.setItem("token", token);
//     const remainingTime = timeCalculator(expirationTime);
//     logoutTimer = setTimeout(logoutHandler, remainingTime);
//   };

//   useEffect(() => {
//     if (tokenData) {
//       setTimeout(logoutHandler, tokenData.duration);
//     }
//   }, [tokenData]);

//   const contextValue = {
//     token: token,
//     IsloggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };
//   return (
//     <AuthenContext.Provider value={contextValue}>
//       {props.children}
//     </AuthenContext.Provider>
//   );
// };
// export default AuthenContext;
