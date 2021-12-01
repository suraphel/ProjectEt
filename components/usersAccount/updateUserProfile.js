import firebase from "../components/firebase/firebase";
import Button from "../components/ui/button/Button";
import { getAuth, updateProfile } from "firebase/auth";

  const updataUserProfileHandler = () => {
    updateProfile(auth.currentUser, {
      displayName: "insert user data here",
      photoURL: "some site here",
    })
      .then(() => {
        <p> Profile updated</p>;
      })
      .catch((error) => {
        errorMessage = error.message;
        errorCode = error.code;
      });
  };
  return (
    <>
      <Button onClick={updataUserProfileHandler}> UpdateUserProfile</Button>

      <Button onClick={SingOuthandler}> SignOut </Button>

      <p> User signed out </p>
    </>
  );
};

export default updataUserProfileHandler;
