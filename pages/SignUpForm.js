// LogIn form and validation with firebase

import UserInput from "../components/hooks/user-inputs";
import Button from "../components/ui/button/Button";
import classes from "../components/usersAccount/Auth/AuthForm.module.css";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const SignUpForm = () => {
  const {
    value: fname,
    isValid: validfname,
    hasError: inValidfname,
    valueChangeHandler: fnameChangeHandler,
    onfocusHandler: blurfname,
    reset: resetfname,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: lname,
    isValid: validlname,
    hasError: inValidlname,
    valueChangeHandler: lnameChangeHandler,
    onfocusHandler: blurlname,
    reset: resetlname,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: tel,
    isValid: validtel,
    hasError: inValidtel,
    valueChangeHandler: telChangeHandler,
    onfocusHandler: blurtel,
    reset: resettel,
  } = UserInput((value) => value.trim() !== "");

  let formValidation = false;

  if (validfname && validtel && validlname) {
    formValidation = true;
  }

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

  // this is a sample code for testing
  let email = "suriToday@mek.com";
  let passwords = "whynotthesame";

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = auth.currentUser;
    if (user) {
      console.log("this is the user ");
    }

    if (!formValidation) {
      return;
    }

    const enteredEmail = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;

    if (isLogin) {
      // for the signup purpose
      url =
        // this goes to the test page of the server
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";

        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";

      setLoading(true);
    } else {
      // for the signIn purpose
      url =
        // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBILHtgI_IbbZADrPf-oTa-3nJPvIL4qSs";
        // for the test page and it works
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc";
    }

    // Sending the user credentials to the server
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setLoading(false);

        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            authCtx.login(data.idToken);
            const errorM = data.error.message;
            throw new Error(errorM); // if a problem look in here
          });
        }
        // Automatic logout based on time
      })
      .then((data) => {
        const id = data.idToken;
        // console.log(data[user]);
        // console.log(id[user].stringify + "testing to read a json format");

        // console.log(id + " is the idToken");

        //Getting user data
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
          {
            method: "POST",
            body: JSON.stringify({
              idToken: id,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                const errorM = data.error.message;
              });
            }
          })
          .then((data) => {
            console.log(data);
            const CurrentUserEmail = data.email;
            console.log(CurrentUserEmail);
          });

        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 3600
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        router.push("/FetchingFromDB");
        //testing
        // history.replace("/");
        // Now the user is logged as he has received a tokken.
      })
      .catch((err) => {
        //error source is built-in message from firebase
        alert(err.message);
      });

    resetUsername("");
    resetPassword("");
    resettel("");
  };

  const fnameInputClasses = inValidfname
    ? "form-control invalid"
    : "form-control ";

  const lnameInputClasses = inValidlname
    ? "form-control invalid"
    : "form-control ";

  const telInputClasses = inValidtel ? "form-control invalid" : "form-control ";

  return (
    <section className={classes.auth}>
      {/*option b/n login or signUp  */}
      {/* <h1>{isLogin ? "Log in " : "Sign up"}</h1> */}
      <form onSubmit={submitHandler}>
        <div className={fnameInputClasses}>
          <label htmlFor="email">Full Name</label>
          <input
            type="fname"
            id="fname"
            // ref={fnameInputRef}
            required
            onBlur={blurfname}
            onChange={fnameChangeHandler}
            value={fname}
            placeholder="First name"
          />
          {inValidfname && (
            <p className="error-text"> Please enter the First-name</p>
          )}
        </div>

        <div className={lnameInputClasses}>
          <label htmlFor="email">Last Name</label>
          <input
            type="lname"
            id="lname"
            // ref={lnameInputRef}
            required
            onBlur={blurlname}
            onChange={lnameChangeHandler}
            value={lname}
            placeholder="Last name"
          />
          {inValidlname && (
            <p className="error-text"> Please enter the Last-name</p>
          )}
        </div>

        <div className={lnameInputClasses}>
          <label htmlFor="email">Display name</label>
          <input
            type="displayName"
            id="displayName"
            required
            placeholder="Nick name"
          />
        </div>

        <div className={telInputClasses}>
          <label htmlFor="email">Telephone </label>
          <input
            type="tel"
            id="tel"
            // ref={telInputRef}
            required
            onBlur={blurtel}
            onChange={telChangeHandler}
            value={tel}
            placeholder="Mobile number"
          />
          {inValidtel && (
            <p className="error-text"> Please enter the Phone number</p>
          )}
        </div>

        <div className={classes.actions}>
          <Button>Sign Up</Button>
        </div>
      </form>
    </section>
  );
};

export default SignUpForm;
