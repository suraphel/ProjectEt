import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import Link from "next/link";
// import AuthenContext from "../Token/LogInAuthentication ";
// import authUserContext from "../Token/AuthUserContext";
import { auth } from "../Token/Firebase";

import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import Display from "../../pages/display";
import AuthContext from "../Token/Auth-context";

function MainNavigation() {
  const authCtx = useContext(AuthContext);
  // const authCtx = useContext(authUserContext);

  console.log(authCtx.isLoggedIn + " coming from the Nav page ");

  const IsloggedIn = authCtx.isLoggedIn;
  console.log(IsloggedIn + " coming from the Nav page II");

  const logoutHandler = () => {
    signOut(auth).then(() => {
      console.log(auth);
      console.log("signOut successful");
      console.log("uid = ");
    });
  };

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

  // const getmeoutofhere = () => {

  // };

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Balemoja
      </Link>

      {/* <button className={classes.toggle}>
        <span className={classes.toggle}></span>
        <span className={classes.toggle}></span>
        <span className={classes.toggle}></span>
      </button> */}

      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {/* <li>
            <Link href="/UploadingChoresToDb">Chores</Link>
          </li> */}
          <li className={classes.li}>
            {/* next Link href = '/name of component wrapped in link' */}
            <Link href="/UploadingCompaniesToDb">New Company</Link>
          </li>

          {!IsloggedIn && (
            <li className={classes.li}>
              <Link
                href="/AuthForm1"
                // className={classes.link}
              >
                Login
              </Link>
            </li>
          )}

          {IsloggedIn && (
            <li className={classes.li}>
              {/* <Display /> */}
              <Link
                href="/signOut"
                // className={classes.link}
              >
                Sign Out
              </Link>
            </li>
          )}

          {IsloggedIn && (
            <li className={classes.li}>
              <Link
                href="/ProfileForm"
                // className={classes.link}
              >
                User Profile
              </Link>
            </li>
          )}

          {/* {!IsloggedIn && (
            <li className={classes.li}>
              <Link
                href="/"
                // className={classes.link}
                onClick={signOut(auth)
                  .then(() => {
                    console.log("Sign-out successful");
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  })}
              >
                signOut
              </Link>
            </li>
          )} */}

          {authCtx.isLoggedIn && (
            // <button onClick={logoutHandler}>Logout</button>
            <button onClick={logoutHandler}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
