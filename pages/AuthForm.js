// // LogIn form and validation with firebase

// import { useState, useRef, useContext } from "react";
// import AuthenContext from "../components/Token/LogInAuthentication ";

// import classes from "../components/usersAccount/Auth/AuthForm.module.css";
// import { useRouter } from "next/router";
// import Button from "../components/ui/button/Button";
// import UserInput from "../components/hooks/user-inputs";
// import { useHistory } from "next/router";

// import Firebase from "../components/Token/Firebase";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// const AuthForm = () => {
//   const authCtx = useContext(AuthenContext);
//   const isLoggedIn = authCtx.isLoggedIn;
//   const logoutHandler = () => {
//     authCtx.logout();
//   };
//   const {
//     value: username,
//     isValid: validUsername,
//     hasError: inValidUsername,
//     valueChangeHandler: UsernameChangeHandler,
//     onfocusHandler: blurUsername,
//     reset: resetUsername,
//   } = UserInput((value) => value.trim() !== "");

//   const {
//     value: password,
//     isValid: validPassword,
//     hasError: inValidPassword,
//     valueChangeHandler: PasswordChangeHandler,
//     onfocusHandler: blurPassword,
//     reset: resetPassword,
//   } = UserInput((value) => value.trim() !== "");

//   // signing with email and password

//   // const history = useHistory();
//   let formValidation = false;

//   if (validUsername && validPassword) {
//     formValidation = true;
//   }

//   const router = useRouter();
//   const usernameInputRef = useRef();
//   const passwordInputRef = useRef();
//   // const history = useHistory();
//   // const authCtx = useContext(AuthenContext);
//   // validation if needed
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setLoading] = useState(false);

//   //-***********************************************************

//   // this is a sample code for testing
//   // let email = "suriToday@mek.com";
//   // let passwords = "whynotthesame";
//   const auth = getAuth();
//   /*
//   //signUP
//   function signUp() {
//     createUserWithEmailAndPassword(auth, email, passwords)
//       .then((userCredential) => {
//         //if signed in
//         console.log("You have been signed In successfully");

//         const user = userCredential.user;
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   }

//   // signIN
//   document.querySelector(".buttt").addEventListener("click", function () {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         //if signed in
//         const user = userCredential.user;
//         console.log("You have been signed In successfully");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//       });
//   });

//   //userID
//   document.querySelector(".buttt").addEventListener("click", function () {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log(uid);
//       } else {
//         console.log("No logged in user");
//       }
//     });
//   });

//   // data from the server

//   //signOUt

//   document.querySelector(".butttt").addEventListener("click", function () {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         console.log("Sign-out successful.");
//       })
//       .catch((error) => {
//         console.log("An error happened.");
//       });
//   });
//   */
//   //*************************************************** */
//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     if (!formValidation) {
//       return;
//     }

//     const enteredEmail = usernameInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     let url;

//     if (isLogin) {
//       signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//           console.log("SignIn successfully");
//           console.log(" user that has logged in " + user.uid);
//           router.push("/FetchingFromDB");
//           // ...
//           setLoading(true);
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//         });
//     } else {
//       createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
//         .then((userCredential) => {
//           // Signed in
//           console.log("SignUp Successful");
//           const user = userCredential.user;
//           console.log("This is the user that has logged in " + user);
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//         });
//     }

//     resetUsername("");
//     resetPassword("");
//   };

//   // send him back to the log in page
//   // ..
//   // }).then((res) => {
//   //   setLoading(false);
//   //   if(res.ok){
//   //     return res.json();
//   //   }else{
//   //     return res.json().then((data) => {
//   //     // authCtx.login(data.idToken);
//   //     const errorM = data.error.message;
//   //     });
//   //   }
//   //     throw new Error(errorM); // if a problem look in here
//   //   }).then((data) =>{
//   //     const id = data.idToken;
//   //     console.log("got to line 200");
//   //   })
//   //   onAuthStateChanged(auth, (user) =>{
//   //     if(user){
//   //       const uid = user.uid;
//   //          authCtx.login(data.idToken, expirationTime.toISOString());
//   //       router.push("/FetchingFromDB");
//   //     } else{
//   //       console.log("no user found");
//   //     }

//   /*
//         //   }
//         // });

//     // Automatic logout based on time

//     // console.log(data[user]);
//     // console.log(id[user].stringify + "testing to read a json format");
//     // console.log(id + " is the idToken");

//     // Getting user data

//       fetch(
//         "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
//         {
//           method: "POST",
//           body: JSON.stringify({
//             idToken: id,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           } else {
//             return res.json().then((data) => {
//               const errorM = data.error.message;
//             });
//           }
//         })
//         .then((data) => {
//           console.log(data);
//           const CurrentUserEmail = data.email;
//           console.log(CurrentUserEmail);
//         });

//       const expirationTime = new Date(
//         new Date().getTime() + +data.expiresIn * 3600
//       );
//       authCtx.login(data.idToken, expirationTime.toISOString());
//       router.push("/FetchingFromDB");
//       //testing
//       // history.replace("/");
//       // Now the user is logged as he has received a tokken.
//     })
//     .catch((err) => {
//       //error source is built-in message from firebase
//       alert(err.message);
//     });

//     */

//   const usernameInputClasses = inValidUsername
//     ? "form-control invalid"
//     : "form-control ";

//   const passwordInputClasses = inValidPassword
//     ? "form-control invalid"
//     : "form-control ";

//   return (
//     <section className={classes.auth}>
//       {/*option b/n login or signUp  */}
//       <h1>{isLogin ? "Log in " : "Sign up"}</h1>
//       <form onSubmit={submitHandler}>
//         <div className={usernameInputClasses}>
//           <label htmlFor="email">Your Email</label>
//           <input
//             type="email"
//             id="email"
//             ref={usernameInputRef}
//             required
//             onBlur={blurUsername}
//             onChange={UsernameChangeHandler}
//             value={username}
//           />
//           {inValidUsername && (
//             <p className="error-text"> Please enter the User-name</p>
//           )}
//         </div>

//         <div className={passwordInputClasses}>
//           <label htmlFor="password">Your Password</label>
//           <input
//             type="password"
//             id="password"
//             ref={passwordInputRef}
//             required
//             onBlur={blurPassword}
//             onChange={PasswordChangeHandler}
//             value={password}
//           />
//           {inValidPassword && (
//             <p className="error-text"> Please enter the password</p>
//           )}
//         </div>

//         <div className={classes.actions}>
//           {!isLoading && (
//             <Button>{isLogin ? "Login" : "Create Account"}</Button>
//           )}
//           {isLoading && <p>Loading...</p>}
//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;
