// LogIn form and validation with firebase

import { useState, useRef, useEffect, useContext } from "react";
import AuthContext from "../components/Token/Auth-context";
import classes from "../components/usersAccount/Auth/AuthForm.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../components/ui/button/Button";
import UserInput from "../components/hooks/user-inputs";
import { useHistory } from "next/router";
import SignUpForm from "./SignUpForm";
//-------------------------------------firebase files -------------------
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// import {
//   app,
//   auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   // onAuthStateChanged,
//   signOut,
//   updateProfile,
// } from "../components/firebase/firebase";

//-------------------------------------end firebase files -------------------

const AuthForm = () => {
  const {
    value: username,
    isValid: validUsername,
    hasError: inValidUsername,
    valueChangeHandler: UsernameChangeHandler,
    onfocusHandler: blurUsername,
    reset: resetUsername,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: password,
    isValid: validPassword,
    hasError: inValidPassword,
    valueChangeHandler: PasswordChangeHandler,
    onfocusHandler: blurPassword,
    reset: resetPassword,
  } = UserInput((value) => value.trim() !== "");

  // signing with email and password

  // const history = useHistory();
  let formValidation = false;

  if (validUsername && validPassword) {
    formValidation = true;
  }

  const router = useRouter();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const displayNameInputRef = useRef();
  // const photoUrlInputRef = useRef();

  // const history = useHistory();
  const authCtx = useContext(AuthContext);
  // validation if needed
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isloggedIn, setIsloggedIn] = useState(false);
  //-***********************************************************

  // this will run once after the page has loaded
  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("isloggedIn");
  //   if (loggedUser === "1") {
  //     setIsloggedIn(true);
  //   }
  // }, []);

  const firebaseConfig = {
    apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
    authDomain: "test-2a962.firebaseapp.com",
    databaseURL:
      "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-2a962",
    storageBucket: "test-2a962.appspot.com",
    messagingSenderId: "377052867142",
    appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  // this is a sample code for testing

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    // this will fire if there is a change in the user account

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        router.push("/FetchingFromDB");
        authCtx.login(uid);
      } else {
        console.log("user logged out");
        console.log("no data to output");
      }
    });
    // authCtx.login(uid);

    // const user = auth.currentUser;
    // if (user) {
    // }

    // this will fire because this is being called in the onAuthStateChanged
    function setupUI(user) {
      if (user) {
        console.log("Yes there is a user");
      } else {
        console.log("no user in sight");
      }
    }

    if (!formValidation) {
      return;
    }

    const enteredEmail = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // const enetereddisplayName = displayNameInputRef.current.value;
    // const eneteredphotoUrl = photoUrlInputRef.current.value;

    createUserWithEmailAndPassword(
      auth,
      enteredEmail,
      enteredPassword
      // displayName
      // phoneNumber
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        // ..
      });

    signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("signed in from the Authform1!!" + user.uid);
        console.log("idToken " + idToken);
        localStorage.setItem("isloggedIn", "1");
        // ...
      })
      // .then((res) => {
      //   if (res.ok) {
      //     console.log("all good");
      //   } else {
      //     console.log("error somewhere");
      //   }
      // })
      .then((data) => {
        authCtx.login(data.idToken);

        console.log("testing" + data.idToken);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
    // console.log(user.uid);
    resetUsername("");
    resetPassword("");
  };

  const getdata = async function () {
    const querySnapshot = await getDocs(collection(db, "guides"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
      const li = `${doc.data()} put this out }`;
    });
  };

  const writeData = async function () {
    try {
      const docRef = await addDoc(collection(db, "Chores"), {
        first: "Surafel",
        last: "Mekasha",
        title: "Senior Developer",
      });
      console.log(docRef.id);
      const result = doc.data;
      return result;
    } catch (e) {
      console.error("Error adding element to the server");
    }
  };

  // const updateProfile = () => {};

  const logout = () => {
    signOut(auth).then(() => {
      console.log(auth);
      console.log("signOut successful");
      console.log("uid = ");
    });
  };

  const usernameInputClasses = inValidUsername
    ? "form-control invalid"
    : "form-control ";

  const passwordInputClasses = inValidPassword
    ? "form-control invalid"
    : "form-control ";

  return (
    <section className={classes.auth}>
      {/*option b/n login or signUp  */}
      <h1>{isLogin ? "Log in " : `${"Sign up"} ${(<SignUpForm />)}`}</h1>

      <button onClick={getdata}> ServerData</button>
      {/* to be out on the dom */}
      <button onClick={logout}> SignOut</button>
      <button onClick={writeData}> Add data</button>
      <form onSubmit={submitHandler}>
        <div className={usernameInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={usernameInputRef}
            required
            onBlur={blurUsername}
            onChange={UsernameChangeHandler}
            value={username}
          />
          {inValidUsername && (
            <p className="error-text"> Please enter the User-name</p>
          )}
        </div>

        <div className={passwordInputClasses}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
            onBlur={blurPassword}
            onChange={PasswordChangeHandler}
            value={password}
          />
          {inValidPassword && (
            <p className="error-text"> Please enter the password</p>
          )}
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <Button>{isLogin ? "Login" : "Create Account"}</Button>
          )}

          <Link href="/CreateAccount"> Create new Account </Link>

          <Link href="/forgotPassword"> Forgot password </Link>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
