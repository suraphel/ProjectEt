// // LogIn form and validation with firebase

// import { useState, useRef, useEffect, useContext } from "react";
// import AuthenContext from "../components/Token/LogInAuthentication ";
// import classes from "../components/usersAccount/Auth/AuthForm.module.css";
// import { useRouter } from "next/router";
// import Link from "next/link";
// import Button from "../components/ui/button/Button";
// import UserInput from "../components/hooks/user-inputs";
// import { useHistory } from "next/router";
// import SignUpForm from "./SignUpForm";
// //-------------------------------------firebase files -------------------
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "firebase/auth";

// import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// // import {
// //   app,
// //   auth,
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   // onAuthStateChanged,
// //   signOut,
// //   updateProfile,
// // } from "../components/firebase/firebase";

// //-------------------------------------end firebase files -------------------

// const AuthForm = () => {
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
//   const displayNameInputRef = useRef();
//   // const photoUrlInputRef = useRef();

//   // const history = useHistory();
//   const authCtx = useContext(AuthenContext);
//   // validation if needed
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoading, setLoading] = useState(false);
//   const [isloggedIn, setIsloggedIn] = useState(false);
//   //-***********************************************************

//   // this will run once after the page has loaded
//   // useEffect(() => {
//   //   const loggedUser = localStorage.getItem("isloggedIn");
//   //   if (loggedUser === "1") {
//   //     setIsloggedIn(true);
//   //   }
//   // }, []);

//   const firebaseConfig = {
//     apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
//     authDomain: "test-2a962.firebaseapp.com",
//     databaseURL:
//       "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "test-2a962",
//     storageBucket: "test-2a962.appspot.com",
//     messagingSenderId: "377052867142",
//     appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
//   };

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   // this is a sample code for testing

//   const switchAuthModeHandler = () => {
//     setIsLogin((prevState) => !prevState);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();

//     // this will fire if there is a change in the user account
//     onAuthStateChanged(auth, (user) => {
//       console.log(user);
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         authCtx.login(uid);
//         // console.log("This is the uid being sent to the AuthContext" + tester);
//         router.push("/FetchingFromDB");
//         // setId(user.uid);
//         // setDisplay(user.displayName, user.email);

//         console.log(
//           "This is coming to you from the AuthFormPage from line 121" +
//             user.email,
//           user.uid,
//           user.displayName,
//           user.email,
//           user
//         );
//         // setid(uid);
//         // setupUI(user);
//         // ...
//       } else {
//         console.log("user logged out");
//         console.log("no data to output");
//         // User is signed out
//         // ...
//       }
//     });

//     // const user = auth.currentUser;
//     // if (user) {
//     // }

//     // this will fire because this is being called in the onAuthStateChanged
//     function setupUI(user) {
//       if (user) {
//         console.log("Yes there is a user");
//       } else {
//         console.log("no user in sight");
//       }
//     }

//     if (!formValidation) {
//       return;
//     }

//     const enteredEmail = usernameInputRef.current.value;
//     const enteredPassword = passwordInputRef.current.value;

//     // const enetereddisplayName = displayNameInputRef.current.value;
//     // const eneteredphotoUrl = photoUrlInputRef.current.value;

//     createUserWithEmailAndPassword(
//       auth,
//       enteredEmail,
//       enteredPassword
//       // displayName
//       // phoneNumber
//     )
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // console.log(errorCode, errorMessage);
//         // ..
//       });

//     signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         console.log("signed in from the Authform0!!");
//         localStorage.setItem("isloggedIn", "1");

//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // console.log(errorCode, errorMessage);
//       });

//     // just put this in a function
//     // adding a user displayName to the application
//     // updateProfile(auth.currentUser, {
//     //   displayName: enetereddisplayName,
//     //   phoneNumber: "90704142",
//     //   photoURL: "https://example.com/jane-q-user/profile.jpg",
//     // })
//     //   .then(() => {
//     //     console.log("profile updated");
//     //   })
//     //   .catch((error) => {
//     //     console.log("Error updating the user profile");
//     //   });

//     resetUsername("");
//     resetPassword("");
//   };

//   const getdata = async function () {
//     const querySnapshot = await getDocs(collection(db, "guides"));
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//       console.log(doc.data());
//       const li = `${doc.data()} put this out }`;
//     });
//   };

//   const writeData = async function () {
//     try {
//       const docRef = await addDoc(collection(db, "Chores"), {
//         first: "Surafel",
//         last: "Mekasha",
//         title: "Senior Developer",
//       });
//       console.log(docRef.id);
//       const result = doc.data;
//       return result;
//     } catch (e) {
//       console.error("Error adding element to the server");
//     }
//   };

//   // const updateProfile = () => {};

//   const logout = () => {
//     signOut(auth).then(() => {
//       console.log(auth);
//       console.log("signOut successful");
//       console.log("uid = ");
//     });
//   };

//   // const db = getFirestore(app);
//   // const serverdata = getDocs(collection(db, "guides"));
//   // serverdata.forEach((doc) => {
//   //   console.log(`${doc.data}`);
//   // });

//   const usernameInputClasses = inValidUsername
//     ? "form-control invalid"
//     : "form-control ";

//   const passwordInputClasses = inValidPassword
//     ? "form-control invalid"
//     : "form-control ";

//   return (
//     <section className={classes.auth}>
//       {/*option b/n login or signUp  */}
//       <h1>{isLogin ? "Log in " : `${"Sign up"} ${(<SignUpForm />)}`}</h1>

//       <button onClick={getdata}> ServerData</button>
//       {/* to be out on the dom */}
//       <button onClick={logout}> SignOut</button>
//       <button onClick={writeData}> Add data</button>
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

//         {/* for the displayName and photo   */}

//         {/* <div className={passwordInputClasses}>
//           <label htmlFor="displayName">Display name</label>
//           <input
//             type="displayName"
//             id="displayName"
//             ref={displayNameInputRef}
//             required
//             // onBlur={blurdisplayName}
//             // onChange={displayNameChangeHandler}
//             // value={displayName}
//           />
//           {/* {inValidPassword && (
//             <p className="error-text"> Please enter the password</p>
//           )} }
//         </div>*/}
//         <div className={classes.actions}>
//           {!isLoading && (
//             <Button>{isLogin ? "Login" : "Create Account"}</Button>
//           )}

//           <Link href="/CreateAccount"> Create new Account </Link>
//           {/* {isLoading && <p>Loading...</p>}
//           <button
//             type="button"
//             className={classes.toggle}
//             onClick={switchAuthModeHandler}
//           >
//             {isLogin ? "Create new account" : "Login with existing account"}
//           </button> */}
//           <Link href="/forgotPassword"> Forgot password </Link>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default AuthForm;

// // let url;

// // if (isLogin) {
// //   // for the signup purpose
// //   url =
// //     // this goes to the test page of the server
// //     // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";

// //     // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";

// //   setLoading(true);
// // } else {
// //   // for the signIn purpose
// //   url =
// //     // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
// //     // for the test page and it works
// //     // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
// // }

// // Sending the user credentials to the server
// // fetch(url, {
// //   method: "POST",
// //   body: JSON.stringify({
// //     email: enteredEmail,
// //     password: enteredPassword,
// //     returnSecureToken: true,
// //   }),
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // })
// // .then((res) => {
// //   setLoading(false);

// //   if (res.ok) {
// //     return res.json();
// //   } else {
// //     return res.json().then((data) => {
// //       authCtx.login(data.idToken);
// //       const errorM = data.error.message;
// //       throw new Error(errorM); // if a problem look in here
// //     });
// //   }
// //   // Automatic logout based on time
// // })
// // .then((data) => {
// //   const id = data.idToken;
// // console.log(data[user]);
// // console.log(id[user].stringify + "testing to read a json format");

// // console.log(id + " is the idToken");

// //Getting user data
// //   fetch(
// //     "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
// //     {
// //       method: "POST",
// //       body: JSON.stringify({
// //         idToken: id,
// //       }),
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     }
// //   )
// //     .then((res) => {
// //       if (res.ok) {
// //         return res.json();
// //       } else {
// //         return res.json().then((data) => {
// //           const errorM = data.error.message;
// //         });
// //       }
// //     })
// //     .then((data) => {
// //       console.log(data);
// //       const CurrentUserEmail = data.email;
// //       console.log(CurrentUserEmail);
// //     });

// //   const expirationTime = new Date(
// //     new Date().getTime() + +data.expiresIn * 3600
// //   );
// //   authCtx.login(data.idToken, expirationTime.toISOString());
// //   router.push("/FetchingFromDB");
// //   //testing
// //   // history.replace("/");
// //   // Now the user is logged as he has received a tokken.
// // })
// // .catch((err) => {
// //   //error source is built-in message from firebase
// //   alert(err.message);
// // });
