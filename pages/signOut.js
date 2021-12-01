import firebase from "../components/firebase/firebase";
import Button from "../components/ui/button/Button";
import { getAuth, signOut } from "firebase/auth";

const SignOut = () => {
  const auth = getAuth();
  const SingOuthandler = () => {
    signOut(auth)
      .then(() => {
        console.log("sign Out page working!!!");
      })
      .catch((error) => {
        errorMessage = error.Message;
        errorCode = error.code;
      });
  };
  return (
    <>
      <Button onClick={SingOuthandler}> SignOut </Button>
      <p> User signed out </p>
    </>
  );
};

export default SignOut;
