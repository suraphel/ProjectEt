/* Makes several db calls */

// import { auth, onAuthStateChanged } from ".././components/Token/Firebase";
// import { useState } from "react";

// const Display = () => {
//   const [display, setDisplay] = useState("");

//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       setDisplay(user.displayName);
//       setDisplay(user.email);

//       console.log(
//         "this is the user with onAuth at line 101" + user.email,
//         user.uid,
//         user.displayName,
//         user.email,
//         user
//       );
//     } else {
//       console.log("user logged out");
//       console.log("no data to output");
//       // User is signed out
//       // ...
//     }
//   });

//   return <div>{display}</div>;
// };
// export default Display;
