// // import AuthForm from "../../pages/AuthForm0";
// import React, { useState } from "react";
// import {
//   auth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "./firebase";

// const AuthenContext = React.createContext({
//   uid: "", // will need to import it from the other page
//   login: (uid) => {},
//   logout: () => {},
//   isLoggedIn: false,
// });

// export const AuthContextProvider = (props) => {
//   const [isLogged, setIsLoggedIn] = useState(null);
//   // if there is a uid, then there is a user is loggedIn
//   const userIsLoggedIn = !!uid;
//   //if there is a string for the uid then this will return true

//   const userId = () => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log("The uid for this logged in user" + uid);
//         LoggedIn = true;
//       } else {
//         //No one is signed in
//       }
//     });
//   };

//   const loginHandler = () => {
//     // call the login sdk
//     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//       const user = userCredential.user;
//       console.log("this is the logInHandler ");
//     });
//   };

//   const logOutHandler = () => {
//     //call the logout sdk
//     signOut(auth)
//       .then(() => {
//         // put out some thing on the screen for the user that he has been signed out
//       })
//       .catch((error) => {
//         errorCode = error.code;
//         errorMessage = error.message;
//       });
//   };

//   const user = auth.currentUser;

//   const LoggedIn = (user) => {
//     //  check if the user is still has a uid and then u are done
//     if (user) {
//       LoggedIn = true;
//     }
//   };

//   // the final result of what the context will be at the end of the function resultls
//   const contextValue = {
//     login: loginHandler,
//     logout: logOutHandler,
//     uid: userId,
//     isLoggedIn: userIsLoggedIn,
//   };

//   return (
//     // here comes the wrapper
//     <AuthenContext.Provider value={contextValue}>
//       {props.children}
//     </AuthenContext.Provider>
//   );
// };

// export default AuthenContext;

// // signInWithEmailAndPassword(auth, "test@test.com", "test@test.com")
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     console.log("SignIn greacefully and successfully");
// //     console.log(" user that has logged in " + user.uid);
// //     // ...
// //     setLoading(true);
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //   });

// //

// // const token = onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     var uid = user.uid;
// //     console.log("user id " + uid);
// //     const userEmail = user.email;
// //     console.log(userEmail);
// //   } else {
// //     console.log("No user is logged in");
// //   }
// //   return uid;
// //   console.log(uid);
// // });

// // onAuthStateChanged(auth, (user) => {
// //   const uid = user.uid;
// //   console.log(uid + " from the function body");
// //   return uid;
// // });

// // console.log(+"from the bottom ");

// // const timeCalculator = (expirationTime) => {
// //   const startTime = new Date().getTime();
// //   const endingTime = new Date(expirationTime).getTime();
// //   const remainingTime = endingTime - startTime;
// //   return remainingTime;
// // };

// // const gettingStoredToken = (uid) => {
// //   const idToken = uid;
// //   console.log(
// //     idToken +
// //       " coming from the auth page this is the heart of the auth token page "
// //   );

// //   // const testing = window.localStorage.getItem();
// //   // console.log(testing + " from the local storgage ");

// //   // const storedToken = localhost.getItem("token");

// //   // const storedExpirationTime = uid.getItem("expirationTime");

// //   const remainingTime = timeCalculator(storedExpirationTime);
// //   console.log(remainingTime + " remaining time");

// //   if (remainingTime < 7200) {
// //     // localStorage.removeItem("token");
// //   }
// //   return {
// //     token: storedToken,
// //     duration: remainingTime,
// //   };
// // };

// // export const AuthContextProvider = (props) => {
// //   // const tokenData = gettingStoredToken();
// //   // let startToken;
// //   // if (startToken) {
// //   //   startToken = tokenData.data;
// //   // }
// //   // const [uid, setToken] = useState(startToken);

// //   //basedon the current status this will flip the bool value
// //   const userIsLoggedIn = !!uid;

// //   const logoutHandler = () => {
// //     console.log("Signed Out successfully");
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         console.log("An error has occured while trying to logout");
// //       });
// //   };
// //   const loginHandler = () => {
// //     console.log("loggedin successfully");
// //     signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
// //       .then((userCredential) => {
// //         const user = userCredential.user;
// //         const remainingTime = timeCalculator(expirationTime);
// //         logoutTimer = setTimeout(logoutHandler, remainingTime);
// //         console.log("You have been signed In successfully");
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //       });
// //   };

// //   // useEffect(() => {
// //   //   if (tokenData) {
// //   //     setTimeout(logoutHandler, tokenData.duration);
// //   //   }
// //   // }, [tokenData]);

// //   const contextValue = {
// //     token: token,
// //     IsloggedIn: userIsLoggedIn,
// //     login: loginHandler,
// //     logout: logoutHandler,
// //   };
// //   return (
// //     <AuthenContext.Provider value={contextValue}>
// //       {props.children}
// //     </AuthenContext.Provider>
// //   );
// // };
// // export default AuthenContext;

// //*************************** */

// // import React, { useState, useEffect } from "react";
// // import AuthForm from "../../pages/AuthForm0";
// // import { initializeApp } from "firebase/app";

// // import {
// //   getAuth,
// //   signInWithEmailAndPassword,
// //   onAuthStateChanged,
// //   signOut,
// // } from "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
// //   authDomain: "test-2a962.firebaseapp.com",
// //   databaseURL:
// //     "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
// //   projectId: "test-2a962",
// //   storageBucket: "test-2a962.appspot.com",
// //   messagingSenderId: "377052867142",
// //   appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
// // };

// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// // let uid = "";
// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     const uid = user.uid;
// //     console.log("THIS IS THE A USER FROM THE tOKEN PAGE  " + uid);

// //     return uid;
// //   }
// // });

// // // signInWithEmailAndPassword(auth, "test@test.com", "test@test.com")
// // //   .then((userCredential) => {
// // //     // Signed in
// // //     const user = userCredential.user;
// // //     console.log("SignIn greacefully and successfully");
// // //     console.log(" user that has logged in " + user.uid);
// // //     // ...
// // //     setLoading(true);
// // //   })
// // //   .catch((error) => {
// // //     const errorCode = error.code;
// // //     const errorMessage = error.message;
// // //   });

// // //

// // // const token = onAuthStateChanged(auth, (user) => {
// // //   if (user) {
// // //     var uid = user.uid;
// // //     console.log("user id " + uid);
// // //     const userEmail = user.email;
// // //     console.log(userEmail);
// // //   } else {
// // //     console.log("No user is logged in");
// // //   }
// // //   return uid;
// // //   console.log(uid);
// // // });

// // // onAuthStateChanged(auth, (user) => {
// // //   const uid = user.uid;
// // //   console.log(uid + " from the function body");
// // //   return uid;
// // // });

// // // console.log(+"from the bottom ");

// // let logoutTimer;
// // const token = uid;

// // const AuthenContext = React.createContext({
// //   uid: "",
// //   login: (uid) => {},
// //   IsloggedIn: false,
// //   logout: () => {},
// // });

// // const timeCalculator = (expirationTime) => {
// //   const startTime = new Date().getTime();
// //   const endingTime = new Date(expirationTime).getTime();
// //   const remainingTime = endingTime - startTime;
// //   return remainingTime;
// // };

// // // const gettingStoredToken = (uid) => {
// // //   const idToken = uid;
// // //   console.log(
// // //     idToken + " coming from the auth page this is the heart of the auth "
// // //   );

// // //   // const testing = window.localStorage.getItem();
// // //   // console.log(testing + " from the local storgage ");

// // //   // const storedToken = localhost.getItem("token");

// // //   const storedExpirationTime = localStorage.getItem("expirationTime");

// // //   const remainingTime = timeCalculator(storedExpirationTime);
// // //   console.log(remainingTime + " remaining time");

// // //   if (remainingTime < 7200) {
// // //     // localStorage.removeItem("token");

// // //   }
// // //   return {
// // //     token: storedToken,
// // //     duration: remainingTime,
// // //   };
// // // };

// // export const AuthContextProvider = (props) => {
// //   const tokenData = gettingStoredToken();
// //   let startToken;
// //   if (startToken) {
// //     startToken = tokenData.data;
// //   }
// //   const [uid, setToken] = useState(startToken);
// //   // const userIsLoggedIn = !!uid; // flips the bool value.

// //   if (uid) {
// //     userIsLoggedIn = true;
// //   }

// //   const logoutHandler = () => {
// //     console.log("Signed Out successfully");
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         console.log("An error has occured while trying to logout");
// //       });

// //     const loginHandler = () => {
// //       signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
// //         .then((userCredential) => {
// //           const user = userCredential.user;
// //           const remainingTime = timeCalculator(expirationTime);
// //           logoutTimer = setTimeout(logoutHandler, remainingTime);
// //           console.log("You have been signed In successfully");
// //         })
// //         .catch((error) => {
// //           const errorCode = error.code;
// //           const errorMessage = error.message;
// //         });
// //     };
// //   };

// //   useEffect(() => {
// //     if (tokenData) {
// //       setTimeout(logoutHandler, tokenData.duration);
// //     }
// //   }, [tokenData]);

// //   const contextValue = {
// //     token: token,
// //     IsloggedIn: userIsLoggedIn,
// //     login: loginHandler,
// //     logout: logoutHandler,
// //   };
// //   return (
// //     <AuthenContext.Provider value={contextValue}>
// //       {props.children}
// //     </AuthenContext.Provider>
// //   );
// // };
// // export default AuthenContext;
