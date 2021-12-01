import firebase from "../components/firebase/firebase";
import Button from "../components/ui/button/Button";
import { getAuth, updataPassword } from "firebase/auth";

const updateUserPassword = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const newpassword = getASecureRandomPassword();

  const updateUserPasswordhandler = (user, newpassword)
    .then(() => {
      console.log("password updated!!!");
    })
    .catch((error) => {
      errorMessage = error.Message;
      errorCode = error.code;
    });

  return (
    <>
      <Button onClick={updateUserPasswordhandler}> Password updater </Button>
      <p> User signed out </p>
    </>
  );
};

export default updateUserPassword;
