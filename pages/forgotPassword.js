import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import UserInput from "../components/hooks/user-inputs";
import Button from "../components/ui/button/Button";
import classes from "../components/dataFlow/choreregistreation/AddChore.module.css";

const ForgotPassword = () => {
  const {
    value: email,
    isValid: validemail,
    hasError: inValidemail,
    valueChangeHandler: emailChangeHandler,
    onfocusHandler: bluremail,
    reset: resetemail,
  } = UserInput((value) => value.trim() !== "");

  const auth = getAuth();
  let inputValidation = false;

  if (validemail) {
    inputValidation = true;
  }

  const sendPasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  console.log(email);

  return (
    <section className={classes.control}>
      <form onSubmit={sendPasswordReset}>
        <label htmlFor="email">Email address </label>
        <input
          type="email"
          id="email"
          requrired
          value={email}
          onChange={emailChangeHandler}
          onBlur={bluremail}
        />
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default ForgotPassword;
