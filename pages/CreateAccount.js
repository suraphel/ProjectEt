// User Account form

import { useState, useRef, useContext } from "react";
import classes from "../components/usersAccount/Auth/AuthForm.module.css";
import { useRouter } from "next/router";
import Button from "../components/ui/button/Button";
import { initializeApp } from "firebase/app";
import UserInput from "../components/hooks/user-inputs";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../components/Token/Firebase";

const CreateAccount = () => {
  // form validataion
  const {
    value: FirstName,
    isValid: validFirstName,
    hasError: inValidFirstName,
    valueChangeHandler: FirstNameChangeHandler,
    onfocusHandler: blurFirstName,
    reset: resetFirstName,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: LastName,
    isValid: validLastName,
    hasError: inValidLastName,
    valueChangeHandler: LastNameChangeHandler,
    onfocusHandler: blurLastName,
    reset: resetLastName,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: Username,
    isValid: validUsername,
    hasError: inValidUsername,
    valueChangeHandler: UsernameChangeHandler,
    onfocusHandler: blurUsername,
    reset: resetUsername,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: MobileNumber,
    isValid: validMobileNumber,
    hasError: inValidMobileNumber,
    valueChangeHandler: MobileNumberChangeHandler,
    onfocusHandler: blurMobileNumber,
    reset: resetMobileNumber,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: Password,
    isValid: validPassword,
    hasError: inValidPassword,
    valueChangeHandler: PasswordChangeHandler,
    onfocusHandler: blurPassword,
    reset: resetPassword,
  } = UserInput((value) => value.trim() !== "");

  const {
    value: Age,
    isValid: validAge,
    hasError: inValidAge,
    valueChangeHandler: AgeChangeHandler,
    onfocusHandler: blurAge,
    reset: resetAge,
  } = UserInput((value) => value.trim() !== "");

  // const history = useHistory();
  let formValidation = false;

  if (
    validFirstName &&
    validLastName &&
    validUsername &&
    validPassword
    // validAge
  ) {
    formValidation = true;
  }
  //**********************************************/

  const router = useRouter();
  const FirstNameInputRef = useRef();
  const LastNameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const MobileNumberInputRef = useRef();
  const displayNameInputRef = useRef();
  const photoUrlInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);

  // const firebaseConfig = {
  //   apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
  //   authDomain: "test-2a962.firebaseapp.com",
  //   databaseURL:
  //     "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
  //   projectId: "test-2a962",
  //   storageBucket: "test-2a962.appspot.com",
  //   messagingSenderId: "377052867142",
  //   appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
  // };
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formValidation) {
      return;
    }
    const enteredFirstName = FirstNameInputRef.current.value;
    const enteredLastName = LastNameInputRef.current.value;
    const enteredEmail = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredMobileNumber = MobileNumberInputRef.current.value;
    const enetereddisplayName = displayNameInputRef.current.value;
    // const eneteredphotoUrl = photoUrlInputRef.current.value;

    createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("an error occured");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);

        // ..
      });

    // adding a user displayName to the application
    updateProfile(auth.currentUser, {
      displayName: enetereddisplayName,
      phoneNumber: enteredMobileNumber,
      // photoURL: eneteredphotoUrl,
    })
      .then(() => {
        console.log("profile updated", displayName);
      })
      .catch((error) => {
        console.log("Error updating the user profile");
      });

    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const uid = user.uid;
        router.push("/"); // to home page
        console.log(
          "This is coming from the CreateUser page" + user.email,
          user.uid,
          user.displayName,
          user
        );
        // setupUI(user);
      } else {
        router.push("/AuthForm0");
        console.log("user logged out");
      }
    });

    resetFirstName("");
    resetLastName("");
    resetUsername("");
    resetPassword("");
    resetMobileNumber("");
    // resetDisplayName("");
  };

  const FirstNameInputClasses = inValidFirstName
    ? "form-control invalid"
    : "form-control ";

  const LastNameInputClasses = inValidLastName
    ? "form-control invalid"
    : "form-control ";

  const usernameInputClasses = inValidUsername
    ? "form-control invalid"
    : "form-control ";

  const passwordInputClasses = inValidPassword
    ? "form-control invalid"
    : "form-control ";

  const MobileNumberInputClasses = inValidMobileNumber
    ? "form-control invalid"
    : "form-control ";

  return (
    <section className={classes.auth}>
      <h1>User Account</h1>

      <form onSubmit={submitHandler}>
        <div className={FirstNameInputClasses}>
          <label htmlFor="email">First name</label>
          <input
            type="text"
            id="name"
            ref={FirstNameInputRef}
            required
            onBlur={blurFirstName}
            onChange={FirstNameChangeHandler}
            value={FirstName}
          />
          {inValidFirstName && (
            <p className="error-text"> Please enter First-name</p>
          )}
        </div>

        <div className={LastNameInputClasses}>
          <label htmlFor="email">Last name</label>
          <input
            type="text"
            id="name"
            ref={LastNameInputRef}
            required
            onBlur={blurLastName}
            onChange={LastNameChangeHandler}
            value={LastName}
          />
          {inValidLastName && (
            <p className="error-text"> Please enter Last-name</p>
          )}
        </div>

        <div className={usernameInputClasses}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            ref={usernameInputRef}
            required
            onBlur={blurUsername}
            onChange={UsernameChangeHandler}
            value={Username}
          />
          {inValidUsername && (
            <p className="error-text"> Please enter a valid Email</p>
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
            value={Password}
          />
          {inValidPassword && (
            <p className="error-text"> Please enter password</p>
          )}
        </div>

        <div className={MobileNumberInputClasses}>
          <label htmlFor="MobileNumber">Mobile number</label>
          <input
            type="tel"
            id="tel"
            ref={MobileNumberInputRef}
            required
            onBlur={blurMobileNumber}
            onChange={MobileNumberChangeHandler}
            value={MobileNumber}
          />
          {inValidPassword && (
            <p className="error-text"> Please enter password</p>
          )}
        </div>

        {/* for the displayName and photo   */}

        <div className={passwordInputClasses}>
          <label htmlFor="displayName">Display name</label>
          <input
            type="displayName"
            id="displayName"
            ref={displayNameInputRef}
            // required
            // onBlur={blurdisplayName}
            // onChange={displayNameChangeHandler}
            // value={displayName}
          />
        </div>
        <div className={classes.actions}>
          <Button className={classes.button}>Sign Up</Button>
        </div>
      </form>
    </section>
  );
};
export default CreateAccount;
