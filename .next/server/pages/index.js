(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/RoutingPage.js":
/*!***********************************!*\
  !*** ./components/RoutingPage.js ***!
  \***********************************/
/***/ (() => {

// // import { BrowserRouter, Route, Switch } from 'react-router-dom';
// // import RawData from './pages/homePage/HomePage';
// import SearchBar from '../components/searchBar/SearchBar';
// import HouseCleaner from '../pages/HouseCleaner'
// import FetchingFromDB from './dataFlow/fetchingFromDb/FetchingFromDB';
// // import TestWindow from './TestWindow';
// const RoutingPage = (props) => {
// 	return (
// 		<div>
// 		<BrowserRouter> 
// 			<Switch>
// 				<Route exact path="/">
// 					<SearchBar />
// 					<RawData />
// 				</Route>
// 				<Route path="/HouseHelp">
// 					< UploadingChoresToDb/>
// 				</Route>
// 				<Route path="/HouseCleaner">
// 					<UploadingChoresToDb />
// 				</Route>
// 				<Route path="/Gardner">
// 					<HouseCleaner />
// 				</Route>
// 				{/* <Route path="/SecurityService">
// 					<SecurityService />
// 				</Route> */}
// 				<Route path="/MetalWork">
// 					<HouseCleaner />
// 				</Route>	
// 				<Route path="/WoodWork">
// 					<AuthForm />
// 				</Route>
// 				<Route path="/WoodWork">
// 					<HouseCleaner />
// 				</Route>
// 				<Route path="/PaintWork">
// 					<FetchingFromDB />
// 				</Route>
// 				{/* <Route path="/Sign In">
// 					<AuthForm  />
// 				</Route>  */}
// 			</Switch>
// 			{/*  */}
// 			</BrowserRouter>
// 		</div>
// 	);
// };
// export default RoutingPage;
// 	// <Route path="/SignIn">
// 	// 				{/* <SignIn /> */}
// 	// 				<User />
// 	// 			</Route>

/***/ }),

/***/ "./components/Token/LogInAuthentication .js":
/*!**************************************************!*\
  !*** ./components/Token/LogInAuthentication .js ***!
  \**************************************************/
/***/ (() => {

// // import AuthForm from "../../pages/AuthForm0";
// import React, { useState } from "react";
// import {
//   auth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "./firebase";
// const AuthenContext = React.createContext({
//   uid: "", // will need to import it from the other page
//   login: (uid) => {},
//   logout: () => {},
//   isLoggedIn: false,
// });
// export const AuthContextProvider = (props) => {
//   const [isLogged, setIsLoggedIn] = useState(null);
//   // if there is a uid, then there is a user is loggedIn
//   const userIsLoggedIn = !!uid;
//   //if there is a string for the uid then this will return true
//   const userId = () => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uid = user.uid;
//         console.log("The uid for this logged in user" + uid);
//         LoggedIn = true;
//       } else {
//         //No one is signed in
//       }
//     });
//   };
//   const loginHandler = () => {
//     // call the login sdk
//     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
//       const user = userCredential.user;
//       console.log("this is the logInHandler ");
//     });
//   };
//   const logOutHandler = () => {
//     //call the logout sdk
//     signOut(auth)
//       .then(() => {
//         // put out some thing on the screen for the user that he has been signed out
//       })
//       .catch((error) => {
//         errorCode = error.code;
//         errorMessage = error.message;
//       });
//   };
//   const user = auth.currentUser;
//   const LoggedIn = (user) => {
//     //  check if the user is still has a uid and then u are done
//     if (user) {
//       LoggedIn = true;
//     }
//   };
//   // the final result of what the context will be at the end of the function resultls
//   const contextValue = {
//     login: loginHandler,
//     logout: logOutHandler,
//     uid: userId,
//     isLoggedIn: userIsLoggedIn,
//   };
//   return (
//     // here comes the wrapper
//     <AuthenContext.Provider value={contextValue}>
//       {props.children}
//     </AuthenContext.Provider>
//   );
// };
// export default AuthenContext;
// // signInWithEmailAndPassword(auth, "test@test.com", "test@test.com")
// //   .then((userCredential) => {
// //     // Signed in
// //     const user = userCredential.user;
// //     console.log("SignIn greacefully and successfully");
// //     console.log(" user that has logged in " + user.uid);
// //     // ...
// //     setLoading(true);
// //   })
// //   .catch((error) => {
// //     const errorCode = error.code;
// //     const errorMessage = error.message;
// //   });
// //
// // const token = onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     var uid = user.uid;
// //     console.log("user id " + uid);
// //     const userEmail = user.email;
// //     console.log(userEmail);
// //   } else {
// //     console.log("No user is logged in");
// //   }
// //   return uid;
// //   console.log(uid);
// // });
// // onAuthStateChanged(auth, (user) => {
// //   const uid = user.uid;
// //   console.log(uid + " from the function body");
// //   return uid;
// // });
// // console.log(+"from the bottom ");
// // const timeCalculator = (expirationTime) => {
// //   const startTime = new Date().getTime();
// //   const endingTime = new Date(expirationTime).getTime();
// //   const remainingTime = endingTime - startTime;
// //   return remainingTime;
// // };
// // const gettingStoredToken = (uid) => {
// //   const idToken = uid;
// //   console.log(
// //     idToken +
// //       " coming from the auth page this is the heart of the auth token page "
// //   );
// //   // const testing = window.localStorage.getItem();
// //   // console.log(testing + " from the local storgage ");
// //   // const storedToken = localhost.getItem("token");
// //   // const storedExpirationTime = uid.getItem("expirationTime");
// //   const remainingTime = timeCalculator(storedExpirationTime);
// //   console.log(remainingTime + " remaining time");
// //   if (remainingTime < 7200) {
// //     // localStorage.removeItem("token");
// //   }
// //   return {
// //     token: storedToken,
// //     duration: remainingTime,
// //   };
// // };
// // export const AuthContextProvider = (props) => {
// //   // const tokenData = gettingStoredToken();
// //   // let startToken;
// //   // if (startToken) {
// //   //   startToken = tokenData.data;
// //   // }
// //   // const [uid, setToken] = useState(startToken);
// //   //basedon the current status this will flip the bool value
// //   const userIsLoggedIn = !!uid;
// //   const logoutHandler = () => {
// //     console.log("Signed Out successfully");
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         console.log("An error has occured while trying to logout");
// //       });
// //   };
// //   const loginHandler = () => {
// //     console.log("loggedin successfully");
// //     signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
// //       .then((userCredential) => {
// //         const user = userCredential.user;
// //         const remainingTime = timeCalculator(expirationTime);
// //         logoutTimer = setTimeout(logoutHandler, remainingTime);
// //         console.log("You have been signed In successfully");
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         const errorMessage = error.message;
// //       });
// //   };
// //   // useEffect(() => {
// //   //   if (tokenData) {
// //   //     setTimeout(logoutHandler, tokenData.duration);
// //   //   }
// //   // }, [tokenData]);
// //   const contextValue = {
// //     token: token,
// //     IsloggedIn: userIsLoggedIn,
// //     login: loginHandler,
// //     logout: logoutHandler,
// //   };
// //   return (
// //     <AuthenContext.Provider value={contextValue}>
// //       {props.children}
// //     </AuthenContext.Provider>
// //   );
// // };
// // export default AuthenContext;
// //*************************** */
// // import React, { useState, useEffect } from "react";
// // import AuthForm from "../../pages/AuthForm0";
// // import { initializeApp } from "firebase/app";
// // import {
// //   getAuth,
// //   signInWithEmailAndPassword,
// //   onAuthStateChanged,
// //   signOut,
// // } from "firebase/auth";
// // const firebaseConfig = {
// //   apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
// //   authDomain: "test-2a962.firebaseapp.com",
// //   databaseURL:
// //     "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
// //   projectId: "test-2a962",
// //   storageBucket: "test-2a962.appspot.com",
// //   messagingSenderId: "377052867142",
// //   appId: "1:377052867142:web:a8ce49ddb2f3c166217847",
// // };
// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// // let uid = "";
// // onAuthStateChanged(auth, (user) => {
// //   if (user) {
// //     const uid = user.uid;
// //     console.log("THIS IS THE A USER FROM THE tOKEN PAGE  " + uid);
// //     return uid;
// //   }
// // });
// // // signInWithEmailAndPassword(auth, "test@test.com", "test@test.com")
// // //   .then((userCredential) => {
// // //     // Signed in
// // //     const user = userCredential.user;
// // //     console.log("SignIn greacefully and successfully");
// // //     console.log(" user that has logged in " + user.uid);
// // //     // ...
// // //     setLoading(true);
// // //   })
// // //   .catch((error) => {
// // //     const errorCode = error.code;
// // //     const errorMessage = error.message;
// // //   });
// // //
// // // const token = onAuthStateChanged(auth, (user) => {
// // //   if (user) {
// // //     var uid = user.uid;
// // //     console.log("user id " + uid);
// // //     const userEmail = user.email;
// // //     console.log(userEmail);
// // //   } else {
// // //     console.log("No user is logged in");
// // //   }
// // //   return uid;
// // //   console.log(uid);
// // // });
// // // onAuthStateChanged(auth, (user) => {
// // //   const uid = user.uid;
// // //   console.log(uid + " from the function body");
// // //   return uid;
// // // });
// // // console.log(+"from the bottom ");
// // let logoutTimer;
// // const token = uid;
// // const AuthenContext = React.createContext({
// //   uid: "",
// //   login: (uid) => {},
// //   IsloggedIn: false,
// //   logout: () => {},
// // });
// // const timeCalculator = (expirationTime) => {
// //   const startTime = new Date().getTime();
// //   const endingTime = new Date(expirationTime).getTime();
// //   const remainingTime = endingTime - startTime;
// //   return remainingTime;
// // };
// // // const gettingStoredToken = (uid) => {
// // //   const idToken = uid;
// // //   console.log(
// // //     idToken + " coming from the auth page this is the heart of the auth "
// // //   );
// // //   // const testing = window.localStorage.getItem();
// // //   // console.log(testing + " from the local storgage ");
// // //   // const storedToken = localhost.getItem("token");
// // //   const storedExpirationTime = localStorage.getItem("expirationTime");
// // //   const remainingTime = timeCalculator(storedExpirationTime);
// // //   console.log(remainingTime + " remaining time");
// // //   if (remainingTime < 7200) {
// // //     // localStorage.removeItem("token");
// // //   }
// // //   return {
// // //     token: storedToken,
// // //     duration: remainingTime,
// // //   };
// // // };
// // export const AuthContextProvider = (props) => {
// //   const tokenData = gettingStoredToken();
// //   let startToken;
// //   if (startToken) {
// //     startToken = tokenData.data;
// //   }
// //   const [uid, setToken] = useState(startToken);
// //   // const userIsLoggedIn = !!uid; // flips the bool value.
// //   if (uid) {
// //     userIsLoggedIn = true;
// //   }
// //   const logoutHandler = () => {
// //     console.log("Signed Out successfully");
// //     signOut(auth)
// //       .then(() => {})
// //       .catch((error) => {
// //         console.log("An error has occured while trying to logout");
// //       });
// //     const loginHandler = () => {
// //       signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
// //         .then((userCredential) => {
// //           const user = userCredential.user;
// //           const remainingTime = timeCalculator(expirationTime);
// //           logoutTimer = setTimeout(logoutHandler, remainingTime);
// //           console.log("You have been signed In successfully");
// //         })
// //         .catch((error) => {
// //           const errorCode = error.code;
// //           const errorMessage = error.message;
// //         });
// //     };
// //   };
// //   useEffect(() => {
// //     if (tokenData) {
// //       setTimeout(logoutHandler, tokenData.duration);
// //     }
// //   }, [tokenData]);
// //   const contextValue = {
// //     token: token,
// //     IsloggedIn: userIsLoggedIn,
// //     login: loginHandler,
// //     logout: logoutHandler,
// //   };
// //   return (
// //     <AuthenContext.Provider value={contextValue}>
// //       {props.children}
// //     </AuthenContext.Provider>
// //   );
// // };
// // export default AuthenContext;

/***/ }),

/***/ "./components/chore/Chore.js":
/*!***********************************!*\
  !*** ./components/chore/Chore.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var _chore_Chore_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chore/Chore.module.css */ "./components/chore/Chore.module.css");
/* harmony import */ var _chore_Chore_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chore_Chore_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\chore\\Chore.js";
// Defines a Chore and what it takes in





const Chore = props => {
  /* // font for the rendered page title */
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
    className: (_chore_Chore_module_css__WEBPACK_IMPORTED_MODULE_3___default().chore),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      children: props.introData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
      children: props.descriptionData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
      children: props.paintJob
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/testing",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        className: (_chore_Chore_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
        children: " Show Details "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chore);

/***/ }),

/***/ "./components/dataFlow/choreregistreation/AddChoresForm.js":
/*!*****************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/AddChoresForm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../choreregistreation/AddChore.module.css */ "./components/dataFlow/choreregistreation/AddChore.module.css");
/* harmony import */ var _choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\dataFlow\\choreregistreation\\AddChoresForm.js";
//  import    '../companyregistration/AddCompanies.css'







function Addchoresform(props) {
  const {
    value: introData,
    isValid: validIntro,
    hasError: inValidIntro,
    valueChangeHandler: IntroChangeHandler,
    onfocusHandler: blurIntro,
    reset: resetIntro
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: descriptionData,
    isValid: validdetail,
    hasError: inValiddetail,
    valueChangeHandler: detailChangeHandler,
    onfocusHandler: blurdetail,
    reset: resetdetail
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: LineOfMaintainance,
    isValid: ValidLineOfMaintainance,
    hasError: inValidLineOfMaintainance,
    valueChangeHandler: LineOfMaintainanceChangeHandler,
    onfocusHandler: blurLineOfMaintainance,
    reset: resetLineOfMaintainance
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const description = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  const intro = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)("");
  let formValidation = false;

  if (validIntro && validdetail) {
    formValidation = true;
  }

  function submitHandler(event) {
    event.preventDefault();
    let e = document.getElementById("LineOfMaintainance");
    let LineOfMaintainance = e.value;
    console.log("this is from the checkBox" + LineOfMaintainance);

    if (!formValidation) {
      return;
    }

    const choreDataObject = {
      descriptionData,
      introData,
      LineOfMaintainance // paintJob,

    }; // const choreDataObject = {
    //   descriptionData: description.current.value,
    //   introData: intro.current.value,
    // };
    // console.log(choreDataObject);

    props.onAddchoresform(choreDataObject);
    resetIntro("");
    resetdetail("");
  } // const catagoryInputClass = inValidCatagory
  //   ? "form-choice invalid"
  //   : "form-choice";


  const introInputClasses = inValidIntro ? "form-control invalid" : "form-control ";
  const detailInputClasses = inValiddetail ? "form-control invalid" : "form-control ";
  const LineOfMaintainanceClasses = inValidLineOfMaintainance ? "form-control invalid" : "form-control";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
      onSubmit: submitHandler,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "app",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "choreintro",
            children: "Introduction"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            rows: "2",
            id: "choreintro",
            placeholder: "Short explanation of the chore",
            ref: intro,
            onBlur: blurIntro,
            onChange: IntroChangeHandler,
            value: introData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, this), inValidIntro && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter an Introduction "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "descrip",
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("textarea", {
            rows: "5",
            id: "descrip",
            ref: description,
            placeholder: "A detailed explanation of the chore",
            onBlur: blurdetail,
            onChange: detailChangeHandler,
            value: descriptionData
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, this), inValiddetail && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
            className: "error-text",
            children: " Please enter the details"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().control),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("label", {
            htmlFor: "LineOfMaintainance",
            children: "Line of maintainance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("select", {
            id: "LineOfMaintainance",
            required: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "PaintJob",
              children: "PaintJob"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Body Work",
              children: "Body Work"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Motor Overhole",
              children: "Motor Overhole"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Kelodo",
              children: "Kelawdo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Car window",
              children: "Car window"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Motorcycle",
              children: "Motorcycle"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Gear box",
              children: "Gear Box"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: "Wheel repair",
              children: "Wheel repair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("option", {
              value: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().action),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
            className: (_choreregistreation_AddChore_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),
            children: "Add Chores"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Addchoresform);

/***/ }),

/***/ "./components/dataFlow/choreregistreation/choreList.js":
/*!*************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/choreList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _choreList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choreList.module.css */ "./components/dataFlow/choreregistreation/choreList.module.css");
/* harmony import */ var _choreList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_choreList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chore_Chore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chore/Chore */ "./components/chore/Chore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\dataFlow\\choreregistreation\\choreList.js";




const choreList = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
    className: (_choreList_module_css__WEBPACK_IMPORTED_MODULE_2___default().chorelist),
    children: props.chores.map(chore => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chore_Chore__WEBPACK_IMPORTED_MODULE_0__.default, {
      descriptionData: chore.descriptionData,
      introData: chore.introData // lineOfBusiness={chore.lineOfBusiness}

    }, chore.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (choreList);

/***/ }),

/***/ "./components/hooks/user-inputs.js":
/*!*****************************************!*\
  !*** ./components/hooks/user-inputs.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const UserInput = validation => {
  const {
    0: enteredValue,
    1: setEnteredValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: isTouced,
    1: setIsTouched
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const valueIsValid = validation(enteredValue);
  const hasError = !valueIsValid && isTouced;

  const valueChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const onfocusHandler = event => {
    setIsTouched(true);
  };

  const resetValue = () => {
    setEnteredValue('');
    setIsTouched(false);
  }; // Validation object


  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    onfocusHandler,
    reset: resetValue
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInput);

/***/ }),

/***/ "./components/meetups/MeetupDetails.js":
/*!*********************************************!*\
  !*** ./components/meetups/MeetupDetails.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _meetups_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meetups/MeetupDetails.module.css */ "./components/meetups/MeetupDetails.module.css");
/* harmony import */ var _meetups_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_meetups_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\meetups\\MeetupDetails.js";
// A general props page for the new meet up




function MeetupDetails(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    className: (_meetups_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: props.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("address", {
      children: props.address
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [" ", props.description]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails);

/***/ }),

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MeetupItem.module.css */ "./components/meetups/MeetupItem.module.css");
/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_meetupId_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/[meetupId]/index */ "./pages/[meetupId]/index.js");
/* harmony import */ var _MeetupDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupDetails */ "./components/meetups/MeetupDetails.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\meetups\\MeetupItem.js";
// For what will be rendered on the home page







function MeetupItem(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  function showDetails() {
    router.push("/" + props.id);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
          src: props.image,
          alt: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h1", {
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("address", {
          children: props.address
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_5___default().actions),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          onClick: showDetails,
          children: " Contact Customer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupItem);

/***/ }),

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MeetupItem */ "./components/meetups/MeetupItem.js");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupList.module.css */ "./components/meetups/MeetupList.module.css");
/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\meetups\\MeetupList.js";




function MeetupList(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
    className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_2___default().list),
    children: props.meetups.map(meetup => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_0__.default, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupList);

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\ui\\Card.js";



const Card = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("card", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./components/ui/button/Button.js":
/*!****************************************!*\
  !*** ./components/ui/button/Button.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/Button.module.css */ "./components/ui/button/Button.module.css");
/* harmony import */ var _button_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\ui\\button\\Button.js";
// import React from 'react';
// import classes from './Button.module.css'
//  const Button = (props) => {
//     return (
//         <button
//         className = {classes.button}
//         type= {props.type || 'button'}
//         onClick={props.onClick}
//         >
//             {props.children}
//         </button>
//     )
// }
// export default Button;



const Button = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: props.type,
    className: (_button_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
    onClick: props.onClick,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./components/ui/carts/Carts.js":
/*!**************************************!*\
  !*** ./components/ui/carts/Carts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Carts_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carts.module.css */ "./components/ui/carts/Carts.module.css");
/* harmony import */ var _Carts_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Carts_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\ui\\carts\\Carts.js";



const Carts = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("cart", {
    className: (_Carts_module_css__WEBPACK_IMPORTED_MODULE_1___default().Carts),
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carts);

/***/ }),

/***/ "./components/ui/pages/Pages.js":
/*!**************************************!*\
  !*** ./components/ui/pages/Pages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pages_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages.module.css */ "./components/ui/pages/Pages.module.css");
/* harmony import */ var _Pages_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Pages_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\ui\\pages\\Pages.js";



const Pages = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: `${props.className} ${(_Pages_module_css__WEBPACK_IMPORTED_MODULE_1___default().page)}`,
    children: [" ", props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pages);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/FetchingFromDB.js":
/*!*********************************!*\
  !*** ./pages/FetchingFromDB.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dataFlow_choreregistreation_choreList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/choreList */ "./components/dataFlow/choreregistreation/choreList.js");
/* harmony import */ var _components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Token/LogInAuthentication  */ "./components/Token/LogInAuthentication .js");
/* harmony import */ var _components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_Token_LogInAuthentication___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\FetchingFromDB.js";



 // import Addchoresform from '../choreregistreation/AddChoresForm';
// import '../../App.css';


 // to be swithed with one file this one is for the firebase realtime



function FetchingFromDB() {
  //   const authCtx = useContext(AuthenticationContext);
  //   const IsloggedIn = authCtx.loggedIn;
  const {
    0: chores,
    1: setchores
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: onedata,
    1: setonedata
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const fetchchoresHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    setIsLoading(true);
    setError(null);
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.getAuth)();
    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.getDatabase)(); // get the data base here and do nothing with it

    const Cref = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)(db, "Chores/ " + "005" + "/intros");
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.onValue)(Cref, snapshot => {
      const data = snapshot.val(); //   updatedetails(postElement, data);
    }); // get the data just to the console

    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.ref)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.getDatabase)());
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.get)((0,firebase_database__WEBPACK_IMPORTED_MODULE_3__.child)(dbRef, `Chores/${"005"}`)).then(snapshot => {
      if (snapshot.exists()) {
        console.log(snapshot.val() + "this shall happen"); //   setonedata(snapshot.val());

        console.log(" put this out  	");
      } else {
        console.log("No data in this valult");
      }
    }).catch(error => {
      console.log(error);
    }); // getting sorted data
    // const myUserId = auth.currentUser.uid;
    // const userPost = query(
    //   ref(db, "Chores/" + myUserId),
    //   orderByChild("paintJob")
    // );
    // console.log(userPost + "queried data " + myUserId);
    // console.log("this will put out the data from the server one by one ");

    try {
      const response = await fetch("https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app/Chores.json" // this will get data from the balemoja
      // "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json"
      );

      if (!response.ok) {
        throw new Error("Something new has gone wrong!");
      }

      const data = await response.json(); // console.log(data); //  data is here an object, Id = keys and

      const loadedChores = [];

      for (const key in data) {
        loadedChores.push({
          id: key,
          descriptionData: data[key].descriptionData,
          introData: data[key].introData //   lineOfBusiness: data[key].lineOfBusiness,
          // introData: data[key].introData

        }); // console.log(data);
      }

      setchores(loadedChores);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchchoresHandler();
  }, [fetchchoresHandler]);

  let content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
    children: "Found no chores."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 17
  }, this);

  if (chores.length > 0) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_dataFlow_choreregistreation_choreList__WEBPACK_IMPORTED_MODULE_1__.default, {
      chores: chores
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }, this);
  }

  if (error) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }, this);
  }

  if (isLoading) {
    content = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }, this);
  }

  console.log(content);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }, this), onedata, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("section", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchingFromDB);
/*


  // time to upload to the fire base db
  // async function AddchoreHandler(choreDataObject) {
  // 	const responce = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json',
  // 	{
  // 		method:'POST',
  // 		body:JSON.stringify(choreDataObject),
  // 		headers:{
  // 			'Content-Type' : 'application/json'}
  // 		}
  // 	);
  // 	const data = await responce.json();
  // 	console.log(data);
  // }
import React, { useState, useEffect, useCallback } from 'react';

import ChoresList from '../companyregistration/CompanyList';


function FetchingFromDB() {
	 const [chores, setChore ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchChoreHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json');
			if (!response.ok) {
			  throw new Error('Something went wrong!');
			}
			const data = await response.json();

			const disectedData = [];

			for(const key in data){
				disectedData.push({
					id:key,
					descriptionData:data[key].descriptionData, 
					introData:data[key].introData,
				})
			}	

			setChore(disectedData);
		} 
		catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	// useEffect(
	// 	() => {
	// 		fetchChoreHandler();
	// 	},
	// 	[ fetchChoreHandler ]
	// );


	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <ChoresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
		
			<section>
				<button onClick={fetchChoreHandler}>Fetch Chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default FetchingFromDB();




//import React, { useState, useEffect, useCallback } from 'react';

import ChoresList from './components/ChoresList'
import Addchore from './components/Addchore';
import './App.css';

function App() {
	 const [ chores, setchores ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchchoresHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {		
			const response = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json');
			if (!response.ok) {
			  throw new Error('Something new has gone wrong!');
			}

			const data = await response.json();
			// console.log(data); //  data is here an object, Id = keys and  

			const loadedChores = []; 

			for(const key in data){
				loadedChores.push({
					id:key,
					title: data[key].title, 
					openingText: data[key].openingText, 
					releaseDate: data[key].releaseDate
				})
			}

			
			setchores(loadedChores);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(
		() => {
			fetchchoresHandler();
		},
		[ fetchchoresHandler ]
	);

	// time to upload to the fire base db 
	// async function AddchoreHandler(choreData) {
	// 	const responce = await fetch('https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/names.json', 
	// 	{
	// 		method:'POST',
	// 		body:JSON.stringify(choreData),
	// 		headers:{
	// 			'Content-Type' : 'application/json'}		
	// 		}
	// 	);
	// 	const data = await responce.json();
	// 	console.log(data); 
	// }

	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <ChoresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				 <Addchore onAddchore={AddchoreHandler} /> 
			</section>
			<section>
			
				<button onClick={fetchchoresHandler}>Fetch chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}
export default App;

*/

/*
import React, { useState, useEffect, useCallback } from 'react';

import choresList from './components/choresList';
import Addchore from './components/Addchore';
import './App.css';

function App() {
	const [ chores, setchores ] = useState([]);
	 const [isLoading, setIsLoading] = useState(false);
	 const [error, setError] = useState(null);

	const fetchchoresHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch('https://swapi.dev/api/films');
			if (!response.ok) {
			  throw new Error('Something went wrong!');
			}

			const data = await response.json();

			const transformedchores = data.results.map((choreData) => {
				return {
					id: choreData.episode_id,
					title: choreData.director,
					openingText: choreData.opening_crawl,
					releaseDate: choreData.release_date
				};
			});
			setchores(transformedchores);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(
		() => {
			fetchchoresHandler();
		},
		[ fetchchoresHandler ]
	);

	function AddchoreHandler(chore) {
		console.log(chore);
	}

	let content = <p>Found no chores.</p>;

	if (chores.length > 0) {
		content = <choresList chores={chores} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
				<Addchore onAddchore={AddchoreHandler} />
			</section>
			<section>
				<button onClick={fetchchoresHandler}>Fetch chores</button>
			</section>
			<section>{content}</section>
		</React.Fragment>
	);
}

export default App;



*/

/***/ }),

/***/ "./pages/HouseCleaner.js":
/*!*******************************!*\
  !*** ./pages/HouseCleaner.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_carts_Carts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/carts/Carts.module.css */ "./components/ui/carts/Carts.module.css");
/* harmony import */ var _components_ui_carts_Carts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ui_carts_Carts_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ui/carts/Carts */ "./components/ui/carts/Carts.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\HouseCleaner.js";
//https://nextjs.org/learn/basics/navigate-between-pages/client-side





const ComponentUI = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_components_ui_carts_Carts_module_css__WEBPACK_IMPORTED_MODULE_3___default().works),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/carWorkShop.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/Mechanic",
        children: "Mechanic"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      classesName: (_components_ui_carts_Carts_module_css__WEBPACK_IMPORTED_MODULE_3___default().Carts),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/handyManIcon.jpg",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/HandyMan",
        children: "HandyMan"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/houseHelp.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/FetchingFromDB",
        children: "House Help"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/computerEngineer.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/FetchingFromDB",
        children: "IT Solution"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/artictect.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/FetchingFromDB",
        children: "Architect"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/Gardner.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/FetchingFromDB",
        children: "Gardner"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/movingTracl.png",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/UploadingChoresToDb",
        children: "Transport"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_carts_Carts__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
        src: "/paintBrushunit.jpg",
        width: 40,
        height: 40
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/UploadingChoresToDb",
        children: "Cleaning"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComponentUI);
{
  /* <li className={classes.cart}>
            {" "}
            <Link href="/UploadingChoresToDb"></Link>{" "}
          </li>
          <li className={classes.cart}>
            {" "}
  {" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li>
          <li className={classes.cart}>
            {" "}
          </li> */
}

/***/ }),

/***/ "./pages/SearchBar.js":
/*!****************************!*\
  !*** ./pages/SearchBar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/searchBar/Search.module.css */ "./components/searchBar/Search.module.css");
/* harmony import */ var _components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\SearchBar.js";



const SearchBar = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      className: (_components_searchBar_Search_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchbar),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        name: "search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

SearchBar.propTypes = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./pages/SecurityService.js":
/*!**********************************!*\
  !*** ./pages/SecurityService.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_pages_Pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ui/pages/Pages */ "./components/ui/pages/Pages.js");
/* harmony import */ var _components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/pages/pages.module.css */ "./components/ui/pages/pages.module.css");
/* harmony import */ var _components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\SecurityService.js";





const SecurityService = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_pages_Pages__WEBPACK_IMPORTED_MODULE_0__.default, {
    className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
        children: " Security Service "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "CompanyName",
          children: " Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "companyName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "CompanyName",
          children: " Occassion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "companyName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "CompanyName",
          children: " Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("textarea", {
          rows: "3",
          id: "companyName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "CompanyName",
          children: " Telephone Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "companyName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_components_ui_pages_pages_module_css__WEBPACK_IMPORTED_MODULE_3___default().pages),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "CompanyName",
          children: " Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 6
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "companyName"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        type: "submit",
        children: " Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SecurityService);

/***/ }),

/***/ "./pages/UploadingChoresToDb.js":
/*!**************************************!*\
  !*** ./pages/UploadingChoresToDb.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataFlow/choreregistreation/AddChoresForm */ "./components/dataFlow/choreregistreation/AddChoresForm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ "firebase/database");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\UploadingChoresToDb.js";


 //  import choreList from '../choreregistreation/choreList';




function UploadingChoresToDb() {
  //--------------------------------------------+
  const {
    0: write,
    1: setWrite
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();
  console.log(db + "is from the datase"); //--------------------------------------------+
  // function userDate(intros, details, lofBs) {
  //   const db = getDatabase();
  //   set(ref(db, "Chores/" + "005"), {
  //     //  so if i break this up :
  //     intros: "fresh paing large scale",
  //     details: "a new building ",
  //     LofBs: "painter",
  //   });
  // }
  // setWrite(userDate); // in my mind this will trigger the upper funciotn
  //trying the  append method

  const postList = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, "Chores" + "MmvZDWcPI6AIKi4WJ-z");
  const newPost = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.push)(postList);
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)(newPost, {
    name: "child updated? ",
    type: "appendTester"
  });
  console.log(newPost.key); //can be used to listen to the messageing app on this node
  //  first we add some data to this postId

  function userDate(intros, details, lofBs) {
    const db = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.set)((0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, "Chores/" + "MmvZDWcPI6AIKi4WJ-z"), {
      //  so if i break this up :
      intros: "fresh paing large scale",
      details: "a new building ",
      LofBs: "painter"
    });
  }

  const contactRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.ref)(db, "Chores/" + "MmvZDWcPI6AIKi4WJ-z");
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.onChildAdded)(contactRef, data => {
    addContactElement(postElement, data.key, data.val().text, data.val().author);
  });
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.onChildChanged)(contactRef, data => {
    setContactElement(postElement, data.key, data.val().text, data.val().author);
  });
  (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.onChildRemoved)(contactRef, data => {
    deletaContactElement(postElement, data.key, data.val().text, data.val().author);
  });

  async function toDbHandler(choreDataObject) {
    const responce = await fetch( // this is the api to the Firestore page  "      https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA
    // "
    // this goes to the test page of the server
    "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app/Chores.json", // this one is sendig the data to the realtiem sys
    // "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
    // "https://balmoja-49d90-default-rtdb.europe-west1.firebasedatabase.app/Chores.json",
    {
      method: "POST",
      body: JSON.stringify(choreDataObject),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!responce.ok) {
      throw new Error("Error");
    }

    const data = await responce.json();
    console.log(data); // will need to catch this error at some point
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      children: [write, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_dataFlow_choreregistreation_AddChoresForm__WEBPACK_IMPORTED_MODULE_1__.default, {
        onAddchoresform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadingChoresToDb);

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/meetups/MeetupDetails */ "./components/meetups/MeetupDetails.js");
/* harmony import */ var _pages_chatroom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/chatroom */ "./pages/chatroom.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\[meetupId]\\index.js";
// temp off for net service





 // import MeetupDetail from "../ components/meetups/MeetupDetails";



function MeetupDetails(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_meetups_MeetupDetails__WEBPACK_IMPORTED_MODULE_4__.default, {
      image: props.meetupData.image,
      title: props.meetupData.title,
      address: props.meetupData.address,
      description: props.meetupData.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_pages_chatroom__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "chatroom",
        children: "Contact the Client"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

async function getStaticPaths() {
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect("mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, {
    _id: 1
  }).toArray();
  client.close();
  return {
    fallback: false,
    //states if all the pages are predefined / 404
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  };
}
async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect("mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(meetupId)
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails); //-------------------------
// export async function getServerSideProps() {
//   console.log(process.env.FIREBASE_AUTH);
//   return {
//     props: { Hello: suri },
//   };
// }

/***/ }),

/***/ "./pages/chatroom.js":
/*!***************************!*\
  !*** ./pages/chatroom.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChatUi)
/* harmony export */ });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\chatroom.js";




const AblyChatComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/*! import() */ "components_chatroom_chatComponents_js").then(__webpack_require__.bind(__webpack_require__, /*! ../components/chatroom/chatComponents */ "./components/chatroom/chatComponents.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../components/chatroom/chatComponents */ "./components/chatroom/chatComponents.js")],
    modules: ["chatroom.js -> " + "../components/chatroom/chatComponents"]
  }
});
function ChatUi() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "jsx-1786293858" + " " + "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        className: "jsx-1786293858",
        children: "SMT Messaging Board"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico",
        className: "jsx-1786293858"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("main", {
      className: "jsx-1786293858",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
        className: "jsx-1786293858" + " " + "title",
        children: "Balemoja"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(AblyChatComponent, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "3724040138",
      children: ".container.jsx-1786293858{display:grid;grid-template-rows:1fr 100px;min-height:100vh;background-color:#eee;}main.jsx-1786293858{display:grid;grid-template-rows:auto 1fr;width:calc(100% - 40px);max-width:900px;margin:20px auto;border-radius:10px;overflow:hidden;box-shadow:0px 3px 10px 1px rgba(0,0,0,0.2);background-color:white;}.title.jsx-1786293858{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100px;margin:0;color:white;background:#005C97;background:-webkit-linear-gradient(to right,#363795,#005C97);background:linear-gradient(to right,#363795,#005C97);}footer.jsx-1786293858{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100vw;height:100px;}.logo.jsx-1786293858{display:block;height:20px;margin:0.5em;}.svg.jsx-1786293858{fill:#005C97;color:#fff;position:absolute;top:0;border:0;right:0;}.octo-arm.jsx-1786293858{-webkit-transform-origin:130px 106px;-ms-transform-origin:130px 106px;transform-origin:130px 106px;}.github-corner.jsx-1786293858:hover .octo-arm.jsx-1786293858{-webkit-animation:octocat-wave-jsx-1786293858 560ms ease-in-out;animation:octocat-wave-jsx-1786293858 560ms ease-in-out;}@-webkit-keyframes octocat-wave-jsx-1786293858{0%,100%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}20%,60%{-webkit-transform:rotate(-25deg);-ms-transform:rotate(-25deg);transform:rotate(-25deg);}40%,80%{-webkit-transform:rotate(10deg);-ms-transform:rotate(10deg);transform:rotate(10deg);}}@keyframes octocat-wave-jsx-1786293858{0%,100%{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0);}20%,60%{-webkit-transform:rotate(-25deg);-ms-transform:rotate(-25deg);transform:rotate(-25deg);}40%,80%{-webkit-transform:rotate(10deg);-ms-transform:rotate(10deg);transform:rotate(10deg);}}@media (min-width:600px){.logo.jsx-1786293858{height:40px;margin:1em;}.ably.jsx-1786293858{height:60px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE6XFxQcm9qZWN0c1xcR2l0a3Jha2VuXFxQcm9qZWN0RXRcXHBhZ2VzXFxjaGF0cm9vbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBR3dCLEFBTUEsQUFXQSxBQVdBLEFBUUMsQUFLRixBQVFpQixBQUdZLEFBSWIsQUFDSSxBQUNELEFBSWpCLEFBS0EsWUFKRCxBQUtiLENBbkU2QixBQU1ELEFBbUNsQixDQUxFLFNBMkJaLENBckJrQixFQUxMLGFBQ2YsRUEvQjBCLENBTlAsQUEwQ1gsTUFDRyxTQUNELEVBM0NjLE1BTU4sQUFzQ2xCLE9BUytCLEVBdENOLEFBV0EsT0F6QnpCLEFBTW1CLEdBZ0RlLEdBREMsV0E5Q2QsQ0F1Q3JCLGtCQXRDa0IsR0F5Q2xCLGFBeEM4Qyx3Q0FNekIsQUFXQSxJQWhCSSx1QkFDekIsa0VBS2UsQUFXRSxhQVZOLFNBQ0csWUFDTyxtQkFDNEMsSUFRbkQsWUFDQyxhQUNmLGdDQVR5RCxxREFDekQiLCJmaWxlIjoiQTpcXFByb2plY3RzXFxHaXRrcmFrZW5cXFByb2plY3RFdFxccGFnZXNcXGNoYXRyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBBYmx5Q2hhdENvbXBvbmVudCA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9jaGF0cm9vbS9jaGF0Q29tcG9uZW50c1wiKSxcclxuICB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRVaSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNNVCBNZXNzYWdpbmcgQm9hcmQ8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QmFsZW1vamE8L2gxPlxyXG4gICAgICAgIDxBYmx5Q2hhdENvbXBvbmVudCAvPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICB7LyogPGZvb3Rlcj5cclxuICAgICAgPC9mb290ZXI+ICovfVxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwMHB4O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA1Qzk3O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjM3OTUsICMwMDVDOTcpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzYzNzk1LCAjMDA1Qzk3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdmcgeyBcclxuICAgICAgICAgIGZpbGw6IzAwNUM5NzsgXHJcbiAgICAgICAgICBjb2xvcjojZmZmOyBcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICB0b3A6IDA7IFxyXG4gICAgICAgICAgYm9yZGVyOiAwOyBcclxuICAgICAgICAgIHJpZ2h0OiAwOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm9jdG8tYXJtIHtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEzMHB4IDEwNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ2l0aHViLWNvcm5lcjpob3ZlciAub2N0by1hcm0ge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBvY3RvY2F0LXdhdmUgNTYwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIEBrZXlmcmFtZXMgb2N0b2NhdC13YXZlIHtcclxuICAgICAgICAgIDAlLCAxMDAle3RyYW5zZm9ybTpyb3RhdGUoMCl9XHJcbiAgICAgICAgICAyMCUsNjAle3RyYW5zZm9ybTpyb3RhdGUoLTI1ZGVnKX1cclxuICAgICAgICAgIDQwJSw4MCV7dHJhbnNmb3JtOnJvdGF0ZSgxMGRlZyl9fVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgIC5hYmx5IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICBgfTwvc3R5bGU+XHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90byxcclxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcclxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgICBbZGF0YS1hdXRob3I9XCJtZVwiXSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICAgICAjMzYzNzk1LFxyXG4gICAgICAgICAgICAjMDA1Yzk3XHJcbiAgICAgICAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=A:\\\\Projects\\\\Gitkraken\\\\ProjectEt\\\\pages\\\\chatroom.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default()), {
      id: "2999000801",
      children: "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}[data-author=\"me\"]{background:linear-gradient( to right, #363795, #005c97 );color:white;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;border-bottom-right-radius:0 !important;border-bottom-left-radius:10px !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkE6XFxQcm9qZWN0c1xcR2l0a3Jha2VuXFxQcm9qZWN0RXRcXHBhZ2VzXFxjaGF0cm9vbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR3lCLEFBSXFCLEFBT1ksQUFPckIsVUFiUSxTQUdHLEdBSWQsbUNBT2MsWUFDUSx3RUFDb0IsWUFaMUMsNEJBYTRDLDBDQUM1QyIsImZpbGUiOiJBOlxcUHJvamVjdHNcXEdpdGtyYWtlblxcUHJvamVjdEV0XFxwYWdlc1xcY2hhdHJvb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcbmNvbnN0IEFibHlDaGF0Q29tcG9uZW50ID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL2NoYXRyb29tL2NoYXRDb21wb25lbnRzXCIpLFxyXG4gIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbiAgfVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFVpKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+U01UIE1lc3NhZ2luZyBCb2FyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5CYWxlbW9qYTwvaDE+XHJcbiAgICAgICAgPEFibHlDaGF0Q29tcG9uZW50IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgIHsvKiA8Zm9vdGVyPlxyXG4gICAgICA8L2Zvb3Rlcj4gKi99XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAwcHg7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XHJcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDVDOTc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2Mzc5NSwgIzAwNUM5Nyk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNjM3OTUsICMwMDVDOTcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN2ZyB7IFxyXG4gICAgICAgICAgZmlsbDojMDA1Qzk3OyBcclxuICAgICAgICAgIGNvbG9yOiNmZmY7IFxyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICAgIHRvcDogMDsgXHJcbiAgICAgICAgICBib3JkZXI6IDA7IFxyXG4gICAgICAgICAgcmlnaHQ6IDA7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAub2N0by1hcm0ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMTMwcHggMTA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5naXRodWItY29ybmVyOmhvdmVyIC5vY3RvLWFybSB7XHJcbiAgICAgICAgICBhbmltYXRpb246IG9jdG9jYXQtd2F2ZSA1NjBtcyBlYXNlLWluLW91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgQGtleWZyYW1lcyBvY3RvY2F0LXdhdmUge1xyXG4gICAgICAgICAgMCUsIDEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX1cclxuICAgICAgICAgIDIwJSw2MCV7dHJhbnNmb3JtOnJvdGF0ZSgtMjVkZWcpfVxyXG4gICAgICAgICAgNDAlLDgwJXt0cmFuc2Zvcm06cm90YXRlKDEwZGVnKX19XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgLmFibHkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgaHRtbCxcclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtkYXRhLWF1dGhvcj1cIm1lXCJdIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgICAgICMzNjM3OTUsXHJcbiAgICAgICAgICAgICMwMDVjOTdcclxuICAgICAgICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=A:\\\\Projects\\\\Gitkraken\\\\ProjectEt\\\\pages\\\\chatroom.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ "mongodb");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_HouseCleaner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/HouseCleaner */ "./pages/HouseCleaner.js");
/* harmony import */ var _components_RoutingPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/RoutingPage */ "./components/RoutingPage.js");
/* harmony import */ var _components_RoutingPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_RoutingPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FetchingFromDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FetchingFromDB */ "./pages/FetchingFromDB.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchBar */ "./pages/SearchBar.js");
/* harmony import */ var _SecurityService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SecurityService */ "./pages/SecurityService.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UploadingChoresToDb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UploadingChoresToDb */ "./pages/UploadingChoresToDb.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\index.js";
// Destination home page, collect data from the server and renders it on the homepage/ StartPage





 // import LoginNavigation from "../components/userAccount/components/Layout/LoginNavigation";








const StartPage = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("title", {
        children: "Balemoja"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("meta", {
        name: "description",
        content: "Connects highly skilled and reliable professionals with end users"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_pages_HouseCleaner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
}; //reserver name
//SAFE:: code written in here will only run on the server side.
//will updata the page every time there is a request.
// export async function getServerSideProps(context) {
//   const request = context.req;
//   const responce = context.res;
//   // Get the data from any where API or .....
//   // Always returns an object
//   return {
//     props: {
//       meetups: dummyData,
//     },
//   };
// }


async function getStaticProps() {
  // we are fetching the data directly from the user input form as there is no need to make a trip to the server at this point in time.
  // connect to the server
  //establish connection, get acces to db, and getting data
  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect("mongodb+srv://admin:fdxCicGrFtNJd9gA@cluster0.xdax3.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db(); // to connect to the meetups db

  const meetupcollection = db.collection("meetups"); // create a data collection called meetup on the server
  // result is an object with an id as one of its properties

  const allresult = await meetupcollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: allresult.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 100 //refreshs the page on the server every x seconds if there request are there

  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StartPage); // export default UploadingChoresToDb;
// export async function getServerSideProps() {
//   console.log(process.env.FIREBASE_AUTH);
//   return {
//     props: { Hello: suri },
//   };
// }

/***/ }),

/***/ "./components/chore/Chore.module.css":
/*!*******************************************!*\
  !*** ./components/chore/Chore.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"chore": "Chore_chore__3neFY",
	"button": "Chore_button__2RpGx",
	"focus": "Chore_focus__rVq6p"
};


/***/ }),

/***/ "./components/dataFlow/choreregistreation/AddChore.module.css":
/*!********************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/AddChore.module.css ***!
  \********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"control": "AddChore_control__2n8Lt",
	"choice": "AddChore_choice__3uwnp",
	"action": "AddChore_action__3de8a"
};


/***/ }),

/***/ "./components/dataFlow/choreregistreation/choreList.module.css":
/*!*********************************************************************!*\
  !*** ./components/dataFlow/choreregistreation/choreList.module.css ***!
  \*********************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"chorelist": "choreList_chorelist__5KyG-"
};


/***/ }),

/***/ "./components/meetups/MeetupDetails.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/MeetupDetails.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "MeetupDetails_detail__2pWQX"
};


/***/ }),

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "MeetupItem_main__1huS9",
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ "./components/meetups/MeetupList.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupList.module.css ***!
  \**************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ "./components/searchBar/Search.module.css":
/*!************************************************!*\
  !*** ./components/searchBar/Search.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"searchbar": "Search_searchbar__pvN2v",
	"h2": "Search_h2__2IiW3",
	"h3": "Search_h3__1IymW"
};


/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"Card": "Card_Card__2eggf"
};


/***/ }),

/***/ "./components/ui/button/Button.module.css":
/*!************************************************!*\
  !*** ./components/ui/button/Button.module.css ***!
  \************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__5BFCi",
	"focus": "Button_focus__2xwCX"
};


/***/ }),

/***/ "./components/ui/carts/Carts.module.css":
/*!**********************************************!*\
  !*** ./components/ui/carts/Carts.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"works": "Carts_works__21bmS",
	"Carts": "Carts_Carts__3Sztq"
};


/***/ }),

/***/ "./components/ui/pages/Pages.module.css":
/*!**********************************************!*\
  !*** ./components/ui/pages/Pages.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"pages": "Pages_pages__osGqY"
};


/***/ }),

/***/ "./components/ui/pages/pages.module.css":
/*!**********************************************!*\
  !*** ./components/ui/pages/pages.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"pages": "pages_pages__SlAGP"
};


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "ably/promises":
/*!********************************!*\
  !*** external "ably/promises" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("ably/promises");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

/***/ }),

/***/ "firebase/database":
/*!************************************!*\
  !*** external "firebase/database" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/database");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2WEE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1HLEtBQUssR0FBSUMsS0FBRCxJQUFXO0FBQ3ZCO0FBRUEsc0JBQ0U7QUFBSSxhQUFTLEVBQUVILHNFQUFmO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0csS0FBSyxDQUFDRTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUFLRixLQUFLLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQUEsZ0JBQUlILEtBQUssQ0FBQ0k7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLGVBTUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBLDZCQUNFO0FBQVEsaUJBQVMsRUFBRVAsdUVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWNELENBakJEOztBQW1CQSxpRUFBZUUsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNVLGFBQVQsQ0FBdUJULEtBQXZCLEVBQThCO0FBQzVCLFFBQU07QUFDSlUsSUFBQUEsS0FBSyxFQUFFUixTQURIO0FBRUpTLElBQUFBLE9BQU8sRUFBRUMsVUFGTDtBQUdKQyxJQUFBQSxRQUFRLEVBQUVDLFlBSE47QUFJSkMsSUFBQUEsa0JBQWtCLEVBQUVDLGtCQUpoQjtBQUtKQyxJQUFBQSxjQUFjLEVBQUVDLFNBTFo7QUFNSkMsSUFBQUEsS0FBSyxFQUFFQztBQU5ILE1BT0ZkLDJEQUFTLENBQUVJLEtBQUQsSUFBV0EsS0FBSyxDQUFDVyxJQUFOLE9BQWlCLEVBQTdCLENBUGI7QUFTQSxRQUFNO0FBQ0pYLElBQUFBLEtBQUssRUFBRVAsZUFESDtBQUVKUSxJQUFBQSxPQUFPLEVBQUVXLFdBRkw7QUFHSlQsSUFBQUEsUUFBUSxFQUFFVSxhQUhOO0FBSUpSLElBQUFBLGtCQUFrQixFQUFFUyxtQkFKaEI7QUFLSlAsSUFBQUEsY0FBYyxFQUFFUSxVQUxaO0FBTUpOLElBQUFBLEtBQUssRUFBRU87QUFOSCxNQU9GcEIsMkRBQVMsQ0FBRUksS0FBRCxJQUFXQSxLQUFLLENBQUNXLElBQU4sT0FBaUIsRUFBN0IsQ0FQYjtBQVNBLFFBQU07QUFDSlgsSUFBQUEsS0FBSyxFQUFFaUIsa0JBREg7QUFFSmhCLElBQUFBLE9BQU8sRUFBRWlCLHVCQUZMO0FBR0pmLElBQUFBLFFBQVEsRUFBRWdCLHlCQUhOO0FBSUpkLElBQUFBLGtCQUFrQixFQUFFZSwrQkFKaEI7QUFLSmIsSUFBQUEsY0FBYyxFQUFFYyxzQkFMWjtBQU1KWixJQUFBQSxLQUFLLEVBQUVhO0FBTkgsTUFPRjFCLDJEQUFTLENBQUVJLEtBQUQsSUFBV0EsS0FBSyxDQUFDVyxJQUFOLE9BQWlCLEVBQTdCLENBUGI7QUFTQSxRQUFNWSxXQUFXLEdBQUd6Qiw2Q0FBTSxDQUFDLEVBQUQsQ0FBMUI7QUFDQSxRQUFNMEIsS0FBSyxHQUFHMUIsNkNBQU0sQ0FBQyxFQUFELENBQXBCO0FBRUEsTUFBSTJCLGNBQWMsR0FBRyxLQUFyQjs7QUFDQSxNQUFJdkIsVUFBVSxJQUFJVSxXQUFsQixFQUErQjtBQUM3QmEsSUFBQUEsY0FBYyxHQUFHLElBQWpCO0FBQ0Q7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLFFBQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUFSO0FBQ0EsUUFBSWQsa0JBQWtCLEdBQUdZLENBQUMsQ0FBQzdCLEtBQTNCO0FBRUFnQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBOEJoQixrQkFBMUM7O0FBRUEsUUFBSSxDQUFDUSxjQUFMLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsVUFBTVMsZUFBZSxHQUFHO0FBQ3RCekMsTUFBQUEsZUFEc0I7QUFFdEJELE1BQUFBLFNBRnNCO0FBR3RCeUIsTUFBQUEsa0JBSHNCLENBSXRCOztBQUpzQixLQUF4QixDQVo0QixDQW1CNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTNCLElBQUFBLEtBQUssQ0FBQzZDLGVBQU4sQ0FBc0JELGVBQXRCO0FBRUF4QixJQUFBQSxVQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FNLElBQUFBLFdBQVcsQ0FBQyxFQUFELENBQVg7QUFDRCxHQWhFMkIsQ0FrRTVCO0FBQ0E7QUFDQTs7O0FBRUEsUUFBTW9CLGlCQUFpQixHQUFHaEMsWUFBWSxHQUNsQyxzQkFEa0MsR0FFbEMsZUFGSjtBQUlBLFFBQU1pQyxrQkFBa0IsR0FBR3hCLGFBQWEsR0FDcEMsc0JBRG9DLEdBRXBDLGVBRko7QUFJQSxRQUFNeUIseUJBQXlCLEdBQUduQix5QkFBeUIsR0FDdkQsc0JBRHVELEdBRXZELGNBRko7QUFJQSxzQkFDRSw4REFBQyw2Q0FBRDtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFTyxhQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFdkMsd0ZBQWhCO0FBQUEsa0NBQ0U7QUFBTyxtQkFBTyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLGdCQUFJLEVBQUMsR0FEUDtBQUVFLGNBQUUsRUFBQyxZQUZMO0FBR0UsdUJBQVcsRUFBQyxnQ0FIZDtBQUlFLGVBQUcsRUFBRXFDLEtBSlA7QUFLRSxrQkFBTSxFQUFFaEIsU0FMVjtBQU1FLG9CQUFRLEVBQUVGLGtCQU5aO0FBT0UsaUJBQUssRUFBRWQ7QUFQVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLEVBV0dZLFlBQVksaUJBQ1g7QUFBRyxxQkFBUyxFQUFDLFlBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBaUJFO0FBQUssbUJBQVMsRUFBRWpCLHdGQUFoQjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFDRSxnQkFBSSxFQUFDLEdBRFA7QUFFRSxjQUFFLEVBQUMsU0FGTDtBQUdFLGVBQUcsRUFBRW9DLFdBSFA7QUFJRSx1QkFBVyxFQUFDLHFDQUpkO0FBS0Usa0JBQU0sRUFBRVIsVUFMVjtBQU1FLG9CQUFRLEVBQUVELG1CQU5aO0FBT0UsaUJBQUssRUFBRXJCO0FBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQVdHb0IsYUFBYSxpQkFDWjtBQUFHLHFCQUFTLEVBQUMsWUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakJGLGVBaUNFO0FBQUssbUJBQVMsRUFBRTFCLHdGQUFoQjtBQUFBLGtDQUNFO0FBQU8sbUJBQU8sRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQVEsY0FBRSxFQUFDLG9CQUFYO0FBQWdDLG9CQUFRLE1BQXhDO0FBQUEsb0NBQ0U7QUFBUSxtQkFBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQVEsbUJBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0U7QUFBUSxtQkFBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsZUFJRTtBQUFRLG1CQUFLLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsZUFLRTtBQUFRLG1CQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRixlQU1FO0FBQVEsbUJBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQU5GLGVBT0U7QUFBUSxtQkFBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEYsZUFRRTtBQUFRLG1CQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRixlQVNFO0FBQVEsbUJBQUssRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRGLGVBVUU7QUFBUSxtQkFBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFWRixlQVdFO0FBQVEsbUJBQUssRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWEYsZUFZRTtBQUFRLG1CQUFLLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNGLGVBbURFO0FBQUssbUJBQVMsRUFBRUEsdUZBQWhCO0FBQUEsaUNBVUUsOERBQUMsc0RBQUQ7QUFBUSxxQkFBUyxFQUFFQSx1RkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0VEOztBQUNELGlFQUFlWSxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS0E7QUFDQTs7O0FBRUEsTUFBTTBDLFNBQVMsR0FBSW5ELEtBQUQsSUFBVztBQUMzQixzQkFDRTtBQUFJLGFBQVMsRUFBRUgsd0VBQWY7QUFBQSxjQUNHRyxLQUFLLENBQUNvRCxNQUFOLENBQWFDLEdBQWIsQ0FBa0JwRCxLQUFELGlCQUNoQiw4REFBQyxpREFBRDtBQUVFLHFCQUFlLEVBQUVBLEtBQUssQ0FBQ0UsZUFGekI7QUFHRSxlQUFTLEVBQUVGLEtBQUssQ0FBQ0MsU0FIbkIsQ0FJRTs7QUFKRixPQUNPRCxLQUFLLENBQUNxRCxFQURiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFjRCxDQWZEOztBQWdCQSxpRUFBZUgsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0FBR0EsTUFBTTdDLFNBQVMsR0FBSWtELFVBQUQsSUFBZTtBQUM3QixRQUFNO0FBQUEsT0FBQ0MsWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NILCtDQUFRLENBQUMsRUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDSSxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEyQkwsK0NBQVEsQ0FBQyxFQUFELENBQXpDO0FBRUEsUUFBTU0sWUFBWSxHQUFHTCxVQUFVLENBQUNDLFlBQUQsQ0FBL0I7QUFDQSxRQUFNNUMsUUFBUSxHQUFHLENBQUNnRCxZQUFELElBQWlCRixRQUFsQzs7QUFFQSxRQUFNNUMsa0JBQWtCLEdBQUlzQixLQUFELElBQVU7QUFDakNxQixJQUFBQSxlQUFlLENBQUNyQixLQUFLLENBQUN5QixNQUFOLENBQWFwRCxLQUFkLENBQWY7QUFDSCxHQUZEOztBQUlBLFFBQU1PLGNBQWMsR0FBR29CLEtBQUQsSUFBVztBQUM3QnVCLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxHQUZEOztBQUlBLFFBQU1HLFVBQVUsR0FBRyxNQUFNO0FBQ3JCTCxJQUFBQSxlQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FFLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxHQUhELENBZjZCLENBb0I3Qjs7O0FBQ0EsU0FBTztBQUNQbEQsSUFBQUEsS0FBSyxFQUFDK0MsWUFEQztBQUVQOUMsSUFBQUEsT0FBTyxFQUFHa0QsWUFGSDtBQUdQaEQsSUFBQUEsUUFBUSxFQUFHQSxRQUhKO0FBSVBFLElBQUFBLGtCQUpPO0FBS1BFLElBQUFBLGNBTE87QUFNUEUsSUFBQUEsS0FBSyxFQUFDNEM7QUFOQyxHQUFQO0FBU0gsQ0E5QkQ7O0FBZ0NBLGlFQUFlekQsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUVBO0FBQ0E7OztBQUVBLFNBQVMyRCxhQUFULENBQXVCakUsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ0U7QUFBUyxhQUFTLEVBQUVILGlGQUFwQjtBQUFBLDRCQUVFO0FBQUEsZ0JBQUtHLEtBQUssQ0FBQ21FO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBVW5FLEtBQUssQ0FBQ29FO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsc0JBQUtwRSxLQUFLLENBQUNpQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBQ0QsaUVBQWVnQyxhQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTTSxVQUFULENBQW9CdkUsS0FBcEIsRUFBMkI7QUFDekIsUUFBTXdFLE1BQU0sR0FBR0gsc0RBQVMsRUFBeEI7O0FBRUEsV0FBU0ksV0FBVCxHQUF1QjtBQUNyQkQsSUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVksTUFBTTFFLEtBQUssQ0FBQ3NELEVBQXhCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSSxhQUFTLEVBQUV6RCxvRUFBZjtBQUFBLDJCQUNFLDhEQUFDLDZDQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFQSxxRUFBaEI7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRUcsS0FBSyxDQUFDNEUsS0FBaEI7QUFBdUIsYUFBRyxFQUFFNUUsS0FBSyxDQUFDbUU7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQUssaUJBQVMsRUFBRXRFLHVFQUFoQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtHLEtBQUssQ0FBQ21FO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQVVuRSxLQUFLLENBQUNvRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBUUU7QUFBSyxpQkFBUyxFQUFFdkUsdUVBQWhCO0FBQUEsK0JBQ0U7QUFBUSxpQkFBTyxFQUFFNEUsV0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztBQUVELGlFQUFlRixVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7O0FBRUEsU0FBU1EsVUFBVCxDQUFvQi9FLEtBQXBCLEVBQTJCO0FBQ3pCLHNCQUNFO0FBQUksYUFBUyxFQUFFSCxvRUFBZjtBQUFBLGNBRUdHLEtBQUssQ0FBQ2lGLE9BQU4sQ0FBYzVCLEdBQWQsQ0FBbUI2QixNQUFELGlCQUNqQiw4REFBQyxnREFBRDtBQUVFLFFBQUUsRUFBRUEsTUFBTSxDQUFDNUIsRUFGYjtBQUdFLFdBQUssRUFBRTRCLE1BQU0sQ0FBQ04sS0FIaEI7QUFJRSxXQUFLLEVBQUVNLE1BQU0sQ0FBQ2YsS0FKaEI7QUFLRSxhQUFPLEVBQUVlLE1BQU0sQ0FBQ2Q7QUFMbEIsT0FDT2MsTUFBTSxDQUFDNUIsRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQ7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7QUFFRCxpRUFBZXlCLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7QUFFQSxNQUFNeEUsSUFBSSxHQUFJUCxLQUFELElBQVc7QUFDdEIsc0JBQU87QUFBTSxhQUFTLEVBQUVILDhEQUFqQjtBQUFBLGNBQWdDRyxLQUFLLENBQUNvRjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUlBLGlFQUFlN0UsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBLE1BQU1YLE1BQU0sR0FBSUksS0FBRCxJQUFXO0FBQ3hCLHNCQUNFO0FBQ0UsUUFBSSxFQUFFQSxLQUFLLENBQUNxRixJQURkO0FBRUUsYUFBUyxFQUFFeEYseUVBRmI7QUFHRSxXQUFPLEVBQUVHLEtBQUssQ0FBQ3NGLE9BSGpCO0FBQUEsY0FLR3RGLEtBQUssQ0FBQ29GO0FBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FWRDs7QUFXQSxpRUFBZXhGLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBOzs7QUFFQSxNQUFNMkYsS0FBSyxHQUFJdkYsS0FBRCxJQUFXO0FBQ3ZCLHNCQUFPO0FBQU0sYUFBUyxFQUFFSCxnRUFBakI7QUFBQSxjQUFpQ0csS0FBSyxDQUFDb0Y7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFHQSxpRUFBZUcsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7O0FBRUEsTUFBTUMsS0FBSyxHQUFJeEYsS0FBRCxJQUFXO0FBQ3hCLHNCQUFPO0FBQUssYUFBUyxFQUFHLEdBQUVBLEtBQUssQ0FBQ3lGLFNBQVUsSUFBRzVGLCtEQUFhLEVBQW5EO0FBQUEsb0JBQXdERyxLQUFLLENBQUNvRixRQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNBLENBRkQ7O0FBR0EsaUVBQWVJLEtBQWY7Ozs7Ozs7Ozs7O0FDTGE7O0FBQ2JHLDhDQUE2QztBQUN6Q2pGLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBbUYsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlFLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMseUZBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixtQkFBTyxDQUFDLDJEQUFELENBQXRCOztBQUNBLElBQUlHLGdCQUFnQixHQUFHSCxtQkFBTyxDQUFDLCtFQUFELENBQTlCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNRSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQmhDLE1BQWxCLEVBQTBCaUMsSUFBMUIsRUFBZ0NDLEVBQWhDLEVBQW9DQyxPQUFwQyxFQUE2QztBQUN6QyxNQUFJLElBQUosRUFBOEM7QUFDOUMsTUFBSSxDQUFDLENBQUMsR0FBR1QsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUFMLEVBQW9DLE9BRkssQ0FHekM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FqQyxFQUFBQSxNQUFNLENBQUNnQyxRQUFQLENBQWdCQyxJQUFoQixFQUFzQkMsRUFBdEIsRUFBMEJDLE9BQTFCLEVBQW1DRSxLQUFuQyxDQUEwQ0MsR0FBRCxJQUFPO0FBQzVDLGNBQTJDO0FBQ3ZDO0FBQ0EsWUFBTUEsR0FBTjtBQUNIO0FBQ0osR0FMRDtBQU1BLFFBQU1DLFNBQVMsR0FBR0osT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0ssTUFBZixLQUEwQixXQUFyQyxHQUFtREwsT0FBTyxDQUFDSyxNQUEzRCxHQUFvRXhDLE1BQU0sSUFBSUEsTUFBTSxDQUFDd0MsTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FULEVBQUFBLFVBQVUsQ0FBQ0UsSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkssU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUFWLEdBQW1FLElBQW5FO0FBQ0g7O0FBQ0QsU0FBU0UsZUFBVCxDQUF5QjVFLEtBQXpCLEVBQWdDO0FBQzVCLFFBQU07QUFBRXlCLElBQUFBO0FBQUYsTUFBY3pCLEtBQUssQ0FBQzZFLGFBQTFCO0FBQ0EsU0FBT3BELE1BQU0sSUFBSUEsTUFBTSxLQUFLLE9BQXJCLElBQWdDekIsS0FBSyxDQUFDOEUsT0FBdEMsSUFBaUQ5RSxLQUFLLENBQUMrRSxPQUF2RCxJQUFrRS9FLEtBQUssQ0FBQ2dGLFFBQXhFLElBQW9GaEYsS0FBSyxDQUFDaUYsTUFBMUYsSUFBb0dqRixLQUFLLENBQUNrRixXQUFOLElBQXFCbEYsS0FBSyxDQUFDa0YsV0FBTixDQUFrQkMsS0FBbEIsS0FBNEIsQ0FBNUo7QUFDSDs7QUFDRCxTQUFTQyxXQUFULENBQXFCbEYsQ0FBckIsRUFBd0JpQyxNQUF4QixFQUFnQ2lDLElBQWhDLEVBQXNDQyxFQUF0QyxFQUEwQ2dCLE9BQTFDLEVBQW1EQyxPQUFuRCxFQUE0REMsTUFBNUQsRUFBb0VaLE1BQXBFLEVBQTRFO0FBQ3hFLFFBQU07QUFBRWEsSUFBQUE7QUFBRixNQUFnQnRGLENBQUMsQ0FBQzJFLGFBQXhCOztBQUNBLE1BQUlXLFFBQVEsS0FBSyxHQUFiLEtBQXFCWixlQUFlLENBQUMxRSxDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUcyRCxPQUFKLEVBQWFVLFVBQWIsQ0FBd0JILElBQXhCLENBQTVDLENBQUosRUFBZ0Y7QUFDNUU7QUFDQTtBQUNIOztBQUNEbEUsRUFBQUEsQ0FBQyxDQUFDRCxjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUlzRixNQUFNLElBQUksSUFBVixJQUFrQmxCLEVBQUUsQ0FBQ29CLE9BQUgsQ0FBVyxHQUFYLEtBQW1CLENBQXpDLEVBQTRDO0FBQ3hDRixJQUFBQSxNQUFNLEdBQUcsS0FBVDtBQUNILEdBVnVFLENBV3hFOzs7QUFDQXBELEVBQUFBLE1BQU0sQ0FBQ2tELE9BQU8sR0FBRyxTQUFILEdBQWUsTUFBdkIsQ0FBTixDQUFxQ2pCLElBQXJDLEVBQTJDQyxFQUEzQyxFQUErQztBQUMzQ2lCLElBQUFBLE9BRDJDO0FBRTNDWCxJQUFBQSxNQUYyQztBQUczQ1ksSUFBQUE7QUFIMkMsR0FBL0M7QUFLSDs7QUFDRCxTQUFTOUgsSUFBVCxDQUFjRSxLQUFkLEVBQXFCO0FBQ2pCLFlBQTJDO0FBQ3ZDLGFBQVMrSCxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QjVCLE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU02QixhQUFhLEdBQUczQyxNQUFNLENBQUM0QyxJQUFQLENBQVlGLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUF1Qk4sR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUlsSSxLQUFLLENBQUNrSSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCLE9BQU9sSSxLQUFLLENBQUNrSSxHQUFELENBQVosS0FBc0IsUUFBdEIsSUFBa0MsT0FBT2xJLEtBQUssQ0FBQ2tJLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTUgsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVwSSxLQUFLLENBQUNrSSxHQUFELENBQUwsS0FBZSxJQUFmLEdBQXNCLE1BQXRCLEdBQStCLE9BQU9sSSxLQUFLLENBQUNrSSxHQUFEO0FBSGpDLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTztBQUNIO0FBQ0E7QUFDQSxjQUFNTyxDQUFDLEdBQUdQLEdBQVY7QUFDSDtBQUNKLEtBZEQsRUFUdUMsQ0F3QnZDOztBQUNBLFVBQU1RLGtCQUFrQixHQUFHO0FBQ3ZCaEMsTUFBQUEsRUFBRSxFQUFFLElBRG1CO0FBRXZCZ0IsTUFBQUEsT0FBTyxFQUFFLElBRmM7QUFHdkJFLE1BQUFBLE1BQU0sRUFBRSxJQUhlO0FBSXZCRCxNQUFBQSxPQUFPLEVBQUUsSUFKYztBQUt2QmdCLE1BQUFBLFFBQVEsRUFBRSxJQUxhO0FBTXZCbkMsTUFBQUEsUUFBUSxFQUFFLElBTmE7QUFPdkJRLE1BQUFBLE1BQU0sRUFBRTtBQVBlLEtBQTNCO0FBU0EsVUFBTTRCLGFBQWEsR0FBR2pELE1BQU0sQ0FBQzRDLElBQVAsQ0FBWUcsa0JBQVosQ0FBdEI7QUFDQUUsSUFBQUEsYUFBYSxDQUFDSixPQUFkLENBQXVCTixHQUFELElBQU87QUFDekIsWUFBTVcsT0FBTyxHQUFHLE9BQU83SSxLQUFLLENBQUNrSSxHQUFELENBQTVCOztBQUNBLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSWxJLEtBQUssQ0FBQ2tJLEdBQUQsQ0FBTCxJQUFjVyxPQUFPLEtBQUssUUFBMUIsSUFBc0NBLE9BQU8sS0FBSyxRQUF0RCxFQUFnRTtBQUM1RCxnQkFBTWQsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPLElBQUlYLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3pCLFlBQUlsSSxLQUFLLENBQUNrSSxHQUFELENBQUwsSUFBY1csT0FBTyxLQUFLLFFBQTlCLEVBQXdDO0FBQ3BDLGdCQUFNZCxlQUFlLENBQUM7QUFDbEJHLFlBQUFBLEdBRGtCO0FBRWxCQyxZQUFBQSxRQUFRLEVBQUUsVUFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUk0sTUFRQSxJQUFJWCxHQUFHLEtBQUssU0FBUixJQUFxQkEsR0FBRyxLQUFLLFFBQTdCLElBQXlDQSxHQUFHLEtBQUssU0FBakQsSUFBOERBLEdBQUcsS0FBSyxVQUF0RSxJQUFvRkEsR0FBRyxLQUFLLFVBQWhHLEVBQTRHO0FBQy9HLFlBQUlsSSxLQUFLLENBQUNrSSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCVyxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7QUFDN0MsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxXQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBLGNBQU1KLENBQUMsR0FBR1AsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU1ZLFNBQVMsR0FBRy9DLE1BQU0sQ0FBQ0QsT0FBUCxDQUFldEYsTUFBZixDQUFzQixLQUF0QixDQUFsQjs7QUFDQSxRQUFJUixLQUFLLENBQUN3RyxRQUFOLElBQWtCLENBQUNzQyxTQUFTLENBQUNDLE9BQWpDLEVBQTBDO0FBQ3RDRCxNQUFBQSxTQUFTLENBQUNDLE9BQVYsR0FBb0IsSUFBcEI7QUFDQXJHLE1BQUFBLE9BQU8sQ0FBQ3NHLElBQVIsQ0FBYSxzS0FBYjtBQUNIO0FBQ0o7O0FBQ0QsUUFBTUMsQ0FBQyxHQUFHakosS0FBSyxDQUFDd0csUUFBTixLQUFtQixLQUE3QjtBQUNBLFFBQU1oQyxNQUFNLEdBQUcsQ0FBQyxHQUFHMkIsUUFBSixFQUFjOUIsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRW9DLElBQUFBLElBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFpQlgsTUFBTSxDQUFDRCxPQUFQLENBQWVvRCxPQUFmLENBQXVCLE1BQUk7QUFDOUMsVUFBTSxDQUFDQyxZQUFELEVBQWVDLFVBQWYsSUFBNkIsQ0FBQyxHQUFHbEQsT0FBSixFQUFhbUQsV0FBYixDQUF5QjdFLE1BQXpCLEVBQWlDeEUsS0FBSyxDQUFDeUcsSUFBdkMsRUFBNkMsSUFBN0MsQ0FBbkM7QUFDQSxXQUFPO0FBQ0hBLE1BQUFBLElBQUksRUFBRTBDLFlBREg7QUFFSHpDLE1BQUFBLEVBQUUsRUFBRTFHLEtBQUssQ0FBQzBHLEVBQU4sR0FBVyxDQUFDLEdBQUdSLE9BQUosRUFBYW1ELFdBQWIsQ0FBeUI3RSxNQUF6QixFQUFpQ3hFLEtBQUssQ0FBQzBHLEVBQXZDLENBQVgsR0FBd0QwQyxVQUFVLElBQUlEO0FBRnZFLEtBQVA7QUFJSCxHQU5zQixFQU1wQixDQUNDM0UsTUFERCxFQUVDeEUsS0FBSyxDQUFDeUcsSUFGUCxFQUdDekcsS0FBSyxDQUFDMEcsRUFIUCxDQU5vQixDQUF2Qjs7QUFXQSxNQUFJO0FBQUV0QixJQUFBQSxRQUFGO0FBQWFzQyxJQUFBQSxPQUFiO0FBQXVCQyxJQUFBQSxPQUF2QjtBQUFpQ0MsSUFBQUEsTUFBakM7QUFBMENaLElBQUFBO0FBQTFDLE1BQXNEaEgsS0FBMUQsQ0F6RmlCLENBMEZqQjs7QUFDQSxNQUFJLE9BQU9vRixRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCQSxJQUFBQSxRQUFRLEdBQUcsYUFBY1csTUFBTSxDQUFDRCxPQUFQLENBQWV3RCxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDbEUsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJbUUsS0FBSjs7QUFDQSxZQUE0QztBQUN4QyxRQUFJO0FBQ0FBLE1BQUFBLEtBQUssR0FBR3hELE1BQU0sQ0FBQ0QsT0FBUCxDQUFlMEQsUUFBZixDQUF3QkMsSUFBeEIsQ0FBNkJyRSxRQUE3QixDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU8wQixHQUFQLEVBQVk7QUFDVixZQUFNLElBQUltQixLQUFKLENBQVcsOERBQTZEakksS0FBSyxDQUFDeUcsSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNaUQsUUFBUSxHQUFHSCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDSSxHQUE3RDtBQUNBLFFBQU0sQ0FBQ0Msa0JBQUQsRUFBcUJDLFNBQXJCLElBQWtDLENBQUMsR0FBR3pELGdCQUFKLEVBQXNCMEQsZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUdqRSxNQUFNLENBQUNELE9BQVAsQ0FBZW1FLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q04sSUFBQUEsa0JBQWtCLENBQUNNLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNRLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT1IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDWCxPQUFULEdBQW1CbUIsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NSLFFBREQsRUFFQ0Usa0JBRkQsQ0FSWSxDQUFmOztBQVlBN0QsRUFBQUEsTUFBTSxDQUFDRCxPQUFQLENBQWVxRSxTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTUMsY0FBYyxHQUFHUCxTQUFTLElBQUlaLENBQWIsSUFBa0IsQ0FBQyxHQUFHL0MsT0FBSixFQUFhVSxVQUFiLENBQXdCSCxJQUF4QixDQUF6QztBQUNBLFVBQU1NLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q3hDLE1BQU0sSUFBSUEsTUFBTSxDQUFDd0MsTUFBNUU7QUFDQSxVQUFNcUQsWUFBWSxHQUFHOUQsVUFBVSxDQUFDRSxJQUFJLEdBQUcsR0FBUCxHQUFhQyxFQUFiLElBQW1CSyxTQUFTLEdBQUcsTUFBTUEsU0FBVCxHQUFxQixFQUFqRCxDQUFELENBQS9COztBQUNBLFFBQUlxRCxjQUFjLElBQUksQ0FBQ0MsWUFBdkIsRUFBcUM7QUFDakM3RCxNQUFBQSxRQUFRLENBQUNoQyxNQUFELEVBQVNpQyxJQUFULEVBQWVDLEVBQWYsRUFBbUI7QUFDdkJNLFFBQUFBLE1BQU0sRUFBRUQ7QUFEZSxPQUFuQixDQUFSO0FBR0g7QUFDSixHQVRELEVBU0csQ0FDQ0wsRUFERCxFQUVDRCxJQUZELEVBR0NvRCxTQUhELEVBSUM3QyxNQUpELEVBS0NpQyxDQUxELEVBTUN6RSxNQU5ELENBVEg7O0FBaUJBLFFBQU04RixVQUFVLEdBQUc7QUFDZlgsSUFBQUEsR0FBRyxFQUFFSyxNQURVO0FBRWYxRSxJQUFBQSxPQUFPLEVBQUcvQyxDQUFELElBQUs7QUFDVixVQUFJZ0gsS0FBSyxDQUFDdkosS0FBTixJQUFlLE9BQU91SixLQUFLLENBQUN2SixLQUFOLENBQVlzRixPQUFuQixLQUErQixVQUFsRCxFQUE4RDtBQUMxRGlFLFFBQUFBLEtBQUssQ0FBQ3ZKLEtBQU4sQ0FBWXNGLE9BQVosQ0FBb0IvQyxDQUFwQjtBQUNIOztBQUNELFVBQUksQ0FBQ0EsQ0FBQyxDQUFDZ0ksZ0JBQVAsRUFBeUI7QUFDckI5QyxRQUFBQSxXQUFXLENBQUNsRixDQUFELEVBQUlpQyxNQUFKLEVBQVlpQyxJQUFaLEVBQWtCQyxFQUFsQixFQUFzQmdCLE9BQXRCLEVBQStCQyxPQUEvQixFQUF3Q0MsTUFBeEMsRUFBZ0RaLE1BQWhELENBQVg7QUFDSDtBQUNKO0FBVGMsR0FBbkI7O0FBV0FzRCxFQUFBQSxVQUFVLENBQUNFLFlBQVgsR0FBMkJqSSxDQUFELElBQUs7QUFDM0IsUUFBSSxDQUFDLENBQUMsR0FBRzJELE9BQUosRUFBYVUsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQzs7QUFDcEMsUUFBSThDLEtBQUssQ0FBQ3ZKLEtBQU4sSUFBZSxPQUFPdUosS0FBSyxDQUFDdkosS0FBTixDQUFZd0ssWUFBbkIsS0FBb0MsVUFBdkQsRUFBbUU7QUFDL0RqQixNQUFBQSxLQUFLLENBQUN2SixLQUFOLENBQVl3SyxZQUFaLENBQXlCakksQ0FBekI7QUFDSDs7QUFDRGlFLElBQUFBLFFBQVEsQ0FBQ2hDLE1BQUQsRUFBU2lDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2QitELE1BQUFBLFFBQVEsRUFBRTtBQURhLEtBQW5CLENBQVI7QUFHSCxHQVJELENBckppQixDQThKakI7QUFDQTs7O0FBQ0EsTUFBSXpLLEtBQUssQ0FBQzJJLFFBQU4sSUFBa0JZLEtBQUssQ0FBQ2xFLElBQU4sS0FBZSxHQUFmLElBQXNCLEVBQUUsVUFBVWtFLEtBQUssQ0FBQ3ZKLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU0rRyxTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUN4QyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3dDLE1BQTVFLENBRGtFLENBRWxFO0FBQ0E7O0FBQ0EsVUFBTTBELFlBQVksR0FBR2xHLE1BQU0sSUFBSUEsTUFBTSxDQUFDbUcsY0FBakIsSUFBbUMsQ0FBQyxHQUFHekUsT0FBSixFQUFhMEUsZUFBYixDQUE2QmxFLEVBQTdCLEVBQWlDSyxTQUFqQyxFQUE0Q3ZDLE1BQU0sSUFBSUEsTUFBTSxDQUFDcUcsT0FBN0QsRUFBc0VyRyxNQUFNLElBQUlBLE1BQU0sQ0FBQ3NHLGFBQXZGLENBQXhEO0FBQ0FSLElBQUFBLFVBQVUsQ0FBQzdELElBQVgsR0FBa0JpRSxZQUFZLElBQUksQ0FBQyxHQUFHeEUsT0FBSixFQUFhNkUsV0FBYixDQUF5QixDQUFDLEdBQUc3RSxPQUFKLEVBQWE4RSxTQUFiLENBQXVCdEUsRUFBdkIsRUFBMkJLLFNBQTNCLEVBQXNDdkMsTUFBTSxJQUFJQSxNQUFNLENBQUN5RyxhQUF2RCxDQUF6QixDQUFsQztBQUNIOztBQUNELFNBQU8sYUFBY2xGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlb0YsWUFBZixDQUE0QjNCLEtBQTVCLEVBQW1DZSxVQUFuQyxDQUFyQjtBQUNIOztBQUNELElBQUlhLFFBQVEsR0FBR3JMLElBQWY7QUFDQStGLGVBQUEsR0FBa0JzRixRQUFsQjs7Ozs7Ozs7Ozs7QUNqT2E7O0FBQ2J4Riw4Q0FBNkM7QUFDekNqRixFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW1GLCtCQUFBLEdBQWtDdUYsdUJBQWxDO0FBQ0F2RixrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVN1Rix1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQXZGLGtDQUFBLEdBQXFDd0YsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYjFGLDhDQUE2QztBQUN6Q2pGLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBbUYsMkJBQUEsR0FBOEJBLDBCQUFBLEdBQTZCLEtBQUssQ0FBaEU7O0FBQ0EsTUFBTWdHLG1CQUFtQixHQUFHLE9BQU9FLElBQVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ0YsbUJBQXBDLElBQTJERSxJQUFJLENBQUNGLG1CQUFMLENBQXlCRyxJQUF6QixDQUE4QkMsTUFBOUIsQ0FBM0QsSUFBb0csVUFBU0MsRUFBVCxFQUFhO0FBQ3pJLE1BQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxTQUFPQyxVQUFVLENBQUMsWUFBVztBQUN6QkosSUFBQUEsRUFBRSxDQUFDO0FBQ0NLLE1BQUFBLFVBQVUsRUFBRSxLQURiO0FBRUNDLE1BQUFBLGFBQWEsRUFBRSxZQUFXO0FBQ3RCLGVBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTixJQUFJLENBQUNDLEdBQUwsS0FBYUYsS0FBbkIsQ0FBWixDQUFQO0FBQ0g7QUFKRixLQUFELENBQUY7QUFNSCxHQVBnQixFQU9kLENBUGMsQ0FBakI7QUFRSCxDQVZEOztBQVdBdEcsMkJBQUEsR0FBOEJnRyxtQkFBOUI7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRCxrQkFBcEMsSUFBMERDLElBQUksQ0FBQ0Qsa0JBQUwsQ0FBd0JFLElBQXhCLENBQTZCQyxNQUE3QixDQUExRCxJQUFrRyxVQUFTM0ksRUFBVCxFQUFhO0FBQ3RJLFNBQU9xSixZQUFZLENBQUNySixFQUFELENBQW5CO0FBQ0gsQ0FGRDs7QUFHQXVDLDBCQUFBLEdBQTZCaUcsa0JBQTdCOzs7Ozs7Ozs7OztBQ3BCYTs7QUFDYm5HLDhDQUE2QztBQUN6Q2pGLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBbUYsc0JBQUEsR0FBeUIrRyxjQUF6QjtBQUNBL0csb0JBQUEsR0FBdUJnSCxZQUF2QjtBQUNBaEgsOEJBQUEsR0FBaUNpSCxzQkFBakM7QUFDQWpILHlCQUFBLEdBQTRCa0gsaUJBQTVCOztBQUNBLElBQUlDLHNCQUFzQixHQUFHaEgsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0hBQUQsQ0FBUixDQUFuRDs7QUFDQSxJQUFJZ0gsb0JBQW9CLEdBQUdoSCxtQkFBTyxDQUFDLHlGQUFELENBQWxDOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSCxFQUNEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFNNkcsaUJBQWlCLEdBQUcsSUFBMUI7O0FBQ0EsU0FBU0MsVUFBVCxDQUFvQmpGLEdBQXBCLEVBQXlCN0UsR0FBekIsRUFBOEIrSixTQUE5QixFQUF5QztBQUNyQyxNQUFJQyxLQUFLLEdBQUdoSyxHQUFHLENBQUNpSyxHQUFKLENBQVFwRixHQUFSLENBQVo7O0FBQ0EsTUFBSW1GLEtBQUosRUFBVztBQUNQLFFBQUksWUFBWUEsS0FBaEIsRUFBdUI7QUFDbkIsYUFBT0EsS0FBSyxDQUFDRSxNQUFiO0FBQ0g7O0FBQ0QsV0FBT0MsT0FBTyxDQUFDQyxPQUFSLENBQWdCSixLQUFoQixDQUFQO0FBQ0g7O0FBQ0QsTUFBSUssUUFBSjtBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJSCxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNoQ0MsSUFBQUEsUUFBUSxHQUFHRCxPQUFYO0FBQ0gsR0FGWSxDQUFiO0FBR0FwSyxFQUFBQSxHQUFHLENBQUN1SyxHQUFKLENBQVExRixHQUFSLEVBQWFtRixLQUFLLEdBQUc7QUFDakJJLElBQUFBLE9BQU8sRUFBRUMsUUFEUTtBQUVqQkgsSUFBQUEsTUFBTSxFQUFFSTtBQUZTLEdBQXJCO0FBSUEsU0FBT1AsU0FBUyxHQUFHQSxTQUFTLEdBQUdTLElBQVosQ0FBa0JuTixLQUFELEtBQVVnTixRQUFRLENBQUNoTixLQUFELENBQVIsRUFBaUJBLEtBQTNCLENBQWpCLENBQUgsR0FDWmlOLElBREo7QUFFSDs7QUFDRCxTQUFTRyxXQUFULENBQXFCQyxJQUFyQixFQUEyQjtBQUN2QixNQUFJO0FBQ0FBLElBQUFBLElBQUksR0FBR3ZMLFFBQVEsQ0FBQzhHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUDtBQUNBLFdBQU87QUFDUDtBQUNDLE9BQUMsQ0FBQzJDLE1BQU0sQ0FBQytCLG9CQUFULElBQWlDLENBQUMsQ0FBQ3hMLFFBQVEsQ0FBQ3lMLFlBQTdDLElBQThERixJQUFJLENBQUNHLE9BQUwsQ0FBYUMsUUFBYixDQUFzQixVQUF0QjtBQUY5RDtBQUdILEdBTEQsQ0FLRSxPQUFPNUwsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxNQUFNNkwsV0FBVyxHQUFHTixXQUFXLEVBQS9COztBQUNBLFNBQVNPLGNBQVQsQ0FBd0I1SCxJQUF4QixFQUE4QkMsRUFBOUIsRUFBa0NxSCxJQUFsQyxFQUF3QztBQUNwQyxTQUFPLElBQUlQLE9BQUosQ0FBWSxDQUFDYyxHQUFELEVBQU1DLEdBQU4sS0FBWTtBQUMzQixRQUFJL0wsUUFBUSxDQUFDZ00sYUFBVCxDQUF3QiwrQkFBOEIvSCxJQUFLLElBQTNELENBQUosRUFBcUU7QUFDakUsYUFBTzZILEdBQUcsRUFBVjtBQUNIOztBQUNEUCxJQUFBQSxJQUFJLEdBQUd2TCxRQUFRLENBQUM4RyxhQUFULENBQXVCLE1BQXZCLENBQVAsQ0FKMkIsQ0FLM0I7O0FBQ0EsUUFBSTVDLEVBQUosRUFBUXFILElBQUksQ0FBQ3JILEVBQUwsR0FBVUEsRUFBVjtBQUNScUgsSUFBQUEsSUFBSSxDQUFDVSxHQUFMLEdBQVksVUFBWjtBQUNBVixJQUFBQSxJQUFJLENBQUNXLFdBQUwsR0FBbUJqRCxTQUFuQjtBQUNBc0MsSUFBQUEsSUFBSSxDQUFDYSxNQUFMLEdBQWNOLEdBQWQ7QUFDQVAsSUFBQUEsSUFBSSxDQUFDYyxPQUFMLEdBQWVOLEdBQWYsQ0FWMkIsQ0FXM0I7O0FBQ0FSLElBQUFBLElBQUksQ0FBQ3RILElBQUwsR0FBWUEsSUFBWjtBQUNBakUsSUFBQUEsUUFBUSxDQUFDc00sSUFBVCxDQUFjQyxXQUFkLENBQTBCaEIsSUFBMUI7QUFDSCxHQWRNLENBQVA7QUFlSDs7QUFDRCxNQUFNaUIsZ0JBQWdCLEdBQUdDLE1BQU0sQ0FBQyxrQkFBRCxDQUEvQjs7QUFDQSxTQUFTckMsY0FBVCxDQUF3QjlGLEdBQXhCLEVBQTZCO0FBQ3pCLFNBQU9uQixNQUFNLENBQUNDLGNBQVAsQ0FBc0JrQixHQUF0QixFQUEyQmtJLGdCQUEzQixFQUE2QyxFQUE3QyxDQUFQO0FBRUg7O0FBQ0QsU0FBU25DLFlBQVQsQ0FBc0IvRixHQUF0QixFQUEyQjtBQUN2QixTQUFPQSxHQUFHLElBQUlrSSxnQkFBZ0IsSUFBSWxJLEdBQWxDO0FBQ0g7O0FBQ0QsU0FBU29JLFlBQVQsQ0FBc0JDLEdBQXRCLEVBQTJCQyxNQUEzQixFQUFtQztBQUMvQixTQUFPLElBQUk1QixPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVNEIsTUFBVixLQUFtQjtBQUNsQ0QsSUFBQUEsTUFBTSxHQUFHNU0sUUFBUSxDQUFDOEcsYUFBVCxDQUF1QixRQUF2QixDQUFULENBRGtDLENBRWxDO0FBQ0E7QUFDQTs7QUFDQThGLElBQUFBLE1BQU0sQ0FBQ1IsTUFBUCxHQUFnQm5CLE9BQWhCOztBQUNBMkIsSUFBQUEsTUFBTSxDQUFDUCxPQUFQLEdBQWlCLE1BQUlRLE1BQU0sQ0FBQ3pDLGNBQWMsQ0FBQyxJQUFJM0UsS0FBSixDQUFXLDBCQUF5QmtILEdBQUksRUFBeEMsQ0FBRCxDQUFmLENBQTNCLENBTmtDLENBUWxDO0FBQ0E7OztBQUNBQyxJQUFBQSxNQUFNLENBQUNWLFdBQVAsR0FBcUJqRCxTQUFyQixDQVZrQyxDQVdsQztBQUNBOztBQUNBMkQsSUFBQUEsTUFBTSxDQUFDRCxHQUFQLEdBQWFBLEdBQWI7QUFDQTNNLElBQUFBLFFBQVEsQ0FBQzhNLElBQVQsQ0FBY1AsV0FBZCxDQUEwQkssTUFBMUI7QUFDSCxHQWZNLENBQVA7QUFnQkgsRUFDRDtBQUNBOzs7QUFDQSxJQUFJRyxlQUFKLEVBQ0E7O0FBQ0EsU0FBU0MseUJBQVQsQ0FBbUN2RyxDQUFuQyxFQUFzQ3dHLEVBQXRDLEVBQTBDM0ksR0FBMUMsRUFBK0M7QUFDM0MsU0FBTyxJQUFJMEcsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTRCLE1BQVYsS0FBbUI7QUFDbEMsUUFBSUssU0FBUyxHQUFHLEtBQWhCO0FBQ0F6RyxJQUFBQSxDQUFDLENBQUM0RSxJQUFGLENBQVE4QixDQUFELElBQUs7QUFDUjtBQUNBRCxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNBakMsTUFBQUEsT0FBTyxDQUFDa0MsQ0FBRCxDQUFQO0FBQ0gsS0FKRCxFQUlHOUksS0FKSCxDQUlTd0ksTUFKVCxFQUZrQyxDQU9sQztBQUNBOztBQUNBLGNBQTRDO0FBQ3hDLE9BQUNFLGVBQWUsSUFBSS9CLE9BQU8sQ0FBQ0MsT0FBUixFQUFwQixFQUF1Q0ksSUFBdkMsQ0FBNEMsTUFBSTtBQUM1QyxTQUFDLEdBQUdaLG9CQUFKLEVBQTBCcEIsbUJBQTFCLENBQThDLE1BQUlTLFVBQVUsQ0FBQyxNQUFJO0FBQ3pELGNBQUksQ0FBQ29ELFNBQUwsRUFBZ0I7QUFDWkwsWUFBQUEsTUFBTSxDQUFDdkksR0FBRCxDQUFOO0FBQ0g7QUFDSixTQUp1RCxFQUlyRDJJLEVBSnFELENBQTVEO0FBTUgsT0FQRDtBQVFIOztBQUNELGVBQTRDLEVBTzNDO0FBQ0osR0EzQk0sQ0FBUDtBQTRCSDs7QUFDRCxTQUFTM0Msc0JBQVQsR0FBa0M7QUFDOUIsTUFBSWYsSUFBSSxDQUFDNkQsZ0JBQVQsRUFBMkI7QUFDdkIsV0FBT3BDLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjFCLElBQUksQ0FBQzZELGdCQUFyQixDQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsZUFBZSxHQUFHLElBQUlyQyxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUMzQztBQUNBLFVBQU12QixFQUFFLEdBQUdILElBQUksQ0FBQytELG1CQUFoQjs7QUFDQS9ELElBQUFBLElBQUksQ0FBQytELG1CQUFMLEdBQTJCLE1BQUk7QUFDM0JyQyxNQUFBQSxPQUFPLENBQUMxQixJQUFJLENBQUM2RCxnQkFBTixDQUFQO0FBQ0ExRCxNQUFBQSxFQUFFLElBQUlBLEVBQUUsRUFBUjtBQUNILEtBSEQ7QUFJSCxHQVB1QixDQUF4QjtBQVFBLFNBQU9zRCx5QkFBeUIsQ0FBQ0ssZUFBRCxFQUFrQjNDLGlCQUFsQixFQUFxQ04sY0FBYyxDQUFDLElBQUkzRSxLQUFKLENBQVUsc0NBQVYsQ0FBRCxDQUFuRCxDQUFoQztBQUNIOztBQUNELFNBQVM4SCxnQkFBVCxDQUEwQkMsV0FBMUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQzFDLFlBQTRDO0FBQ3hDLFdBQU96QyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0I7QUFDbkJ5QyxNQUFBQSxPQUFPLEVBQUUsQ0FDTEYsV0FBVyxHQUFHLDRCQUFkLEdBQTZDRyxTQUFTLENBQUMsQ0FBQyxHQUFHbkQsc0JBQUosRUFBNEJsSCxPQUE1QixDQUFvQ21LLEtBQXBDLEVBQTJDLEtBQTNDLENBQUQsQ0FEakQsQ0FEVTtBQUluQjtBQUNBRyxNQUFBQSxHQUFHLEVBQUU7QUFMYyxLQUFoQixDQUFQO0FBT0g7O0FBQ0QsU0FBT3RELHNCQUFzQixHQUFHZSxJQUF6QixDQUErQndDLFFBQUQsSUFBWTtBQUM3QyxRQUFJLEVBQUVKLEtBQUssSUFBSUksUUFBWCxDQUFKLEVBQTBCO0FBQ3RCLFlBQU16RCxjQUFjLENBQUMsSUFBSTNFLEtBQUosQ0FBVywyQkFBMEJnSSxLQUFNLEVBQTNDLENBQUQsQ0FBcEI7QUFDSDs7QUFDRCxVQUFNSyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0osS0FBRCxDQUFSLENBQWdCNU0sR0FBaEIsQ0FBcUJnSyxLQUFELElBQVMyQyxXQUFXLEdBQUcsU0FBZCxHQUEwQkcsU0FBUyxDQUFDOUMsS0FBRCxDQUFoRSxDQUFqQjtBQUVBLFdBQU87QUFDSDZDLE1BQUFBLE9BQU8sRUFBRUksUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQ2pGLFFBQUYsQ0FBVyxLQUFYLENBQXJCLENBRE47QUFHSDZFLE1BQUFBLEdBQUcsRUFBRUUsUUFBUSxDQUFDQyxNQUFULENBQWlCQyxDQUFELElBQUtBLENBQUMsQ0FBQ2pGLFFBQUYsQ0FBVyxNQUFYLENBQXJCO0FBSEYsS0FBUDtBQU1ILEdBWk0sQ0FBUDtBQWFIOztBQUNELFNBQVN3QixpQkFBVCxDQUEyQmlELFdBQTNCLEVBQXdDO0FBQ3BDLFFBQU1TLFdBQVcsR0FBRyxJQUFJQyxHQUFKLEVBQXBCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHLElBQUlELEdBQUosRUFBdEI7QUFDQSxRQUFNRSxXQUFXLEdBQUcsSUFBSUYsR0FBSixFQUFwQjtBQUNBLFFBQU1HLE1BQU0sR0FBRyxJQUFJSCxHQUFKLEVBQWY7O0FBQ0EsV0FBU0ksa0JBQVQsQ0FBNEIzQixHQUE1QixFQUFpQztBQUM3QixRQUFJeEIsSUFBSSxHQUFHZ0QsYUFBYSxDQUFDckQsR0FBZCxDQUFrQjZCLEdBQWxCLENBQVg7O0FBQ0EsUUFBSXhCLElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSCxLQUo0QixDQUs3Qjs7O0FBQ0EsUUFBSW5MLFFBQVEsQ0FBQ2dNLGFBQVQsQ0FBd0IsZ0JBQWVXLEdBQUksSUFBM0MsQ0FBSixFQUFxRDtBQUNqRCxhQUFPM0IsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDSDs7QUFDRGtELElBQUFBLGFBQWEsQ0FBQy9DLEdBQWQsQ0FBa0J1QixHQUFsQixFQUF1QnhCLElBQUksR0FBR3VCLFlBQVksQ0FBQ0MsR0FBRCxDQUExQztBQUNBLFdBQU94QixJQUFQO0FBQ0g7O0FBQ0QsV0FBU29ELGVBQVQsQ0FBeUJ0SyxJQUF6QixFQUErQjtBQUMzQixRQUFJa0gsSUFBSSxHQUFHaUQsV0FBVyxDQUFDdEQsR0FBWixDQUFnQjdHLElBQWhCLENBQVg7O0FBQ0EsUUFBSWtILElBQUosRUFBVTtBQUNOLGFBQU9BLElBQVA7QUFDSDs7QUFDRGlELElBQUFBLFdBQVcsQ0FBQ2hELEdBQVosQ0FBZ0JuSCxJQUFoQixFQUFzQmtILElBQUksR0FBR3FELEtBQUssQ0FBQ3ZLLElBQUQsQ0FBTCxDQUFZb0gsSUFBWixDQUFrQlMsR0FBRCxJQUFPO0FBQ2pELFVBQUksQ0FBQ0EsR0FBRyxDQUFDMkMsRUFBVCxFQUFhO0FBQ1QsY0FBTSxJQUFJaEosS0FBSixDQUFXLDhCQUE2QnhCLElBQUssRUFBN0MsQ0FBTjtBQUNIOztBQUNELGFBQU82SCxHQUFHLENBQUM0QyxJQUFKLEdBQVdyRCxJQUFYLENBQWlCcUQsSUFBRCxLQUFTO0FBQ3hCekssUUFBQUEsSUFBSSxFQUFFQSxJQURrQjtBQUV4QjVCLFFBQUFBLE9BQU8sRUFBRXFNO0FBRmUsT0FBVCxDQUFoQixDQUFQO0FBS0gsS0FUNEIsRUFTMUJySyxLQVQwQixDQVNuQkMsR0FBRCxJQUFPO0FBQ1osWUFBTThGLGNBQWMsQ0FBQzlGLEdBQUQsQ0FBcEI7QUFDSCxLQVg0QixDQUE3QjtBQVlBLFdBQU82RyxJQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNId0QsSUFBQUEsY0FBYyxDQUFFbEIsS0FBRixFQUFTO0FBQ25CLGFBQU85QyxVQUFVLENBQUM4QyxLQUFELEVBQVFRLFdBQVIsQ0FBakI7QUFDSCxLQUhFOztBQUlIVyxJQUFBQSxZQUFZLENBQUVuQixLQUFGLEVBQVNvQixPQUFULEVBQWtCO0FBQzFCN0QsTUFBQUEsT0FBTyxDQUFDQyxPQUFSLENBQWdCNEQsT0FBaEIsRUFBeUJ4RCxJQUF6QixDQUErQnlELEVBQUQsSUFBTUEsRUFBRSxFQUF0QyxFQUNFekQsSUFERixDQUNRaEksT0FBRCxLQUFZO0FBQ1gwTCxRQUFBQSxTQUFTLEVBQUUxTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsT0FBbkIsSUFBOEJELE9BRDlCO0FBRVhBLFFBQUFBLE9BQU8sRUFBRUE7QUFGRSxPQUFaLENBRFAsRUFLR2lCLEdBQUQsS0FBUTtBQUNGMEssUUFBQUEsS0FBSyxFQUFFMUs7QUFETCxPQUFSLENBTEYsRUFRRStHLElBUkYsQ0FRUTRELEtBQUQsSUFBUztBQUNaLGNBQU1DLEdBQUcsR0FBR2pCLFdBQVcsQ0FBQ25ELEdBQVosQ0FBZ0IyQyxLQUFoQixDQUFaO0FBQ0FRLFFBQUFBLFdBQVcsQ0FBQzdDLEdBQVosQ0FBZ0JxQyxLQUFoQixFQUF1QndCLEtBQXZCO0FBQ0EsWUFBSUMsR0FBRyxJQUFJLGFBQWFBLEdBQXhCLEVBQTZCQSxHQUFHLENBQUNqRSxPQUFKLENBQVlnRSxLQUFaO0FBQ2hDLE9BWkQ7QUFhSCxLQWxCRTs7QUFtQkhFLElBQUFBLFNBQVMsQ0FBRTFCLEtBQUYsRUFBU3pKLFFBQVQsRUFBbUI7QUFDeEIsYUFBTzJHLFVBQVUsQ0FBQzhDLEtBQUQsRUFBUVksTUFBUixFQUFnQixNQUFJO0FBQ2pDLGNBQU1lLGlCQUFpQixHQUFHN0IsZ0JBQWdCLENBQUNDLFdBQUQsRUFBY0MsS0FBZCxDQUFoQixDQUFxQ3BDLElBQXJDLENBQTBDLENBQUM7QUFBRXFDLFVBQUFBLE9BQUY7QUFBWUUsVUFBQUE7QUFBWixTQUFELEtBQXNCO0FBQ3RGLGlCQUFPNUMsT0FBTyxDQUFDcUUsR0FBUixDQUFZLENBQ2ZwQixXQUFXLENBQUNxQixHQUFaLENBQWdCN0IsS0FBaEIsSUFBeUIsRUFBekIsR0FBOEJ6QyxPQUFPLENBQUNxRSxHQUFSLENBQVkzQixPQUFPLENBQUM3TSxHQUFSLENBQVl5TixrQkFBWixDQUFaLENBRGYsRUFFZnRELE9BQU8sQ0FBQ3FFLEdBQVIsQ0FBWXpCLEdBQUcsQ0FBQy9NLEdBQUosQ0FBUTBOLGVBQVIsQ0FBWixDQUZlLENBQVosQ0FBUDtBQUlILFNBTHlCLEVBS3ZCbEQsSUFMdUIsQ0FLakJTLEdBQUQsSUFBTztBQUNYLGlCQUFPLEtBQUs2QyxjQUFMLENBQW9CbEIsS0FBcEIsRUFBMkJwQyxJQUEzQixDQUFpQ2tFLFVBQUQsS0FBZTtBQUM5Q0EsWUFBQUEsVUFEOEM7QUFFOUNDLFlBQUFBLE1BQU0sRUFBRTFELEdBQUcsQ0FBQyxDQUFEO0FBRm1DLFdBQWYsQ0FBaEMsQ0FBUDtBQUtILFNBWHlCLENBQTFCOztBQVlBLGtCQUE0QztBQUN4Q2lCLFVBQUFBLGVBQWUsR0FBRyxJQUFJL0IsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDckMsZ0JBQUltRSxpQkFBSixFQUF1QjtBQUNuQixxQkFBT0EsaUJBQWlCLENBQUNLLE9BQWxCLENBQTBCLE1BQUk7QUFDakN4RSxnQkFBQUEsT0FBTztBQUNWLGVBRk0sQ0FBUDtBQUdIO0FBQ0osV0FOaUIsQ0FBbEI7QUFPSDs7QUFDRCxlQUFPK0IseUJBQXlCLENBQUNvQyxpQkFBRCxFQUFvQjFFLGlCQUFwQixFQUF1Q04sY0FBYyxDQUFDLElBQUkzRSxLQUFKLENBQVcsbUNBQWtDZ0ksS0FBTSxFQUFuRCxDQUFELENBQXJELENBQXpCLENBQXVJcEMsSUFBdkksQ0FBNEksQ0FBQztBQUFFa0UsVUFBQUEsVUFBRjtBQUFlQyxVQUFBQTtBQUFmLFNBQUQsS0FBNEI7QUFDM0ssZ0JBQU0xRCxHQUFHLEdBQUczSSxNQUFNLENBQUN1TSxNQUFQLENBQWM7QUFDdEJGLFlBQUFBLE1BQU0sRUFBRUE7QUFEYyxXQUFkLEVBRVRELFVBRlMsQ0FBWjtBQUdBLGlCQUFPLFdBQVdBLFVBQVgsR0FBd0JBLFVBQXhCLEdBQXFDekQsR0FBNUM7QUFDSCxTQUxNLEVBS0p6SCxLQUxJLENBS0dDLEdBQUQsSUFBTztBQUNaLGNBQUlOLFFBQUosRUFBYztBQUNWO0FBQ0Esa0JBQU1NLEdBQU47QUFDSDs7QUFDRCxpQkFBTztBQUNIMEssWUFBQUEsS0FBSyxFQUFFMUs7QUFESixXQUFQO0FBR0gsU0FiTSxDQUFQO0FBY0gsT0FwQ2dCLENBQWpCO0FBcUNILEtBekRFOztBQTBESE4sSUFBQUEsUUFBUSxDQUFFeUosS0FBRixFQUFTO0FBQ2I7QUFDQTtBQUNBLFVBQUlrQyxFQUFKOztBQUNBLFVBQUlBLEVBQUUsR0FBR0MsU0FBUyxDQUFDQyxVQUFuQixFQUErQjtBQUMzQjtBQUNBLFlBQUlGLEVBQUUsQ0FBQ0csUUFBSCxJQUFlLEtBQUsxRyxJQUFMLENBQVV1RyxFQUFFLENBQUNJLGFBQWIsQ0FBbkIsRUFBZ0QsT0FBTy9FLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ25EOztBQUNELGFBQU9zQyxnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjQyxLQUFkLENBQWhCLENBQXFDcEMsSUFBckMsQ0FBMkMyRSxNQUFELElBQVVoRixPQUFPLENBQUNxRSxHQUFSLENBQVl6RCxXQUFXLEdBQUdvRSxNQUFNLENBQUN0QyxPQUFQLENBQWU3TSxHQUFmLENBQW9CK0wsTUFBRCxJQUFVZixjQUFjLENBQUNlLE1BQUQsRUFBUyxRQUFULENBQTNDLENBQUgsR0FDMUUsRUFEbUQsQ0FBcEQsRUFFTHZCLElBRkssQ0FFQSxNQUFJO0FBQ1AsU0FBQyxHQUFHWixvQkFBSixFQUEwQnBCLG1CQUExQixDQUE4QyxNQUFJLEtBQUs4RixTQUFMLENBQWUxQixLQUFmLEVBQXNCLElBQXRCLEVBQTRCcEosS0FBNUIsQ0FBa0MsTUFBSSxDQUNuRixDQUQ2QyxDQUFsRDtBQUdILE9BTk0sRUFNSkEsS0FOSSxFQU1FO0FBQ1QsWUFBSSxDQUNILENBUk0sQ0FBUDtBQVNIOztBQTNFRSxHQUFQO0FBNkVIOzs7Ozs7Ozs7OztBQ3RSWTs7QUFDYmxCLDhDQUE2QztBQUN6Q2pGLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBaUYsMENBQXlDO0FBQ3JDOE0sRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDbkYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPcEgsT0FBTyxDQUFDSixPQUFmO0FBQ0g7QUFKb0MsQ0FBekM7QUFNQUgsOENBQTZDO0FBQ3pDOE0sRUFBQUEsVUFBVSxFQUFFLElBRDZCO0FBRXpDbkYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPb0YsV0FBVyxDQUFDNU0sT0FBbkI7QUFDSDtBQUp3QyxDQUE3QztBQU1BRCxpQkFBQSxHQUFvQnhCLFNBQXBCO0FBQ0F3QixvQkFBQSxHQUF1QjhNLFlBQXZCO0FBQ0E5TSxnQ0FBQSxHQUFtQytNLHdCQUFuQztBQUNBL00sZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlFLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHlGQUFELENBQVIsQ0FBcEM7O0FBQ0EsSUFBSTRNLGNBQWMsR0FBRzVNLG1CQUFPLENBQUMsa0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSXlNLFdBQVcsR0FBRzFNLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHFFQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU15TSxlQUFlLEdBQUc7QUFDcEJ0TyxFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQnVPLEVBQUFBLGNBQWMsRUFBRSxFQUZJOztBQUdwQkMsRUFBQUEsS0FBSyxDQUFFOUcsRUFBRixFQUFNO0FBQ1AsUUFBSSxLQUFLMUgsTUFBVCxFQUFpQixPQUFPMEgsRUFBRSxFQUFUOztBQUNqQixlQUFtQyxFQUVsQztBQUNKOztBQVJtQixDQUF4QixFQVVBOztBQUNBLE1BQU0rRyxpQkFBaUIsR0FBRyxDQUN0QixVQURzQixFQUV0QixPQUZzQixFQUd0QixPQUhzQixFQUl0QixRQUpzQixFQUt0QixZQUxzQixFQU10QixZQU5zQixFQU90QixVQVBzQixFQVF0QixRQVJzQixFQVN0QixTQVRzQixFQVV0QixlQVZzQixFQVd0QixTQVhzQixFQVl0QixXQVpzQixFQWF0QixnQkFic0IsRUFjdEIsZUFkc0IsQ0FBMUI7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLENBQ2pCLGtCQURpQixFQUVqQixxQkFGaUIsRUFHakIscUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixpQkFMaUIsRUFNakIsb0JBTmlCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDckIsTUFEcUIsRUFFckIsU0FGcUIsRUFHckIsUUFIcUIsRUFJckIsTUFKcUIsRUFLckIsVUFMcUIsRUFNckIsZ0JBTnFCLENBQXpCLEVBUUE7O0FBQ0F4TixNQUFNLENBQUNDLGNBQVAsQ0FBc0JrTixlQUF0QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3Q3hGLEVBQUFBLEdBQUcsR0FBSTtBQUNILFdBQU9wSCxPQUFPLENBQUNKLE9BQVIsQ0FBZ0JzTixNQUF2QjtBQUNIOztBQUg0QyxDQUFqRDtBQUtBSCxpQkFBaUIsQ0FBQ3pLLE9BQWxCLENBQTJCNkssS0FBRCxJQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0ExTixFQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JrTixlQUF0QixFQUF1Q08sS0FBdkMsRUFBOEM7QUFDMUMvRixJQUFBQSxHQUFHLEdBQUk7QUFDSCxZQUFNOUksTUFBTSxHQUFHOE8sU0FBUyxFQUF4QjtBQUNBLGFBQU85TyxNQUFNLENBQUM2TyxLQUFELENBQWI7QUFDSDs7QUFKeUMsR0FBOUM7QUFNSCxDQVhEO0FBWUFGLGdCQUFnQixDQUFDM0ssT0FBakIsQ0FBMEI2SyxLQUFELElBQVM7QUFDOUJQLEVBQUFBLGVBQWUsQ0FBQ08sS0FBRCxDQUFmLEdBQXlCLENBQUMsR0FBR3JMLElBQUosS0FBVztBQUNoQyxVQUFNeEQsTUFBTSxHQUFHOE8sU0FBUyxFQUF4QjtBQUNBLFdBQU85TyxNQUFNLENBQUM2TyxLQUFELENBQU4sQ0FBYyxHQUFHckwsSUFBakIsQ0FBUDtBQUNILEdBSEQ7QUFJSCxDQUxEO0FBTUFrTCxZQUFZLENBQUMxSyxPQUFiLENBQXNCbkcsS0FBRCxJQUFTO0FBQzFCeVEsRUFBQUEsZUFBZSxDQUFDRSxLQUFoQixDQUFzQixNQUFJO0FBQ3RCOU0sSUFBQUEsT0FBTyxDQUFDSixPQUFSLENBQWdCc04sTUFBaEIsQ0FBdUJHLEVBQXZCLENBQTBCbFIsS0FBMUIsRUFBaUMsQ0FBQyxHQUFHMkYsSUFBSixLQUFXO0FBQ3hDLFlBQU13TCxVQUFVLEdBQUksS0FBSW5SLEtBQUssQ0FBQ29SLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFclIsS0FBSyxDQUFDc1IsU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUEzRTtBQUNBLFlBQU1DLGdCQUFnQixHQUFHZCxlQUF6Qjs7QUFDQSxVQUFJYyxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztBQUM5QixZQUFJO0FBQ0FJLFVBQUFBLGdCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUd4TCxJQUFoQztBQUNILFNBRkQsQ0FFRSxPQUFPbEIsR0FBUCxFQUFZO0FBQ1ZwRSxVQUFBQSxPQUFPLENBQUM4TyxLQUFSLENBQWUsd0NBQXVDZ0MsVUFBVyxFQUFqRTtBQUNBOVEsVUFBQUEsT0FBTyxDQUFDOE8sS0FBUixDQUFlLEdBQUUxSyxHQUFHLENBQUMrTSxPQUFRLEtBQUkvTSxHQUFHLENBQUNnTixLQUFNLEVBQTNDO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSCxHQWJEO0FBY0gsQ0FmRDs7QUFnQkEsU0FBU1IsU0FBVCxHQUFxQjtBQUNqQixNQUFJLENBQUNSLGVBQWUsQ0FBQ3RPLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQU1xUCxPQUFPLEdBQUcsZ0NBQWdDLHFFQUFoRDtBQUNBLFVBQU0sSUFBSTVMLEtBQUosQ0FBVTRMLE9BQVYsQ0FBTjtBQUNIOztBQUNELFNBQU9mLGVBQWUsQ0FBQ3RPLE1BQXZCO0FBQ0g7O0FBQ0QsSUFBSTJHLFFBQVEsR0FBRzJILGVBQWY7QUFDQWpOLGVBQUEsR0FBa0JzRixRQUFsQjs7QUFDQSxTQUFTOUcsU0FBVCxHQUFxQjtBQUNqQixTQUFPMEIsTUFBTSxDQUFDRCxPQUFQLENBQWVpTyxVQUFmLENBQTBCbEIsY0FBYyxDQUFDbUIsYUFBekMsQ0FBUDtBQUNIOztBQUNELFNBQVNyQixZQUFULENBQXNCLEdBQUczSyxJQUF6QixFQUErQjtBQUMzQjhLLEVBQUFBLGVBQWUsQ0FBQ3RPLE1BQWhCLEdBQXlCLElBQUkwQixPQUFPLENBQUNKLE9BQVosQ0FBb0IsR0FBR2tDLElBQXZCLENBQXpCO0FBQ0E4SyxFQUFBQSxlQUFlLENBQUNDLGNBQWhCLENBQStCdkssT0FBL0IsQ0FBd0MwRCxFQUFELElBQU1BLEVBQUUsRUFBL0M7QUFFQTRHLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsRUFBakM7QUFDQSxTQUFPRCxlQUFlLENBQUN0TyxNQUF2QjtBQUNIOztBQUNELFNBQVNvTyx3QkFBVCxDQUFrQ3BPLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU0yQixRQUFRLEdBQUczQixNQUFqQjtBQUNBLFFBQU15UCxRQUFRLEdBQUcsRUFBakI7O0FBRUEsT0FBSyxNQUFNQyxRQUFYLElBQXVCakIsaUJBQXZCLEVBQXlDO0FBQ3JDLFFBQUksT0FBTzlNLFFBQVEsQ0FBQytOLFFBQUQsQ0FBZixLQUE4QixRQUFsQyxFQUE0QztBQUN4Q0QsTUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUJ2TyxNQUFNLENBQUN1TSxNQUFQLENBQWNpQyxLQUFLLENBQUNDLE9BQU4sQ0FBY2pPLFFBQVEsQ0FBQytOLFFBQUQsQ0FBdEIsSUFBb0MsRUFBcEMsR0FBeUMsRUFBdkQsRUFDbEIvTixRQUFRLENBQUMrTixRQUFELENBRFUsQ0FBckIsQ0FDdUI7QUFEdkI7QUFHQTtBQUNIOztBQUNERCxJQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUixHQUFxQi9OLFFBQVEsQ0FBQytOLFFBQUQsQ0FBN0I7QUFDSCxHQVpxQyxDQWF0Qzs7O0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ2IsTUFBVCxHQUFrQmxOLE9BQU8sQ0FBQ0osT0FBUixDQUFnQnNOLE1BQWxDO0FBQ0FELEVBQUFBLGdCQUFnQixDQUFDM0ssT0FBakIsQ0FBMEI2SyxLQUFELElBQVM7QUFDOUJZLElBQUFBLFFBQVEsQ0FBQ1osS0FBRCxDQUFSLEdBQWtCLENBQUMsR0FBR3JMLElBQUosS0FBVztBQUN6QixhQUFPN0IsUUFBUSxDQUFDa04sS0FBRCxDQUFSLENBQWdCLEdBQUdyTCxJQUFuQixDQUFQO0FBQ0gsS0FGRDtBQUdILEdBSkQ7QUFLQSxTQUFPaU0sUUFBUDtBQUNIOzs7Ozs7Ozs7OztBQ3hKWTs7QUFDYnRPLDhDQUE2QztBQUN6Q2pGLEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBbUYsdUJBQUEsR0FBMEJpRSxlQUExQjs7QUFDQSxJQUFJL0QsTUFBTSxHQUFHRSxtQkFBTyxDQUFDLG9CQUFELENBQXBCOztBQUNBLElBQUlnSCxvQkFBb0IsR0FBR2hILG1CQUFPLENBQUMseUZBQUQsQ0FBbEM7O0FBQ0EsTUFBTW9PLHVCQUF1QixHQUFHLE9BQU9DLG9CQUFQLEtBQWdDLFdBQWhFOztBQUNBLFNBQVN4SyxlQUFULENBQXlCO0FBQUVDLEVBQUFBLFVBQUY7QUFBZXdLLEVBQUFBO0FBQWYsQ0FBekIsRUFBcUQ7QUFDakQsUUFBTUMsVUFBVSxHQUFHRCxRQUFRLElBQUksQ0FBQ0YsdUJBQWhDO0FBQ0EsUUFBTUksU0FBUyxHQUFHLENBQUMsR0FBRzFPLE1BQUosRUFBWXZGLE1BQVosRUFBbEI7QUFDQSxRQUFNLENBQUNrVSxPQUFELEVBQVVDLFVBQVYsSUFBd0IsQ0FBQyxHQUFHNU8sTUFBSixFQUFZeEMsUUFBWixDQUFxQixLQUFyQixDQUE5QjtBQUNBLFFBQU15RyxNQUFNLEdBQUcsQ0FBQyxHQUFHakUsTUFBSixFQUFZa0UsV0FBWixDQUF5QkMsRUFBRCxJQUFNO0FBQ3pDLFFBQUl1SyxTQUFTLENBQUMxTCxPQUFkLEVBQXVCO0FBQ25CMEwsTUFBQUEsU0FBUyxDQUFDMUwsT0FBVjtBQUNBMEwsTUFBQUEsU0FBUyxDQUFDMUwsT0FBVixHQUFvQjZMLFNBQXBCO0FBQ0g7O0FBQ0QsUUFBSUosVUFBVSxJQUFJRSxPQUFsQixFQUEyQjs7QUFDM0IsUUFBSXhLLEVBQUUsSUFBSUEsRUFBRSxDQUFDMkssT0FBYixFQUFzQjtBQUNsQkosTUFBQUEsU0FBUyxDQUFDMUwsT0FBVixHQUFvQitMLE9BQU8sQ0FBQzVLLEVBQUQsRUFBTUwsU0FBRCxJQUFhQSxTQUFTLElBQUk4SyxVQUFVLENBQUM5SyxTQUFELENBQXpDLEVBQ3pCO0FBQ0VFLFFBQUFBO0FBREYsT0FEeUIsQ0FBM0I7QUFJSDtBQUNKLEdBWmMsRUFZWixDQUNDeUssVUFERCxFQUVDekssVUFGRCxFQUdDMkssT0FIRCxDQVpZLENBQWY7QUFpQkEsR0FBQyxHQUFHM08sTUFBSixFQUFZb0UsU0FBWixDQUFzQixNQUFJO0FBQ3RCLFFBQUksQ0FBQ2tLLHVCQUFMLEVBQThCO0FBQzFCLFVBQUksQ0FBQ0ssT0FBTCxFQUFjO0FBQ1YsY0FBTUssWUFBWSxHQUFHLENBQUMsR0FBRzlILG9CQUFKLEVBQTBCcEIsbUJBQTFCLENBQThDLE1BQUk4SSxVQUFVLENBQUMsSUFBRCxDQUE1RCxDQUFyQjtBQUVBLGVBQU8sTUFBSSxDQUFDLEdBQUcxSCxvQkFBSixFQUEwQm5CLGtCQUExQixDQUE2Q2lKLFlBQTdDLENBQVg7QUFFSDtBQUNKO0FBQ0osR0FURCxFQVNHLENBQ0NMLE9BREQsQ0FUSDtBQVlBLFNBQU8sQ0FDSDFLLE1BREcsRUFFSDBLLE9BRkcsQ0FBUDtBQUlIOztBQUNELFNBQVNJLE9BQVQsQ0FBaUJFLE9BQWpCLEVBQTBCQyxRQUExQixFQUFvQ3RPLE9BQXBDLEVBQTZDO0FBQ3pDLFFBQU07QUFBRXJELElBQUFBLEVBQUY7QUFBTzRSLElBQUFBLFFBQVA7QUFBa0JDLElBQUFBO0FBQWxCLE1BQWdDQyxjQUFjLENBQUN6TyxPQUFELENBQXBEO0FBQ0F3TyxFQUFBQSxRQUFRLENBQUN2SCxHQUFULENBQWFvSCxPQUFiLEVBQXNCQyxRQUF0QjtBQUNBQyxFQUFBQSxRQUFRLENBQUNKLE9BQVQsQ0FBaUJFLE9BQWpCO0FBQ0EsU0FBTyxTQUFTUCxTQUFULEdBQXFCO0FBQ3hCVSxJQUFBQSxRQUFRLENBQUNFLE1BQVQsQ0FBZ0JMLE9BQWhCO0FBQ0FFLElBQUFBLFFBQVEsQ0FBQ1QsU0FBVCxDQUFtQk8sT0FBbkIsRUFGd0IsQ0FHeEI7O0FBQ0EsUUFBSUcsUUFBUSxDQUFDRyxJQUFULEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCSixNQUFBQSxRQUFRLENBQUNLLFVBQVQ7QUFDQUMsTUFBQUEsU0FBUyxDQUFDSCxNQUFWLENBQWlCL1IsRUFBakI7QUFDSDtBQUNKLEdBUkQ7QUFTSDs7QUFDRCxNQUFNa1MsU0FBUyxHQUFHLElBQUk5RSxHQUFKLEVBQWxCOztBQUNBLFNBQVMwRSxjQUFULENBQXdCek8sT0FBeEIsRUFBaUM7QUFDN0IsUUFBTXJELEVBQUUsR0FBR3FELE9BQU8sQ0FBQ29ELFVBQVIsSUFBc0IsRUFBakM7QUFDQSxNQUFJa0ssUUFBUSxHQUFHdUIsU0FBUyxDQUFDbEksR0FBVixDQUFjaEssRUFBZCxDQUFmOztBQUNBLE1BQUkyUSxRQUFKLEVBQWM7QUFDVixXQUFPQSxRQUFQO0FBQ0g7O0FBQ0QsUUFBTWtCLFFBQVEsR0FBRyxJQUFJekUsR0FBSixFQUFqQjtBQUNBLFFBQU13RSxRQUFRLEdBQUcsSUFBSVosb0JBQUosQ0FBMEJtQixPQUFELElBQVc7QUFDakRBLElBQUFBLE9BQU8sQ0FBQ2pOLE9BQVIsQ0FBaUI2RSxLQUFELElBQVM7QUFDckIsWUFBTTRILFFBQVEsR0FBR0UsUUFBUSxDQUFDN0gsR0FBVCxDQUFhRCxLQUFLLENBQUN2SixNQUFuQixDQUFqQjtBQUNBLFlBQU0rRixTQUFTLEdBQUd3RCxLQUFLLENBQUNxSSxjQUFOLElBQXdCckksS0FBSyxDQUFDc0ksaUJBQU4sR0FBMEIsQ0FBcEU7O0FBQ0EsVUFBSVYsUUFBUSxJQUFJcEwsU0FBaEIsRUFBMkI7QUFDdkJvTCxRQUFBQSxRQUFRLENBQUNwTCxTQUFELENBQVI7QUFDSDtBQUNKLEtBTkQ7QUFPSCxHQVJnQixFQVFkbEQsT0FSYyxDQUFqQjtBQVNBNk8sRUFBQUEsU0FBUyxDQUFDNUgsR0FBVixDQUFjdEssRUFBZCxFQUFrQjJRLFFBQVEsR0FBRztBQUN6QjNRLElBQUFBLEVBRHlCO0FBRXpCNFIsSUFBQUEsUUFGeUI7QUFHekJDLElBQUFBO0FBSHlCLEdBQTdCO0FBS0EsU0FBT2xCLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNuRlk7O0FBQ2J0Tyw4Q0FBNkM7QUFDekNqRixFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW1GLGVBQUEsR0FBa0IrUCxVQUFsQjs7QUFDQSxJQUFJN1AsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQywyREFBRCxDQUFyQjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsU0FBU3VQLFVBQVQsQ0FBb0JDLGlCQUFwQixFQUF1QztBQUNuQyxXQUFTQyxpQkFBVCxDQUEyQjlWLEtBQTNCLEVBQWtDO0FBQzlCLFdBQU8sYUFBYytGLE1BQU0sQ0FBQ0QsT0FBUCxDQUFld0QsYUFBZixDQUE2QnVNLGlCQUE3QixFQUFnRGxRLE1BQU0sQ0FBQ3VNLE1BQVAsQ0FBYztBQUMvRTFOLE1BQUFBLE1BQU0sRUFBRSxDQUFDLEdBQUcwQixPQUFKLEVBQWE3QixTQUFiO0FBRHVFLEtBQWQsRUFFbEVyRSxLQUZrRSxDQUFoRCxDQUFyQjtBQUdIOztBQUNEOFYsRUFBQUEsaUJBQWlCLENBQUNDLGVBQWxCLEdBQW9DRixpQkFBaUIsQ0FBQ0UsZUFBdEQ7QUFDQUQsRUFBQUEsaUJBQWlCLENBQUNFLG1CQUFsQixHQUF3Q0gsaUJBQWlCLENBQUNHLG1CQUExRDs7QUFDQSxZQUEyQztBQUN2QyxVQUFNQyxJQUFJLEdBQUdKLGlCQUFpQixDQUFDSyxXQUFsQixJQUFpQ0wsaUJBQWlCLENBQUNJLElBQW5ELElBQTJELFNBQXhFO0FBQ0FILElBQUFBLGlCQUFpQixDQUFDSSxXQUFsQixHQUFpQyxjQUFhRCxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBT0gsaUJBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN6Qlk7Ozs7Ozs7O0FBQ2JuUSw4Q0FBNkM7QUFDekNqRixFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW1GLGFBQUEsR0FBZ0JzUSxLQUFoQjtBQUNBdFEsZUFBQSxHQUFrQnVRLE9BQWxCOztBQUNBLElBQUlyUSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSW9RLFNBQVMsR0FBR3JRLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhCQUFELENBQVIsQ0FBdEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU1pUSxZQUFZLE9BQWxCOztBQUNBLFNBQVNILEtBQVQsQ0FBZUksbUJBQWYsRUFBb0NDLGVBQXBDLEVBQXFEO0FBQ2pEO0FBQ0EsU0FBT0EsZUFBZSxDQUFDQyxPQUF2QjtBQUNBLFNBQU9ELGVBQWUsQ0FBQ0UsT0FBdkIsQ0FIaUQsQ0FJakQ7O0FBQ0EsTUFBSSxDQUFDSixZQUFMLEVBQW1CO0FBQ2YsV0FBT0MsbUJBQW1CLENBQUNDLGVBQUQsQ0FBMUI7QUFDSDs7QUFDRCxRQUFNRyxPQUFPLEdBQUdILGVBQWUsQ0FBQ0ksT0FBaEMsQ0FSaUQsQ0FTakQ7O0FBQ0EsU0FBTyxNQUFJLGFBQWM3USxNQUFNLENBQUNELE9BQVAsQ0FBZXdELGFBQWYsQ0FBNkJxTixPQUE3QixFQUFzQztBQUN2RG5GLElBQUFBLEtBQUssRUFBRSxJQURnRDtBQUV2RHFGLElBQUFBLFNBQVMsRUFBRSxJQUY0QztBQUd2REMsSUFBQUEsU0FBUyxFQUFFLEtBSDRDO0FBSXZEQyxJQUFBQSxRQUFRLEVBQUU7QUFKNkMsR0FBdEMsQ0FBekI7QUFPSDs7QUFDRCxTQUFTWCxPQUFULENBQWlCWSxjQUFqQixFQUFpQ3JRLE9BQWpDLEVBQTBDO0FBQ3RDLE1BQUlzUSxVQUFVLEdBQUdaLFNBQVMsQ0FBQ3ZRLE9BQTNCO0FBQ0EsTUFBSTBRLGVBQWUsR0FBRztBQUNsQjtBQUNBSSxJQUFBQSxPQUFPLEVBQUUsQ0FBQztBQUFFcEYsTUFBQUEsS0FBRjtBQUFVcUYsTUFBQUEsU0FBVjtBQUFzQkMsTUFBQUE7QUFBdEIsS0FBRCxLQUFzQztBQUMzQyxVQUFJLENBQUNBLFNBQUwsRUFBZ0IsT0FBTyxJQUFQOztBQUNoQixnQkFBNEM7QUFDeEMsWUFBSUQsU0FBSixFQUFlO0FBQ1gsaUJBQU8sSUFBUDtBQUNIOztBQUNELFlBQUlyRixLQUFKLEVBQVc7QUFDUCxpQkFBTyxhQUFjekwsTUFBTSxDQUFDRCxPQUFQLENBQWV3RCxhQUFmLENBQTZCLEdBQTdCLEVBQWtDLElBQWxDLEVBQXdDa0ksS0FBSyxDQUFDcUMsT0FBOUMsRUFBdUQsYUFBYzlOLE1BQU0sQ0FBQ0QsT0FBUCxDQUFld0QsYUFBZixDQUE2QixJQUE3QixFQUFtQyxJQUFuQyxDQUFyRSxFQUErR2tJLEtBQUssQ0FBQ3NDLEtBQXJILENBQXJCO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLElBQVA7QUFDSDtBQWJpQixHQUF0QixDQUZzQyxDQWlCdEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBSWtELGNBQWMsWUFBWXhKLE9BQTlCLEVBQXVDO0FBQ25DZ0osSUFBQUEsZUFBZSxDQUFDVSxNQUFoQixHQUF5QixNQUFJRixjQUE3QixDQURtQyxDQUd2Qzs7QUFDQyxHQUpELE1BSU8sSUFBSSxPQUFPQSxjQUFQLEtBQTBCLFVBQTlCLEVBQTBDO0FBQzdDUixJQUFBQSxlQUFlLENBQUNVLE1BQWhCLEdBQXlCRixjQUF6QixDQUQ2QyxDQUVqRDtBQUNDLEdBSE0sTUFHQSxJQUFJLE9BQU9BLGNBQVAsS0FBMEIsUUFBOUIsRUFBd0M7QUFDM0NSLElBQUFBLGVBQWUsbUNBQ1JBLGVBRFEsR0FFUlEsY0FGUSxDQUFmO0FBSUgsR0FqQ3FDLENBa0N0Qzs7O0FBQ0FSLEVBQUFBLGVBQWUsbUNBQ1JBLGVBRFEsR0FFUjdQLE9BRlEsQ0FBZjtBQUlBLFFBQU13USxlQUFlLEdBQUdYLGVBQXhCOztBQUNBLE1BQUksSUFBSixFQUE2QztBQUN6QztBQUNBLFFBQUksU0FBa0NXLGVBQWUsQ0FBQ0csUUFBdEQsRUFBZ0U7QUFDNUQ7QUFDQSxZQUFNLElBQUlyUCxLQUFKLENBQVcscUhBQVgsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsTUFBSWtQLGVBQWUsQ0FBQ0csUUFBcEIsRUFBOEI7QUFDMUIsV0FBT0wsVUFBVSxDQUFDRSxlQUFELENBQWpCO0FBQ0gsR0FqRHFDLENBa0R0Qzs7O0FBQ0EsTUFBSVgsZUFBZSxDQUFDZSxpQkFBcEIsRUFBdUM7QUFDbkNmLElBQUFBLGVBQWUsbUNBQ1JBLGVBRFEsR0FFUkEsZUFBZSxDQUFDZSxpQkFGUixDQUFmO0FBSUEsV0FBT2YsZUFBZSxDQUFDZSxpQkFBdkI7QUFDSCxHQXpEcUMsQ0EwRHRDOzs7QUFDQSxNQUFJLE9BQU9mLGVBQWUsQ0FBQ2dCLEdBQXZCLEtBQStCLFNBQW5DLEVBQThDO0FBQzFDLFFBQUksQ0FBQ2hCLGVBQWUsQ0FBQ2dCLEdBQXJCLEVBQTBCO0FBQ3RCLGFBQU9oQixlQUFlLENBQUNnQixHQUF2QjtBQUNBLGFBQU9yQixLQUFLLENBQUNjLFVBQUQsRUFBYVQsZUFBYixDQUFaO0FBQ0g7O0FBQ0QsV0FBT0EsZUFBZSxDQUFDZ0IsR0FBdkI7QUFDSDs7QUFDRCxTQUFPUCxVQUFVLENBQUNULGVBQUQsQ0FBakI7QUFDSDs7Ozs7Ozs7Ozs7QUNuR1k7O0FBQ2I3USw4Q0FBNkM7QUFDekNqRixFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQW1GLHVCQUFBLEdBQTBCK0UsZUFBMUI7QUFDQS9FLGlCQUFBLEdBQW9CbUYsU0FBcEI7QUFDQW5GLGlCQUFBLEdBQW9CNFIsU0FBcEI7QUFDQTVSLG1CQUFBLEdBQXNCNlIsV0FBdEI7QUFDQTdSLG1CQUFBLEdBQXNCa0YsV0FBdEI7QUFDQWxGLG1CQUFBLEdBQXNCOFIsV0FBdEI7QUFDQTlSLGtCQUFBLEdBQXFCZSxVQUFyQjtBQUNBZixxQkFBQSxHQUF3QitSLGFBQXhCO0FBQ0EvUixtQkFBQSxHQUFzQndELFdBQXRCO0FBQ0F4RCxlQUFBLEdBQWtCLEtBQUssQ0FBdkI7O0FBQ0EsSUFBSWdTLHVCQUF1QixHQUFHNVIsbUJBQU8sQ0FBQyw2R0FBRCxDQUFyQzs7QUFDQSxJQUFJNlIsWUFBWSxHQUFHN1IsbUJBQU8sQ0FBQyxxRkFBRCxDQUExQjs7QUFDQSxJQUFJOFIsb0JBQW9CLEdBQUc5UixtQkFBTyxDQUFDLG9GQUFELENBQWxDOztBQUNBLElBQUkrUixvQkFBb0IsR0FBRy9SLG1CQUFPLENBQUMsb0VBQUQsQ0FBbEM7O0FBQ0EsSUFBSWdTLEtBQUssR0FBR2pTLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdCQUFELENBQVIsQ0FBbEM7O0FBQ0EsSUFBSWlTLE1BQU0sR0FBR2pTLG1CQUFPLENBQUMscUNBQUQsQ0FBcEI7O0FBQ0EsSUFBSWtTLFVBQVUsR0FBR2xTLG1CQUFPLENBQUMsOENBQUQsQ0FBeEI7O0FBQ0EsSUFBSW1TLGlCQUFpQixHQUFHblMsbUJBQU8sQ0FBQyw4REFBRCxDQUEvQjs7QUFDQSxJQUFJb1MsWUFBWSxHQUFHcFMsbUJBQU8sQ0FBQyxnREFBRCxDQUExQjs7QUFDQSxJQUFJcVMsZ0JBQWdCLEdBQUd0UyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFSLENBQTdDOztBQUNBLElBQUlzUyxhQUFhLEdBQUd0UyxtQkFBTyxDQUFDLG9EQUFELENBQTNCOztBQUNBLElBQUl1UyxXQUFXLEdBQUd2UyxtQkFBTyxDQUFDLGdEQUFELENBQXpCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxJQUFJb1Msa0JBQUo7O0FBQ0EsSUFBSWhOLEtBQUosRUFBcUMsRUFFcEM7O0FBQ0QsTUFBTWtOLFFBQVEsR0FBR2xOLE1BQUEsSUFBc0MsRUFBdkQ7O0FBQ0EsU0FBU29OLHNCQUFULEdBQWtDO0FBQzlCLFNBQU9sVCxNQUFNLENBQUN1TSxNQUFQLENBQWMsSUFBSWpLLEtBQUosQ0FBVSxpQkFBVixDQUFkLEVBQTRDO0FBQy9DeUgsSUFBQUEsU0FBUyxFQUFFO0FBRG9DLEdBQTVDLENBQVA7QUFHSDs7QUFDRCxTQUFTb0osYUFBVCxDQUF1QnhOLElBQXZCLEVBQTZCeU4sTUFBN0IsRUFBcUM7QUFDakMsU0FBT0EsTUFBTSxJQUFJek4sSUFBSSxDQUFDME4sVUFBTCxDQUFnQixHQUFoQixDQUFWLEdBQWlDMU4sSUFBSSxLQUFLLEdBQVQsR0FBZSxDQUFDLEdBQUd1TSx1QkFBSixFQUE2QnhNLDBCQUE3QixDQUF3RDBOLE1BQXhELENBQWYsR0FBa0YsR0FBRUEsTUFBTyxHQUFFRSxlQUFlLENBQUMzTixJQUFELENBQWYsS0FBMEIsR0FBMUIsR0FBZ0NBLElBQUksQ0FBQ3FJLFNBQUwsQ0FBZSxDQUFmLENBQWhDLEdBQW9EckksSUFBSyxFQUF2TCxHQUEyTEEsSUFBbE07QUFDSDs7QUFDRCxTQUFTVixlQUFULENBQXlCVSxJQUF6QixFQUErQnRFLE1BQS9CLEVBQXVDNkQsT0FBdkMsRUFBZ0RDLGFBQWhELEVBQStEO0FBQzNELE1BQUlXLEtBQUosRUFBcUMsRUFBckMsTUFPTztBQUNILFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBU1QsU0FBVCxDQUFtQk0sSUFBbkIsRUFBeUJ0RSxNQUF6QixFQUFpQ2lFLGFBQWpDLEVBQWdEO0FBQzVDLE1BQUlRLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVNtTSxTQUFULENBQW1Cbk0sSUFBbkIsRUFBeUJ0RSxNQUF6QixFQUFpQztBQUM3QixNQUFJeUUsS0FBSixFQUFxQyxFQUtwQzs7QUFDRCxTQUFPSCxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzJOLGVBQVQsQ0FBeUIzTixJQUF6QixFQUErQjtBQUMzQixRQUFNdU8sVUFBVSxHQUFHdk8sSUFBSSxDQUFDeEQsT0FBTCxDQUFhLEdBQWIsQ0FBbkI7QUFDQSxRQUFNZ1MsU0FBUyxHQUFHeE8sSUFBSSxDQUFDeEQsT0FBTCxDQUFhLEdBQWIsQ0FBbEI7O0FBQ0EsTUFBSStSLFVBQVUsR0FBRyxDQUFDLENBQWQsSUFBbUJDLFNBQVMsR0FBRyxDQUFDLENBQXBDLEVBQXVDO0FBQ25DeE8sSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNxSSxTQUFMLENBQWUsQ0FBZixFQUFrQmtHLFVBQVUsR0FBRyxDQUFDLENBQWQsR0FBa0JBLFVBQWxCLEdBQStCQyxTQUFqRCxDQUFQO0FBQ0g7O0FBQ0QsU0FBT3hPLElBQVA7QUFDSDs7QUFDRCxTQUFTb00sV0FBVCxDQUFxQnBNLElBQXJCLEVBQTJCO0FBQ3ZCQSxFQUFBQSxJQUFJLEdBQUcyTixlQUFlLENBQUMzTixJQUFELENBQXRCO0FBQ0EsU0FBT0EsSUFBSSxLQUFLcU4sUUFBVCxJQUFxQnJOLElBQUksQ0FBQzBOLFVBQUwsQ0FBZ0JMLFFBQVEsR0FBRyxHQUEzQixDQUE1QjtBQUNIOztBQUNELFNBQVM1TixXQUFULENBQXFCTyxJQUFyQixFQUEyQjtBQUN2QjtBQUNBLFNBQU93TixhQUFhLENBQUN4TixJQUFELEVBQU9xTixRQUFQLENBQXBCO0FBQ0g7O0FBQ0QsU0FBU2hCLFdBQVQsQ0FBcUJyTSxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNFLEtBQUwsQ0FBV21OLFFBQVEsQ0FBQ2dCLE1BQXBCLENBQVA7QUFDQSxNQUFJLENBQUNyTyxJQUFJLENBQUMwTixVQUFMLENBQWdCLEdBQWhCLENBQUwsRUFBMkIxTixJQUFJLEdBQUksSUFBR0EsSUFBSyxFQUFoQjtBQUMzQixTQUFPQSxJQUFQO0FBQ0g7O0FBQ0QsU0FBUzFFLFVBQVQsQ0FBb0JtVCxHQUFwQixFQUF5QjtBQUNyQjtBQUNBLE1BQUlBLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsS0FBdUJlLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsQ0FBdkIsSUFBOENlLEdBQUcsQ0FBQ2YsVUFBSixDQUFlLEdBQWYsQ0FBbEQsRUFBdUUsT0FBTyxJQUFQOztBQUN2RSxNQUFJO0FBQ0E7QUFDQSxVQUFNZ0IsY0FBYyxHQUFHLENBQUMsR0FBRzlCLE1BQUosRUFBWStCLGlCQUFaLEVBQXZCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlDLEdBQUosQ0FBUUosR0FBUixFQUFhQyxjQUFiLENBQWpCO0FBQ0EsV0FBT0UsUUFBUSxDQUFDRSxNQUFULEtBQW9CSixjQUFwQixJQUFzQ3RDLFdBQVcsQ0FBQ3dDLFFBQVEsQ0FBQ1gsUUFBVixDQUF4RDtBQUNILEdBTEQsQ0FLRSxPQUFPOVEsQ0FBUCxFQUFVO0FBQ1IsV0FBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFTbVAsYUFBVCxDQUF1QjNILEtBQXZCLEVBQThCb0ssVUFBOUIsRUFBMENDLEtBQTFDLEVBQWlEO0FBQzdDLE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLENBQUMsR0FBR2hDLFdBQUosRUFBaUJpQyxhQUFqQixDQUErQnhLLEtBQS9CLENBQXJCO0FBQ0EsUUFBTXlLLGFBQWEsR0FBR0YsWUFBWSxDQUFDRyxNQUFuQztBQUNBLFFBQU1DLGNBQWMsR0FBRztBQUN2QixHQUFDUCxVQUFVLEtBQUtwSyxLQUFmLEdBQXVCLENBQUMsR0FBR3NJLGFBQUosRUFBbUJzQyxlQUFuQixDQUFtQ0wsWUFBbkMsRUFBaURILFVBQWpELENBQXZCLEdBQXNGLEVBQXZGLEtBQThGO0FBQzlGO0FBQ0FDLEVBQUFBLEtBSEE7QUFJQUMsRUFBQUEsaUJBQWlCLEdBQUd0SyxLQUFwQjtBQUNBLFFBQU02SyxNQUFNLEdBQUduVixNQUFNLENBQUM0QyxJQUFQLENBQVltUyxhQUFaLENBQWY7O0FBQ0EsTUFBSSxDQUFDSSxNQUFNLENBQUNDLEtBQVAsQ0FBY0MsS0FBRCxJQUFTO0FBQ3ZCLFFBQUl0YSxLQUFLLEdBQUdrYSxjQUFjLENBQUNJLEtBQUQsQ0FBZCxJQUF5QixFQUFyQztBQUNBLFVBQU07QUFBRUMsTUFBQUEsTUFBRjtBQUFXQyxNQUFBQTtBQUFYLFFBQXlCUixhQUFhLENBQUNNLEtBQUQsQ0FBNUMsQ0FGdUIsQ0FHdkI7QUFDQTs7QUFDQSxRQUFJRyxRQUFRLEdBQUksSUFBR0YsTUFBTSxHQUFHLEtBQUgsR0FBVyxFQUFHLEdBQUVELEtBQU0sR0FBL0M7O0FBQ0EsUUFBSUUsUUFBSixFQUFjO0FBQ1ZDLE1BQUFBLFFBQVEsR0FBSSxHQUFFLENBQUN6YSxLQUFELEdBQVMsR0FBVCxHQUFlLEVBQUcsSUFBR3lhLFFBQVMsR0FBNUM7QUFDSDs7QUFDRCxRQUFJRixNQUFNLElBQUksQ0FBQzlHLEtBQUssQ0FBQ0MsT0FBTixDQUFjMVQsS0FBZCxDQUFmLEVBQXFDQSxLQUFLLEdBQUcsQ0FDekNBLEtBRHlDLENBQVI7QUFHckMsV0FBTyxDQUFDd2EsUUFBUSxJQUFJRixLQUFLLElBQUlKLGNBQXRCLE1BQ05MLGlCQUFpQixHQUFHQSxpQkFBaUIsQ0FBQzdTLE9BQWxCLENBQTBCeVQsUUFBMUIsRUFBb0NGLE1BQU0sR0FBR3ZhLEtBQUssQ0FBQzJDLEdBQU4sRUFBVTtBQUM1RTtBQUNBO0FBQ0E7QUFDQytYLElBQUFBLE9BQUQsSUFBV0Msa0JBQWtCLENBQUNELE9BQUQsQ0FKcUMsRUFLaEVFLElBTGdFLENBSzNELEdBTDJELENBQUgsR0FLakRELGtCQUFrQixDQUFDM2EsS0FBRCxDQUxYLEtBS3VCLEdBTnJDLENBQVA7QUFPSCxHQW5CSSxDQUFMLEVBbUJJO0FBQ0E2WixJQUFBQSxpQkFBaUIsR0FBRyxFQUFwQixDQUF1QjtBQUF2QixLQURBLENBR0o7QUFDQTtBQUNDOztBQUNELFNBQU87QUFDSE8sSUFBQUEsTUFERztBQUVIUyxJQUFBQSxNQUFNLEVBQUVoQjtBQUZMLEdBQVA7QUFJSDs7QUFDRCxTQUFTaUIsa0JBQVQsQ0FBNEJsQixLQUE1QixFQUFtQ1EsTUFBbkMsRUFBMkM7QUFDdkMsUUFBTVcsYUFBYSxHQUFHLEVBQXRCO0FBRUE5VixFQUFBQSxNQUFNLENBQUM0QyxJQUFQLENBQVkrUixLQUFaLEVBQW1COVIsT0FBbkIsQ0FBNEJOLEdBQUQsSUFBTztBQUM5QixRQUFJLENBQUM0UyxNQUFNLENBQUNZLFFBQVAsQ0FBZ0J4VCxHQUFoQixDQUFMLEVBQTJCO0FBQ3ZCdVQsTUFBQUEsYUFBYSxDQUFDdlQsR0FBRCxDQUFiLEdBQXFCb1MsS0FBSyxDQUFDcFMsR0FBRCxDQUExQjtBQUNIO0FBQ0osR0FKRDtBQUtBLFNBQU91VCxhQUFQO0FBQ0g7O0FBQ0QsU0FBU3BTLFdBQVQsQ0FBcUI3RSxNQUFyQixFQUE2QmlDLElBQTdCLEVBQW1Da1YsU0FBbkMsRUFBOEM7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLE9BQU9wVixJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxDQUFDLEdBQUd5UixNQUFKLEVBQVk0RCxvQkFBWixDQUFpQ3JWLElBQWpDLENBQXBELENBSDBDLENBSTFDO0FBQ0E7O0FBQ0EsUUFBTXNWLGFBQWEsR0FBR0YsV0FBVyxDQUFDRyxLQUFaLENBQWtCLG9CQUFsQixDQUF0QjtBQUNBLFFBQU1DLGtCQUFrQixHQUFHRixhQUFhLEdBQUdGLFdBQVcsQ0FBQ2pDLE1BQVosQ0FBbUJtQyxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCcEMsTUFBcEMsQ0FBSCxHQUFpRGtDLFdBQXpGO0FBQ0EsUUFBTUssUUFBUSxHQUFHRCxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBakI7O0FBQ0EsTUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWUsRUFBaEIsRUFBb0JGLEtBQXBCLENBQTBCLFdBQTFCLENBQUosRUFBNEM7QUFDeEN0WixJQUFBQSxPQUFPLENBQUM4TyxLQUFSLENBQWUsdUNBQXNDcUssV0FBWSw2RUFBakU7QUFDQSxVQUFNTyxhQUFhLEdBQUcsQ0FBQyxHQUFHbEUsTUFBSixFQUFZbUUsd0JBQVosQ0FBcUNKLGtCQUFyQyxDQUF0QjtBQUNBSixJQUFBQSxXQUFXLEdBQUcsQ0FBQ0UsYUFBYSxHQUFHQSxhQUFhLENBQUMsQ0FBRCxDQUFoQixHQUFzQixFQUFwQyxJQUEwQ0ssYUFBeEQ7QUFDSCxHQWJ5QyxDQWMxQzs7O0FBQ0EsTUFBSSxDQUFDeFYsVUFBVSxDQUFDaVYsV0FBRCxDQUFmLEVBQThCO0FBQzFCLFdBQU9GLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIOztBQUNELE1BQUk7QUFDQUQsSUFBQUEsSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVEwQixXQUFXLENBQUM3QyxVQUFaLENBQXVCLEdBQXZCLElBQThCeFUsTUFBTSxDQUFDOFgsTUFBckMsR0FBOEM5WCxNQUFNLENBQUMrVSxRQUE3RCxFQUF1RSxVQUF2RSxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU85USxDQUFQLEVBQVU7QUFDUjtBQUNBbVQsSUFBQUEsSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQWIsQ0FBUDtBQUNIOztBQUNELE1BQUk7QUFDQSxVQUFNb0MsUUFBUSxHQUFHLElBQUlwQyxHQUFKLENBQVEwQixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtBQUNBVyxJQUFBQSxRQUFRLENBQUNoRCxRQUFULEdBQW9CLENBQUMsR0FBRzFCLHVCQUFKLEVBQTZCeE0sMEJBQTdCLENBQXdEa1IsUUFBUSxDQUFDaEQsUUFBakUsQ0FBcEI7QUFDQSxRQUFJaUQsY0FBYyxHQUFHLEVBQXJCOztBQUNBLFFBQUksQ0FBQyxHQUFHckUsVUFBSixFQUFnQnNFLGNBQWhCLENBQStCRixRQUFRLENBQUNoRCxRQUF4QyxLQUFxRGdELFFBQVEsQ0FBQ0csWUFBOUQsSUFBOEVmLFNBQWxGLEVBQTZGO0FBQ3pGLFlBQU1yQixLQUFLLEdBQUcsQ0FBQyxHQUFHakMsWUFBSixFQUFrQnNFLHNCQUFsQixDQUF5Q0osUUFBUSxDQUFDRyxZQUFsRCxDQUFkO0FBQ0EsWUFBTTtBQUFFbkIsUUFBQUEsTUFBRjtBQUFXVCxRQUFBQTtBQUFYLFVBQXVCbEQsYUFBYSxDQUFDMkUsUUFBUSxDQUFDaEQsUUFBVixFQUFvQmdELFFBQVEsQ0FBQ2hELFFBQTdCLEVBQXVDZSxLQUF2QyxDQUExQzs7QUFDQSxVQUFJaUIsTUFBSixFQUFZO0FBQ1JpQixRQUFBQSxjQUFjLEdBQUcsQ0FBQyxHQUFHdEUsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUM7QUFDOUN2QyxVQUFBQSxRQUFRLEVBQUVnQyxNQURvQztBQUU5Q3FCLFVBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDSyxJQUYrQjtBQUc5Q3RDLFVBQUFBLEtBQUssRUFBRWtCLGtCQUFrQixDQUFDbEIsS0FBRCxFQUFRUSxNQUFSO0FBSHFCLFNBQWpDLENBQWpCO0FBS0g7QUFDSixLQWRELENBZUE7OztBQUNBLFVBQU0zUixZQUFZLEdBQUdvVCxRQUFRLENBQUNuQyxNQUFULEtBQW9Cd0IsSUFBSSxDQUFDeEIsTUFBekIsR0FBa0NtQyxRQUFRLENBQUM5VixJQUFULENBQWMrRSxLQUFkLENBQW9CK1EsUUFBUSxDQUFDbkMsTUFBVCxDQUFnQlQsTUFBcEMsQ0FBbEMsR0FBZ0Y0QyxRQUFRLENBQUM5VixJQUE5RztBQUNBLFdBQU9rVixTQUFTLEdBQUcsQ0FDZnhTLFlBRGUsRUFFZnFULGNBQWMsSUFBSXJULFlBRkgsQ0FBSCxHQUdaQSxZQUhKO0FBSUgsR0FyQkQsQ0FxQkUsT0FBT1YsQ0FBUCxFQUFVO0FBQ1IsV0FBT2tULFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIO0FBQ0o7O0FBQ0QsU0FBU2dCLFdBQVQsQ0FBcUI5QyxHQUFyQixFQUEwQjtBQUN0QixRQUFNSyxNQUFNLEdBQUcsQ0FBQyxHQUFHbEMsTUFBSixFQUFZK0IsaUJBQVosRUFBZjtBQUNBLFNBQU9GLEdBQUcsQ0FBQ2YsVUFBSixDQUFlb0IsTUFBZixJQUF5QkwsR0FBRyxDQUFDcEcsU0FBSixDQUFjeUcsTUFBTSxDQUFDVCxNQUFyQixDQUF6QixHQUF3REksR0FBL0Q7QUFDSDs7QUFDRCxTQUFTK0MsWUFBVCxDQUFzQnRZLE1BQXRCLEVBQThCdVYsR0FBOUIsRUFBbUNyVCxFQUFuQyxFQUF1QztBQUNuQztBQUNBO0FBQ0EsTUFBSSxDQUFDeUMsWUFBRCxFQUFlQyxVQUFmLElBQTZCQyxXQUFXLENBQUM3RSxNQUFELEVBQVN1VixHQUFULEVBQWMsSUFBZCxDQUE1QztBQUNBLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdsQyxNQUFKLEVBQVkrQixpQkFBWixFQUFmO0FBQ0EsUUFBTThDLGFBQWEsR0FBRzVULFlBQVksQ0FBQzZQLFVBQWIsQ0FBd0JvQixNQUF4QixDQUF0QjtBQUNBLFFBQU00QyxXQUFXLEdBQUc1VCxVQUFVLElBQUlBLFVBQVUsQ0FBQzRQLFVBQVgsQ0FBc0JvQixNQUF0QixDQUFsQztBQUNBalIsRUFBQUEsWUFBWSxHQUFHMFQsV0FBVyxDQUFDMVQsWUFBRCxDQUExQjtBQUNBQyxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsR0FBR3lULFdBQVcsQ0FBQ3pULFVBQUQsQ0FBZCxHQUE2QkEsVUFBcEQ7QUFDQSxRQUFNNlQsV0FBVyxHQUFHRixhQUFhLEdBQUc1VCxZQUFILEdBQWtCNEIsV0FBVyxDQUFDNUIsWUFBRCxDQUE5RDtBQUNBLFFBQU0rVCxVQUFVLEdBQUd4VyxFQUFFLEdBQUdtVyxXQUFXLENBQUN4VCxXQUFXLENBQUM3RSxNQUFELEVBQVNrQyxFQUFULENBQVosQ0FBZCxHQUEwQzBDLFVBQVUsSUFBSUQsWUFBN0U7QUFDQSxTQUFPO0FBQ0g0USxJQUFBQSxHQUFHLEVBQUVrRCxXQURGO0FBRUh2VyxJQUFBQSxFQUFFLEVBQUVzVyxXQUFXLEdBQUdFLFVBQUgsR0FBZ0JuUyxXQUFXLENBQUNtUyxVQUFEO0FBRnZDLEdBQVA7QUFJSDs7QUFDRCxTQUFTQyxtQkFBVCxDQUE2QjVELFFBQTdCLEVBQXVDNkQsS0FBdkMsRUFBOEM7QUFDMUMsUUFBTUMsYUFBYSxHQUFHLENBQUMsR0FBR3hGLHVCQUFKLEVBQTZCek0sdUJBQTdCLENBQXFELENBQUMsR0FBRzJNLG9CQUFKLEVBQTBCdUYsbUJBQTFCLENBQThDL0QsUUFBOUMsQ0FBckQsQ0FBdEI7O0FBQ0EsTUFBSThELGFBQWEsS0FBSyxNQUFsQixJQUE0QkEsYUFBYSxLQUFLLFNBQWxELEVBQTZEO0FBQ3pELFdBQU85RCxRQUFQO0FBQ0gsR0FKeUMsQ0FLMUM7OztBQUNBLE1BQUksQ0FBQzZELEtBQUssQ0FBQzFCLFFBQU4sQ0FBZTJCLGFBQWYsQ0FBTCxFQUFvQztBQUNoQztBQUNBRCxJQUFBQSxLQUFLLENBQUNHLElBQU4sQ0FBWTdYLElBQUQsSUFBUTtBQUNmLFVBQUksQ0FBQyxHQUFHeVMsVUFBSixFQUFnQnNFLGNBQWhCLENBQStCL1csSUFBL0IsS0FBd0MsQ0FBQyxHQUFHOFMsV0FBSixFQUFpQmlDLGFBQWpCLENBQStCL1UsSUFBL0IsRUFBcUM4WCxFQUFyQyxDQUF3QzVSLElBQXhDLENBQTZDeVIsYUFBN0MsQ0FBNUMsRUFBeUc7QUFDckc5RCxRQUFBQSxRQUFRLEdBQUc3VCxJQUFYO0FBQ0EsZUFBTyxJQUFQO0FBQ0g7QUFDSixLQUxEO0FBTUg7O0FBQ0QsU0FBTyxDQUFDLEdBQUdtUyx1QkFBSixFQUE2QnpNLHVCQUE3QixDQUFxRG1PLFFBQXJELENBQVA7QUFDSDs7QUFDRCxNQUFNa0UsdUJBQXVCLEdBQUdoUyxNQUFBLElBQW1ILENBQW5KO0FBUUEsTUFBTXVTLGtCQUFrQixHQUFHL08sTUFBTSxDQUFDLG9CQUFELENBQWpDOztBQUNBLFNBQVNnUCxVQUFULENBQW9CbEUsR0FBcEIsRUFBeUJtRSxRQUF6QixFQUFtQztBQUMvQixTQUFPbE4sS0FBSyxDQUFDK0ksR0FBRCxFQUFNO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBb0UsSUFBQUEsV0FBVyxFQUFFO0FBWkMsR0FBTixDQUFMLENBYUp0USxJQWJJLENBYUVTLEdBQUQsSUFBTztBQUNYLFFBQUksQ0FBQ0EsR0FBRyxDQUFDMkMsRUFBVCxFQUFhO0FBQ1QsVUFBSWlOLFFBQVEsR0FBRyxDQUFYLElBQWdCNVAsR0FBRyxDQUFDOFAsTUFBSixJQUFjLEdBQWxDLEVBQXVDO0FBQ25DLGVBQU9ILFVBQVUsQ0FBQ2xFLEdBQUQsRUFBTW1FLFFBQVEsR0FBRyxDQUFqQixDQUFqQjtBQUNIOztBQUNELFVBQUk1UCxHQUFHLENBQUM4UCxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEIsZUFBTzlQLEdBQUcsQ0FBQytQLElBQUosR0FBV3hRLElBQVgsQ0FBaUJ5USxJQUFELElBQVE7QUFDM0IsY0FBSUEsSUFBSSxDQUFDQyxRQUFULEVBQW1CO0FBQ2YsbUJBQU87QUFDSEEsY0FBQUEsUUFBUSxFQUFFUDtBQURQLGFBQVA7QUFHSDs7QUFDRCxnQkFBTSxJQUFJL1YsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSCxTQVBNLENBQVA7QUFRSDs7QUFDRCxZQUFNLElBQUlBLEtBQUosQ0FBVyw2QkFBWCxDQUFOO0FBQ0g7O0FBQ0QsV0FBT3FHLEdBQUcsQ0FBQytQLElBQUosRUFBUDtBQUNILEdBL0JNLENBQVA7QUFnQ0g7O0FBQ0QsU0FBU0csYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUNDLGNBQWpDLEVBQWlEO0FBQzdDLFNBQU9ULFVBQVUsQ0FBQ1EsUUFBRCxFQUFXQyxjQUFjLEdBQUcsQ0FBSCxHQUFPLENBQWhDLENBQVYsQ0FBNkM3WCxLQUE3QyxDQUFvREMsR0FBRCxJQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFFBQUksQ0FBQzRYLGNBQUwsRUFBcUI7QUFDakIsT0FBQyxHQUFHNUcsWUFBSixFQUFrQmxMLGNBQWxCLENBQWlDOUYsR0FBakM7QUFDSDs7QUFDRCxVQUFNQSxHQUFOO0FBQ0gsR0FSTSxDQUFQO0FBU0g7O0FBQ0QsTUFBTTZYLE1BQU4sQ0FBYTtBQUNUQyxFQUFBQSxXQUFXLENBQUNDLFNBQUQsRUFBWUMsTUFBWixFQUFvQkMsR0FBcEIsRUFBeUI7QUFBRUMsSUFBQUEsWUFBRjtBQUFpQkMsSUFBQUEsVUFBakI7QUFBOEJDLElBQUFBLEdBQTlCO0FBQW9DQyxJQUFBQSxPQUFwQztBQUE4Q0MsSUFBQUEsU0FBUyxFQUFFQyxVQUF6RDtBQUFzRXZZLElBQUFBLEdBQUcsRUFBRXdZLElBQTNFO0FBQWtGQyxJQUFBQSxZQUFsRjtBQUFpR0MsSUFBQUEsVUFBakc7QUFBOEd4WSxJQUFBQSxNQUE5RztBQUF1SDZELElBQUFBLE9BQXZIO0FBQWlJSSxJQUFBQSxhQUFqSTtBQUFpSkgsSUFBQUEsYUFBako7QUFBaUsyVSxJQUFBQTtBQUFqSyxHQUF6QixFQUF1TTtBQUM5TTtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYLENBRjhNLENBSTlNOztBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLENBQVo7O0FBQ0EsU0FBS0MsVUFBTCxHQUFtQnRkLENBQUQsSUFBSztBQUNuQixZQUFNdWQsS0FBSyxHQUFHdmQsQ0FBQyxDQUFDdWQsS0FBaEI7O0FBQ0EsVUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQUV2RyxVQUFBQSxRQUFRLEVBQUVzRixTQUFaO0FBQXdCdkUsVUFBQUEsS0FBSyxFQUFFd0U7QUFBL0IsWUFBMkMsSUFBakQ7QUFDQSxhQUFLaUIsV0FBTCxDQUFpQixjQUFqQixFQUFpQyxDQUFDLEdBQUc3SCxNQUFKLEVBQVk0RCxvQkFBWixDQUFpQztBQUM5RHZDLFVBQUFBLFFBQVEsRUFBRXhPLFdBQVcsQ0FBQzhULFNBQUQsQ0FEeUM7QUFFOUR2RSxVQUFBQSxLQUFLLEVBQUV3RTtBQUZ1RCxTQUFqQyxDQUFqQyxFQUdJLENBQUMsR0FBRzVHLE1BQUosRUFBWThILE1BQVosRUFISjtBQUlBO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDRixLQUFLLENBQUNHLEdBQVgsRUFBZ0I7QUFDWjtBQUNIOztBQUNELFVBQUlDLFlBQUo7QUFDQSxZQUFNO0FBQUVuRyxRQUFBQSxHQUFGO0FBQVFyVCxRQUFBQSxFQUFFLEVBQUVxWSxHQUFaO0FBQWtCcFksUUFBQUEsT0FBbEI7QUFBNEJ3WixRQUFBQTtBQUE1QixVQUFxQ0wsS0FBM0M7O0FBQ0EsVUFBSXJVLEtBQUosRUFBMkMsRUF1QjFDOztBQUNELFdBQUttVSxJQUFMLEdBQVlPLEdBQVo7QUFDQSxZQUFNO0FBQUU1RyxRQUFBQSxRQUFRLEVBQUVzRjtBQUFaLFVBQTJCLENBQUMsR0FBR3pHLGlCQUFKLEVBQXVCd0ksZ0JBQXZCLENBQXdDN0csR0FBeEMsQ0FBakMsQ0FqRG1CLENBa0RuQjtBQUNBOztBQUNBLFVBQUksS0FBSzhHLEtBQUwsSUFBYzlCLEdBQUcsS0FBSyxLQUFLekMsTUFBM0IsSUFBcUN1QyxTQUFTLEtBQUssS0FBS3RGLFFBQTVELEVBQXNFO0FBQ2xFO0FBQ0gsT0F0RGtCLENBdURuQjtBQUNBOzs7QUFDQSxVQUFJLEtBQUt1SCxJQUFMLElBQWEsQ0FBQyxLQUFLQSxJQUFMLENBQVVoQixLQUFWLENBQWxCLEVBQW9DO0FBQ2hDO0FBQ0g7O0FBQ0QsV0FBS2lCLE1BQUwsQ0FBWSxjQUFaLEVBQTRCaEgsR0FBNUIsRUFBaUNnRixHQUFqQyxFQUFzQ3BaLE1BQU0sQ0FBQ3VNLE1BQVAsQ0FBYyxFQUFkLEVBQ25DdkwsT0FEbUMsRUFDMUI7QUFDUmdCLFFBQUFBLE9BQU8sRUFBRWhCLE9BQU8sQ0FBQ2dCLE9BQVIsSUFBbUIsS0FBS3FaLFFBRHpCO0FBRVJoYSxRQUFBQSxNQUFNLEVBQUVMLE9BQU8sQ0FBQ0ssTUFBUixJQUFrQixLQUFLaUU7QUFGdkIsT0FEMEIsQ0FBdEMsRUFJSWlWLFlBSko7QUFLSCxLQWpFRCxDQVI4TSxDQTBFOU07OztBQUNBLFNBQUtqUSxLQUFMLEdBQWEsQ0FBQyxHQUFHNEgsdUJBQUosRUFBNkJ6TSx1QkFBN0IsQ0FBcUR5VCxTQUFyRCxDQUFiLENBM0U4TSxDQTRFOU07O0FBQ0EsU0FBS29DLFVBQUwsR0FBa0IsRUFBbEIsQ0E3RThNLENBK0U5TTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSXBDLFNBQVMsS0FBSyxTQUFsQixFQUE2QjtBQUN6QixXQUFLb0MsVUFBTCxDQUFnQixLQUFLaFIsS0FBckIsSUFBOEI7QUFDMUJtUCxRQUFBQSxTQUFTLEVBQUVDLFVBRGU7QUFFMUI2QixRQUFBQSxPQUFPLEVBQUUsSUFGaUI7QUFHMUJsaEIsUUFBQUEsS0FBSyxFQUFFZ2YsWUFIbUI7QUFJMUJsWSxRQUFBQSxHQUFHLEVBQUV3WSxJQUpxQjtBQUsxQjZCLFFBQUFBLE9BQU8sRUFBRW5DLFlBQVksSUFBSUEsWUFBWSxDQUFDbUMsT0FMWjtBQU0xQkMsUUFBQUEsT0FBTyxFQUFFcEMsWUFBWSxJQUFJQSxZQUFZLENBQUNvQztBQU5aLE9BQTlCO0FBUUg7O0FBQ0QsU0FBS0gsVUFBTCxDQUFnQixPQUFoQixJQUEyQjtBQUN2QjdCLE1BQUFBLFNBQVMsRUFBRUYsR0FEWTtBQUV2QnRPLE1BQUFBLFdBQVcsRUFBRTtBQUZVLEtBQTNCLENBNUY4TSxDQWdHOU07QUFDQTs7QUFDQSxTQUFLd0MsTUFBTCxHQUFjdUwsTUFBTSxDQUFDdkwsTUFBckI7QUFDQSxTQUFLNkwsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLMUYsUUFBTCxHQUFnQnNGLFNBQWhCO0FBQ0EsU0FBS3ZFLEtBQUwsR0FBYXdFLE1BQWIsQ0FyRzhNLENBc0c5TTtBQUNBOztBQUNBLFVBQU11QyxpQkFBaUIsR0FBRyxDQUFDLEdBQUdsSixVQUFKLEVBQWdCc0UsY0FBaEIsQ0FBK0JvQyxTQUEvQixLQUE2QzlTLElBQUksQ0FBQ3VWLGFBQUwsQ0FBbUJDLFVBQTFGOztBQUNBLFNBQUtqRixNQUFMLEdBQWMrRSxpQkFBaUIsR0FBR3hDLFNBQUgsR0FBZUUsR0FBOUM7QUFDQSxTQUFLcEcsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLNkksR0FBTCxHQUFXakMsWUFBWDtBQUNBLFNBQUtrQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0J2QyxPQUFoQixDQTdHOE0sQ0E4RzlNO0FBQ0E7O0FBQ0EsU0FBSzBCLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS3JCLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS21DLE9BQUwsR0FBZSxDQUFDLEVBQUU1VixJQUFJLENBQUN1VixhQUFMLENBQW1CTSxJQUFuQixJQUEyQjdWLElBQUksQ0FBQ3VWLGFBQUwsQ0FBbUJPLEdBQTlDLElBQXFEOVYsSUFBSSxDQUFDdVYsYUFBTCxDQUFtQlEsTUFBbkIsSUFBNkIsQ0FBQy9WLElBQUksQ0FBQ3VWLGFBQUwsQ0FBbUJTLEdBQXRHLElBQTZHLENBQUNWLGlCQUFELElBQXNCLENBQUN0VixJQUFJLENBQUNpVyxRQUFMLENBQWNDLE1BQXJDLElBQStDLENBQUN4VyxLQUEvSixDQUFoQjtBQUNBLFNBQUtnVSxTQUFMLEdBQWlCLENBQUMsQ0FBQ0EsU0FBbkI7QUFDQSxTQUFLOVUsY0FBTCxHQUFzQixLQUF0Qjs7QUFDQSxRQUFJYyxLQUFKLEVBQXFDLEVBTXBDOztBQUNELGVBQW1DLEVBdUJsQztBQUNKOztBQUNEOFcsRUFBQUEsTUFBTSxHQUFHO0FBQ0x0VyxJQUFBQSxNQUFNLENBQUMrVixRQUFQLENBQWdCTyxNQUFoQjtBQUNIO0FBQ0Q7QUFDSjtBQUNBOzs7QUFBTUMsRUFBQUEsSUFBSSxHQUFHO0FBQ0x2VyxJQUFBQSxNQUFNLENBQUMwUixPQUFQLENBQWU2RSxJQUFmO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFNOWQsRUFBQUEsSUFBSSxDQUFDcVYsR0FBRCxFQUFNclQsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDSDtBQUNDLFFBQUk4RSxLQUFKLEVBQTJDLEVBYTFDOztBQUNELEtBQUM7QUFBRXNPLE1BQUFBLEdBQUY7QUFBUXJULE1BQUFBO0FBQVIsUUFBZ0JvVyxZQUFZLENBQUMsSUFBRCxFQUFPL0MsR0FBUCxFQUFZclQsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS3FhLE1BQUwsQ0FBWSxXQUFaLEVBQXlCaEgsR0FBekIsRUFBOEJyVCxFQUE5QixFQUFrQ0MsT0FBbEMsQ0FBUDtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTWUsRUFBQUEsT0FBTyxDQUFDcVMsR0FBRCxFQUFNclQsRUFBTixFQUFVQyxPQUFPLEdBQUcsRUFBcEIsRUFDTjtBQUNDLEtBQUM7QUFBRW9ULE1BQUFBLEdBQUY7QUFBUXJULE1BQUFBO0FBQVIsUUFBZ0JvVyxZQUFZLENBQUMsSUFBRCxFQUFPL0MsR0FBUCxFQUFZclQsRUFBWixDQUE3QjtBQUNBLFdBQU8sS0FBS3FhLE1BQUwsQ0FBWSxjQUFaLEVBQTRCaEgsR0FBNUIsRUFBaUNyVCxFQUFqQyxFQUFxQ0MsT0FBckMsQ0FBUDtBQUNIOztBQUNXLFFBQU5vYSxNQUFNLENBQUMwQixNQUFELEVBQVMxSSxHQUFULEVBQWNyVCxFQUFkLEVBQWtCQyxPQUFsQixFQUEyQnVaLFlBQTNCLEVBQXlDO0FBQ2pELFFBQUksQ0FBQ3RaLFVBQVUsQ0FBQ21ULEdBQUQsQ0FBZixFQUFzQjtBQUNsQjlOLE1BQUFBLE1BQU0sQ0FBQytWLFFBQVAsQ0FBZ0J2YixJQUFoQixHQUF1QnNULEdBQXZCO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsVUFBTTJJLGlCQUFpQixHQUFHM0ksR0FBRyxLQUFLclQsRUFBUixJQUFjQyxPQUFPLENBQUNnYyxFQUF0QixJQUE0QmhjLE9BQU8sQ0FBQ3liLGtCQUE5RCxDQUxpRCxDQU1qRDtBQUNBOztBQUNBLFFBQUl6YixPQUFPLENBQUNnYyxFQUFaLEVBQWdCO0FBQ1osV0FBS2hCLE9BQUwsR0FBZSxJQUFmO0FBQ0g7O0FBQ0QsVUFBTWlCLFVBQVUsR0FBRyxLQUFLNWIsTUFBeEI7O0FBQ0EsUUFBSXlFLEtBQUosRUFBcUMsWUE2Q3BDOztBQUNELFFBQUksQ0FBQzlFLE9BQU8sQ0FBQ2djLEVBQWIsRUFBaUI7QUFDYixXQUFLOUIsS0FBTCxHQUFhLEtBQWI7QUFDSCxLQTVEZ0QsQ0E2RGpEOzs7QUFDQSxRQUFJM0ksTUFBTSxDQUFDK0ssRUFBWCxFQUFlO0FBQ1hDLE1BQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixhQUFqQjtBQUNIOztBQUNELFVBQU07QUFBRXhiLE1BQUFBLE9BQU8sR0FBRTtBQUFYLFFBQXNCaEIsT0FBNUI7QUFDQSxVQUFNeWMsVUFBVSxHQUFHO0FBQ2Z6YixNQUFBQTtBQURlLEtBQW5COztBQUdBLFFBQUksS0FBSzBiLGNBQVQsRUFBeUI7QUFDckIsV0FBS0Msa0JBQUwsQ0FBd0IsS0FBS0QsY0FBN0IsRUFBNkNELFVBQTdDO0FBQ0g7O0FBQ0QxYyxJQUFBQSxFQUFFLEdBQUdxRSxXQUFXLENBQUNDLFNBQVMsQ0FBQzBNLFdBQVcsQ0FBQ2hSLEVBQUQsQ0FBWCxHQUFrQmlSLFdBQVcsQ0FBQ2pSLEVBQUQsQ0FBN0IsR0FBb0NBLEVBQXJDLEVBQXlDQyxPQUFPLENBQUNLLE1BQWpELEVBQXlELEtBQUtpRSxhQUE5RCxDQUFWLENBQWhCO0FBQ0EsVUFBTXNZLFNBQVMsR0FBRzlMLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDaFIsRUFBRCxDQUFYLEdBQWtCaVIsV0FBVyxDQUFDalIsRUFBRCxDQUE3QixHQUFvQ0EsRUFBckMsRUFBeUMsS0FBS00sTUFBOUMsQ0FBM0I7QUFDQSxTQUFLcWMsY0FBTCxHQUFzQjNjLEVBQXRCO0FBQ0EsUUFBSThjLFlBQVksR0FBR1osVUFBVSxLQUFLLEtBQUs1YixNQUF2QyxDQTNFaUQsQ0E0RWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDTCxPQUFPLENBQUNnYyxFQUFULElBQWUsS0FBS2MsZUFBTCxDQUFxQkYsU0FBckIsQ0FBZixJQUFrRCxDQUFDQyxZQUF2RCxFQUFxRTtBQUNqRSxXQUFLbEgsTUFBTCxHQUFjaUgsU0FBZDtBQUNBNUUsTUFBQUEsTUFBTSxDQUFDdkwsTUFBUCxDQUFjc1EsSUFBZCxDQUFtQixpQkFBbkIsRUFBc0NoZCxFQUF0QyxFQUEwQzBjLFVBQTFDLEVBRmlFLENBR2pFOztBQUNBLFdBQUtyRCxXQUFMLENBQWlCMEMsTUFBakIsRUFBeUIxSSxHQUF6QixFQUE4QnJULEVBQTlCLEVBQWtDQyxPQUFsQztBQUNBLFdBQUtnZCxZQUFMLENBQWtCSixTQUFsQjtBQUNBLFdBQUtLLE1BQUwsQ0FBWSxLQUFLM0MsVUFBTCxDQUFnQixLQUFLaFIsS0FBckIsQ0FBWixFQUF5QyxJQUF6QztBQUNBME8sTUFBQUEsTUFBTSxDQUFDdkwsTUFBUCxDQUFjc1EsSUFBZCxDQUFtQixvQkFBbkIsRUFBeUNoZCxFQUF6QyxFQUE2QzBjLFVBQTdDO0FBQ0EsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsUUFBSVMsTUFBTSxHQUFHLENBQUMsR0FBR3pMLGlCQUFKLEVBQXVCd0ksZ0JBQXZCLENBQXdDN0csR0FBeEMsQ0FBYjtBQUNBLFFBQUk7QUFBRVIsTUFBQUEsUUFBUSxFQUFFc0YsU0FBWjtBQUF3QnZFLE1BQUFBLEtBQUssRUFBRXdFO0FBQS9CLFFBQTJDK0UsTUFBL0MsQ0E1RmlELENBNkZqRDtBQUNBO0FBQ0E7O0FBQ0EsUUFBSXpHLEtBQUosRUFBVzBHLFFBQVg7O0FBQ0EsUUFBSTtBQUNBMUcsTUFBQUEsS0FBSyxHQUFHLE1BQU0sS0FBSzZCLFVBQUwsQ0FBZ0I4RSxXQUFoQixFQUFkO0FBQ0EsT0FBQztBQUFFQyxRQUFBQSxVQUFVLEVBQUVGO0FBQWQsVUFBNEIsTUFBTSxDQUFDLEdBQUdoTSxZQUFKLEVBQWtCaEwsc0JBQWxCLEVBQW5DO0FBQ0gsS0FIRCxDQUdFLE9BQU93UyxJQUFQLEVBQWE7QUFDWDtBQUNBO0FBQ0FyVCxNQUFBQSxNQUFNLENBQUMrVixRQUFQLENBQWdCdmIsSUFBaEIsR0FBdUJDLEVBQXZCO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0F6R2dELENBMEdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLENBQUMsS0FBS3VkLFFBQUwsQ0FBY1YsU0FBZCxDQUFELElBQTZCLENBQUNDLFlBQWxDLEVBQWdEO0FBQzVDZixNQUFBQSxNQUFNLEdBQUcsY0FBVDtBQUNILEtBakhnRCxDQWtIakQ7QUFDQTs7O0FBQ0EsUUFBSXJaLFVBQVUsR0FBRzFDLEVBQWpCLENBcEhpRCxDQXFIakQ7QUFDQTtBQUNBOztBQUNBbVksSUFBQUEsU0FBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBQyxHQUFHaEgsdUJBQUosRUFBNkJ6TSx1QkFBN0IsQ0FBcUR1TSxXQUFXLENBQUNrSCxTQUFELENBQWhFLENBQUgsR0FBa0ZBLFNBQXZHOztBQUNBLFFBQUk2RCxpQkFBaUIsSUFBSTdELFNBQVMsS0FBSyxTQUF2QyxFQUFrRDtBQUM5Q2xZLE1BQUFBLE9BQU8sQ0FBQ3liLGtCQUFSLEdBQTZCLElBQTdCOztBQUNBLFVBQUkzVyxLQUFKLEVBQTJELEVBQTNELE1BV087QUFDSG9ZLFFBQUFBLE1BQU0sQ0FBQ3RLLFFBQVAsR0FBa0I0RCxtQkFBbUIsQ0FBQzBCLFNBQUQsRUFBWXpCLEtBQVosQ0FBckM7O0FBQ0EsWUFBSXlHLE1BQU0sQ0FBQ3RLLFFBQVAsS0FBb0JzRixTQUF4QixFQUFtQztBQUMvQkEsVUFBQUEsU0FBUyxHQUFHZ0YsTUFBTSxDQUFDdEssUUFBbkI7QUFDQXNLLFVBQUFBLE1BQU0sQ0FBQ3RLLFFBQVAsR0FBa0J4TyxXQUFXLENBQUM4VCxTQUFELENBQTdCO0FBQ0E5RSxVQUFBQSxHQUFHLEdBQUcsQ0FBQyxHQUFHN0IsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUMrSCxNQUFqQyxDQUFOO0FBQ0g7QUFDSjtBQUNKOztBQUNELFVBQU01VCxLQUFLLEdBQUcsQ0FBQyxHQUFHNEgsdUJBQUosRUFBNkJ6TSx1QkFBN0IsQ0FBcUR5VCxTQUFyRCxDQUFkOztBQUNBLFFBQUksQ0FBQ2pZLFVBQVUsQ0FBQ0YsRUFBRCxDQUFmLEVBQXFCO0FBQ2pCLGdCQUEyQztBQUN2QyxjQUFNLElBQUl1QixLQUFKLENBQVcsa0JBQWlCOFIsR0FBSSxjQUFhclQsRUFBRywyQ0FBdEMsR0FBb0Ysb0ZBQTlGLENBQU47QUFDSDs7QUFDRHVGLE1BQUFBLE1BQU0sQ0FBQytWLFFBQVAsQ0FBZ0J2YixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRDBDLElBQUFBLFVBQVUsR0FBR3FPLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDdk8sVUFBRCxDQUFaLEVBQTBCLEtBQUtwQyxNQUEvQixDQUF0Qjs7QUFDQSxRQUFJLENBQUMsR0FBR21SLFVBQUosRUFBZ0JzRSxjQUFoQixDQUErQnhNLEtBQS9CLENBQUosRUFBMkM7QUFDdkMsWUFBTTRTLFFBQVEsR0FBRyxDQUFDLEdBQUd6SyxpQkFBSixFQUF1QndJLGdCQUF2QixDQUF3Q3hYLFVBQXhDLENBQWpCO0FBQ0EsWUFBTWlSLFVBQVUsR0FBR3dJLFFBQVEsQ0FBQ3RKLFFBQTVCO0FBQ0EsWUFBTTZLLFVBQVUsR0FBRyxDQUFDLEdBQUc1TCxXQUFKLEVBQWlCaUMsYUFBakIsQ0FBK0J4SyxLQUEvQixDQUFuQjtBQUNBLFlBQU1vVSxVQUFVLEdBQUcsQ0FBQyxHQUFHOUwsYUFBSixFQUFtQnNDLGVBQW5CLENBQW1DdUosVUFBbkMsRUFBK0MvSixVQUEvQyxDQUFuQjtBQUNBLFlBQU1pSyxpQkFBaUIsR0FBR3JVLEtBQUssS0FBS29LLFVBQXBDO0FBQ0EsWUFBTW1DLGNBQWMsR0FBRzhILGlCQUFpQixHQUFHMU0sYUFBYSxDQUFDM0gsS0FBRCxFQUFRb0ssVUFBUixFQUFvQnlFLE1BQXBCLENBQWhCLEdBQThDLEVBQXRGOztBQUVBLFVBQUksQ0FBQ3VGLFVBQUQsSUFBZUMsaUJBQWlCLElBQUksQ0FBQzlILGNBQWMsQ0FBQ2pCLE1BQXhELEVBQWdFO0FBQzVELGNBQU1nSixhQUFhLEdBQUc1ZSxNQUFNLENBQUM0QyxJQUFQLENBQVk2YixVQUFVLENBQUN6SixNQUF2QixFQUErQnBLLE1BQS9CLENBQXVDeUssS0FBRCxJQUFTLENBQUM4RCxNQUFNLENBQUM5RCxLQUFELENBQXRELENBQXRCOztBQUVBLFlBQUl1SixhQUFhLENBQUM1SyxNQUFkLEdBQXVCLENBQTNCLEVBQThCO0FBQzFCLG9CQUEyQztBQUN2Q2pYLFlBQUFBLE9BQU8sQ0FBQ3NHLElBQVIsQ0FBYyxHQUFFc2IsaUJBQWlCLEdBQUksb0JBQUosR0FBMkIsaUNBQWlDLDhCQUFoRixHQUFpSCxlQUFjQyxhQUFhLENBQUNqSixJQUFkLENBQW1CLElBQW5CLENBQXlCLDhCQUFySztBQUNIOztBQUNELGdCQUFNLElBQUlyVCxLQUFKLENBQVUsQ0FBQ3FjLGlCQUFpQixHQUFJLDBCQUF5QnZLLEdBQUksb0NBQW1Dd0ssYUFBYSxDQUFDakosSUFBZCxDQUFtQixJQUFuQixDQUF5QixpQ0FBN0YsR0FBaUksOEJBQTZCakIsVUFBVyw4Q0FBNkNwSyxLQUFNLEtBQTlPLElBQXVQLCtDQUE4Q3FVLGlCQUFpQixHQUFHLDJCQUFILEdBQWlDLHNCQUF1QixFQUF4WCxDQUFOO0FBQ0g7QUFDSixPQVRELE1BU08sSUFBSUEsaUJBQUosRUFBdUI7QUFDMUI1ZCxRQUFBQSxFQUFFLEdBQUcsQ0FBQyxHQUFHd1IsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUNuVyxNQUFNLENBQUN1TSxNQUFQLENBQWMsRUFBZCxFQUNuQzJRLFFBRG1DLEVBQ3pCO0FBQ1R0SixVQUFBQSxRQUFRLEVBQUVpRCxjQUFjLENBQUNqQixNQURoQjtBQUVUakIsVUFBQUEsS0FBSyxFQUFFa0Isa0JBQWtCLENBQUNzRCxNQUFELEVBQVN0QyxjQUFjLENBQUMxQixNQUF4QjtBQUZoQixTQUR5QixDQUFqQyxDQUFMO0FBS0gsT0FOTSxNQU1BO0FBQ0g7QUFDQW5WLFFBQUFBLE1BQU0sQ0FBQ3VNLE1BQVAsQ0FBYzRNLE1BQWQsRUFBc0J1RixVQUF0QjtBQUNIO0FBQ0o7O0FBQ0QxRixJQUFBQSxNQUFNLENBQUN2TCxNQUFQLENBQWNzUSxJQUFkLENBQW1CLGtCQUFuQixFQUF1Q2hkLEVBQXZDLEVBQTJDMGMsVUFBM0M7O0FBQ0EsUUFBSTtBQUNBLFVBQUl6WixHQUFKLEVBQVM2YSxJQUFUO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQnpVLEtBQWxCLEVBQXlCNE8sU0FBekIsRUFBb0NDLE1BQXBDLEVBQTRDcFksRUFBNUMsRUFBZ0QwQyxVQUFoRCxFQUE0RGdhLFVBQTVELENBQXRCO0FBQ0EsVUFBSTtBQUFFNVIsUUFBQUEsS0FBRjtBQUFVeFIsUUFBQUEsS0FBVjtBQUFrQm1oQixRQUFBQSxPQUFsQjtBQUE0QkMsUUFBQUE7QUFBNUIsVUFBeUNxRCxTQUE3QyxDQUhBLENBSUE7O0FBQ0EsVUFBSSxDQUFDdEQsT0FBTyxJQUFJQyxPQUFaLEtBQXdCcGhCLEtBQTVCLEVBQW1DO0FBQy9CLFlBQUlBLEtBQUssQ0FBQzJrQixTQUFOLElBQW1CM2tCLEtBQUssQ0FBQzJrQixTQUFOLENBQWdCQyxZQUF2QyxFQUFxRDtBQUNqRCxnQkFBTUMsV0FBVyxHQUFHN2tCLEtBQUssQ0FBQzJrQixTQUFOLENBQWdCQyxZQUFwQyxDQURpRCxDQUVqRDtBQUNBO0FBQ0E7O0FBQ0EsY0FBSUMsV0FBVyxDQUFDN0wsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQzdCLGtCQUFNOEwsVUFBVSxHQUFHLENBQUMsR0FBRzFNLGlCQUFKLEVBQXVCd0ksZ0JBQXZCLENBQXdDaUUsV0FBeEMsQ0FBbkI7QUFDQUMsWUFBQUEsVUFBVSxDQUFDdkwsUUFBWCxHQUFzQjRELG1CQUFtQixDQUFDMkgsVUFBVSxDQUFDdkwsUUFBWixFQUFzQjZELEtBQXRCLENBQXpDO0FBQ0Esa0JBQU07QUFBRXJELGNBQUFBLEdBQUcsRUFBRWdMLE1BQVA7QUFBZ0JyZSxjQUFBQSxFQUFFLEVBQUVzZTtBQUFwQixnQkFBK0JsSSxZQUFZLENBQUMsSUFBRCxFQUFPK0gsV0FBUCxFQUFvQkEsV0FBcEIsQ0FBakQ7QUFDQSxtQkFBTyxLQUFLOUQsTUFBTCxDQUFZMEIsTUFBWixFQUFvQnNDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQ3JlLE9BQW5DLENBQVA7QUFDSDs7QUFDRHNGLFVBQUFBLE1BQU0sQ0FBQytWLFFBQVAsQ0FBZ0J2YixJQUFoQixHQUF1Qm9lLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSXJYLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUtpUyxTQUFMLEdBQWlCLENBQUMsQ0FBQ3pmLEtBQUssQ0FBQ2lsQixXQUF6QixDQWhCK0IsQ0FpQi9COztBQUNBLFlBQUlqbEIsS0FBSyxDQUFDdWUsUUFBTixLQUFtQlAsa0JBQXZCLEVBQTJDO0FBQ3ZDLGNBQUlrSCxhQUFKOztBQUNBLGNBQUk7QUFDQSxrQkFBTSxLQUFLQyxjQUFMLENBQW9CLE1BQXBCLENBQU47QUFDQUQsWUFBQUEsYUFBYSxHQUFHLE1BQWhCO0FBQ0gsV0FIRCxDQUdFLE9BQU96YyxDQUFQLEVBQVU7QUFDUnljLFlBQUFBLGFBQWEsR0FBRyxTQUFoQjtBQUNIOztBQUNEVCxVQUFBQSxTQUFTLEdBQUcsTUFBTSxLQUFLQyxZQUFMLENBQWtCUSxhQUFsQixFQUFpQ0EsYUFBakMsRUFBZ0RwRyxNQUFoRCxFQUF3RHBZLEVBQXhELEVBQTREMEMsVUFBNUQsRUFBd0U7QUFDdEZ6QixZQUFBQSxPQUFPLEVBQUU7QUFENkUsV0FBeEUsQ0FBbEI7QUFHSDtBQUNKOztBQUNEZ1gsTUFBQUEsTUFBTSxDQUFDdkwsTUFBUCxDQUFjc1EsSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoZCxFQUExQyxFQUE4QzBjLFVBQTlDO0FBQ0EsV0FBS3JELFdBQUwsQ0FBaUIwQyxNQUFqQixFQUF5QjFJLEdBQXpCLEVBQThCclQsRUFBOUIsRUFBa0NDLE9BQWxDOztBQUNBLGdCQUEyQztBQUN2QyxjQUFNeWUsT0FBTyxHQUFHLEtBQUtuRSxVQUFMLENBQWdCLE9BQWhCLEVBQXlCN0IsU0FBekM7QUFDQW5ULFFBQUFBLE1BQU0sQ0FBQ29aLElBQVAsQ0FBWUMsYUFBWixHQUE0QkYsT0FBTyxDQUFDclAsZUFBUixLQUE0QnFQLE9BQU8sQ0FBQ3BQLG1CQUFwQyxJQUEyRCxDQUFDeU8sU0FBUyxDQUFDckYsU0FBVixDQUFvQnJKLGVBQTVHO0FBQ0g7O0FBQ0QsVUFBSXBQLE9BQU8sQ0FBQ2djLEVBQVIsSUFBYzlELFNBQVMsS0FBSyxTQUE1QixJQUF5QyxDQUFDLENBQUNsVixHQUFHLEdBQUdvQyxJQUFJLENBQUN1VixhQUFMLENBQW1CdGhCLEtBQTFCLE1BQXFDLElBQXJDLElBQTZDMkosR0FBRyxLQUFLLEtBQUssQ0FBMUQsR0FBOEQsS0FBSyxDQUFuRSxHQUF1RSxDQUFDNmEsSUFBSSxHQUFHN2EsR0FBRyxDQUFDZ2IsU0FBWixNQUEyQixJQUEzQixJQUFtQ0gsSUFBSSxLQUFLLEtBQUssQ0FBakQsR0FBcUQsS0FBSyxDQUExRCxHQUE4REEsSUFBSSxDQUFDZSxVQUEzSSxNQUEySixHQUFwTSxLQUE0TXZsQixLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLLEtBQUssQ0FBakMsR0FBcUMsS0FBSyxDQUExQyxHQUE4Q0EsS0FBSyxDQUFDMmtCLFNBQWhRLENBQUosRUFBZ1I7QUFDNVE7QUFDQTtBQUNBM2tCLFFBQUFBLEtBQUssQ0FBQzJrQixTQUFOLENBQWdCWSxVQUFoQixHQUE2QixHQUE3QjtBQUNILE9BOUNELENBK0NBOzs7QUFDQSxZQUFNQyxtQkFBbUIsR0FBRzdlLE9BQU8sQ0FBQ2dCLE9BQVIsSUFBbUIsS0FBS3NJLEtBQUwsS0FBZUEsS0FBOUQ7O0FBQ0EsVUFBSXdWLE9BQUo7O0FBQ0EsWUFBTUMsWUFBWSxHQUFHLENBQUNELE9BQU8sR0FBRzllLE9BQU8sQ0FBQ2lCLE1BQW5CLE1BQStCLElBQS9CLElBQXVDNmQsT0FBTyxLQUFLLEtBQUssQ0FBeEQsR0FBNERBLE9BQTVELEdBQXNFLENBQUNELG1CQUE1RjtBQUNBLFlBQU1HLFdBQVcsR0FBR0QsWUFBWSxHQUFHO0FBQy9CcEYsUUFBQUEsQ0FBQyxFQUFFLENBRDRCO0FBRS9CRSxRQUFBQSxDQUFDLEVBQUU7QUFGNEIsT0FBSCxHQUc1QixJQUhKO0FBSUEsWUFBTSxLQUFLNVMsR0FBTCxDQUFTcUMsS0FBVCxFQUFnQjRPLFNBQWhCLEVBQTJCQyxNQUEzQixFQUFtQ3lFLFNBQW5DLEVBQThDa0IsU0FBOUMsRUFBeUR2RSxZQUFZLEtBQUssSUFBakIsSUFBeUJBLFlBQVksS0FBSyxLQUFLLENBQS9DLEdBQW1EQSxZQUFuRCxHQUFrRXlGLFdBQTNILEVBQXdJOWUsS0FBeEksQ0FBK0l0RSxDQUFELElBQUs7QUFDckosWUFBSUEsQ0FBQyxDQUFDbU4sU0FBTixFQUFpQjhCLEtBQUssR0FBR0EsS0FBSyxJQUFJalAsQ0FBakIsQ0FBakIsS0FDSyxNQUFNQSxDQUFOO0FBQ1IsT0FISyxDQUFOOztBQUlBLFVBQUlpUCxLQUFKLEVBQVc7QUFDUG1OLFFBQUFBLE1BQU0sQ0FBQ3ZMLE1BQVAsQ0FBY3NRLElBQWQsQ0FBbUIsa0JBQW5CLEVBQXVDbFMsS0FBdkMsRUFBOEMrUixTQUE5QyxFQUF5REgsVUFBekQ7QUFDQSxjQUFNNVIsS0FBTjtBQUNIOztBQUNELFVBQUkvRixLQUFKLEVBQXFDLEVBSXBDOztBQUNEa1QsTUFBQUEsTUFBTSxDQUFDdkwsTUFBUCxDQUFjc1EsSUFBZCxDQUFtQixxQkFBbkIsRUFBMENoZCxFQUExQyxFQUE4QzBjLFVBQTlDO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0F0RUQsQ0FzRUUsT0FBTzlELElBQVAsRUFBYTtBQUNYLFVBQUlBLElBQUksQ0FBQzVQLFNBQVQsRUFBb0I7QUFDaEIsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsWUFBTTRQLElBQU47QUFDSDtBQUNKOztBQUNEUyxFQUFBQSxXQUFXLENBQUMwQyxNQUFELEVBQVMxSSxHQUFULEVBQWNyVCxFQUFkLEVBQWtCQyxPQUFPLEdBQUcsRUFBNUIsRUFDUjtBQUNDLGNBQTJDO0FBQ3ZDLFVBQUksT0FBT3NGLE1BQU0sQ0FBQzBSLE9BQWQsS0FBMEIsV0FBOUIsRUFBMkM7QUFDdkNqYixRQUFBQSxPQUFPLENBQUM4TyxLQUFSLENBQWUsMkNBQWY7QUFDQTtBQUNIOztBQUNELFVBQUksT0FBT3ZGLE1BQU0sQ0FBQzBSLE9BQVAsQ0FBZThFLE1BQWYsQ0FBUCxLQUFrQyxXQUF0QyxFQUFtRDtBQUMvQy9mLFFBQUFBLE9BQU8sQ0FBQzhPLEtBQVIsQ0FBZSwyQkFBMEJpUixNQUFPLG1CQUFoRDtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxRQUFJQSxNQUFNLEtBQUssV0FBWCxJQUEwQixDQUFDLEdBQUd2SyxNQUFKLEVBQVk4SCxNQUFaLE9BQXlCdFosRUFBdkQsRUFBMkQ7QUFDdkQsV0FBS3NhLFFBQUwsR0FBZ0JyYSxPQUFPLENBQUNnQixPQUF4QjtBQUNBc0UsTUFBQUEsTUFBTSxDQUFDMFIsT0FBUCxDQUFlOEUsTUFBZixFQUF1QjtBQUNuQjFJLFFBQUFBLEdBRG1CO0FBRW5CclQsUUFBQUEsRUFGbUI7QUFHbkJDLFFBQUFBLE9BSG1CO0FBSW5Cc1osUUFBQUEsR0FBRyxFQUFFLElBSmM7QUFLbkJFLFFBQUFBLEdBQUcsRUFBRSxLQUFLUCxJQUFMLEdBQVk2QyxNQUFNLEtBQUssV0FBWCxHQUF5QixLQUFLN0MsSUFBOUIsR0FBcUMsS0FBS0EsSUFBTCxHQUFZO0FBTC9DLE9BQXZCLEVBTUc7QUFDSDtBQUNBO0FBQ0EsUUFUQSxFQVNJbFosRUFUSjtBQVVIO0FBQ0o7O0FBQ3lCLFFBQXBCb2Ysb0JBQW9CLENBQUNoZixHQUFELEVBQU15UyxRQUFOLEVBQWdCZSxLQUFoQixFQUF1QjVULEVBQXZCLEVBQTJCMGMsVUFBM0IsRUFBdUMyQyxhQUF2QyxFQUFzRDtBQUM1RSxRQUFJamYsR0FBRyxDQUFDNEksU0FBUixFQUFtQjtBQUNmO0FBQ0EsWUFBTTVJLEdBQU47QUFDSDs7QUFDRCxRQUFJLENBQUMsR0FBR2dSLFlBQUosRUFBa0JqTCxZQUFsQixDQUErQi9GLEdBQS9CLEtBQXVDaWYsYUFBM0MsRUFBMEQ7QUFDdERwSCxNQUFBQSxNQUFNLENBQUN2TCxNQUFQLENBQWNzUSxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzVjLEdBQXZDLEVBQTRDSixFQUE1QyxFQUFnRDBjLFVBQWhELEVBRHNELENBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FuWCxNQUFBQSxNQUFNLENBQUMrVixRQUFQLENBQWdCdmIsSUFBaEIsR0FBdUJDLEVBQXZCLENBUHNELENBUXREO0FBQ0E7O0FBQ0EsWUFBTW1TLHNCQUFzQixFQUE1QjtBQUNIOztBQUNELFFBQUk7QUFDQSxVQUFJd0csVUFBSjtBQUNBLFVBQUl6TyxXQUFKO0FBQ0EsVUFBSTVRLEtBQUo7O0FBQ0EsVUFBSSxPQUFPcWYsVUFBUCxLQUFzQixXQUF0QixJQUFxQyxPQUFPek8sV0FBUCxLQUF1QixXQUFoRSxFQUE2RTtBQUN6RSxTQUFDO0FBQUVsTCxVQUFBQSxJQUFJLEVBQUUyWixVQUFSO0FBQXFCek8sVUFBQUE7QUFBckIsWUFBc0MsTUFBTSxLQUFLdVUsY0FBTCxDQUFvQixTQUFwQixDQUE3QztBQUNIOztBQUNELFlBQU1WLFNBQVMsR0FBRztBQUNkemtCLFFBQUFBLEtBRGM7QUFFZG9mLFFBQUFBLFNBQVMsRUFBRUMsVUFGRztBQUdkek8sUUFBQUEsV0FIYztBQUlkOUosUUFBQUEsR0FKYztBQUtkMEssUUFBQUEsS0FBSyxFQUFFMUs7QUFMTyxPQUFsQjs7QUFPQSxVQUFJLENBQUMyZCxTQUFTLENBQUN6a0IsS0FBZixFQUFzQjtBQUNsQixZQUFJO0FBQ0F5a0IsVUFBQUEsU0FBUyxDQUFDemtCLEtBQVYsR0FBa0IsTUFBTSxLQUFLK1YsZUFBTCxDQUFxQnNKLFVBQXJCLEVBQWlDO0FBQ3JEdlksWUFBQUEsR0FEcUQ7QUFFckR5UyxZQUFBQSxRQUZxRDtBQUdyRGUsWUFBQUE7QUFIcUQsV0FBakMsQ0FBeEI7QUFLSCxTQU5ELENBTUUsT0FBTzBMLE1BQVAsRUFBZTtBQUNidGpCLFVBQUFBLE9BQU8sQ0FBQzhPLEtBQVIsQ0FBYyx5Q0FBZCxFQUF5RHdVLE1BQXpEO0FBQ0F2QixVQUFBQSxTQUFTLENBQUN6a0IsS0FBVixHQUFrQixFQUFsQjtBQUVIO0FBQ0o7O0FBQ0QsYUFBT3lrQixTQUFQO0FBQ0gsS0E1QkQsQ0E0QkUsT0FBT3dCLFlBQVAsRUFBcUI7QUFDbkIsYUFBTyxLQUFLSCxvQkFBTCxDQUEwQkcsWUFBMUIsRUFBd0MxTSxRQUF4QyxFQUFrRGUsS0FBbEQsRUFBeUQ1VCxFQUF6RCxFQUE2RDBjLFVBQTdELEVBQXlFLElBQXpFLENBQVA7QUFDSDtBQUNKOztBQUNpQixRQUFac0IsWUFBWSxDQUFDelUsS0FBRCxFQUFRc0osUUFBUixFQUFrQmUsS0FBbEIsRUFBeUI1VCxFQUF6QixFQUE2QjBDLFVBQTdCLEVBQXlDZ2EsVUFBekMsRUFBcUQ7QUFDbkUsUUFBSTtBQUNBLFlBQU04QyxpQkFBaUIsR0FBRyxLQUFLakYsVUFBTCxDQUFnQmhSLEtBQWhCLENBQTFCOztBQUNBLFVBQUltVCxVQUFVLENBQUN6YixPQUFYLElBQXNCdWUsaUJBQXRCLElBQTJDLEtBQUtqVyxLQUFMLEtBQWVBLEtBQTlELEVBQXFFO0FBQ2pFLGVBQU9pVyxpQkFBUDtBQUNIOztBQUNELFlBQU1DLGVBQWUsR0FBR0QsaUJBQWlCLElBQUksYUFBYUEsaUJBQWxDLEdBQXNEdFIsU0FBdEQsR0FBa0VzUixpQkFBMUY7QUFDQSxZQUFNekIsU0FBUyxHQUFHMEIsZUFBZSxHQUFHQSxlQUFILEdBQXFCLE1BQU0sS0FBS2hCLGNBQUwsQ0FBb0JsVixLQUFwQixFQUEyQnBDLElBQTNCLENBQWlDUyxHQUFELEtBQVE7QUFDNUY4USxRQUFBQSxTQUFTLEVBQUU5USxHQUFHLENBQUM1SSxJQUQ2RTtBQUU1RmtMLFFBQUFBLFdBQVcsRUFBRXRDLEdBQUcsQ0FBQ3NDLFdBRjJFO0FBRzVGdVEsUUFBQUEsT0FBTyxFQUFFN1MsR0FBRyxDQUFDOFgsR0FBSixDQUFRakYsT0FIMkU7QUFJNUZDLFFBQUFBLE9BQU8sRUFBRTlTLEdBQUcsQ0FBQzhYLEdBQUosQ0FBUWhGO0FBSjJFLE9BQVIsQ0FBaEMsQ0FBNUQ7QUFPQSxZQUFNO0FBQUVoQyxRQUFBQSxTQUFTLEVBQUVDLFVBQWI7QUFBMEI4QixRQUFBQSxPQUExQjtBQUFvQ0MsUUFBQUE7QUFBcEMsVUFBaURxRCxTQUF2RDs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTTtBQUFFNEIsVUFBQUE7QUFBRixZQUEwQnBnQixtQkFBTyxDQUFDLDBCQUFELENBQXZDOztBQUNBLFlBQUksQ0FBQ29nQixrQkFBa0IsQ0FBQ2hILFVBQUQsQ0FBdkIsRUFBcUM7QUFDakMsZ0JBQU0sSUFBSXBYLEtBQUosQ0FBVyx5REFBd0RzUixRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELFVBQUlrRixRQUFKOztBQUNBLFVBQUkwQyxPQUFPLElBQUlDLE9BQWYsRUFBd0I7QUFDcEIzQyxRQUFBQSxRQUFRLEdBQUcsS0FBS1EsVUFBTCxDQUFnQnFILFdBQWhCLENBQTRCLENBQUMsR0FBR3BPLE1BQUosRUFBWTRELG9CQUFaLENBQWlDO0FBQ3BFdkMsVUFBQUEsUUFEb0U7QUFFcEVlLFVBQUFBO0FBRm9FLFNBQWpDLENBQTVCLEVBR1BsUixVQUhPLEVBR0srWCxPQUhMLEVBR2MsS0FBS25hLE1BSG5CLENBQVg7QUFJSDs7QUFDRCxZQUFNaEgsS0FBSyxHQUFHLE1BQU0sS0FBS3VtQixRQUFMLENBQWMsTUFBSXBGLE9BQU8sR0FBRyxLQUFLcUYsY0FBTCxDQUFvQi9ILFFBQXBCLENBQUgsR0FBbUMyQyxPQUFPLEdBQUcsS0FBS3FGLGNBQUwsQ0FBb0JoSSxRQUFwQixDQUFILEdBQW1DLEtBQUsxSSxlQUFMLENBQXFCc0osVUFBckIsRUFBaUM7QUFDdko7QUFDSTlGLFFBQUFBLFFBREo7QUFFSWUsUUFBQUEsS0FGSjtBQUdJZ0MsUUFBQUEsTUFBTSxFQUFFNVYsRUFIWjtBQUlJTSxRQUFBQSxNQUFNLEVBQUUsS0FBS0EsTUFKakI7QUFLSTZELFFBQUFBLE9BQU8sRUFBRSxLQUFLQSxPQUxsQjtBQU1JSSxRQUFBQSxhQUFhLEVBQUUsS0FBS0E7QUFOeEIsT0FEc0gsQ0FBdEcsQ0FBcEI7QUFVQXdaLE1BQUFBLFNBQVMsQ0FBQ3prQixLQUFWLEdBQWtCQSxLQUFsQjtBQUNBLFdBQUtpaEIsVUFBTCxDQUFnQmhSLEtBQWhCLElBQXlCd1UsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDbk4sUUFBaEMsRUFBMENlLEtBQTFDLEVBQWlENVQsRUFBakQsRUFBcUQwYyxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRHhWLEVBQUFBLEdBQUcsQ0FBQ3FDLEtBQUQsRUFBUXNKLFFBQVIsRUFBa0JlLEtBQWxCLEVBQXlCNVQsRUFBekIsRUFBNkI0WCxJQUE3QixFQUFtQ3FILFdBQW5DLEVBQWdEO0FBQy9DLFNBQUtuRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS3ZQLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtzSixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtlLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtnQyxNQUFMLEdBQWM1VixFQUFkO0FBQ0EsV0FBTyxLQUFLa2QsTUFBTCxDQUFZdEYsSUFBWixFQUFrQnFILFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ3phLEVBQUQsRUFBSztBQUNqQixTQUFLNFUsSUFBTCxHQUFZNVUsRUFBWjtBQUNIOztBQUNEdVgsRUFBQUEsZUFBZSxDQUFDL2MsRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLNFYsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDc0ssWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUt2SyxNQUFMLENBQVlILEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUMySyxZQUFELEVBQWVDLE9BQWYsSUFBMEJyZ0IsRUFBRSxDQUFDeVYsS0FBSCxDQUFTLEdBQVQsQ0FBaEMsQ0FIZ0IsQ0FJaEI7O0FBQ0EsUUFBSTRLLE9BQU8sSUFBSUgsWUFBWSxLQUFLRSxZQUE1QixJQUE0Q0QsT0FBTyxLQUFLRSxPQUE1RCxFQUFxRTtBQUNqRSxhQUFPLElBQVA7QUFDSCxLQVBlLENBUWhCOzs7QUFDQSxRQUFJSCxZQUFZLEtBQUtFLFlBQXJCLEVBQW1DO0FBQy9CLGFBQU8sS0FBUDtBQUNILEtBWGUsQ0FZaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9ELE9BQU8sS0FBS0UsT0FBbkI7QUFDSDs7QUFDRHBELEVBQUFBLFlBQVksQ0FBQ2pkLEVBQUQsRUFBSztBQUNiLFVBQU0sR0FBR2tXLElBQUgsSUFBV2xXLEVBQUUsQ0FBQ3lWLEtBQUgsQ0FBUyxHQUFULENBQWpCLENBRGEsQ0FFYjtBQUNBOztBQUNBLFFBQUlTLElBQUksS0FBSyxFQUFULElBQWVBLElBQUksS0FBSyxLQUE1QixFQUFtQztBQUMvQjNRLE1BQUFBLE1BQU0sQ0FBQythLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQTtBQUNILEtBUFksQ0FRYjs7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHemtCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qm1hLElBQXhCLENBQWI7O0FBQ0EsUUFBSXFLLElBQUosRUFBVTtBQUNOQSxNQUFBQSxJQUFJLENBQUNDLGNBQUw7QUFDQTtBQUNILEtBYlksQ0FjYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUcza0IsUUFBUSxDQUFDNGtCLGlCQUFULENBQTJCeEssSUFBM0IsRUFBaUMsQ0FBakMsQ0FBZjs7QUFDQSxRQUFJdUssTUFBSixFQUFZO0FBQ1JBLE1BQUFBLE1BQU0sQ0FBQ0QsY0FBUDtBQUNIO0FBQ0o7O0FBQ0RqRCxFQUFBQSxRQUFRLENBQUMzSCxNQUFELEVBQVM7QUFDYixXQUFPLEtBQUtBLE1BQUwsS0FBZ0JBLE1BQXZCO0FBQ0g7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUFvQixRQUFSOVYsUUFBUSxDQUFDdVQsR0FBRCxFQUFNdUMsTUFBTSxHQUFHdkMsR0FBZixFQUFvQnBULE9BQU8sR0FBRyxFQUE5QixFQUNiO0FBQ0MsUUFBSWtkLE1BQU0sR0FBRyxDQUFDLEdBQUd6TCxpQkFBSixFQUF1QndJLGdCQUF2QixDQUF3QzdHLEdBQXhDLENBQWI7QUFDQSxRQUFJO0FBQUVSLE1BQUFBLFFBQVEsRUFBRThOO0FBQVosUUFBMkJ4RCxNQUEvQjs7QUFDQSxRQUFJcFksS0FBSixFQUFxQyxFQVdwQzs7QUFDRCxVQUFNMlIsS0FBSyxHQUFHLE1BQU0sS0FBSzZCLFVBQUwsQ0FBZ0I4RSxXQUFoQixFQUFwQjtBQUNBLFFBQUkzYSxVQUFVLEdBQUdrVCxNQUFqQjs7QUFDQSxRQUFJN1EsS0FBSixFQUErRCxFQUEvRCxNQWFPO0FBQ0hvWSxNQUFBQSxNQUFNLENBQUN0SyxRQUFQLEdBQWtCNEQsbUJBQW1CLENBQUMwRyxNQUFNLENBQUN0SyxRQUFSLEVBQWtCNkQsS0FBbEIsQ0FBckM7O0FBQ0EsVUFBSXlHLE1BQU0sQ0FBQ3RLLFFBQVAsS0FBb0I4TixTQUF4QixFQUFtQztBQUMvQkEsUUFBQUEsU0FBUyxHQUFHeEQsTUFBTSxDQUFDdEssUUFBbkI7QUFDQXNLLFFBQUFBLE1BQU0sQ0FBQ3RLLFFBQVAsR0FBa0I4TixTQUFsQjtBQUNBdE4sUUFBQUEsR0FBRyxHQUFHLENBQUMsR0FBRzdCLE1BQUosRUFBWTRELG9CQUFaLENBQWlDK0gsTUFBakMsQ0FBTjtBQUNIO0FBQ0o7O0FBQ0QsVUFBTTVULEtBQUssR0FBRyxDQUFDLEdBQUc0SCx1QkFBSixFQUE2QnpNLHVCQUE3QixDQUFxRGljLFNBQXJELENBQWQsQ0F0Q0QsQ0F1Q0M7O0FBQ0EsY0FBMkM7QUFDdkM7QUFDSDs7QUFDRCxVQUFNN1osT0FBTyxDQUFDcUUsR0FBUixDQUFZLENBQ2QsS0FBS29OLFVBQUwsQ0FBZ0JxSSxNQUFoQixDQUF1QnJYLEtBQXZCLEVBQThCcEMsSUFBOUIsQ0FBb0MwWixLQUFELElBQVM7QUFDeEMsYUFBT0EsS0FBSyxHQUFHLEtBQUtmLGNBQUwsQ0FBb0IsS0FBS3ZILFVBQUwsQ0FBZ0JxSCxXQUFoQixDQUE0QnZNLEdBQTVCLEVBQWlDM1EsVUFBakMsRUFBNkMsSUFBN0MsRUFBbUQsT0FBT3pDLE9BQU8sQ0FBQ0ssTUFBZixLQUEwQixXQUExQixHQUF3Q0wsT0FBTyxDQUFDSyxNQUFoRCxHQUF5RCxLQUFLQSxNQUFqSCxDQUFwQixDQUFILEdBQW1KLEtBQS9KO0FBQ0gsS0FGRCxDQURjLEVBSWQsS0FBS2lZLFVBQUwsQ0FBZ0J0WSxPQUFPLENBQUM4RCxRQUFSLEdBQW1CLFVBQW5CLEdBQWdDLFVBQWhELEVBQTREd0YsS0FBNUQsQ0FKYyxDQUFaLENBQU47QUFNSDs7QUFDbUIsUUFBZGtWLGNBQWMsQ0FBQ2xWLEtBQUQsRUFBUTtBQUN4QixRQUFJUCxTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTThYLE1BQU0sR0FBRyxLQUFLL0YsR0FBTCxHQUFXLE1BQUk7QUFDMUIvUixNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsVUFBTStYLGVBQWUsR0FBRyxNQUFNLEtBQUt4SSxVQUFMLENBQWdCeUksUUFBaEIsQ0FBeUJ6WCxLQUF6QixDQUE5Qjs7QUFDQSxRQUFJUCxTQUFKLEVBQWU7QUFDWCxZQUFNOEIsS0FBSyxHQUFHLElBQUl2SixLQUFKLENBQVcsd0NBQXVDZ0ksS0FBTSxHQUF4RCxDQUFkO0FBQ0F1QixNQUFBQSxLQUFLLENBQUM5QixTQUFOLEdBQWtCLElBQWxCO0FBQ0EsWUFBTThCLEtBQU47QUFDSDs7QUFDRCxRQUFJZ1csTUFBTSxLQUFLLEtBQUsvRixHQUFwQixFQUF5QjtBQUNyQixXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFdBQU9nRyxlQUFQO0FBQ0g7O0FBQ0RsQixFQUFBQSxRQUFRLENBQUNqVixFQUFELEVBQUs7QUFDVCxRQUFJNUIsU0FBUyxHQUFHLEtBQWhCOztBQUNBLFVBQU04WCxNQUFNLEdBQUcsTUFBSTtBQUNmOVgsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDSCxLQUZEOztBQUdBLFNBQUsrUixHQUFMLEdBQVcrRixNQUFYO0FBQ0EsV0FBT2xXLEVBQUUsR0FBR3pELElBQUwsQ0FBV3lRLElBQUQsSUFBUTtBQUNyQixVQUFJa0osTUFBTSxLQUFLLEtBQUsvRixHQUFwQixFQUF5QjtBQUNyQixhQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIOztBQUNELFVBQUkvUixTQUFKLEVBQWU7QUFDWCxjQUFNZ1gsSUFBSSxHQUFHLElBQUl6ZSxLQUFKLENBQVUsaUNBQVYsQ0FBYjtBQUNBeWUsUUFBQUEsSUFBSSxDQUFDaFgsU0FBTCxHQUFpQixJQUFqQjtBQUNBLGNBQU1nWCxJQUFOO0FBQ0g7O0FBQ0QsYUFBT3BJLElBQVA7QUFDSCxLQVZNLENBQVA7QUFXSDs7QUFDRGtJLEVBQUFBLGNBQWMsQ0FBQy9ILFFBQUQsRUFBVztBQUNyQixVQUFNO0FBQUVoWSxNQUFBQSxJQUFJLEVBQUVraEI7QUFBUixRQUFzQixJQUFJeE4sR0FBSixDQUFRc0UsUUFBUixFQUFrQnhTLE1BQU0sQ0FBQytWLFFBQVAsQ0FBZ0J2YixJQUFsQyxDQUE1Qjs7QUFDQSxRQUFJLEtBQUosRUFBb0YsRUFFbkY7O0FBQ0QsV0FBTytYLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUtvQyxLQUFoQixDQUFiLENBQW9DaFQsSUFBcEMsQ0FBMEN5USxJQUFELElBQVE7QUFDcEQsV0FBS29CLEdBQUwsQ0FBU2lJLFFBQVQsSUFBcUJySixJQUFyQjtBQUNBLGFBQU9BLElBQVA7QUFDSCxLQUhNLENBQVA7QUFJSDs7QUFDRG1JLEVBQUFBLGNBQWMsQ0FBQ2hJLFFBQUQsRUFBVztBQUNyQixVQUFNO0FBQUVoWSxNQUFBQSxJQUFJLEVBQUVtaEI7QUFBUixRQUF5QixJQUFJek4sR0FBSixDQUFRc0UsUUFBUixFQUFrQnhTLE1BQU0sQ0FBQytWLFFBQVAsQ0FBZ0J2YixJQUFsQyxDQUEvQjs7QUFDQSxRQUFJLEtBQUtrWixHQUFMLENBQVNpSSxXQUFULENBQUosRUFBMkI7QUFDdkIsYUFBTyxLQUFLakksR0FBTCxDQUFTaUksV0FBVCxDQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFLakksR0FBTCxDQUFTaUksV0FBVCxJQUF3QnBKLGFBQWEsQ0FBQ0MsUUFBRCxFQUFXLEtBQUtvQyxLQUFoQixDQUFiLENBQW9DaFQsSUFBcEMsQ0FBMEN5USxJQUFELElBQVE7QUFDNUUsYUFBTyxLQUFLcUIsR0FBTCxDQUFTaUksV0FBVCxDQUFQO0FBQ0EsYUFBT3RKLElBQVA7QUFDSCxLQUg4QixFQUc1QnpYLEtBSDRCLENBR3JCNmYsSUFBRCxJQUFRO0FBQ2IsYUFBTyxLQUFLL0csR0FBTCxDQUFTaUksV0FBVCxDQUFQO0FBQ0EsWUFBTWxCLElBQU47QUFDSCxLQU44QixDQUEvQjtBQU9IOztBQUNEM1EsRUFBQUEsZUFBZSxDQUFDcUosU0FBRCxFQUFZeUksR0FBWixFQUFpQjtBQUM1QixVQUFNO0FBQUV6SSxNQUFBQSxTQUFTLEVBQUUwSTtBQUFiLFFBQXVCLEtBQUs3RyxVQUFMLENBQWdCLE9BQWhCLENBQTdCOztBQUNBLFVBQU04RyxPQUFPLEdBQUcsS0FBS3JHLFFBQUwsQ0FBY29HLElBQWQsQ0FBaEI7O0FBQ0FELElBQUFBLEdBQUcsQ0FBQ0UsT0FBSixHQUFjQSxPQUFkO0FBQ0EsV0FBTyxDQUFDLEdBQUc3UCxNQUFKLEVBQVk4UCxtQkFBWixDQUFnQ0YsSUFBaEMsRUFBc0M7QUFDekNDLE1BQUFBLE9BRHlDO0FBRXpDM0ksTUFBQUEsU0FGeUM7QUFHekM1YSxNQUFBQSxNQUFNLEVBQUUsSUFIaUM7QUFJekNxakIsTUFBQUE7QUFKeUMsS0FBdEMsQ0FBUDtBQU1IOztBQUNEdkUsRUFBQUEsa0JBQWtCLENBQUM1YyxFQUFELEVBQUswYyxVQUFMLEVBQWlCO0FBQy9CLFFBQUksS0FBSzNCLEdBQVQsRUFBYztBQUNWOUMsTUFBQUEsTUFBTSxDQUFDdkwsTUFBUCxDQUFjc1EsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUM3SyxzQkFBc0IsRUFBN0QsRUFBaUVuUyxFQUFqRSxFQUFxRTBjLFVBQXJFO0FBQ0EsV0FBSzNCLEdBQUw7QUFDQSxXQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNIO0FBQ0o7O0FBQ0RtQyxFQUFBQSxNQUFNLENBQUN0RixJQUFELEVBQU9xSCxXQUFQLEVBQW9CO0FBQ3RCLFdBQU8sS0FBS25FLEdBQUwsQ0FBU2xELElBQVQsRUFBZSxLQUFLMkMsVUFBTCxDQUFnQixPQUFoQixFQUF5QjdCLFNBQXhDLEVBQW1EdUcsV0FBbkQsQ0FBUDtBQUNIOztBQXZ2QlE7O0FBeXZCYmhILE1BQU0sQ0FBQ3ZMLE1BQVAsR0FBZ0IsQ0FBQyxHQUFHNkUsS0FBSixFQUFXblMsT0FBWCxFQUFoQjtBQUNBRCxlQUFBLEdBQWtCOFksTUFBbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZpQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTs7QUFFQTtDQVdBOzs7O0FBRUEsU0FBUzZKLGNBQVQsR0FBMEI7QUFDeEI7QUFDQTtBQUVBLFFBQU07QUFBQSxPQUFDcGxCLE1BQUQ7QUFBQSxPQUFTcWxCO0FBQVQsTUFBc0JsbEIsK0NBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNzVCxTQUFEO0FBQUEsT0FBWTZSO0FBQVosTUFBNEJubEIsK0NBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpTyxLQUFEO0FBQUEsT0FBUW1YO0FBQVIsTUFBb0JwbEIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNxbEIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0J0bEIsK0NBQVEsRUFBdEM7QUFFQSxRQUFNdWxCLGtCQUFrQixHQUFHN2Usa0RBQVcsQ0FBQyxZQUFZO0FBQ2pEeWUsSUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBQyxJQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBRUEsVUFBTUksSUFBSSxHQUFHUixzREFBTyxFQUFwQjtBQUNBLFVBQU1TLEVBQUUsR0FBR1osOERBQVcsRUFBdEIsQ0FMaUQsQ0FLdkI7O0FBRTFCLFVBQU1hLElBQUksR0FBR3RmLHNEQUFHLENBQUNxZixFQUFELEVBQUssYUFBYSxLQUFiLEdBQXFCLFNBQTFCLENBQWhCO0FBQ0FYLElBQUFBLDBEQUFPLENBQUNZLElBQUQsRUFBUUMsUUFBRCxJQUFjO0FBQzFCLFlBQU01SyxJQUFJLEdBQUc0SyxRQUFRLENBQUNDLEdBQVQsRUFBYixDQUQwQixDQUUxQjtBQUNELEtBSE0sQ0FBUCxDQVJpRCxDQWFqRDs7QUFFQSxVQUFNQyxLQUFLLEdBQUd6ZixzREFBRyxDQUFDeWUsOERBQVcsRUFBWixDQUFqQjtBQUVBOWEsSUFBQUEsc0RBQUcsQ0FBQy9ELHdEQUFLLENBQUM2ZixLQUFELEVBQVMsVUFBUyxLQUFNLEVBQXhCLENBQU4sQ0FBSCxDQUNHdmIsSUFESCxDQUNTcWIsUUFBRCxJQUFjO0FBQ2xCLFVBQUlBLFFBQVEsQ0FBQ0csTUFBVCxFQUFKLEVBQXVCO0FBQ3JCM21CLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZdW1CLFFBQVEsQ0FBQ0MsR0FBVCxLQUFpQixtQkFBN0IsRUFEcUIsQ0FFckI7O0FBQ0F6bUIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRCxPQUpELE1BSU87QUFDTEQsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRDtBQUNGLEtBVEgsRUFVR2tFLEtBVkgsQ0FVVTJLLEtBQUQsSUFBVztBQUNoQjlPLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZNk8sS0FBWjtBQUNELEtBWkgsRUFqQmlELENBK0JqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFFBQUk7QUFDRixZQUFNOFgsUUFBUSxHQUFHLE1BQU10WSxLQUFLLENBQzFCLCtFQUQwQixDQUUxQjtBQUNBO0FBSDBCLE9BQTVCOztBQUtBLFVBQUksQ0FBQ3NZLFFBQVEsQ0FBQ3JZLEVBQWQsRUFBa0I7QUFDaEIsY0FBTSxJQUFJaEosS0FBSixDQUFVLCtCQUFWLENBQU47QUFDRDs7QUFDRCxZQUFNcVcsSUFBSSxHQUFHLE1BQU1nTCxRQUFRLENBQUNqTCxJQUFULEVBQW5CLENBVEUsQ0FVRjs7QUFFQSxZQUFNa0wsWUFBWSxHQUFHLEVBQXJCOztBQUVBLFdBQUssTUFBTXJoQixHQUFYLElBQWtCb1csSUFBbEIsRUFBd0I7QUFDdEJpTCxRQUFBQSxZQUFZLENBQUM3a0IsSUFBYixDQUFrQjtBQUNoQnBCLFVBQUFBLEVBQUUsRUFBRTRFLEdBRFk7QUFFaEIvSCxVQUFBQSxlQUFlLEVBQUVtZSxJQUFJLENBQUNwVyxHQUFELENBQUosQ0FBVS9ILGVBRlg7QUFHaEJELFVBQUFBLFNBQVMsRUFBRW9lLElBQUksQ0FBQ3BXLEdBQUQsQ0FBSixDQUFVaEksU0FITCxDQUloQjtBQUNBOztBQUxnQixTQUFsQixFQURzQixDQVF0QjtBQUNEOztBQUVEdW9CLE1BQUFBLFNBQVMsQ0FBQ2MsWUFBRCxDQUFUO0FBQ0QsS0ExQkQsQ0EwQkUsT0FBTy9YLEtBQVAsRUFBYztBQUNkbVgsTUFBQUEsUUFBUSxDQUFDblgsS0FBSyxDQUFDcUMsT0FBUCxDQUFSO0FBQ0Q7O0FBQ0Q2VSxJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsR0F0RXFDLEVBc0VuQyxFQXRFbUMsQ0FBdEM7QUF3RUF2ZSxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZDJlLElBQUFBLGtCQUFrQjtBQUNuQixHQUZRLEVBRU4sQ0FBQ0Esa0JBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQUlqa0IsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFkOztBQUVBLE1BQUl6QixNQUFNLENBQUN1VyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ3JCOVUsSUFBQUEsT0FBTyxnQkFBRyw4REFBQyxzRkFBRDtBQUFZLFlBQU0sRUFBRXpCO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUVELE1BQUlvTyxLQUFKLEVBQVc7QUFDVDNNLElBQUFBLE9BQU8sZ0JBQUc7QUFBQSxnQkFBSTJNO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBRUQsTUFBSXFGLFNBQUosRUFBZTtBQUNiaFMsSUFBQUEsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBQ0RuQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWtDLE9BQVo7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixFQVdHK2pCLE9BWEgsZUFZRTtBQUFBLGdCQUFVL2pCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztBQUVELGlFQUFlMmpCLGNBQWY7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWkE7QUFFQTtBQUNBO0FBRUE7OztBQUVBLE1BQU1nQixXQUFXLEdBQUl4cEIsS0FBRCxJQUFXO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFSCxvRkFBaEI7QUFBQSw0QkFtQkUsOERBQUMsK0RBQUQ7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFLLEVBQUUsRUFBbkM7QUFBdUMsY0FBTSxFQUFFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQkYsZUEwQkUsOERBQUMsK0RBQUQ7QUFBTyxpQkFBVyxFQUFFQSxvRkFBcEI7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixhQUFLLEVBQUUsRUFBcEM7QUFBd0MsY0FBTSxFQUFFO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkYsZUErQkUsOERBQUMsK0RBQUQ7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxnQkFBVDtBQUEwQixhQUFLLEVBQUUsRUFBakM7QUFBcUMsY0FBTSxFQUFFO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JGLGVBbUNFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMsdUJBQVQ7QUFBaUMsYUFBSyxFQUFFLEVBQXhDO0FBQTRDLGNBQU0sRUFBRTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DRixlQXdDRSw4REFBQywrREFBRDtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFDLGdCQUFUO0FBQTBCLGFBQUssRUFBRSxFQUFqQztBQUFxQyxjQUFNLEVBQUU7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0YsZUE0Q0UsOERBQUMsK0RBQUQ7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxjQUFUO0FBQXdCLGFBQUssRUFBRSxFQUEvQjtBQUFtQyxjQUFNLEVBQUU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0YsZUFnREUsOERBQUMsK0RBQUQ7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBQyxrQkFBVDtBQUE0QixhQUFLLEVBQUUsRUFBbkM7QUFBdUMsY0FBTSxFQUFFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaERGLGVBb0RFLDhEQUFDLCtEQUFEO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUMscUJBQVQ7QUFBK0IsYUFBSyxFQUFFLEVBQXRDO0FBQTBDLGNBQU0sRUFBRTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsc0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZHRCxDQTlHRDs7QUFnSEEsaUVBQWUycEIsV0FBZjtBQUVBO0FBQ0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJRDs7O0FBRUEsTUFBTUUsU0FBUyxHQUFJMXBCLEtBQUQsSUFBVztBQUMzQixzQkFDRTtBQUFBLDJCQUdFO0FBQU0sZUFBUyxFQUFFSCwwRkFBakI7QUFBQSw2QkFDRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0FBV0E2cEIsU0FBUyxDQUFDRSxTQUFWLEdBQXNCLEVBQXRCO0FBRUEsaUVBQWVGLFNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQztBQUNEO0FBQ0E7OztBQUVBLE1BQU1HLGVBQWUsR0FBSTdwQixLQUFELElBQVc7QUFDbEMsc0JBQ0MsOERBQUMsK0RBQUQ7QUFBTyxhQUFTLEVBQUVILG9GQUFsQjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQSxvRkFBaEI7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFLQztBQUFBLDhCQUNDO0FBQUssaUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBTyxpQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQU1DO0FBQUssaUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBTyxpQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORCxlQVVDO0FBQUssaUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBTyxpQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFVLGNBQUksRUFBQyxHQUFmO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRCxlQWNDO0FBQUssaUJBQVMsRUFBRUEsb0ZBQWhCO0FBQUEsZ0NBQ0M7QUFBTyxpQkFBTyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFPLGNBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRCxlQWtCQztBQUFLLGlCQUFTLEVBQUVBLG9GQUFoQjtBQUFBLGdDQUNDO0FBQU8saUJBQU8sRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBTyxjQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFFLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbEJELGVBdUJDLDhEQUFDLGlFQUFEO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQWlDQSxDQWxDRDs7QUFvQ0EsaUVBQWVncUIsZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtDQUVBOztBQUVBOzs7QUFTQSxTQUFTSyxtQkFBVCxHQUErQjtBQUM3QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQjdtQiwrQ0FBUSxFQUFsQztBQUVBLFFBQU15bEIsRUFBRSxHQUFHWiw4REFBVyxFQUF0QjtBQUNBMWxCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZcW1CLEVBQUUsR0FBRyxvQkFBakIsRUFONkIsQ0FRN0I7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFFBQU1xQixRQUFRLEdBQUcxZ0Isc0RBQUcsQ0FBQ3FmLEVBQUQsRUFBSyxXQUFXLHFCQUFoQixDQUFwQjtBQUNBLFFBQU1zQixPQUFPLEdBQUc1bEIsdURBQUksQ0FBQzJsQixRQUFELENBQXBCO0FBQ0F6YyxFQUFBQSxzREFBRyxDQUFDMGMsT0FBRCxFQUFVO0FBQ1hyVSxJQUFBQSxJQUFJLEVBQUUsaUJBREs7QUFFWDVRLElBQUFBLElBQUksRUFBRTtBQUZLLEdBQVYsQ0FBSDtBQUlBM0MsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkybkIsT0FBTyxDQUFDcGlCLEdBQXBCLEVBN0I2QixDQStCN0I7QUFFQTs7QUFDQSxXQUFTcWlCLFFBQVQsQ0FBa0JDLE1BQWxCLEVBQTBCQyxPQUExQixFQUFtQ0MsS0FBbkMsRUFBMEM7QUFDeEMsVUFBTTFCLEVBQUUsR0FBR1osOERBQVcsRUFBdEI7QUFDQXhhLElBQUFBLHNEQUFHLENBQUNqRSxzREFBRyxDQUFDcWYsRUFBRCxFQUFLLFlBQVkscUJBQWpCLENBQUosRUFBNkM7QUFDOUM7QUFDQXdCLE1BQUFBLE1BQU0sRUFBRSx5QkFGc0M7QUFHOUNDLE1BQUFBLE9BQU8sRUFBRSxpQkFIcUM7QUFJOUNFLE1BQUFBLEtBQUssRUFBRTtBQUp1QyxLQUE3QyxDQUFIO0FBTUQ7O0FBRUQsUUFBTUMsVUFBVSxHQUFHamhCLHNEQUFHLENBQUNxZixFQUFELEVBQUssWUFBWSxxQkFBakIsQ0FBdEI7QUFDQWUsRUFBQUEsK0RBQVksQ0FBQ2EsVUFBRCxFQUFjdE0sSUFBRCxJQUFVO0FBQ2pDdU0sSUFBQUEsaUJBQWlCLENBQ2ZDLFdBRGUsRUFFZnhNLElBQUksQ0FBQ3BXLEdBRlUsRUFHZm9XLElBQUksQ0FBQzZLLEdBQUwsR0FBV2pZLElBSEksRUFJZm9OLElBQUksQ0FBQzZLLEdBQUwsR0FBVzRCLE1BSkksQ0FBakI7QUFNRCxHQVBXLENBQVo7QUFTQWYsRUFBQUEsaUVBQWMsQ0FBQ1ksVUFBRCxFQUFjdE0sSUFBRCxJQUFVO0FBQ25DME0sSUFBQUEsaUJBQWlCLENBQ2ZGLFdBRGUsRUFFZnhNLElBQUksQ0FBQ3BXLEdBRlUsRUFHZm9XLElBQUksQ0FBQzZLLEdBQUwsR0FBV2pZLElBSEksRUFJZm9OLElBQUksQ0FBQzZLLEdBQUwsR0FBVzRCLE1BSkksQ0FBakI7QUFNRCxHQVBhLENBQWQ7QUFRQWQsRUFBQUEsaUVBQWMsQ0FBQ1csVUFBRCxFQUFjdE0sSUFBRCxJQUFVO0FBQ25DMk0sSUFBQUEsb0JBQW9CLENBQ2xCSCxXQURrQixFQUVsQnhNLElBQUksQ0FBQ3BXLEdBRmEsRUFHbEJvVyxJQUFJLENBQUM2SyxHQUFMLEdBQVdqWSxJQUhPLEVBSWxCb04sSUFBSSxDQUFDNkssR0FBTCxHQUFXNEIsTUFKTyxDQUFwQjtBQU1ELEdBUGEsQ0FBZDs7QUFTQSxpQkFBZUcsV0FBZixDQUEyQnRvQixlQUEzQixFQUE0QztBQUMxQyxVQUFNdW9CLFFBQVEsR0FBRyxNQUFNbmEsS0FBSyxFQUMxQjtBQUNBO0FBRUE7QUFDQSxtRkFMMEIsRUFNMUI7QUFDQTtBQUVBO0FBQ0E7QUFDRXlSLE1BQUFBLE1BQU0sRUFBRSxNQURWO0FBRUVuVCxNQUFBQSxJQUFJLEVBQUU4USxJQUFJLENBQUNDLFNBQUwsQ0FBZXpkLGVBQWYsQ0FGUjtBQUdFd29CLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSFgsS0FWMEIsQ0FBNUI7O0FBa0JBLFFBQUksQ0FBQ0QsUUFBUSxDQUFDbGEsRUFBZCxFQUFrQjtBQUNoQixZQUFNLElBQUloSixLQUFKLENBQVUsT0FBVixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTXFXLElBQUksR0FBRyxNQUFNNk0sUUFBUSxDQUFDOU0sSUFBVCxFQUFuQjtBQUNBM2IsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkyYixJQUFaLEVBdkIwQyxDQXdCMUM7QUFDRDs7QUFDRCxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDJCQUNFO0FBQUEsaUJBQ0c2TCxLQURILGVBRUUsOERBQUMsMEZBQUQ7QUFBZSx1QkFBZSxFQUFFZTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0FBRUQsaUVBQWVoQixtQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOzs7O0FBRUEsU0FBU2ptQixhQUFULENBQXVCakUsS0FBdkIsRUFBOEI7QUFDNUIsc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSw0QkFNRSw4REFBQyxzRUFBRDtBQUNFLFdBQUssRUFBRUEsS0FBSyxDQUFDeXJCLFVBQU4sQ0FBaUI3bUIsS0FEMUI7QUFFRSxXQUFLLEVBQUU1RSxLQUFLLENBQUN5ckIsVUFBTixDQUFpQnRuQixLQUYxQjtBQUdFLGFBQU8sRUFBRW5FLEtBQUssQ0FBQ3lyQixVQUFOLENBQWlCcm5CLE9BSDVCO0FBSUUsaUJBQVcsRUFBRXBFLEtBQUssQ0FBQ3lyQixVQUFOLENBQWlCeHBCO0FBSmhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVlFLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFO0FBQUEsaUJBQ0csR0FESCxlQUVFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7QUFFTSxlQUFleXBCLGNBQWYsR0FBZ0M7QUFDckMsUUFBTUMsTUFBTSxHQUFHLE1BQU1MLHdEQUFBLENBQ25CLHFHQURtQixDQUFyQjtBQUdBLFFBQU10QyxFQUFFLEdBQUcyQyxNQUFNLENBQUMzQyxFQUFQLEVBQVg7QUFFQSxRQUFNNkMsaUJBQWlCLEdBQUc3QyxFQUFFLENBQUM4QyxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU03bUIsT0FBTyxHQUFHLE1BQU00bUIsaUJBQWlCLENBQUNFLElBQWxCLENBQXVCLEVBQXZCLEVBQTJCO0FBQUVDLElBQUFBLEdBQUcsRUFBRTtBQUFQLEdBQTNCLEVBQXVDQyxPQUF2QyxFQUF0QjtBQUVBTixFQUFBQSxNQUFNLENBQUNPLEtBQVA7QUFFQSxTQUFPO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxLQURMO0FBQ1k7QUFDakJDLElBQUFBLEtBQUssRUFBRW5uQixPQUFPLENBQUM1QixHQUFSLENBQWE2QixNQUFELEtBQWE7QUFDOUI0VixNQUFBQSxNQUFNLEVBQUU7QUFBRXVSLFFBQUFBLFFBQVEsRUFBRW5uQixNQUFNLENBQUM4bUIsR0FBUCxDQUFXTSxRQUFYO0FBQVo7QUFEc0IsS0FBYixDQUFaO0FBRkYsR0FBUDtBQU1EO0FBRU0sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUM7QUFFQSxRQUFNSCxRQUFRLEdBQUdHLE9BQU8sQ0FBQzFSLE1BQVIsQ0FBZXVSLFFBQWhDO0FBRUEsUUFBTVYsTUFBTSxHQUFHLE1BQU1MLHdEQUFBLENBQ25CLHFHQURtQixDQUFyQjtBQUdBLFFBQU10QyxFQUFFLEdBQUcyQyxNQUFNLENBQUMzQyxFQUFQLEVBQVg7QUFFQSxRQUFNNkMsaUJBQWlCLEdBQUc3QyxFQUFFLENBQUM4QyxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU1XLGNBQWMsR0FBRyxNQUFNWixpQkFBaUIsQ0FBQ2EsT0FBbEIsQ0FBMEI7QUFDckRWLElBQUFBLEdBQUcsRUFBRVQsaURBQVEsQ0FBQ2MsUUFBRDtBQUR3QyxHQUExQixDQUE3QjtBQUlBVixFQUFBQSxNQUFNLENBQUNPLEtBQVA7QUFFQSxTQUFPO0FBQ0xsc0IsSUFBQUEsS0FBSyxFQUFFO0FBQ0x5ckIsTUFBQUEsVUFBVSxFQUFFO0FBQ1Zub0IsUUFBQUEsRUFBRSxFQUFFbXBCLGNBQWMsQ0FBQ1QsR0FBZixDQUFtQk0sUUFBbkIsRUFETTtBQUVWbm9CLFFBQUFBLEtBQUssRUFBRXNvQixjQUFjLENBQUN0b0IsS0FGWjtBQUdWQyxRQUFBQSxPQUFPLEVBQUVxb0IsY0FBYyxDQUFDcm9CLE9BSGQ7QUFJVlEsUUFBQUEsS0FBSyxFQUFFNm5CLGNBQWMsQ0FBQzduQixLQUpaO0FBS1YzQyxRQUFBQSxXQUFXLEVBQUV3cUIsY0FBYyxDQUFDeHFCO0FBTGxCO0FBRFA7QUFERixHQUFQO0FBV0Q7QUFFRCxpRUFBZWdDLGFBQWYsR0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBOztBQUVBLE1BQU0wb0IsaUJBQWlCLEdBQUd2VyxtREFBTyxDQUMvQixNQUFNLDBOQUR5QixFQUUvQjtBQUNFb0IsRUFBQUEsR0FBRyxFQUFFLEtBRFA7QUFBQTtBQUFBLHdDQURhLHNGQUNiO0FBQUEsa0NBRGEsdUNBQ2I7QUFBQTtBQUFBLENBRitCLENBQWpDO0FBT2UsU0FBU29WLE1BQVQsR0FBa0I7QUFDL0Isc0JBQ0U7QUFBQSx3Q0FBZSxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQTtBQUFBLDhCQUNFO0FBQUEsNENBQWMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsaUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0hEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsTUFBTUcsU0FBUyxHQUFJL3NCLEtBQUQsSUFBVztBQUMzQixzQkFDRSwrREFBQywyQ0FBRDtBQUFBLDRCQUNFLCtEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBY0UsK0RBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXdCRCxDQXpCRCxFQTJCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFTyxlQUFldXNCLGNBQWYsR0FBZ0M7QUFDckM7QUFFQTtBQUNBO0FBQ0EsUUFBTVosTUFBTSxHQUFHLE1BQU1MLHdEQUFBLENBQ25CLHFHQURtQixDQUFyQjtBQUdBLFFBQU10QyxFQUFFLEdBQUcyQyxNQUFNLENBQUMzQyxFQUFQLEVBQVgsQ0FScUMsQ0FRYjs7QUFDeEIsUUFBTWdFLGdCQUFnQixHQUFHaEUsRUFBRSxDQUFDOEMsVUFBSCxDQUFjLFNBQWQsQ0FBekIsQ0FUcUMsQ0FTYztBQUNuRDs7QUFDQSxRQUFNbUIsU0FBUyxHQUFHLE1BQU1ELGdCQUFnQixDQUFDakIsSUFBakIsR0FBd0JFLE9BQXhCLEVBQXhCO0FBRUFOLEVBQUFBLE1BQU0sQ0FBQ08sS0FBUDtBQUVBLFNBQU87QUFDTGxzQixJQUFBQSxLQUFLLEVBQUU7QUFDTGlGLE1BQUFBLE9BQU8sRUFBRWdvQixTQUFTLENBQUM1cEIsR0FBVixDQUFlNkIsTUFBRCxLQUFhO0FBQ2xDZixRQUFBQSxLQUFLLEVBQUVlLE1BQU0sQ0FBQ2YsS0FEb0I7QUFFbENDLFFBQUFBLE9BQU8sRUFBRWMsTUFBTSxDQUFDZCxPQUZrQjtBQUdsQ1EsUUFBQUEsS0FBSyxFQUFFTSxNQUFNLENBQUNOLEtBSG9CO0FBSWxDdEIsUUFBQUEsRUFBRSxFQUFFNEIsTUFBTSxDQUFDOG1CLEdBQVAsQ0FBV00sUUFBWDtBQUo4QixPQUFiLENBQWQ7QUFESixLQURGO0FBVUxZLElBQUFBLFVBQVUsRUFBRSxHQVZQLENBVVk7O0FBVlosR0FBUDtBQVlEO0FBRUQsaUVBQWVILFNBQWYsR0FFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQSx1SEFBcUQ7Ozs7Ozs7Ozs7O0FDQXJELHlHQUE4Qzs7Ozs7Ozs7Ozs7O0FDQTlDOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvUm91dGluZ1BhZ2UuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9jaG9yZS9DaG9yZS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3Jlc0Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2RhdGFGbG93L2Nob3JlcmVnaXN0cmVhdGlvbi9jaG9yZUxpc3QuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0LmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9DYXJkLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9jYXJ0cy9DYXJ0cy5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvcGFnZXMvUGFnZXMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL0ZldGNoaW5nRnJvbURCLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvSG91c2VDbGVhbmVyLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvU2VjdXJpdHlTZXJ2aWNlLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvVXBsb2FkaW5nQ2hvcmVzVG9EYi5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9jaGF0cm9vbS5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9jaG9yZS9DaG9yZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL2Nob3JlTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9zZWFyY2hCYXIvU2VhcmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9jYXJ0cy9DYXJ0cy5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9wYWdlcy9QYWdlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9wYWdlcy9wYWdlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJhYmx5L3Byb21pc2VzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hdXRoXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJmaXJlYmFzZS9kYXRhYmFzZVwiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibW9uZ29kYlwiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9pZ25vcmVkfEE6XFxQcm9qZWN0c1xcR2l0a3Jha2VuXFxQcm9qZWN0RXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG4vLyAvLyBpbXBvcnQgUmF3RGF0YSBmcm9tICcuL3BhZ2VzL2hvbWVQYWdlL0hvbWVQYWdlJztcclxuLy8gaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaEJhci9TZWFyY2hCYXInO1xyXG4vLyBpbXBvcnQgSG91c2VDbGVhbmVyIGZyb20gJy4uL3BhZ2VzL0hvdXNlQ2xlYW5lcidcclxuLy8gaW1wb3J0IEZldGNoaW5nRnJvbURCIGZyb20gJy4vZGF0YUZsb3cvZmV0Y2hpbmdGcm9tRGIvRmV0Y2hpbmdGcm9tREInO1xyXG5cclxuXHJcbi8vIC8vIGltcG9ydCBUZXN0V2luZG93IGZyb20gJy4vVGVzdFdpbmRvdyc7XHJcblxyXG4vLyBjb25zdCBSb3V0aW5nUGFnZSA9IChwcm9wcykgPT4ge1xyXG4vLyBcdHJldHVybiAoXHJcbi8vIFx0XHQ8ZGl2PlxyXG4vLyBcdFx0PEJyb3dzZXJSb3V0ZXI+IFxyXG4vLyBcdFx0XHQ8U3dpdGNoPlxyXG4vLyBcdFx0XHRcdDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiPlxyXG4vLyBcdFx0XHRcdFx0PFNlYXJjaEJhciAvPlxyXG4vLyBcdFx0XHRcdFx0PFJhd0RhdGEgLz5cclxuLy8gXHRcdFx0XHQ8L1JvdXRlPlxyXG5cclxuLy8gXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9Ib3VzZUhlbHBcIj5cclxuLy8gXHRcdFx0XHRcdDwgVXBsb2FkaW5nQ2hvcmVzVG9EYi8+XHJcbi8vIFx0XHRcdFx0PC9Sb3V0ZT5cclxuXHJcbi8vIFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvSG91c2VDbGVhbmVyXCI+XHJcbi8vIFx0XHRcdFx0XHQ8VXBsb2FkaW5nQ2hvcmVzVG9EYiAvPlxyXG4vLyBcdFx0XHRcdDwvUm91dGU+XHJcblxyXG4vLyBcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL0dhcmRuZXJcIj5cclxuLy8gXHRcdFx0XHRcdDxIb3VzZUNsZWFuZXIgLz5cclxuLy8gXHRcdFx0XHQ8L1JvdXRlPlxyXG5cclxuLy8gXHRcdFx0XHR7LyogPFJvdXRlIHBhdGg9XCIvU2VjdXJpdHlTZXJ2aWNlXCI+XHJcbi8vIFx0XHRcdFx0XHQ8U2VjdXJpdHlTZXJ2aWNlIC8+XHJcbi8vIFx0XHRcdFx0PC9Sb3V0ZT4gKi99XHJcblxyXG4vLyBcdFx0XHRcdDxSb3V0ZSBwYXRoPVwiL01ldGFsV29ya1wiPlxyXG4vLyBcdFx0XHRcdFx0PEhvdXNlQ2xlYW5lciAvPlxyXG4vLyBcdFx0XHRcdDwvUm91dGU+XHRcclxuLy8gXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9Xb29kV29ya1wiPlxyXG4vLyBcdFx0XHRcdFx0PEF1dGhGb3JtIC8+XHJcbi8vIFx0XHRcdFx0PC9Sb3V0ZT5cclxuXHJcbi8vIFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvV29vZFdvcmtcIj5cclxuLy8gXHRcdFx0XHRcdDxIb3VzZUNsZWFuZXIgLz5cclxuLy8gXHRcdFx0XHQ8L1JvdXRlPlxyXG5cclxuLy8gXHRcdFx0XHQ8Um91dGUgcGF0aD1cIi9QYWludFdvcmtcIj5cclxuLy8gXHRcdFx0XHRcdDxGZXRjaGluZ0Zyb21EQiAvPlxyXG4vLyBcdFx0XHRcdDwvUm91dGU+XHJcblxyXG4vLyBcdFx0XHRcdHsvKiA8Um91dGUgcGF0aD1cIi9TaWduIEluXCI+XHJcbi8vIFx0XHRcdFx0XHQ8QXV0aEZvcm0gIC8+XHJcbi8vIFx0XHRcdFx0PC9Sb3V0ZT4gICovfVxyXG4vLyBcdFx0XHQ8L1N3aXRjaD5cclxuLy8gXHRcdFx0ey8qICAqL31cclxuLy8gXHRcdFx0PC9Ccm93c2VyUm91dGVyPlxyXG4vLyBcdFx0PC9kaXY+XHJcblx0XHRcclxuLy8gXHQpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUm91dGluZ1BhZ2U7XHJcblxyXG5cclxuLy8gXHQvLyA8Um91dGUgcGF0aD1cIi9TaWduSW5cIj5cclxuLy8gXHQvLyBcdFx0XHRcdHsvKiA8U2lnbkluIC8+ICovfVxyXG4vLyBcdC8vIFx0XHRcdFx0PFVzZXIgLz5cclxuLy8gXHQvLyBcdFx0XHQ8L1JvdXRlPiIsIi8vIC8vIGltcG9ydCBBdXRoRm9ybSBmcm9tIFwiLi4vLi4vcGFnZXMvQXV0aEZvcm0wXCI7XHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIGF1dGgsXHJcbi8vICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbi8vICAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4vLyAgIHNpZ25PdXQsXHJcbi8vIH0gZnJvbSBcIi4vZmlyZWJhc2VcIjtcclxuXHJcbi8vIGNvbnN0IEF1dGhlbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuLy8gICB1aWQ6IFwiXCIsIC8vIHdpbGwgbmVlZCB0byBpbXBvcnQgaXQgZnJvbSB0aGUgb3RoZXIgcGFnZVxyXG4vLyAgIGxvZ2luOiAodWlkKSA9PiB7fSxcclxuLy8gICBsb2dvdXQ6ICgpID0+IHt9LFxyXG4vLyAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4vLyB9KTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbi8vICAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4vLyAgIC8vIGlmIHRoZXJlIGlzIGEgdWlkLCB0aGVuIHRoZXJlIGlzIGEgdXNlciBpcyBsb2dnZWRJblxyXG4vLyAgIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF1aWQ7XHJcbi8vICAgLy9pZiB0aGVyZSBpcyBhIHN0cmluZyBmb3IgdGhlIHVpZCB0aGVuIHRoaXMgd2lsbCByZXR1cm4gdHJ1ZVxyXG5cclxuLy8gICBjb25zdCB1c2VySWQgPSAoKSA9PiB7XHJcbi8vICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuLy8gICAgICAgaWYgKHVzZXIpIHtcclxuLy8gICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSB1aWQgZm9yIHRoaXMgbG9nZ2VkIGluIHVzZXJcIiArIHVpZCk7XHJcbi8vICAgICAgICAgTG9nZ2VkSW4gPSB0cnVlO1xyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIC8vTm8gb25lIGlzIHNpZ25lZCBpblxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBsb2dpbkhhbmRsZXIgPSAoKSA9PiB7XHJcbi8vICAgICAvLyBjYWxsIHRoZSBsb2dpbiBzZGtcclxuLy8gICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCkudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuLy8gICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgbG9nSW5IYW5kbGVyIFwiKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGxvZ091dEhhbmRsZXIgPSAoKSA9PiB7XHJcbi8vICAgICAvL2NhbGwgdGhlIGxvZ291dCBzZGtcclxuLy8gICAgIHNpZ25PdXQoYXV0aClcclxuLy8gICAgICAgLnRoZW4oKCkgPT4ge1xyXG4vLyAgICAgICAgIC8vIHB1dCBvdXQgc29tZSB0aGluZyBvbiB0aGUgc2NyZWVuIGZvciB0aGUgdXNlciB0aGF0IGhlIGhhcyBiZWVuIHNpZ25lZCBvdXRcclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgICAgIGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbi8vICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXI7XHJcblxyXG4vLyAgIGNvbnN0IExvZ2dlZEluID0gKHVzZXIpID0+IHtcclxuLy8gICAgIC8vICBjaGVjayBpZiB0aGUgdXNlciBpcyBzdGlsbCBoYXMgYSB1aWQgYW5kIHRoZW4gdSBhcmUgZG9uZVxyXG4vLyAgICAgaWYgKHVzZXIpIHtcclxuLy8gICAgICAgTG9nZ2VkSW4gPSB0cnVlO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIC8vIHRoZSBmaW5hbCByZXN1bHQgb2Ygd2hhdCB0aGUgY29udGV4dCB3aWxsIGJlIGF0IHRoZSBlbmQgb2YgdGhlIGZ1bmN0aW9uIHJlc3VsdGxzXHJcbi8vICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4vLyAgICAgbG9naW46IGxvZ2luSGFuZGxlcixcclxuLy8gICAgIGxvZ291dDogbG9nT3V0SGFuZGxlcixcclxuLy8gICAgIHVpZDogdXNlcklkLFxyXG4vLyAgICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIC8vIGhlcmUgY29tZXMgdGhlIHdyYXBwZXJcclxuLy8gICAgIDxBdXRoZW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4vLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbi8vICAgICA8L0F1dGhlbkNvbnRleHQuUHJvdmlkZXI+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEF1dGhlbkNvbnRleHQ7XHJcblxyXG4vLyAvLyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBcInRlc3RAdGVzdC5jb21cIiwgXCJ0ZXN0QHRlc3QuY29tXCIpXHJcbi8vIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbi8vIC8vICAgICAvLyBTaWduZWQgaW5cclxuLy8gLy8gICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coXCJTaWduSW4gZ3JlYWNlZnVsbHkgYW5kIHN1Y2Nlc3NmdWxseVwiKTtcclxuLy8gLy8gICAgIGNvbnNvbGUubG9nKFwiIHVzZXIgdGhhdCBoYXMgbG9nZ2VkIGluIFwiICsgdXNlci51aWQpO1xyXG4vLyAvLyAgICAgLy8gLi4uXHJcbi8vIC8vICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4vLyAvLyAgIH0pXHJcbi8vIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAvLyAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuLy8gLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbi8vIC8vICAgfSk7XHJcblxyXG4vLyAvL1xyXG5cclxuLy8gLy8gY29uc3QgdG9rZW4gPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuLy8gLy8gICBpZiAodXNlcikge1xyXG4vLyAvLyAgICAgdmFyIHVpZCA9IHVzZXIudWlkO1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlkIFwiICsgdWlkKTtcclxuLy8gLy8gICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbi8vIC8vICAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpO1xyXG4vLyAvLyAgIH0gZWxzZSB7XHJcbi8vIC8vICAgICBjb25zb2xlLmxvZyhcIk5vIHVzZXIgaXMgbG9nZ2VkIGluXCIpO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gICByZXR1cm4gdWlkO1xyXG4vLyAvLyAgIGNvbnNvbGUubG9nKHVpZCk7XHJcbi8vIC8vIH0pO1xyXG5cclxuLy8gLy8gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbi8vIC8vICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbi8vIC8vICAgY29uc29sZS5sb2codWlkICsgXCIgZnJvbSB0aGUgZnVuY3Rpb24gYm9keVwiKTtcclxuLy8gLy8gICByZXR1cm4gdWlkO1xyXG4vLyAvLyB9KTtcclxuXHJcbi8vIC8vIGNvbnNvbGUubG9nKCtcImZyb20gdGhlIGJvdHRvbSBcIik7XHJcblxyXG4vLyAvLyBjb25zdCB0aW1lQ2FsY3VsYXRvciA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4vLyAvLyAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAvLyAgIGNvbnN0IGVuZGluZ1RpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4vLyAvLyAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBlbmRpbmdUaW1lIC0gc3RhcnRUaW1lO1xyXG4vLyAvLyAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG4vLyAvLyB9O1xyXG5cclxuLy8gLy8gY29uc3QgZ2V0dGluZ1N0b3JlZFRva2VuID0gKHVpZCkgPT4ge1xyXG4vLyAvLyAgIGNvbnN0IGlkVG9rZW4gPSB1aWQ7XHJcbi8vIC8vICAgY29uc29sZS5sb2coXHJcbi8vIC8vICAgICBpZFRva2VuICtcclxuLy8gLy8gICAgICAgXCIgY29taW5nIGZyb20gdGhlIGF1dGggcGFnZSB0aGlzIGlzIHRoZSBoZWFydCBvZiB0aGUgYXV0aCB0b2tlbiBwYWdlIFwiXHJcbi8vIC8vICAgKTtcclxuXHJcbi8vIC8vICAgLy8gY29uc3QgdGVzdGluZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgpO1xyXG4vLyAvLyAgIC8vIGNvbnNvbGUubG9nKHRlc3RpbmcgKyBcIiBmcm9tIHRoZSBsb2NhbCBzdG9yZ2FnZSBcIik7XHJcblxyXG4vLyAvLyAgIC8vIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxob3N0LmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbi8vIC8vICAgLy8gY29uc3Qgc3RvcmVkRXhwaXJhdGlvblRpbWUgPSB1aWQuZ2V0SXRlbShcImV4cGlyYXRpb25UaW1lXCIpO1xyXG5cclxuLy8gLy8gICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZUNhbGN1bGF0b3Ioc3RvcmVkRXhwaXJhdGlvblRpbWUpO1xyXG4vLyAvLyAgIGNvbnNvbGUubG9nKHJlbWFpbmluZ1RpbWUgKyBcIiByZW1haW5pbmcgdGltZVwiKTtcclxuXHJcbi8vIC8vICAgaWYgKHJlbWFpbmluZ1RpbWUgPCA3MjAwKSB7XHJcbi8vIC8vICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gICByZXR1cm4ge1xyXG4vLyAvLyAgICAgdG9rZW46IHN0b3JlZFRva2VuLFxyXG4vLyAvLyAgICAgZHVyYXRpb246IHJlbWFpbmluZ1RpbWUsXHJcbi8vIC8vICAgfTtcclxuLy8gLy8gfTtcclxuXHJcbi8vIC8vIGV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbi8vIC8vICAgLy8gY29uc3QgdG9rZW5EYXRhID0gZ2V0dGluZ1N0b3JlZFRva2VuKCk7XHJcbi8vIC8vICAgLy8gbGV0IHN0YXJ0VG9rZW47XHJcbi8vIC8vICAgLy8gaWYgKHN0YXJ0VG9rZW4pIHtcclxuLy8gLy8gICAvLyAgIHN0YXJ0VG9rZW4gPSB0b2tlbkRhdGEuZGF0YTtcclxuLy8gLy8gICAvLyB9XHJcbi8vIC8vICAgLy8gY29uc3QgW3VpZCwgc2V0VG9rZW5dID0gdXNlU3RhdGUoc3RhcnRUb2tlbik7XHJcblxyXG4vLyAvLyAgIC8vYmFzZWRvbiB0aGUgY3VycmVudCBzdGF0dXMgdGhpcyB3aWxsIGZsaXAgdGhlIGJvb2wgdmFsdWVcclxuLy8gLy8gICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdWlkO1xyXG5cclxuLy8gLy8gICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coXCJTaWduZWQgT3V0IHN1Y2Nlc3NmdWxseVwiKTtcclxuLy8gLy8gICAgIHNpZ25PdXQoYXV0aClcclxuLy8gLy8gICAgICAgLnRoZW4oKCkgPT4ge30pXHJcbi8vIC8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkFuIGVycm9yIGhhcyBvY2N1cmVkIHdoaWxlIHRyeWluZyB0byBsb2dvdXRcIik7XHJcbi8vIC8vICAgICAgIH0pO1xyXG4vLyAvLyAgIH07XHJcbi8vIC8vICAgY29uc3QgbG9naW5IYW5kbGVyID0gKCkgPT4ge1xyXG4vLyAvLyAgICAgY29uc29sZS5sb2coXCJsb2dnZWRpbiBzdWNjZXNzZnVsbHlcIik7XHJcbi8vIC8vICAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbnRlcmVkRW1haWwsIGVudGVyZWRQYXNzd29yZClcclxuLy8gLy8gICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbi8vIC8vICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbi8vIC8vICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVDYWxjdWxhdG9yKGV4cGlyYXRpb25UaW1lKTtcclxuLy8gLy8gICAgICAgICBsb2dvdXRUaW1lciA9IHNldFRpbWVvdXQobG9nb3V0SGFuZGxlciwgcmVtYWluaW5nVGltZSk7XHJcbi8vIC8vICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBiZWVuIHNpZ25lZCBJbiBzdWNjZXNzZnVsbHlcIik7XHJcbi8vIC8vICAgICAgIH0pXHJcbi8vIC8vICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gLy8gICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4vLyAvLyAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbi8vIC8vICAgICAgIH0pO1xyXG4vLyAvLyAgIH07XHJcblxyXG4vLyAvLyAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vIC8vICAgLy8gICBpZiAodG9rZW5EYXRhKSB7XHJcbi8vIC8vICAgLy8gICAgIHNldFRpbWVvdXQobG9nb3V0SGFuZGxlciwgdG9rZW5EYXRhLmR1cmF0aW9uKTtcclxuLy8gLy8gICAvLyAgIH1cclxuLy8gLy8gICAvLyB9LCBbdG9rZW5EYXRhXSk7XHJcblxyXG4vLyAvLyAgIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuLy8gLy8gICAgIHRva2VuOiB0b2tlbixcclxuLy8gLy8gICAgIElzbG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4vLyAvLyAgICAgbG9naW46IGxvZ2luSGFuZGxlcixcclxuLy8gLy8gICAgIGxvZ291dDogbG9nb3V0SGFuZGxlcixcclxuLy8gLy8gICB9O1xyXG4vLyAvLyAgIHJldHVybiAoXHJcbi8vIC8vICAgICA8QXV0aGVuQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuLy8gLy8gICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4vLyAvLyAgICAgPC9BdXRoZW5Db250ZXh0LlByb3ZpZGVyPlxyXG4vLyAvLyAgICk7XHJcbi8vIC8vIH07XHJcbi8vIC8vIGV4cG9ydCBkZWZhdWx0IEF1dGhlbkNvbnRleHQ7XHJcblxyXG4vLyAvLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuLy8gLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gLy8gaW1wb3J0IEF1dGhGb3JtIGZyb20gXCIuLi8uLi9wYWdlcy9BdXRoRm9ybTBcIjtcclxuLy8gLy8gaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuXHJcbi8vIC8vIGltcG9ydCB7XHJcbi8vIC8vICAgZ2V0QXV0aCxcclxuLy8gLy8gICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuLy8gLy8gICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbi8vIC8vICAgc2lnbk91dCxcclxuLy8gLy8gfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuLy8gLy8gY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbi8vIC8vICAgYXBpS2V5OiBcIkFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiLFxyXG4vLyAvLyAgIGF1dGhEb21haW46IFwidGVzdC0yYTk2Mi5maXJlYmFzZWFwcC5jb21cIixcclxuLy8gLy8gICBkYXRhYmFzZVVSTDpcclxuLy8gLy8gICAgIFwiaHR0cHM6Ly90ZXN0LTJhOTYyLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcclxuLy8gLy8gICBwcm9qZWN0SWQ6IFwidGVzdC0yYTk2MlwiLFxyXG4vLyAvLyAgIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdC0yYTk2Mi5hcHBzcG90LmNvbVwiLFxyXG4vLyAvLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NzA1Mjg2NzE0MlwiLFxyXG4vLyAvLyAgIGFwcElkOiBcIjE6Mzc3MDUyODY3MTQyOndlYjphOGNlNDlkZGIyZjNjMTY2MjE3ODQ3XCIsXHJcbi8vIC8vIH07XHJcblxyXG4vLyAvLyBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuLy8gLy8gY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuLy8gLy8gbGV0IHVpZCA9IFwiXCI7XHJcbi8vIC8vIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4vLyAvLyAgIGlmICh1c2VyKSB7XHJcbi8vIC8vICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuLy8gLy8gICAgIGNvbnNvbGUubG9nKFwiVEhJUyBJUyBUSEUgQSBVU0VSIEZST00gVEhFIHRPS0VOIFBBR0UgIFwiICsgdWlkKTtcclxuXHJcbi8vIC8vICAgICByZXR1cm4gdWlkO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gfSk7XHJcblxyXG4vLyAvLyAvLyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBcInRlc3RAdGVzdC5jb21cIiwgXCJ0ZXN0QHRlc3QuY29tXCIpXHJcbi8vIC8vIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbi8vIC8vIC8vICAgICAvLyBTaWduZWQgaW5cclxuLy8gLy8gLy8gICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4vLyAvLyAvLyAgICAgY29uc29sZS5sb2coXCJTaWduSW4gZ3JlYWNlZnVsbHkgYW5kIHN1Y2Nlc3NmdWxseVwiKTtcclxuLy8gLy8gLy8gICAgIGNvbnNvbGUubG9nKFwiIHVzZXIgdGhhdCBoYXMgbG9nZ2VkIGluIFwiICsgdXNlci51aWQpO1xyXG4vLyAvLyAvLyAgICAgLy8gLi4uXHJcbi8vIC8vIC8vICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4vLyAvLyAvLyAgIH0pXHJcbi8vIC8vIC8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAvLyAvLyAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuLy8gLy8gLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbi8vIC8vIC8vICAgfSk7XHJcblxyXG4vLyAvLyAvL1xyXG5cclxuLy8gLy8gLy8gY29uc3QgdG9rZW4gPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuLy8gLy8gLy8gICBpZiAodXNlcikge1xyXG4vLyAvLyAvLyAgICAgdmFyIHVpZCA9IHVzZXIudWlkO1xyXG4vLyAvLyAvLyAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlkIFwiICsgdWlkKTtcclxuLy8gLy8gLy8gICAgIGNvbnN0IHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbi8vIC8vIC8vICAgICBjb25zb2xlLmxvZyh1c2VyRW1haWwpO1xyXG4vLyAvLyAvLyAgIH0gZWxzZSB7XHJcbi8vIC8vIC8vICAgICBjb25zb2xlLmxvZyhcIk5vIHVzZXIgaXMgbG9nZ2VkIGluXCIpO1xyXG4vLyAvLyAvLyAgIH1cclxuLy8gLy8gLy8gICByZXR1cm4gdWlkO1xyXG4vLyAvLyAvLyAgIGNvbnNvbGUubG9nKHVpZCk7XHJcbi8vIC8vIC8vIH0pO1xyXG5cclxuLy8gLy8gLy8gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbi8vIC8vIC8vICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbi8vIC8vIC8vICAgY29uc29sZS5sb2codWlkICsgXCIgZnJvbSB0aGUgZnVuY3Rpb24gYm9keVwiKTtcclxuLy8gLy8gLy8gICByZXR1cm4gdWlkO1xyXG4vLyAvLyAvLyB9KTtcclxuXHJcbi8vIC8vIC8vIGNvbnNvbGUubG9nKCtcImZyb20gdGhlIGJvdHRvbSBcIik7XHJcblxyXG4vLyAvLyBsZXQgbG9nb3V0VGltZXI7XHJcbi8vIC8vIGNvbnN0IHRva2VuID0gdWlkO1xyXG5cclxuLy8gLy8gY29uc3QgQXV0aGVuQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4vLyAvLyAgIHVpZDogXCJcIixcclxuLy8gLy8gICBsb2dpbjogKHVpZCkgPT4ge30sXHJcbi8vIC8vICAgSXNsb2dnZWRJbjogZmFsc2UsXHJcbi8vIC8vICAgbG9nb3V0OiAoKSA9PiB7fSxcclxuLy8gLy8gfSk7XHJcblxyXG4vLyAvLyBjb25zdCB0aW1lQ2FsY3VsYXRvciA9IChleHBpcmF0aW9uVGltZSkgPT4ge1xyXG4vLyAvLyAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4vLyAvLyAgIGNvbnN0IGVuZGluZ1RpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uVGltZSkuZ2V0VGltZSgpO1xyXG4vLyAvLyAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBlbmRpbmdUaW1lIC0gc3RhcnRUaW1lO1xyXG4vLyAvLyAgIHJldHVybiByZW1haW5pbmdUaW1lO1xyXG4vLyAvLyB9O1xyXG5cclxuLy8gLy8gLy8gY29uc3QgZ2V0dGluZ1N0b3JlZFRva2VuID0gKHVpZCkgPT4ge1xyXG4vLyAvLyAvLyAgIGNvbnN0IGlkVG9rZW4gPSB1aWQ7XHJcbi8vIC8vIC8vICAgY29uc29sZS5sb2coXHJcbi8vIC8vIC8vICAgICBpZFRva2VuICsgXCIgY29taW5nIGZyb20gdGhlIGF1dGggcGFnZSB0aGlzIGlzIHRoZSBoZWFydCBvZiB0aGUgYXV0aCBcIlxyXG4vLyAvLyAvLyAgICk7XHJcblxyXG4vLyAvLyAvLyAgIC8vIGNvbnN0IHRlc3RpbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oKTtcclxuLy8gLy8gLy8gICAvLyBjb25zb2xlLmxvZyh0ZXN0aW5nICsgXCIgZnJvbSB0aGUgbG9jYWwgc3RvcmdhZ2UgXCIpO1xyXG5cclxuLy8gLy8gLy8gICAvLyBjb25zdCBzdG9yZWRUb2tlbiA9IGxvY2FsaG9zdC5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4vLyAvLyAvLyAgIGNvbnN0IHN0b3JlZEV4cGlyYXRpb25UaW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJleHBpcmF0aW9uVGltZVwiKTtcclxuXHJcbi8vIC8vIC8vICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVDYWxjdWxhdG9yKHN0b3JlZEV4cGlyYXRpb25UaW1lKTtcclxuLy8gLy8gLy8gICBjb25zb2xlLmxvZyhyZW1haW5pbmdUaW1lICsgXCIgcmVtYWluaW5nIHRpbWVcIik7XHJcblxyXG4vLyAvLyAvLyAgIGlmIChyZW1haW5pbmdUaW1lIDwgNzIwMCkge1xyXG4vLyAvLyAvLyAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbi8vIC8vIC8vICAgfVxyXG4vLyAvLyAvLyAgIHJldHVybiB7XHJcbi8vIC8vIC8vICAgICB0b2tlbjogc3RvcmVkVG9rZW4sXHJcbi8vIC8vIC8vICAgICBkdXJhdGlvbjogcmVtYWluaW5nVGltZSxcclxuLy8gLy8gLy8gICB9O1xyXG4vLyAvLyAvLyB9O1xyXG5cclxuLy8gLy8gZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuLy8gLy8gICBjb25zdCB0b2tlbkRhdGEgPSBnZXR0aW5nU3RvcmVkVG9rZW4oKTtcclxuLy8gLy8gICBsZXQgc3RhcnRUb2tlbjtcclxuLy8gLy8gICBpZiAoc3RhcnRUb2tlbikge1xyXG4vLyAvLyAgICAgc3RhcnRUb2tlbiA9IHRva2VuRGF0YS5kYXRhO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gICBjb25zdCBbdWlkLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZShzdGFydFRva2VuKTtcclxuLy8gLy8gICAvLyBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdWlkOyAvLyBmbGlwcyB0aGUgYm9vbCB2YWx1ZS5cclxuXHJcbi8vIC8vICAgaWYgKHVpZCkge1xyXG4vLyAvLyAgICAgdXNlcklzTG9nZ2VkSW4gPSB0cnVlO1xyXG4vLyAvLyAgIH1cclxuXHJcbi8vIC8vICAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuLy8gLy8gICAgIGNvbnNvbGUubG9nKFwiU2lnbmVkIE91dCBzdWNjZXNzZnVsbHlcIik7XHJcbi8vIC8vICAgICBzaWduT3V0KGF1dGgpXHJcbi8vIC8vICAgICAgIC50aGVuKCgpID0+IHt9KVxyXG4vLyAvLyAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vIC8vICAgICAgICAgY29uc29sZS5sb2coXCJBbiBlcnJvciBoYXMgb2NjdXJlZCB3aGlsZSB0cnlpbmcgdG8gbG9nb3V0XCIpO1xyXG4vLyAvLyAgICAgICB9KTtcclxuXHJcbi8vIC8vICAgICBjb25zdCBsb2dpbkhhbmRsZXIgPSAoKSA9PiB7XHJcbi8vIC8vICAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKVxyXG4vLyAvLyAgICAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4vLyAvLyAgICAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbi8vIC8vICAgICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZUNhbGN1bGF0b3IoZXhwaXJhdGlvblRpbWUpO1xyXG4vLyAvLyAgICAgICAgICAgbG9nb3V0VGltZXIgPSBzZXRUaW1lb3V0KGxvZ291dEhhbmRsZXIsIHJlbWFpbmluZ1RpbWUpO1xyXG4vLyAvLyAgICAgICAgICAgY29uc29sZS5sb2coXCJZb3UgaGF2ZSBiZWVuIHNpZ25lZCBJbiBzdWNjZXNzZnVsbHlcIik7XHJcbi8vIC8vICAgICAgICAgfSlcclxuLy8gLy8gICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vIC8vICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4vLyAvLyAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuLy8gLy8gICAgICAgICB9KTtcclxuLy8gLy8gICAgIH07XHJcbi8vIC8vICAgfTtcclxuXHJcbi8vIC8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gLy8gICAgIGlmICh0b2tlbkRhdGEpIHtcclxuLy8gLy8gICAgICAgc2V0VGltZW91dChsb2dvdXRIYW5kbGVyLCB0b2tlbkRhdGEuZHVyYXRpb24pO1xyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyAgIH0sIFt0b2tlbkRhdGFdKTtcclxuXHJcbi8vIC8vICAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4vLyAvLyAgICAgdG9rZW46IHRva2VuLFxyXG4vLyAvLyAgICAgSXNsb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbi8vIC8vICAgICBsb2dpbjogbG9naW5IYW5kbGVyLFxyXG4vLyAvLyAgICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyLFxyXG4vLyAvLyAgIH07XHJcbi8vIC8vICAgcmV0dXJuIChcclxuLy8gLy8gICAgIDxBdXRoZW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4vLyAvLyAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbi8vIC8vICAgICA8L0F1dGhlbkNvbnRleHQuUHJvdmlkZXI+XHJcbi8vIC8vICAgKTtcclxuLy8gLy8gfTtcclxuLy8gLy8gZXhwb3J0IGRlZmF1bHQgQXV0aGVuQ29udGV4dDtcclxuIiwiLy8gRGVmaW5lcyBhIENob3JlIGFuZCB3aGF0IGl0IHRha2VzIGluXHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nob3JlL0Nob3JlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgQ2hvcmUgPSAocHJvcHMpID0+IHtcclxuICAvKiAvLyBmb250IGZvciB0aGUgcmVuZGVyZWQgcGFnZSB0aXRsZSAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaG9yZX0+XHJcbiAgICAgIDxoMz57cHJvcHMuaW50cm9EYXRhfTwvaDM+XHJcbiAgICAgIDxoND57cHJvcHMuZGVzY3JpcHRpb25EYXRhfTwvaDQ+XHJcbiAgICAgIDxwPntwcm9wcy5wYWludEpvYn08L3A+XHJcbiAgICAgIHsvKiA8aDQ+e3Byb3BzLmxpbmVPZkJ1c2luZXNzfTwvaDQ+ICovfVxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi90ZXN0aW5nXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT4gU2hvdyBEZXRhaWxzIDwvYnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7LyogPHA+e3Byb3BzLm9wZW5pbmdUZXh0fTwvcD4gKi99XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaG9yZTtcclxuIiwiLy8gIGltcG9ydCAgICAnLi4vY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXMuY3NzJ1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3JlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlci1pbnB1dHNcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uLy4uL3VpL0NhcmRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vdWkvYnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEFkZGNob3Jlc2Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogaW50cm9EYXRhLFxyXG4gICAgaXNWYWxpZDogdmFsaWRJbnRybyxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkSW50cm8sXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IEludHJvQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVySW50cm8sXHJcbiAgICByZXNldDogcmVzZXRJbnRybyxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IGRlc2NyaXB0aW9uRGF0YSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkZGV0YWlsLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRkZXRhaWwsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IGRldGFpbENoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmRldGFpbCxcclxuICAgIHJlc2V0OiByZXNldGRldGFpbCxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IExpbmVPZk1haW50YWluYW5jZSxcclxuICAgIGlzVmFsaWQ6IFZhbGlkTGluZU9mTWFpbnRhaW5hbmNlLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRMaW5lT2ZNYWludGFpbmFuY2UsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IExpbmVPZk1haW50YWluYW5jZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1ckxpbmVPZk1haW50YWluYW5jZSxcclxuICAgIHJlc2V0OiByZXNldExpbmVPZk1haW50YWluYW5jZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB1c2VSZWYoXCJcIik7XHJcbiAgY29uc3QgaW50cm8gPSB1c2VSZWYoXCJcIik7XHJcblxyXG4gIGxldCBmb3JtVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG4gIGlmICh2YWxpZEludHJvICYmIHZhbGlkZGV0YWlsKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMaW5lT2ZNYWludGFpbmFuY2VcIik7XHJcbiAgICBsZXQgTGluZU9mTWFpbnRhaW5hbmNlID0gZS52YWx1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgZnJvbSB0aGUgY2hlY2tCb3hcIiArIExpbmVPZk1haW50YWluYW5jZSk7XHJcblxyXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgICBkZXNjcmlwdGlvbkRhdGEsXHJcbiAgICAgIGludHJvRGF0YSxcclxuICAgICAgTGluZU9mTWFpbnRhaW5hbmNlLFxyXG4gICAgICAvLyBwYWludEpvYixcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uc3QgY2hvcmVEYXRhT2JqZWN0ID0ge1xyXG4gICAgLy8gICBkZXNjcmlwdGlvbkRhdGE6IGRlc2NyaXB0aW9uLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGludHJvRGF0YTogaW50cm8uY3VycmVudC52YWx1ZSxcclxuICAgIC8vIH07XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjaG9yZURhdGFPYmplY3QpO1xyXG4gICAgcHJvcHMub25BZGRjaG9yZXNmb3JtKGNob3JlRGF0YU9iamVjdCk7XHJcblxyXG4gICAgcmVzZXRJbnRybyhcIlwiKTtcclxuICAgIHJlc2V0ZGV0YWlsKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgY2F0YWdvcnlJbnB1dENsYXNzID0gaW5WYWxpZENhdGFnb3J5XHJcbiAgLy8gICA/IFwiZm9ybS1jaG9pY2UgaW52YWxpZFwiXHJcbiAgLy8gICA6IFwiZm9ybS1jaG9pY2VcIjtcclxuXHJcbiAgY29uc3QgaW50cm9JbnB1dENsYXNzZXMgPSBpblZhbGlkSW50cm9cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBkZXRhaWxJbnB1dENsYXNzZXMgPSBpblZhbGlkZGV0YWlsXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgTGluZU9mTWFpbnRhaW5hbmNlQ2xhc3NlcyA9IGluVmFsaWRMaW5lT2ZNYWludGFpbmFuY2VcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaG9yZWludHJvXCI+SW50cm9kdWN0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgcm93cz1cIjJcIlxyXG4gICAgICAgICAgICAgIGlkPVwiY2hvcmVpbnRyb1wiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaG9ydCBleHBsYW5hdGlvbiBvZiB0aGUgY2hvcmVcIlxyXG4gICAgICAgICAgICAgIHJlZj17aW50cm99XHJcbiAgICAgICAgICAgICAgb25CbHVyPXtibHVySW50cm99XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e0ludHJvQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICB2YWx1ZT17aW50cm9EYXRhfVxyXG4gICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAge2luVmFsaWRJbnRybyAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgYW4gSW50cm9kdWN0aW9uIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXBcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgICBpZD1cImRlc2NyaXBcIlxyXG4gICAgICAgICAgICAgIHJlZj17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBIGRldGFpbGVkIGV4cGxhbmF0aW9uIG9mIHRoZSBjaG9yZVwiXHJcbiAgICAgICAgICAgICAgb25CbHVyPXtibHVyZGV0YWlsfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtkZXRhaWxDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbkRhdGF9XHJcbiAgICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICB7aW5WYWxpZGRldGFpbCAmJiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIGRldGFpbHM8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJMaW5lT2ZNYWludGFpbmFuY2VcIj5MaW5lIG9mIG1haW50YWluYW5jZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJMaW5lT2ZNYWludGFpbmFuY2VcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhaW50Sm9iXCI+UGFpbnRKb2I8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQm9keSBXb3JrXCI+Qm9keSBXb3JrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1vdG9yIE92ZXJob2xlXCI+TW90b3IgT3ZlcmhvbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS2Vsb2RvXCI+S2VsYXdkbzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYXIgd2luZG93XCI+Q2FyIHdpbmRvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNb3RvcmN5Y2xlXCI+TW90b3JjeWNsZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHZWFyIGJveFwiPkdlYXIgQm94PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldoZWVsIHJlcGFpclwiPldoZWVsIHJlcGFpcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbn0+XHJcbiAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PkFkZCBDaG9yZXM8L2J1dHRvbj4gKi99XHJcblxyXG4gICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5DaGVja0JveHN9PlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFiZWxcIj5QYWludCBqb2IgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIlBhaW50Sm9iXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInZlaGljbGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+ICovfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5BZGQgQ2hvcmVzPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9DYXJkPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWRkY2hvcmVzZm9ybTtcclxuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2hvcmVMaXN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENob3JlIGZyb20gXCIuLi8uLi9jaG9yZS9DaG9yZVwiO1xyXG5cclxuY29uc3QgY2hvcmVMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXNbXCJjaG9yZWxpc3RcIl19PlxyXG4gICAgICB7cHJvcHMuY2hvcmVzLm1hcCgoY2hvcmUpID0+IChcclxuICAgICAgICA8Q2hvcmVcclxuICAgICAgICAgIGtleT17Y2hvcmUuaWR9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbkRhdGE9e2Nob3JlLmRlc2NyaXB0aW9uRGF0YX1cclxuICAgICAgICAgIGludHJvRGF0YT17Y2hvcmUuaW50cm9EYXRhfVxyXG4gICAgICAgICAgLy8gbGluZU9mQnVzaW5lc3M9e2Nob3JlLmxpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkpfVxyXG5cclxuICAgICAgey8qIGNvbnNvbGUubG9nKENob3JlKTsgKi99XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNob3JlTGlzdDtcclxuIiwiaW1wb3J0IHsgIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgVXNlcklucHV0ID0gKHZhbGlkYXRpb24pID0+e1xyXG4gICAgY29uc3QgW2VudGVyZWRWYWx1ZSwgc2V0RW50ZXJlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbaXNUb3VjZWQsIHNldElzVG91Y2hlZF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG5cclxuICAgIGNvbnN0IHZhbHVlSXNWYWxpZCA9IHZhbGlkYXRpb24oZW50ZXJlZFZhbHVlKTsgXHJcbiAgICBjb25zdCBoYXNFcnJvciA9ICF2YWx1ZUlzVmFsaWQgJiYgaXNUb3VjZWQ7IFxyXG5cclxuICAgIGNvbnN0IHZhbHVlQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT57XHJcbiAgICAgICAgc2V0RW50ZXJlZFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25mb2N1c0hhbmRsZXIgPShldmVudCkgPT4ge1xyXG4gICAgICAgIHNldElzVG91Y2hlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVudGVyZWRWYWx1ZSgnJyk7XHJcbiAgICAgICAgc2V0SXNUb3VjaGVkKGZhbHNlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGlvbiBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICB2YWx1ZTplbnRlcmVkVmFsdWUsXHJcbiAgICBpc1ZhbGlkIDogdmFsdWVJc1ZhbGlkLFxyXG4gICAgaGFzRXJyb3IgOiBoYXNFcnJvcixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyLFxyXG4gICAgcmVzZXQ6cmVzZXRWYWx1ZSxcclxufTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dDsiLCIvLyBBIGdlbmVyYWwgcHJvcHMgcGFnZSBmb3IgdGhlIG5ldyBtZWV0IHVwXHJcblxyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vbWVldHVwcy9NZWV0dXBEZXRhaWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbH0+XHJcbiAgICAgIHsvKiA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMudGl0bGV9IC8+ICovfVxyXG4gICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxhZGRyZXNzPntwcm9wcy5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgPHA+IHtwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xyXG4iLCIvLyBGb3Igd2hhdCB3aWxsIGJlIHJlbmRlcmVkIG9uIHRoZSBob21lIHBhZ2VcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9DYXJkXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cEl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vcGFnZXMvW21lZXR1cElkXS9pbmRleFwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlscyBmcm9tIFwiLi9NZWV0dXBEZXRhaWxzXCI7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBJdGVtKHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dEZXRhaWxzKCkge1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIgKyBwcm9wcy5pZCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfT5cclxuICAgICAgPENhcmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsc30+IENvbnRhY3QgQ3VzdG9tZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgPC9saT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBJdGVtO1xyXG4iLCJpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuL01lZXR1cEl0ZW0nO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cExpc3QubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBMaXN0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubGlzdH0+XHJcbiAgICB7LyogbWVldHVwcyBpcyB0aGUgdmFsdWUgdGhhdCB3aWxsIGJlIHVzZWQgaW4gdGhlIGhvbWUgcGFnZSAqL31cclxuICAgICAge3Byb3BzLm1lZXR1cHMubWFwKChtZWV0dXApID0+IChcclxuICAgICAgICA8TWVldHVwSXRlbVxyXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XHJcbiAgICAgICAgICBpZD17bWVldHVwLmlkfVxyXG4gICAgICAgICAgaW1hZ2U9e21lZXR1cC5pbWFnZX1cclxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XHJcbiAgICAgICAgICBhZGRyZXNzPXttZWV0dXAuYWRkcmVzc31cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwTGlzdDtcclxuIiwiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxjYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT57cHJvcHMuY2hpbGRyZW59PC9jYXJkPjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XHJcbiIsIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCBjbGFzc2VzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5jc3MnXHJcblxyXG4vLyAgY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICBjbGFzc05hbWUgPSB7Y2xhc3Nlcy5idXR0b259XHJcbi8vICAgICAgICAgdHlwZT0ge3Byb3BzLnR5cGUgfHwgJ2J1dHRvbid9XHJcbi8vICAgICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuLy8gICAgICAgICA+XHJcbi8vICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPXtwcm9wcy50eXBlfVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0NhcnRzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IENhcnRzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIDxjYXJ0IGNsYXNzTmFtZT17Y2xhc3Nlcy5DYXJ0c30+e3Byb3BzLmNoaWxkcmVufTwvY2FydD47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhcnRzO1xyXG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL1BhZ2VzLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgUGFnZXMgPSAocHJvcHMpID0+IHtcclxuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZX0gJHtjbGFzc2VzLnBhZ2V9YH0+IHtwcm9wcy5jaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXJcIik7XHJcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcclxudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcclxufTtcclxuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcclxuICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcclxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcclxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcclxuICAgIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxyXG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXHJcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xyXG4gICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xyXG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcclxufVxyXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xyXG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcclxuICAgIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSkge1xyXG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xyXG4gICAgaWYgKHNjcm9sbCA9PSBudWxsICYmIGFzLmluZGV4T2YoJyMnKSA+PSAwKSB7XHJcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcclxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xyXG4gICAgICAgIHNoYWxsb3csXHJcbiAgICAgICAgbG9jYWxlLFxyXG4gICAgICAgIHNjcm9sbFxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gTGluayhwcm9wcykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XHJcbiAgICAgICAgICAgIGhyZWY6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xyXG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkID0ge1xyXG4gICAgICAgICAgICBhczogdHJ1ZSxcclxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsOiB0cnVlLFxyXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxyXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcclxuICAgICAgICAgICAgcHJlZmV0Y2g6IHRydWUsXHJcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uYWxQcm9wcyA9IE9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7XHJcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXHJcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcclxuICAgICAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XHJcbiAgICBjb25zdCByb3V0ZXIgPSAoMCwgX3JvdXRlcjEpLnVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XHJcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXHJcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtcclxuICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgcHJvcHMuaHJlZixcclxuICAgICAgICBwcm9wcy5hc1xyXG4gICAgXSk7XHJcbiAgICBsZXQgeyBjaGlsZHJlbiAsIHJlcGxhY2UgLCBzaGFsbG93ICwgc2Nyb2xsICwgbG9jYWxlICB9ID0gcHJvcHM7XHJcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcclxuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgY2hpbGRyZW4gPSAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIG51bGwsIGNoaWxkcmVuKTtcclxuICAgIH1cclxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxyXG4gICAgbGV0IGNoaWxkO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiIFxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hpbGQgPSBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XHJcbiAgICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XHJcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZXRSZWYgPSBfcmVhY3QuZGVmYXVsdC51c2VDYWxsYmFjaygoZWwpPT57XHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcclxuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgY2hpbGRSZWYsXHJcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXHJcbiAgICBdKTtcclxuICAgIF9yZWFjdC5kZWZhdWx0LnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XHJcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldO1xyXG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XHJcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogY3VyTG9jYWxlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBhcyxcclxuICAgICAgICBocmVmLFxyXG4gICAgICAgIGlzVmlzaWJsZSxcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgcCxcclxuICAgICAgICByb3V0ZXJcclxuICAgIF0pO1xyXG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcclxuICAgICAgICByZWY6IHNldFJlZixcclxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcclxuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcclxuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XHJcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXHJcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcclxuICAgIGlmIChwcm9wcy5wYXNzSHJlZiB8fCBjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSB7XHJcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcclxuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxyXG4gICAgICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXHJcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcclxuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcclxufVxyXG52YXIgX2RlZmF1bHQgPSBMaW5rO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmsuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcclxuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcclxuZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCkge1xyXG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XHJcbn1cclxuY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0ggPyAocGF0aCk9PntcclxuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xyXG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcclxuICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nO1xyXG4gICAgfVxyXG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XHJcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaDtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcclxuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBjYih7XHJcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgMSk7XHJcbn07XHJcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XHJcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcclxuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xyXG59O1xyXG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xyXG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcclxuZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0ID0gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdDtcclxuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xyXG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xyXG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxyXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcclxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXHJcbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxyXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XHJcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xyXG4gICAgbGV0IGVudHJ5ID0gbWFwLmdldChrZXkpO1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5mdXR1cmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJlc29sdmVyO1xyXG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgIHJlc29sdmVyID0gcmVzb2x2ZTtcclxuICAgIH0pO1xyXG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xyXG4gICAgICAgIHJlc29sdmU6IHJlc29sdmVyLFxyXG4gICAgICAgIGZ1dHVyZTogcHJvbVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZ2VuZXJhdG9yID8gZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpPT4ocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSlcclxuICAgICkgOiBwcm9tO1xyXG59XHJcbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbmspIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgICByZXR1cm4oLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXHJcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcclxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcclxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopPT57XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XHJcbiAgICAgICAgaWYgKGFzKSBsaW5rLmFzID0gYXM7XHJcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xyXG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xyXG4gICAgICAgIGxpbmsub25sb2FkID0gcmVzO1xyXG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcclxuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxyXG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XHJcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIH0pO1xyXG59XHJcbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcclxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycikge1xyXG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcclxufVxyXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoc3JjLCBzY3JpcHQpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXHJcbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxyXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xyXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxyXG4gICAgICAgIDtcclxuICAgICAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcclxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cclxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xyXG4gICAgICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXHJcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxufVxyXG4vLyBXZSB3YWl0IGZvciBwYWdlcyB0byBiZSBidWlsdCBpbiBkZXYgYmVmb3JlIHdlIHN0YXJ0IHRoZSByb3V0ZSB0cmFuc2l0aW9uXHJcbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxyXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xyXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxyXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBwLnRoZW4oKHIpPT57XHJcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyKTtcclxuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgIC8vIFdlIHdyYXAgdGhlc2UgY2hlY2tzIHNlcGFyYXRlbHkgZm9yIGJldHRlciBkZWFkLWNvZGUgZWxpbWluYXRpb24gaW5cclxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgIChkZXZCdWlsZFByb21pc2UgfHwgUHJvbWlzZS5yZXNvbHZlKCkpLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgbXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcclxuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XHJcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XHJcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcclxuICAgICAgICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xyXG4gICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcclxufVxyXG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XHJcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcclxuICAgICAgICAgICAgY3NzOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcclxuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeCkge1xyXG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xyXG4gICAgY29uc3Qgc3R5bGVTaGVldHMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XHJcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XHJcbiAgICAgICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpO1xyXG4gICAgICAgIGlmIChwcm9tKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XHJcbiAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xyXG4gICAgICAgIGxldCBwcm9tID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpO1xyXG4gICAgICAgIGlmIChwcm9tKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGhyZWYsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XHJcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcclxuICAgICAgICAgICAgKS50aGVuKChleHBvcnRzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcclxuICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlRmlsZXNQcm9taXNlID0gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKHsgc2NyaXB0cyAsIGNzcyAgfSk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlRmlsZXNQcm9taXNlLmZpbmFsbHkoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocm91dGVGaWxlc1Byb21pc2UsIE1TX01BWF9JRExFX0RFTEFZLCBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHsgZW50cnlwb2ludCAsIHN0eWxlcyAgfSk9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcclxuICAgICAgICAgICAgICAgICAgICB9LCBlbnRyeXBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZWZldGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcclxuICAgICAgICAgICAgLy8gTGljZW5zZTogQXBhY2hlIDIuMFxyXG4gICAgICAgICAgICBsZXQgY247XHJcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cclxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpLnRoZW4oKG91dHB1dCk9PlByb21pc2UuYWxsKGNhblByZWZldGNoID8gb3V0cHV0LnNjcmlwdHMubWFwKChzY3JpcHQpPT5wcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKVxyXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxyXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+dGhpcy5sb2FkUm91dGUocm91dGUsIHRydWUpLmNhdGNoKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKC8vIHN3YWxsb3cgcHJlZmV0Y2ggZXJyb3JzXHJcbiAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XHJcbiAgICB9XHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XHJcbmV4cG9ydHMuY3JlYXRlUm91dGVyID0gY3JlYXRlUm91dGVyO1xyXG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XHJcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xyXG52YXIgX3dpdGhSb3V0ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHNpbmdsZXRvblJvdXRlciA9IHtcclxuICAgIHJvdXRlcjogbnVsbCxcclxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcclxuICAgIHJlYWR5IChjYikge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXHJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xyXG4gICAgJ3BhdGhuYW1lJyxcclxuICAgICdyb3V0ZScsXHJcbiAgICAncXVlcnknLFxyXG4gICAgJ2FzUGF0aCcsXHJcbiAgICAnY29tcG9uZW50cycsXHJcbiAgICAnaXNGYWxsYmFjaycsXHJcbiAgICAnYmFzZVBhdGgnLFxyXG4gICAgJ2xvY2FsZScsXHJcbiAgICAnbG9jYWxlcycsXHJcbiAgICAnZGVmYXVsdExvY2FsZScsXHJcbiAgICAnaXNSZWFkeScsXHJcbiAgICAnaXNQcmV2aWV3JyxcclxuICAgICdpc0xvY2FsZURvbWFpbicsXHJcbiAgICAnZG9tYWluTG9jYWxlcycsIFxyXG5dO1xyXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXHJcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXHJcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXHJcbiAgICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXHJcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXHJcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcclxuICAgICdoYXNoQ2hhbmdlQ29tcGxldGUnLCBcclxuXTtcclxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcclxuICAgICdwdXNoJyxcclxuICAgICdyZXBsYWNlJyxcclxuICAgICdyZWxvYWQnLFxyXG4gICAgJ2JhY2snLFxyXG4gICAgJ3ByZWZldGNoJyxcclxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxyXG5dO1xyXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XHJcbiAgICBnZXQgKCkge1xyXG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xyXG4gICAgfVxyXG59KTtcclxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XHJcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXHJcbiAgICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxyXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XHJcbiAgICAgICAgZ2V0ICgpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcclxuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcclxuICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcclxuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcclxuICAgIH07XHJcbn0pO1xyXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcclxuICAgICAgICBfcm91dGVyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncyk9PntcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcclxuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcclxuICAgICAgICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XHJcbiAgICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xyXG59XHJcbnZhciBfZGVmYXVsdCA9IHNpbmdsZXRvblJvdXRlcjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XHJcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcclxuICAgIHJldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IF9yb3V0ZXIuZGVmYXVsdCguLi5hcmdzKTtcclxuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcclxuICAgICk7XHJcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXTtcclxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xyXG59XHJcbmZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpIHtcclxuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xyXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XHJcbiAgICB9O1xyXG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oQXJyYXkuaXNBcnJheShfcm91dGVyMVtwcm9wZXJ0eV0pID8gW10gOiB7XHJcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcclxuICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xyXG4gICAgfVxyXG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxyXG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcclxuICAgIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XHJcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XHJcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xyXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XHJcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcclxuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XHJcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xyXG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XHJcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcclxuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxyXG4gICAgICAgICAgICAsIHtcclxuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGlzRGlzYWJsZWQsXHJcbiAgICAgICAgcm9vdE1hcmdpbixcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICBdKTtcclxuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcclxuICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICB2aXNpYmxlXHJcbiAgICBdKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgc2V0UmVmLFxyXG4gICAgICAgIHZpc2libGVcclxuICAgIF07XHJcbn1cclxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcclxuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XHJcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcclxuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XHJcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xyXG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcclxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XHJcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcclxuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xyXG4gICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgb2JzZXJ2ZXIsXHJcbiAgICAgICAgZWxlbWVudHNcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX3JvdXRlciA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcclxuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIHJvdXRlcjogKDAsIF9yb3V0ZXIpLnVzZVJvdXRlcigpXHJcbiAgICAgICAgfSwgcHJvcHMpKSk7XHJcbiAgICB9XHJcbiAgICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xyXG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO1xyXG59XHJcblxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xyXG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcclxuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XHJcbiAgICAvLyBSZW1vdmluZyB3ZWJwYWNrIGFuZCBtb2R1bGVzIG1lYW5zIHJlYWN0LWxvYWRhYmxlIHdvbid0IHRyeSBwcmVsb2FkaW5nXHJcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XHJcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XHJcbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XHJcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcclxuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxyXG4gICAgcmV0dXJuICgpPT4vKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywge1xyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXN0RGVsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgO1xyXG59XHJcbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcclxuICAgIGxldCBsb2FkYWJsZUZuID0gX2xvYWRhYmxlLmRlZmF1bHQ7XHJcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xyXG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XHJcbiAgICAgICAgbG9hZGluZzogKHsgZXJyb3IgLCBpc0xvYWRpbmcgLCBwYXN0RGVsYXkgIH0pPT57XHJcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXHJcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxyXG4gICAgLy8gVGhlIHJlYWN0LWxvYWRhYmxlIGJhYmVsIHBsdWdpbiB3aWxsIHR1cm4gZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpIGludG8gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXHJcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XHJcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgbG9hZGFibGVPcHRpb25zLmxvYWRlciA9ICgpPT5keW5hbWljT3B0aW9uc1xyXG4gICAgICAgIDtcclxuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XHJcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxyXG4gICAgICAgICAgICAuLi5keW5hbWljT3B0aW9uc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXHJcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxyXG4gICAgICAgIC4uLm9wdGlvbnNcclxuICAgIH07XHJcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XHJcbiAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTKSB7XHJcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcclxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgZXJyb3IgZG9jIHdoZW4gdGhpcyBmZWF0dXJlIGlzIHN0YWJsZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcclxuICAgIH1cclxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXHJcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XHJcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXHJcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcclxuICAgIH1cclxuICAgIC8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxyXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XHJcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcclxuICAgIH1cclxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZ2V0RG9tYWluTG9jYWxlID0gZ2V0RG9tYWluTG9jYWxlO1xyXG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcclxuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XHJcbmV4cG9ydHMuaGFzQmFzZVBhdGggPSBoYXNCYXNlUGF0aDtcclxuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xyXG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XHJcbmV4cG9ydHMuaXNMb2NhbFVSTCA9IGlzTG9jYWxVUkw7XHJcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XHJcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xyXG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcclxudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xyXG52YXIgX2Rlbm9ybWFsaXplUGFnZVBhdGggPSByZXF1aXJlKFwiLi4vLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTtcclxudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xyXG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcclxudmFyIF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcclxudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xyXG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XHJcbnZhciBfcXVlcnlzdHJpbmcgPSByZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTtcclxudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xyXG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XHJcbnZhciBfcm91dGVSZWdleCA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtcclxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XHJcbn1cclxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xyXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xyXG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcclxuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcclxufVxyXG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgIGxvY2FsZSA9IGxvY2FsZSB8fCAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGU7XHJcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xyXG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke2Jhc2VQYXRoIHx8ICcnfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpICYmIHBhdGhMb3dlciAhPT0gJy8nICsgbG9jYWxlTG93ZXIgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSkgOiBwYXRoO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcclxuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fCBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKSA/IChwYXRobmFtZS5sZW5ndGggPT09IGxvY2FsZS5sZW5ndGggKyAxID8gJy8nIDogJycpICsgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIDogcGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XHJcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XHJcbiAgICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKTtcclxuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcclxuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKSB7XHJcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xyXG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xyXG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcclxuICAgIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKTtcclxufVxyXG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XHJcbiAgICBwYXRoID0gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpO1xyXG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xyXG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xyXG4gICAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSB8fCB1cmwuc3RhcnRzV2l0aCgnPycpKSByZXR1cm4gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xyXG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XHJcbiAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XHJcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcclxuICAgIGNvbnN0IGR5bmFtaWNSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XHJcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcclxuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxyXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8IC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxyXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxyXG4gICAgcXVlcnk7XHJcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XHJcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XHJcbiAgICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcclxuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcclxuICAgICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXHJcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcclxuICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XHJcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID0gaW50ZXJwb2xhdGVkUm91dGUucmVwbGFjZShyZXBsYWNlZCwgcmVwZWF0ID8gdmFsdWUubWFwKC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcclxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXHJcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcclxuICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcclxuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxyXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcclxuICAgIH0pKSB7XHJcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xyXG4gICAgICAgIDtcclxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXHJcbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xyXG4gICAgY29uc3QgZmlsdGVyZWRRdWVyeSA9IHtcclxuICAgIH07XHJcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xyXG4gICAgICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVIcmVmKHJvdXRlciwgaHJlZiwgcmVzb2x2ZUFzKSB7XHJcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xyXG4gICAgbGV0IGJhc2U7XHJcbiAgICBsZXQgdXJsQXNTdHJpbmcgPSB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZik7XHJcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXHJcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcclxuICAgIGNvbnN0IHVybFByb3RvTWF0Y2ggPSB1cmxBc1N0cmluZy5tYXRjaCgvXlthLXpBLVpdezEsfTpcXC9cXC8vKTtcclxuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XHJcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xyXG4gICAgaWYgKCh1cmxQYXJ0c1swXSB8fCAnJykubWF0Y2goLyhcXC9cXC98XFxcXCkvKSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XHJcbiAgICAgICAgdXJsQXNTdHJpbmcgPSAodXJsUHJvdG9NYXRjaCA/IHVybFByb3RvTWF0Y2hbMF0gOiAnJykgKyBub3JtYWxpemVkVXJsO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcclxuICAgIGlmICghaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xyXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xyXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwodXJsQXNTdHJpbmcuc3RhcnRzV2l0aCgnIycpID8gcm91dGVyLmFzUGF0aCA6IHJvdXRlci5wYXRobmFtZSwgJ2h0dHA6Ly9uJyk7XHJcbiAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cclxuICAgICAgICBiYXNlID0gbmV3IFVSTCgnLycsICdodHRwOi8vbicpO1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpO1xyXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XHJcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XHJcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiYgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmIHJlc29sdmVBcykge1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcclxuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcclxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKSA6IGZpbmFsVXJsLmhyZWY7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcclxuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxyXG4gICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZcclxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXHJcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXHJcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcclxufVxyXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyLCB1cmwsIGFzKSB7XHJcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcclxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXHJcbiAgICBsZXQgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihyb3V0ZXIsIHVybCwgdHJ1ZSk7XHJcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xyXG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XHJcbiAgICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7XHJcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xyXG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XHJcbiAgICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpO1xyXG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogcHJlcGFyZWRVcmwsXHJcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XHJcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcclxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xyXG4gICAgfVxyXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xyXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cclxuICAgICAgICBwYWdlcy5zb21lKChwYWdlKT0+e1xyXG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xyXG59XHJcbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5ICYmICEhZnVuY3Rpb24oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xyXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xyXG4gICAgfSBjYXRjaCAobikge1xyXG4gICAgfVxyXG59KCk7XHJcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XHJcbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cykge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxyXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxyXG4gICAgICAgIC8vID4gb3B0aW9uLlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXHJcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxyXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcclxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xyXG4gICAgfSkudGhlbigocmVzKT0+e1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XHJcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcclxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxyXG4gICAgICAgIC8vIGxvb3AuXHJcbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xyXG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICB9KTtcclxufVxyXG5jbGFzcyBSb3V0ZXIge1xyXG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xyXG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXHJcbiAgICAgICAgdGhpcy5zZGMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xyXG4gICAgICAgIHRoaXMuc2RyID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcclxuICAgICAgICB0aGlzLm9uUG9wU3RhdGUgPSAoZSk9PntcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cclxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxyXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXHJcbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXHJcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cclxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cclxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxyXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTbmFwc2hvdCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lkeCA9IGlkeDtcclxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxyXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXHJcbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhczEsIE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXHJcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcclxuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXHJcbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcclxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXHJcbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcclxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxyXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxyXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxyXG4gICAgICAgICAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcclxuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcclxuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50cztcclxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xyXG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5MTtcclxuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxyXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXHJcbiAgICAgICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPSAoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGF0aG5hbWUxKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydDtcclxuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xyXG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcclxuICAgICAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XHJcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xyXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXHJcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFjaztcclxuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XHJcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcclxuICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XHJcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXHJcbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXHJcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxyXG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxyXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xyXG4gICAgICAgICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxyXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWxvYWQoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XHJcbiAgICovIGJhY2soKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xyXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXHJcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcclxuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxyXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxyXG4gICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXHJcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcclxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xyXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XHJcbiAgICB9KSB7XHJcbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGFuZ2UobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zLCBmb3JjZWRTY3JvbGwpIHtcclxuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcclxuICAgICAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcclxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcclxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xyXG4gICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZWY7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXHJcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXHJcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxyXG4gICAgICAgICAgICAgICAgaWYgKCFkaWROYXZpZ2F0ZSAmJiBkZXRlY3RlZERvbWFpbiAmJiB0aGlzLmlzTG9jYWxlRG9tYWluICYmIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcclxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XHJcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xyXG4gICAgICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7XHJcbiAgICAgICAgICAgIHNoYWxsb3dcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFkZExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSkpO1xyXG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcclxuICAgICAgICBsZXQgbG9jYWxlQ2hhbmdlID0gcHJldkxvY2FsZSAhPT0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcclxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXHJcbiAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxyXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcclxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cclxuICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcclxuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcclxuICAgICAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXHJcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XHJcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cclxuICAgICAgICBsZXQgcGFnZXMsIHJld3JpdGVzO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XHJcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxyXG4gICAgICAgICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcclxuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXHJcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcclxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXHJcbiAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xyXG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcclxuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XHJcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcclxuICAgICAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXHJcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxyXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXHJcbiAgICAgICAgcGF0aG5hbWUxID0gcGF0aG5hbWUxID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZTEpKSA6IHBhdGhuYW1lMTtcclxuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcclxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGg7XHJcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUxLCBwYWdlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGF0aG5hbWUxKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xyXG4gICAgICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcclxuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKTtcclxuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlID8gYEludGVycG9sYXRpbmcgaHJlZmAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICsgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgICAgIH0sIHBhcnNlZEFzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnkxLCByb3V0ZU1hdGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcclxuICAgICAgICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcclxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCAsIGFzOiBuZXdBcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcclxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5ub3RGb3VuZCA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFsbG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cclxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cclxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcclxuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XHJcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IChfc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwpICE9PSBudWxsICYmIF9zY3JvbGwgIT09IHZvaWQgMCA/IF9zY3JvbGwgOiAhaXNWYWxpZFNoYWxsb3dSb3V0ZTtcclxuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XHJcbiAgICAgICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICB9IDogbnVsbDtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGU7XHJcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nID0gdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIxLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IGVycjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgKDAsIF91dGlscykuZ2V0VVJMKCkgIT09IGFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xyXG4gICAgICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgX19OOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxyXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cclxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxyXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcclxuICAgICAgICAgICAgJycsIGFzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcclxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xyXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xyXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcclxuICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcclxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XHJcbiAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxyXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxyXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xyXG4gICAgICAgICAgICBsZXQgc3R5bGVTaGVldHM7XHJcbiAgICAgICAgICAgIGxldCBwcm9wcztcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAoeyBwYWdlOiBDb21wb25lbnQxICwgc3R5bGVTaGVldHMgIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXHJcbiAgICAgICAgICAgICAgICBlcnIsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcclxuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhc3luYyBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJlc29sdmVkQXMsIHJvdXRlUHJvcHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSBleGlzdGluZ1JvdXRlSW5mbyAmJiAnaW5pdGlhbCcgaW4gZXhpc3RpbmdSb3V0ZUluZm8gPyB1bmRlZmluZWQgOiBleGlzdGluZ1JvdXRlSW5mbztcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcclxuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXHJcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcclxuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkYXRhSHJlZjtcclxuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEsIHJlc2V0U2Nyb2xsKSB7XHJcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xyXG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XHJcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcclxuICAgICAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxyXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxyXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xyXG4gICAgICAgIHRoaXMuX2JwcyA9IGNiO1xyXG4gICAgfVxyXG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcclxuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XHJcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxyXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcclxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cclxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXHJcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcclxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxyXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xyXG4gICAgfVxyXG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XHJcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xyXG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcclxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcclxuICAgICAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXHJcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xyXG4gICAgICAgIGlmIChpZEVsKSB7XHJcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcclxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcclxuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcclxuICAgICAgICBpZiAobmFtZUVsKSB7XHJcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVybElzTmV3KGFzUGF0aCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cclxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxyXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXHJcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXHJcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcclxuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcclxuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xyXG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xyXG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcclxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xyXG4gICAgICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xyXG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcclxuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSwgcGFnZXMpO1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcclxuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XHJcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XHJcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IHRoaXMuY2xjID0gKCk9PntcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XHJcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XHJcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xyXG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBfZ2V0RGF0YShmbikge1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xyXG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XHJcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XHJcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnIyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcclxuICAgICAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZikge1xyXG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHRocm93IGVycjI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcclxuICAgICAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAxKTtcclxuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XHJcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xyXG4gICAgICAgICAgICBBcHBUcmVlLFxyXG4gICAgICAgICAgICBDb21wb25lbnQsXHJcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcclxuICAgICAgICAgICAgY3R4XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMsIHJvdXRlUHJvcHMpIHtcclxuICAgICAgICBpZiAodGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xyXG4gICAgfVxyXG59XHJcblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vY2hvcmVMaXN0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhlbnRpY2F0aW9uQ29udGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub2tlbi9Mb2dJbkF1dGhlbnRpY2F0aW9uIFwiO1xyXG4vLyBpbXBvcnQgQWRkY2hvcmVzZm9ybSBmcm9tICcuLi9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybSc7XHJcbi8vIGltcG9ydCAnLi4vLi4vQXBwLmNzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldERhdGFiYXNlLFxyXG4gIHJlZixcclxuICBvblZhbHVlLFxyXG4gIGNoaWxkLFxyXG4gIGdldCxcclxuICBxdWVyeSxcclxuICBvcmRlckJ5Q2hpbGQsXHJcbn0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuLy8gdG8gYmUgc3dpdGhlZCB3aXRoIG9uZSBmaWxlIHRoaXMgb25lIGlzIGZvciB0aGUgZmlyZWJhc2UgcmVhbHRpbWVcclxuXHJcbmZ1bmN0aW9uIEZldGNoaW5nRnJvbURCKCkge1xyXG4gIC8vICAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aGVudGljYXRpb25Db250ZXh0KTtcclxuICAvLyAgIGNvbnN0IElzbG9nZ2VkSW4gPSBhdXRoQ3R4LmxvZ2dlZEluO1xyXG5cclxuICBjb25zdCBbY2hvcmVzLCBzZXRjaG9yZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb25lZGF0YSwgc2V0b25lZGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICBjb25zdCBmZXRjaGNob3Jlc0hhbmRsZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRFcnJvcihudWxsKTtcclxuXHJcbiAgICBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG4gICAgY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpOyAvLyBnZXQgdGhlIGRhdGEgYmFzZSBoZXJlIGFuZCBkbyBub3RoaW5nIHdpdGggaXRcclxuXHJcbiAgICBjb25zdCBDcmVmID0gcmVmKGRiLCBcIkNob3Jlcy8gXCIgKyBcIjAwNVwiICsgXCIvaW50cm9zXCIpO1xyXG4gICAgb25WYWx1ZShDcmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LnZhbCgpO1xyXG4gICAgICAvLyAgIHVwZGF0ZWRldGFpbHMocG9zdEVsZW1lbnQsIGRhdGEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZ2V0IHRoZSBkYXRhIGp1c3QgdG8gdGhlIGNvbnNvbGVcclxuXHJcbiAgICBjb25zdCBkYlJlZiA9IHJlZihnZXREYXRhYmFzZSgpKTtcclxuXHJcbiAgICBnZXQoY2hpbGQoZGJSZWYsIGBDaG9yZXMvJHtcIjAwNVwifWApKVxyXG4gICAgICAudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHNuYXBzaG90LnZhbCgpICsgXCJ0aGlzIHNoYWxsIGhhcHBlblwiKTtcclxuICAgICAgICAgIC8vICAgc2V0b25lZGF0YShzbmFwc2hvdC52YWwoKSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIiBwdXQgdGhpcyBvdXQgIFx0XCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgaW4gdGhpcyB2YWx1bHRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBnZXR0aW5nIHNvcnRlZCBkYXRhXHJcbiAgICAvLyBjb25zdCBteVVzZXJJZCA9IGF1dGguY3VycmVudFVzZXIudWlkO1xyXG4gICAgLy8gY29uc3QgdXNlclBvc3QgPSBxdWVyeShcclxuICAgIC8vICAgcmVmKGRiLCBcIkNob3Jlcy9cIiArIG15VXNlcklkKSxcclxuICAgIC8vICAgb3JkZXJCeUNoaWxkKFwicGFpbnRKb2JcIilcclxuICAgIC8vICk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh1c2VyUG9zdCArIFwicXVlcmllZCBkYXRhIFwiICsgbXlVc2VySWQpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcyB3aWxsIHB1dCBvdXQgdGhlIGRhdGEgZnJvbSB0aGUgc2VydmVyIG9uZSBieSBvbmUgXCIpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vdGVzdC0yYTk2Mi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL0Nob3Jlcy5qc29uXCJcclxuICAgICAgICAvLyB0aGlzIHdpbGwgZ2V0IGRhdGEgZnJvbSB0aGUgYmFsZW1vamFcclxuICAgICAgICAvLyBcImh0dHBzOi8vYmFsZW1vamEtOWM1ZTYtZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9DaG9yZXMuanNvblwiXHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgbmV3IGhhcyBnb25lIHdyb25nIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgLy8gIGRhdGEgaXMgaGVyZSBhbiBvYmplY3QsIElkID0ga2V5cyBhbmRcclxuXHJcbiAgICAgIGNvbnN0IGxvYWRlZENob3JlcyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIGxvYWRlZENob3Jlcy5wdXNoKHtcclxuICAgICAgICAgIGlkOiBrZXksXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbkRhdGE6IGRhdGFba2V5XS5kZXNjcmlwdGlvbkRhdGEsXHJcbiAgICAgICAgICBpbnRyb0RhdGE6IGRhdGFba2V5XS5pbnRyb0RhdGEsXHJcbiAgICAgICAgICAvLyAgIGxpbmVPZkJ1c2luZXNzOiBkYXRhW2tleV0ubGluZU9mQnVzaW5lc3MsXHJcbiAgICAgICAgICAvLyBpbnRyb0RhdGE6IGRhdGFba2V5XS5pbnRyb0RhdGFcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0Y2hvcmVzKGxvYWRlZENob3Jlcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hjaG9yZXNIYW5kbGVyKCk7XHJcbiAgfSwgW2ZldGNoY2hvcmVzSGFuZGxlcl0pO1xyXG5cclxuICBsZXQgY29udGVudCA9IDxwPkZvdW5kIG5vIGNob3Jlcy48L3A+O1xyXG5cclxuICBpZiAoY2hvcmVzLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnRlbnQgPSA8Q2hvcmVzTGlzdCBjaG9yZXM9e2Nob3Jlc30gLz47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIGNvbnRlbnQgPSA8cD57ZXJyb3J9PC9wPjtcclxuICB9XHJcblxyXG4gIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIGNvbnRlbnQgPSA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICB9XHJcbiAgY29uc29sZS5sb2coY29udGVudCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgey8qIDxzZWN0aW9uPlxyXG5cdCAgXHJcblx0XHRcdFx0PEFkZGNob3Jlc2Zvcm0gb25BZGRjaG9yZXNmb3JtPXtBZGRjaG9yZUhhbmRsZXJ9IC8+XHJcblx0XHRcdDwvc2VjdGlvbj4gKi99XHJcbiAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgIHsvKiBSZWZyZXNocyB0aGUgcGFnZSAqL31cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaGNob3Jlc0hhbmRsZXJ9PkZldGNoIENob3JlczwvYnV0dG9uPiAqL31cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICB7Lyoge2F1dGhDdHguSXNsb2dnZWRJbiAmJiAgKi99XHJcblxyXG4gICAgICB7b25lZGF0YX1cclxuICAgICAgPHNlY3Rpb24+e2NvbnRlbnR9PC9zZWN0aW9uPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZXRjaGluZ0Zyb21EQjtcclxuXHJcbi8qXHJcblxyXG5cclxuICAvLyB0aW1lIHRvIHVwbG9hZCB0byB0aGUgZmlyZSBiYXNlIGRiXHJcbiAgLy8gYXN5bmMgZnVuY3Rpb24gQWRkY2hvcmVIYW5kbGVyKGNob3JlRGF0YU9iamVjdCkge1xyXG4gIC8vIFx0Y29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicsXHJcbiAgLy8gXHR7XHJcbiAgLy8gXHRcdG1ldGhvZDonUE9TVCcsXHJcbiAgLy8gXHRcdGJvZHk6SlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAvLyBcdFx0aGVhZGVyczp7XHJcbiAgLy8gXHRcdFx0J0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgLy8gXHRcdH1cclxuICAvLyBcdCk7XHJcbiAgLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uY2UuanNvbigpO1xyXG4gIC8vIFx0Y29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gfVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ2hvcmVzTGlzdCBmcm9tICcuLi9jb21wYW55cmVnaXN0cmF0aW9uL0NvbXBhbnlMaXN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBGZXRjaGluZ0Zyb21EQigpIHtcclxuXHQgY29uc3QgW2Nob3Jlcywgc2V0Q2hvcmUgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hDaG9yZUhhbmRsZXIgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XHJcblx0XHRzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcblx0XHRzZXRFcnJvcihudWxsKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYmFsbW9qYS00OWQ5MC1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwL25hbWVzLmpzb24nKTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHQgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcblx0XHRcdGNvbnN0IGRpc2VjdGVkRGF0YSA9IFtdO1xyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuXHRcdFx0XHRkaXNlY3RlZERhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRpZDprZXksXHJcblx0XHRcdFx0XHRkZXNjcmlwdGlvbkRhdGE6ZGF0YVtrZXldLmRlc2NyaXB0aW9uRGF0YSwgXHJcblx0XHRcdFx0XHRpbnRyb0RhdGE6ZGF0YVtrZXldLmludHJvRGF0YSxcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHRcclxuXHJcblx0XHRcdHNldENob3JlKGRpc2VjdGVkRGF0YSk7XHJcblx0XHR9IFxyXG5cdFx0Y2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdC8vIHVzZUVmZmVjdChcclxuXHQvLyBcdCgpID0+IHtcclxuXHQvLyBcdFx0ZmV0Y2hDaG9yZUhhbmRsZXIoKTtcclxuXHQvLyBcdH0sXHJcblx0Ly8gXHRbIGZldGNoQ2hvcmVIYW5kbGVyIF1cclxuXHQvLyApO1xyXG5cclxuXHJcblx0bGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcblx0aWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb250ZW50ID0gPENob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hDaG9yZUhhbmRsZXJ9PkZldGNoIENob3JlczwvYnV0dG9uPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPntjb250ZW50fTwvc2VjdGlvbj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmV0Y2hpbmdGcm9tREIoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IENob3Jlc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0Nob3Jlc0xpc3QnXHJcbmltcG9ydCBBZGRjaG9yZSBmcm9tICcuL2NvbXBvbmVudHMvQWRkY2hvcmUnO1xyXG5pbXBvcnQgJy4vQXBwLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcblx0IGNvbnN0IFsgY2hvcmVzLCBzZXRjaG9yZXMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hjaG9yZXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0c2V0RXJyb3IobnVsbCk7XHJcblx0XHR0cnkge1x0XHRcclxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicpO1xyXG5cdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdCAgdGhyb3cgbmV3IEVycm9yKCdTb21ldGhpbmcgbmV3IGhhcyBnb25lIHdyb25nIScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTsgLy8gIGRhdGEgaXMgaGVyZSBhbiBvYmplY3QsIElkID0ga2V5cyBhbmQgIFxyXG5cclxuXHRcdFx0Y29uc3QgbG9hZGVkQ2hvcmVzID0gW107IFxyXG5cclxuXHRcdFx0Zm9yKGNvbnN0IGtleSBpbiBkYXRhKXtcclxuXHRcdFx0XHRsb2FkZWRDaG9yZXMucHVzaCh7XHJcblx0XHRcdFx0XHRpZDprZXksXHJcblx0XHRcdFx0XHR0aXRsZTogZGF0YVtrZXldLnRpdGxlLCBcclxuXHRcdFx0XHRcdG9wZW5pbmdUZXh0OiBkYXRhW2tleV0ub3BlbmluZ1RleHQsIFxyXG5cdFx0XHRcdFx0cmVsZWFzZURhdGU6IGRhdGFba2V5XS5yZWxlYXNlRGF0ZVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdFxyXG5cdFx0XHRzZXRjaG9yZXMobG9hZGVkQ2hvcmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0ZmV0Y2hjaG9yZXNIYW5kbGVyKCk7XHJcblx0XHR9LFxyXG5cdFx0WyBmZXRjaGNob3Jlc0hhbmRsZXIgXVxyXG5cdCk7XHJcblxyXG5cdC8vIHRpbWUgdG8gdXBsb2FkIHRvIHRoZSBmaXJlIGJhc2UgZGIgXHJcblx0Ly8gYXN5bmMgZnVuY3Rpb24gQWRkY2hvcmVIYW5kbGVyKGNob3JlRGF0YSkge1xyXG5cdC8vIFx0Y29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvbmFtZXMuanNvbicsIFxyXG5cdC8vIFx0e1xyXG5cdC8vIFx0XHRtZXRob2Q6J1BPU1QnLFxyXG5cdC8vIFx0XHRib2R5OkpTT04uc3RyaW5naWZ5KGNob3JlRGF0YSksXHJcblx0Ly8gXHRcdGhlYWRlcnM6e1xyXG5cdC8vIFx0XHRcdCdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nfVx0XHRcclxuXHQvLyBcdFx0fVxyXG5cdC8vIFx0KTtcclxuXHQvLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcblx0Ly8gXHRjb25zb2xlLmxvZyhkYXRhKTsgXHJcblx0Ly8gfVxyXG5cclxuXHRsZXQgY29udGVudCA9IDxwPkZvdW5kIG5vIGNob3Jlcy48L3A+O1xyXG5cclxuXHRpZiAoY2hvcmVzLmxlbmd0aCA+IDApIHtcclxuXHRcdGNvbnRlbnQgPSA8Q2hvcmVzTGlzdCBjaG9yZXM9e2Nob3Jlc30gLz47XHJcblx0fVxyXG5cclxuXHRpZiAoZXJyb3IpIHtcclxuXHRcdGNvbnRlbnQgPSA8cD57ZXJyb3J9PC9wPjtcclxuXHR9XHJcblxyXG5cdGlmIChpc0xvYWRpbmcpIHtcclxuXHRcdGNvbnRlbnQgPSA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHR9XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8UmVhY3QuRnJhZ21lbnQ+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdCA8QWRkY2hvcmUgb25BZGRjaG9yZT17QWRkY2hvcmVIYW5kbGVyfSAvPiBcclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHJcblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtmZXRjaGNob3Jlc0hhbmRsZXJ9PkZldGNoIGNob3JlczwvYnV0dG9uPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPntjb250ZW50fTwvc2VjdGlvbj5cclxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XHJcblx0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG4qL1xyXG5cclxuLypcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IGNob3Jlc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL2Nob3Jlc0xpc3QnO1xyXG5pbXBvcnQgQWRkY2hvcmUgZnJvbSAnLi9jb21wb25lbnRzL0FkZGNob3JlJztcclxuaW1wb3J0ICcuL0FwcC5jc3MnO1xyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG5cdGNvbnN0IFsgY2hvcmVzLCBzZXRjaG9yZXMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHQgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblx0Y29uc3QgZmV0Y2hjaG9yZXNIYW5kbGVyID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xyXG5cdFx0c2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cdFx0c2V0RXJyb3IobnVsbCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3N3YXBpLmRldi9hcGkvZmlsbXMnKTtcclxuXHRcdFx0aWYgKCFyZXNwb25zZS5vaykge1xyXG5cdFx0XHQgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG5cdFx0XHRjb25zdCB0cmFuc2Zvcm1lZGNob3JlcyA9IGRhdGEucmVzdWx0cy5tYXAoKGNob3JlRGF0YSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRpZDogY2hvcmVEYXRhLmVwaXNvZGVfaWQsXHJcblx0XHRcdFx0XHR0aXRsZTogY2hvcmVEYXRhLmRpcmVjdG9yLFxyXG5cdFx0XHRcdFx0b3BlbmluZ1RleHQ6IGNob3JlRGF0YS5vcGVuaW5nX2NyYXdsLFxyXG5cdFx0XHRcdFx0cmVsZWFzZURhdGU6IGNob3JlRGF0YS5yZWxlYXNlX2RhdGVcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0Y2hvcmVzKHRyYW5zZm9ybWVkY2hvcmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0fVxyXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHVzZUVmZmVjdChcclxuXHRcdCgpID0+IHtcclxuXHRcdFx0ZmV0Y2hjaG9yZXNIYW5kbGVyKCk7XHJcblx0XHR9LFxyXG5cdFx0WyBmZXRjaGNob3Jlc0hhbmRsZXIgXVxyXG5cdCk7XHJcblxyXG5cdGZ1bmN0aW9uIEFkZGNob3JlSGFuZGxlcihjaG9yZSkge1xyXG5cdFx0Y29uc29sZS5sb2coY2hvcmUpO1xyXG5cdH1cclxuXHJcblx0bGV0IGNvbnRlbnQgPSA8cD5Gb3VuZCBubyBjaG9yZXMuPC9wPjtcclxuXHJcblx0aWYgKGNob3Jlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRjb250ZW50ID0gPGNob3Jlc0xpc3QgY2hvcmVzPXtjaG9yZXN9IC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVycm9yKSB7XHJcblx0XHRjb250ZW50ID0gPHA+e2Vycm9yfTwvcD47XHJcblx0fVxyXG5cclxuXHRpZiAoaXNMb2FkaW5nKSB7XHJcblx0XHRjb250ZW50ID0gPHA+TG9hZGluZy4uLjwvcD47XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxyXG5cdFx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0XHQ8QWRkY2hvcmUgb25BZGRjaG9yZT17QWRkY2hvcmVIYW5kbGVyfSAvPlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHRcdDxzZWN0aW9uPlxyXG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17ZmV0Y2hjaG9yZXNIYW5kbGVyfT5GZXRjaCBjaG9yZXM8L2J1dHRvbj5cclxuXHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHQ8c2VjdGlvbj57Y29udGVudH08L3NlY3Rpb24+XHJcblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcblxyXG5cclxuKi9cclxuIiwiLy9odHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL25hdmlnYXRlLWJldHdlZW4tcGFnZXMvY2xpZW50LXNpZGVcclxuXHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2NhcnRzL0NhcnRzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENhcnRzIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2NhcnRzL0NhcnRzXCI7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBDb21wb25lbnRVSSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53b3Jrc30+XHJcbiAgICAgIHsvKiA8Q2FydHM+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9GZXRjaGluZ0Zyb21EQlwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGFpbnRCcnVzaHVuaXQuanBnXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgICAgICA8cD4gUGx1bWJlciA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQ2FydHM+XHJcblxyXG4gICAgICA8Q2FydHM+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9GZXRjaGluZ0Zyb21EQlwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcGFpbnRCcnVzaHVuaXQuanBnXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgICAgICA8cD4gUGFpbnRlciA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQ2FydHM+ICovfVxyXG5cclxuICAgICAgPENhcnRzPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2NhcldvcmtTaG9wLnBuZ1wiIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL01lY2hhbmljXCI+TWVjaGFuaWM8L0xpbms+XHJcbiAgICAgIDwvQ2FydHM+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc2VzTmFtZT17Y2xhc3Nlcy5DYXJ0c30+ICovfVxyXG5cclxuICAgICAgPENhcnRzIGNsYXNzZXNOYW1lPXtjbGFzc2VzLkNhcnRzfT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9oYW5keU1hbkljb24uanBnXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvSGFuZHlNYW5cIj5IYW5keU1hbjwvTGluaz5cclxuICAgICAgPC9DYXJ0cz5cclxuXHJcbiAgICAgIDxDYXJ0cz5cclxuICAgICAgICA8aW1nIHNyYz1cIi9ob3VzZUhlbHAucG5nXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvRmV0Y2hpbmdGcm9tREJcIj5Ib3VzZSBIZWxwPC9MaW5rPlxyXG4gICAgICA8L0NhcnRzPlxyXG4gICAgICA8Q2FydHM+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvY29tcHV0ZXJFbmdpbmVlci5wbmdcIiB3aWR0aD17NDB9IGhlaWdodD17NDB9IC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9GZXRjaGluZ0Zyb21EQlwiPklUIFNvbHV0aW9uPC9MaW5rPlxyXG4gICAgICA8L0NhcnRzPlxyXG5cclxuICAgICAgPENhcnRzPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2FydGljdGVjdC5wbmdcIiB3aWR0aD17NDB9IGhlaWdodD17NDB9IC8+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9GZXRjaGluZ0Zyb21EQlwiPkFyY2hpdGVjdDwvTGluaz5cclxuICAgICAgPC9DYXJ0cz5cclxuICAgICAgPENhcnRzPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL0dhcmRuZXIucG5nXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvRmV0Y2hpbmdGcm9tREJcIj5HYXJkbmVyPC9MaW5rPlxyXG4gICAgICA8L0NhcnRzPlxyXG4gICAgICA8Q2FydHM+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvbW92aW5nVHJhY2wucG5nXCIgd2lkdGg9ezQwfSBoZWlnaHQ9ezQwfSAvPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPlRyYW5zcG9ydDwvTGluaz5cclxuICAgICAgPC9DYXJ0cz5cclxuICAgICAgPENhcnRzPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL3BhaW50QnJ1c2h1bml0LmpwZ1wiIHdpZHRoPXs0MH0gaGVpZ2h0PXs0MH0gLz5cclxuICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5DbGVhbmluZzwvTGluaz5cclxuICAgICAgPC9DYXJ0cz5cclxuXHJcbiAgICAgIHsvKiA8Q2FydHM+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL0ZldGNoaW5nRnJvbURCXCI+RmV0Y2hGaXJlYmFzZTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPkNob3JlRm9ybTwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPkdhcmRuZXI8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Rlc3RpbmdcIj5GZXRjaE1vbmdvRGI8L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIm5ldy1tZWV0dXBcIj5DaG9yZUZvclYySU1HPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9VcGxvYWRpbmdDaG9yZXNUb0RiXCI+R2FyZG5lcjwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICA8L2xpPntcIiBcIn1cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9VcGxvYWRpbmdDaG9yZXNUb0RiXCI+R2FyZG5lcjwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPkVsZWN0aWNpYW48L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9VcGxvYWRpbmdDaG9yZXNUb0RiXCI+UGx1bWJlcjwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5TYXRlbGl0ZSA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5HYXJkbmVyPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgIDwvbGk+e1wiIFwifVxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5HYXJkbmVyPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9VcGxvYWRpbmdDaG9yZXNUb0RiXCI+RWxlY3RpY2lhbjwvTGluaz57XCIgXCJ9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5QbHVtYmVyPC9MaW5rPntcIiBcIn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPlNhdGVsaXRlIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9DYXJ0cz4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50VUk7XHJcblxyXG57XHJcbiAgLyogPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0fT5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj48L0xpbms+e1wiIFwifVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuY2FydH0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxue1wiIFwifVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuY2FydH0+XHJcbiAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnR9PlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0fT5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPC9saT4gKi9cclxufVxyXG4iLCJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWFyY2hCYXIvU2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogPGgyPiBTY3JlZW5lZCwgVmV0dGVkIGFuZCBSYXRlZCBwcm9mZXNzaW9uYWxzIGFyZSBhIGNsaWNrIGF3YXk8L2gyPlxyXG5cdFx0XHQ8aDM+R2V0IHRoZSBqb2IgZG9uZSBieSByZWxpYWJsZSBhbmQgY2VydGlmaWVkIHByb2Zlc3Npb25hbHM8L2gzPiAqL31cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaGJhcn0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNlYXJjaFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblNlYXJjaEJhci5wcm9wVHlwZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcclxuIiwiIGltcG9ydCBQYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL3VpL3BhZ2VzL1BhZ2VzJztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vY29tcG9uZW50cy91aS9wYWdlcy9wYWdlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL3VpL2J1dHRvbi9CdXR0b24nO1xyXG5cclxuY29uc3QgU2VjdXJpdHlTZXJ2aWNlID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxQYWdlcyBjbGFzc05hbWU9e2NsYXNzZXMucGFnZXN9PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlc30+XHJcblx0XHRcdFx0PGgyPiBTZWN1cml0eSBTZXJ2aWNlIDwvaDI+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGZvcm0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZXN9PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJDb21wYW55TmFtZVwiPiBDb250YWN0IFBlcnNvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhbnlOYW1lXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZXN9PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJDb21wYW55TmFtZVwiPiBPY2Nhc3Npb248L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjb21wYW55TmFtZVwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZXN9PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJDb21wYW55TmFtZVwiPiBBZGRyZXNzPC9sYWJlbD5cclxuXHRcdFx0XHRcdDx0ZXh0YXJlYSByb3dzPVwiM1wiIGlkPVwiY29tcGFueU5hbWVcIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VzfT5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiQ29tcGFueU5hbWVcIj4gVGVsZXBob25lIE51bWJlcjwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvbXBhbnlOYW1lXCIgLz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlc30+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIkNvbXBhbnlOYW1lXCI+IEVtYWlsPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY29tcGFueU5hbWVcIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj4gU3VibWl0PC9CdXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvUGFnZXM+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3VyaXR5U2VydmljZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWRkQ2hvcmVzRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9kYXRhRmxvdy9jaG9yZXJlZ2lzdHJlYXRpb24vQWRkQ2hvcmVzRm9ybVwiO1xyXG4vLyAgaW1wb3J0IGNob3JlTGlzdCBmcm9tICcuLi9jaG9yZXJlZ2lzdHJlYXRpb24vY2hvcmVMaXN0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgcmVmLFxyXG4gIHNldCxcclxuICBwdXNoLFxyXG4gIGdldERhdGFiYXNlLFxyXG4gIG9uQ2hpbGRBZGRlZCxcclxuICBvbkNoaWxkQ2hhbmdlZCxcclxuICBvbkNoaWxkUmVtb3ZlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuZnVuY3Rpb24gVXBsb2FkaW5nQ2hvcmVzVG9EYigpIHtcclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG5cclxuICBjb25zdCBbd3JpdGUsIHNldFdyaXRlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoKTtcclxuICBjb25zb2xlLmxvZyhkYiArIFwiaXMgZnJvbSB0aGUgZGF0YXNlXCIpO1xyXG5cclxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG5cclxuICAvLyBmdW5jdGlvbiB1c2VyRGF0ZShpbnRyb3MsIGRldGFpbHMsIGxvZkJzKSB7XHJcbiAgLy8gICBjb25zdCBkYiA9IGdldERhdGFiYXNlKCk7XHJcbiAgLy8gICBzZXQocmVmKGRiLCBcIkNob3Jlcy9cIiArIFwiMDA1XCIpLCB7XHJcbiAgLy8gICAgIC8vICBzbyBpZiBpIGJyZWFrIHRoaXMgdXAgOlxyXG4gIC8vICAgICBpbnRyb3M6IFwiZnJlc2ggcGFpbmcgbGFyZ2Ugc2NhbGVcIixcclxuICAvLyAgICAgZGV0YWlsczogXCJhIG5ldyBidWlsZGluZyBcIixcclxuICAvLyAgICAgTG9mQnM6IFwicGFpbnRlclwiLFxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vIHNldFdyaXRlKHVzZXJEYXRlKTsgLy8gaW4gbXkgbWluZCB0aGlzIHdpbGwgdHJpZ2dlciB0aGUgdXBwZXIgZnVuY2lvdG5cclxuXHJcbiAgLy90cnlpbmcgdGhlICBhcHBlbmQgbWV0aG9kXHJcblxyXG4gIGNvbnN0IHBvc3RMaXN0ID0gcmVmKGRiLCBcIkNob3Jlc1wiICsgXCJNbXZaRFdjUEk2QUlLaTRXSi16XCIpO1xyXG4gIGNvbnN0IG5ld1Bvc3QgPSBwdXNoKHBvc3RMaXN0KTtcclxuICBzZXQobmV3UG9zdCwge1xyXG4gICAgbmFtZTogXCJjaGlsZCB1cGRhdGVkPyBcIixcclxuICAgIHR5cGU6IFwiYXBwZW5kVGVzdGVyXCIsXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cobmV3UG9zdC5rZXkpO1xyXG5cclxuICAvL2NhbiBiZSB1c2VkIHRvIGxpc3RlbiB0byB0aGUgbWVzc2FnZWluZyBhcHAgb24gdGhpcyBub2RlXHJcblxyXG4gIC8vICBmaXJzdCB3ZSBhZGQgc29tZSBkYXRhIHRvIHRoaXMgcG9zdElkXHJcbiAgZnVuY3Rpb24gdXNlckRhdGUoaW50cm9zLCBkZXRhaWxzLCBsb2ZCcykge1xyXG4gICAgY29uc3QgZGIgPSBnZXREYXRhYmFzZSgpO1xyXG4gICAgc2V0KHJlZihkYiwgXCJDaG9yZXMvXCIgKyBcIk1tdlpEV2NQSTZBSUtpNFdKLXpcIiksIHtcclxuICAgICAgLy8gIHNvIGlmIGkgYnJlYWsgdGhpcyB1cCA6XHJcbiAgICAgIGludHJvczogXCJmcmVzaCBwYWluZyBsYXJnZSBzY2FsZVwiLFxyXG4gICAgICBkZXRhaWxzOiBcImEgbmV3IGJ1aWxkaW5nIFwiLFxyXG4gICAgICBMb2ZCczogXCJwYWludGVyXCIsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbnRhY3RSZWYgPSByZWYoZGIsIFwiQ2hvcmVzL1wiICsgXCJNbXZaRFdjUEk2QUlLaTRXSi16XCIpO1xyXG4gIG9uQ2hpbGRBZGRlZChjb250YWN0UmVmLCAoZGF0YSkgPT4ge1xyXG4gICAgYWRkQ29udGFjdEVsZW1lbnQoXHJcbiAgICAgIHBvc3RFbGVtZW50LFxyXG4gICAgICBkYXRhLmtleSxcclxuICAgICAgZGF0YS52YWwoKS50ZXh0LFxyXG4gICAgICBkYXRhLnZhbCgpLmF1dGhvclxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgb25DaGlsZENoYW5nZWQoY29udGFjdFJlZiwgKGRhdGEpID0+IHtcclxuICAgIHNldENvbnRhY3RFbGVtZW50KFxyXG4gICAgICBwb3N0RWxlbWVudCxcclxuICAgICAgZGF0YS5rZXksXHJcbiAgICAgIGRhdGEudmFsKCkudGV4dCxcclxuICAgICAgZGF0YS52YWwoKS5hdXRob3JcclxuICAgICk7XHJcbiAgfSk7XHJcbiAgb25DaGlsZFJlbW92ZWQoY29udGFjdFJlZiwgKGRhdGEpID0+IHtcclxuICAgIGRlbGV0YUNvbnRhY3RFbGVtZW50KFxyXG4gICAgICBwb3N0RWxlbWVudCxcclxuICAgICAgZGF0YS5rZXksXHJcbiAgICAgIGRhdGEudmFsKCkudGV4dCxcclxuICAgICAgZGF0YS52YWwoKS5hdXRob3JcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHRvRGJIYW5kbGVyKGNob3JlRGF0YU9iamVjdCkge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgLy8gdGhpcyBpcyB0aGUgYXBpIHRvIHRoZSBGaXJlc3RvcmUgcGFnZSAgXCIgICAgICBodHRwczovL2ZpcmVzdG9yZS5nb29nbGVhcGlzLmNvbS92MS9wcm9qZWN0cy9ZT1VSX1BST0pFQ1RfSUQvZGF0YWJhc2VzLyhkZWZhdWx0KS9kb2N1bWVudHMvY2l0aWVzL0xBXHJcbiAgICAgIC8vIFwiXHJcblxyXG4gICAgICAvLyB0aGlzIGdvZXMgdG8gdGhlIHRlc3QgcGFnZSBvZiB0aGUgc2VydmVyXHJcbiAgICAgIFwiaHR0cHM6Ly90ZXN0LTJhOTYyLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuICAgICAgLy8gdGhpcyBvbmUgaXMgc2VuZGlnIHRoZSBkYXRhIHRvIHRoZSByZWFsdGllbSBzeXNcclxuICAgICAgLy8gXCJodHRwczovL2JhbGVtb2phLTljNWU2LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuXHJcbiAgICAgIC8vIFwiaHR0cHM6Ly9iYWxtb2phLTQ5ZDkwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ2hvcmVzLmpzb25cIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2hvcmVEYXRhT2JqZWN0KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKCFyZXNwb25jZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvclwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25jZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIHdpbGwgbmVlZCB0byBjYXRjaCB0aGlzIGVycm9yIGF0IHNvbWUgcG9pbnRcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAge3dyaXRlfVxyXG4gICAgICAgIDxBZGRDaG9yZXNGb3JtIG9uQWRkY2hvcmVzZm9ybT17dG9EYkhhbmRsZXJ9IC8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkaW5nQ2hvcmVzVG9EYjtcclxuIiwiLy8gdGVtcCBvZmYgZm9yIG5ldCBzZXJ2aWNlXHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbHNcIjtcclxuaW1wb3J0IENoYXRyb29tIGZyb20gXCIuLi8uLi9wYWdlcy9jaGF0cm9vbVwiO1xyXG5cclxuLy8gaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vIGNvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWxzXCI7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgey8qIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGV0YWlscy50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERldGFpbHMuZGVzY3JpcHRpb259IC8+XHJcbiAgICAgIDwvSGVhZD4gKi99XHJcblxyXG4gICAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XHJcbiAgICAgICAgdGl0bGU9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxyXG4gICAgICAvPlxyXG4gICAgICA8Q2hhdHJvb20gLz5cclxuICAgICAgPGJ1dHRvbj5cclxuICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgPExpbmsgaHJlZj1cImNoYXRyb29tXCI+Q29udGFjdCB0aGUgQ2xpZW50PC9MaW5rPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICBcIm1vbmdvZGIrc3J2Oi8vYWRtaW46ZmR4Q2ljR3JGdE5KZDlnQUBjbHVzdGVyMC54ZGF4My5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiXHJcbiAgKTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG5cclxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGZhbGxiYWNrOiBmYWxzZSwgLy9zdGF0ZXMgaWYgYWxsIHRoZSBwYWdlcyBhcmUgcHJlZGVmaW5lZCAvIDQwNFxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAvLyBmZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcclxuXHJcbiAgY29uc3QgbWVldHVwSWQgPSBjb250ZXh0LnBhcmFtcy5tZWV0dXBJZDtcclxuXHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9hZG1pbjpmZHhDaWNHckZ0TkpkOWdBQGNsdXN0ZXIwLnhkYXgzLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XHJcbiAgICBfaWQ6IE9iamVjdElkKG1lZXR1cElkKSxcclxuICB9KTtcclxuXHJcbiAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgIGltYWdlOiBzZWxlY3RlZE1lZXR1cC5pbWFnZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5GSVJFQkFTRV9BVVRIKTtcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHsgSGVsbG86IHN1cmkgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuY29uc3QgQWJseUNoYXRDb21wb25lbnQgPSBkeW5hbWljKFxyXG4gICgpID0+IGltcG9ydChcIi4uL2NvbXBvbmVudHMvY2hhdHJvb20vY2hhdENvbXBvbmVudHNcIiksXHJcbiAge1xyXG4gICAgc3NyOiBmYWxzZSxcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGF0VWkoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TTVQgTWVzc2FnaW5nIEJvYXJkPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkJhbGVtb2phPC9oMT5cclxuICAgICAgICA8QWJseUNoYXRDb21wb25lbnQgLz5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgey8qIDxmb290ZXI+XHJcbiAgICAgIDwvZm9vdGVyPiAqL31cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMDBweDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICAgIG1heC13aWR0aDogOTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzAwNUM5NztcclxuICAgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzYzNzk1LCAjMDA1Qzk3KTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM2Mzc5NSwgIzAwNUM5Nyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ZnIHsgXHJcbiAgICAgICAgICBmaWxsOiMwMDVDOTc7IFxyXG4gICAgICAgICAgY29sb3I6I2ZmZjsgXHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgdG9wOiAwOyBcclxuICAgICAgICAgIGJvcmRlcjogMDsgXHJcbiAgICAgICAgICByaWdodDogMDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vY3RvLWFybSB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMzBweCAxMDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdpdGh1Yi1jb3JuZXI6aG92ZXIgLm9jdG8tYXJtIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogb2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBAa2V5ZnJhbWVzIG9jdG9jYXQtd2F2ZSB7XHJcbiAgICAgICAgICAwJSwgMTAwJXt0cmFuc2Zvcm06cm90YXRlKDApfVxyXG4gICAgICAgICAgMjAlLDYwJXt0cmFuc2Zvcm06cm90YXRlKC0yNWRlZyl9XHJcbiAgICAgICAgICA0MCUsODAle3RyYW5zZm9ybTpyb3RhdGUoMTBkZWcpfX1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW07XHJcbiAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAuYWJseSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICB9XHJcbiAgICAgICAgW2RhdGEtYXV0aG9yPVwibWVcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byByaWdodCxcclxuICAgICAgICAgICAgIzM2Mzc5NSxcclxuICAgICAgICAgICAgIzAwNWM5N1xyXG4gICAgICAgICAgKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBEZXN0aW5hdGlvbiBob21lIHBhZ2UsIGNvbGxlY3QgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHJlbmRlcnMgaXQgb24gdGhlIGhvbWVwYWdlLyBTdGFydFBhZ2VcclxuXHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENvbXBvbmVudFVJIGZyb20gXCIuLi9wYWdlcy9Ib3VzZUNsZWFuZXJcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L0luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBSb3V0aW5nUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Sb3V0aW5nUGFnZVwiO1xyXG4vLyBpbXBvcnQgTG9naW5OYXZpZ2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJBY2NvdW50L2NvbXBvbmVudHMvTGF5b3V0L0xvZ2luTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgRmV0Y2hpbmdGcm9tREIgZnJvbSBcIi4vRmV0Y2hpbmdGcm9tREJcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IFNlY3VyaXR5U2VydmljZSBmcm9tIFwiLi9TZWN1cml0eVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVwbG9hZGRpbmdDaG9yZXNUb0RiIGZyb20gXCIuL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIjtcclxuXHJcbmNvbnN0IFN0YXJ0UGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5CYWxlbW9qYTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgY29udGVudD1cIkNvbm5lY3RzIGhpZ2hseSBza2lsbGVkIGFuZCByZWxpYWJsZSBwcm9mZXNzaW9uYWxzIHdpdGggZW5kIHVzZXJzXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0+IDwvZGl2PiAqL31cclxuXHJcbiAgICAgIHsvKiA8VXBsb2FkZGluZ0Nob3Jlc1RvRGIgLz4gKi99XHJcblxyXG4gICAgICA8Q29tcG9uZW50VUkgLz5cclxuXHJcbiAgICAgIHsvKiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPiAqL31cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtiYWNrR3JvdW5kfT4gKi99XHJcbiAgICAgIHsvKiA8SW1hZ2Ugc3JjPVwiL29rLnBuZ1wiIHdpZHRoPXsyNzd9IGhlaWdodD17NzV9IC8+ICovfVxyXG4gICAgICB7LyogPFNlYXJjaEJhciAvPiAqL31cclxuICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vcmVzZXJ2ZXIgbmFtZVxyXG4vL1NBRkU6OiBjb2RlIHdyaXR0ZW4gaW4gaGVyZSB3aWxsIG9ubHkgcnVuIG9uIHRoZSBzZXJ2ZXIgc2lkZS5cclxuXHJcbi8vd2lsbCB1cGRhdGEgdGhlIHBhZ2UgZXZlcnkgdGltZSB0aGVyZSBpcyBhIHJlcXVlc3QuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnJlcTtcclxuLy8gICBjb25zdCByZXNwb25jZSA9IGNvbnRleHQucmVzO1xyXG4vLyAgIC8vIEdldCB0aGUgZGF0YSBmcm9tIGFueSB3aGVyZSBBUEkgb3IgLi4uLi5cclxuLy8gICAvLyBBbHdheXMgcmV0dXJucyBhbiBvYmplY3RcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogZHVtbXlEYXRhLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy8gd2UgYXJlIGZldGNoaW5nIHRoZSBkYXRhIGRpcmVjdGx5IGZyb20gdGhlIHVzZXIgaW5wdXQgZm9ybSBhcyB0aGVyZSBpcyBubyBuZWVkIHRvIG1ha2UgYSB0cmlwIHRvIHRoZSBzZXJ2ZXIgYXQgdGhpcyBwb2ludCBpbiB0aW1lLlxyXG5cclxuICAvLyBjb25uZWN0IHRvIHRoZSBzZXJ2ZXJcclxuICAvL2VzdGFibGlzaCBjb25uZWN0aW9uLCBnZXQgYWNjZXMgdG8gZGIsIGFuZCBnZXR0aW5nIGRhdGFcclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgXCJtb25nb2RiK3NydjovL2FkbWluOmZkeENpY0dyRnROSmQ5Z0FAY2x1c3RlcjAueGRheDMubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxyXG4gICk7XHJcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTsgLy8gdG8gY29ubmVjdCB0byB0aGUgbWVldHVwcyBkYlxyXG4gIGNvbnN0IG1lZXR1cGNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTsgLy8gY3JlYXRlIGEgZGF0YSBjb2xsZWN0aW9uIGNhbGxlZCBtZWV0dXAgb24gdGhlIHNlcnZlclxyXG4gIC8vIHJlc3VsdCBpcyBhbiBvYmplY3Qgd2l0aCBhbiBpZCBhcyBvbmUgb2YgaXRzIHByb3BlcnRpZXNcclxuICBjb25zdCBhbGxyZXN1bHQgPSBhd2FpdCBtZWV0dXBjb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7XHJcblxyXG4gIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogYWxscmVzdWx0Lm1hcCgobWVldHVwKSA9PiAoe1xyXG4gICAgICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXHJcbiAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICB9KSksXHJcbiAgICB9LFxyXG5cclxuICAgIHJldmFsaWRhdGU6IDEwMCwgLy9yZWZyZXNocyB0aGUgcGFnZSBvbiB0aGUgc2VydmVyIGV2ZXJ5IHggc2Vjb25kcyBpZiB0aGVyZSByZXF1ZXN0IGFyZSB0aGVyZVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJ0UGFnZTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFVwbG9hZGluZ0Nob3Jlc1RvRGI7XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LkZJUkVCQVNFX0FVVEgpO1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczogeyBIZWxsbzogc3VyaSB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hvcmVcIjogXCJDaG9yZV9jaG9yZV9fM25lRllcIixcblx0XCJidXR0b25cIjogXCJDaG9yZV9idXR0b25fXzJScEd4XCIsXG5cdFwiZm9jdXNcIjogXCJDaG9yZV9mb2N1c19fclZxNnBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRyb2xcIjogXCJBZGRDaG9yZV9jb250cm9sX18ybjhMdFwiLFxuXHRcImNob2ljZVwiOiBcIkFkZENob3JlX2Nob2ljZV9fM3V3bnBcIixcblx0XCJhY3Rpb25cIjogXCJBZGRDaG9yZV9hY3Rpb25fXzNkZThhXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaG9yZWxpc3RcIjogXCJjaG9yZUxpc3RfY2hvcmVsaXN0X181S3lHLVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsXCI6IFwiTWVldHVwRGV0YWlsc19kZXRhaWxfXzJwV1FYXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiTWVldHVwSXRlbV9tYWluX18xaHVTOVwiLFxuXHRcIml0ZW1cIjogXCJNZWV0dXBJdGVtX2l0ZW1fXzNzaU1VXCIsXG5cdFwiaW1hZ2VcIjogXCJNZWV0dXBJdGVtX2ltYWdlX18xM3JBUFwiLFxuXHRcImNvbnRlbnRcIjogXCJNZWV0dXBJdGVtX2NvbnRlbnRfXzN1RWtUXCIsXG5cdFwiYWN0aW9uc1wiOiBcIk1lZXR1cEl0ZW1fYWN0aW9uc19fTHZUOUJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpc3RcIjogXCJNZWV0dXBMaXN0X2xpc3RfXzFpYWZuXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzZWFyY2hiYXJcIjogXCJTZWFyY2hfc2VhcmNoYmFyX19wdk4ydlwiLFxuXHRcImgyXCI6IFwiU2VhcmNoX2gyX18ySWlXM1wiLFxuXHRcImgzXCI6IFwiU2VhcmNoX2gzX18xSXltV1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2FyZFwiOiBcIkNhcmRfQ2FyZF9fMmVnZ2ZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fXzVCRkNpXCIsXG5cdFwiZm9jdXNcIjogXCJCdXR0b25fZm9jdXNfXzJ4d0NYXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3b3Jrc1wiOiBcIkNhcnRzX3dvcmtzX18yMWJtU1wiLFxuXHRcIkNhcnRzXCI6IFwiQ2FydHNfQ2FydHNfXzNTenRxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWdlc1wiOiBcIlBhZ2VzX3BhZ2VzX19vc0dxWVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZXNcIjogXCJwYWdlc19wYWdlc19fU2xBR1BcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYWJseS9wcm9taXNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS9hdXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2RhdGFiYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvZGJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbG9hZGFibGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJCdXR0b24iLCJjbGFzc2VzIiwiTGluayIsIkNob3JlIiwicHJvcHMiLCJjaG9yZSIsImludHJvRGF0YSIsImRlc2NyaXB0aW9uRGF0YSIsInBhaW50Sm9iIiwiYnV0dG9uIiwiVXNlcklucHV0IiwiQ2FyZCIsInVzZVJlZiIsIkFkZGNob3Jlc2Zvcm0iLCJ2YWx1ZSIsImlzVmFsaWQiLCJ2YWxpZEludHJvIiwiaGFzRXJyb3IiLCJpblZhbGlkSW50cm8iLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJJbnRyb0NoYW5nZUhhbmRsZXIiLCJvbmZvY3VzSGFuZGxlciIsImJsdXJJbnRybyIsInJlc2V0IiwicmVzZXRJbnRybyIsInRyaW0iLCJ2YWxpZGRldGFpbCIsImluVmFsaWRkZXRhaWwiLCJkZXRhaWxDaGFuZ2VIYW5kbGVyIiwiYmx1cmRldGFpbCIsInJlc2V0ZGV0YWlsIiwiTGluZU9mTWFpbnRhaW5hbmNlIiwiVmFsaWRMaW5lT2ZNYWludGFpbmFuY2UiLCJpblZhbGlkTGluZU9mTWFpbnRhaW5hbmNlIiwiTGluZU9mTWFpbnRhaW5hbmNlQ2hhbmdlSGFuZGxlciIsImJsdXJMaW5lT2ZNYWludGFpbmFuY2UiLCJyZXNldExpbmVPZk1haW50YWluYW5jZSIsImRlc2NyaXB0aW9uIiwiaW50cm8iLCJmb3JtVmFsaWRhdGlvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiY2hvcmVEYXRhT2JqZWN0Iiwib25BZGRjaG9yZXNmb3JtIiwiaW50cm9JbnB1dENsYXNzZXMiLCJkZXRhaWxJbnB1dENsYXNzZXMiLCJMaW5lT2ZNYWludGFpbmFuY2VDbGFzc2VzIiwiY29udHJvbCIsImFjdGlvbiIsImNob3JlTGlzdCIsImNob3JlcyIsIm1hcCIsImlkIiwidXNlU3RhdGUiLCJ2YWxpZGF0aW9uIiwiZW50ZXJlZFZhbHVlIiwic2V0RW50ZXJlZFZhbHVlIiwiaXNUb3VjZWQiLCJzZXRJc1RvdWNoZWQiLCJ2YWx1ZUlzVmFsaWQiLCJ0YXJnZXQiLCJyZXNldFZhbHVlIiwiRnJhZ21lbnQiLCJNZWV0dXBEZXRhaWxzIiwiZGV0YWlsIiwidGl0bGUiLCJhZGRyZXNzIiwidXNlUm91dGVyIiwiTWVldHVwRGV0YWlsIiwiTWVldHVwSXRlbSIsInJvdXRlciIsInNob3dEZXRhaWxzIiwicHVzaCIsIml0ZW0iLCJpbWFnZSIsImNvbnRlbnQiLCJhY3Rpb25zIiwiTWVldHVwTGlzdCIsImxpc3QiLCJtZWV0dXBzIiwibWVldHVwIiwiY2FyZCIsImNoaWxkcmVuIiwidHlwZSIsIm9uQ2xpY2siLCJDYXJ0cyIsIlBhZ2VzIiwiY2xhc3NOYW1lIiwicGFnZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwic3RhcnQiLCJEYXRlIiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwibm9TU1IiLCJkeW5hbWljIiwiX2xvYWRhYmxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwibG9hZGFibGVGbiIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJSZWFjdCIsIkNob3Jlc0xpc3QiLCJBdXRoZW50aWNhdGlvbkNvbnRleHQiLCJnZXREYXRhYmFzZSIsIm9uVmFsdWUiLCJvcmRlckJ5Q2hpbGQiLCJnZXRBdXRoIiwiRmV0Y2hpbmdGcm9tREIiLCJzZXRjaG9yZXMiLCJzZXRJc0xvYWRpbmciLCJzZXRFcnJvciIsIm9uZWRhdGEiLCJzZXRvbmVkYXRhIiwiZmV0Y2hjaG9yZXNIYW5kbGVyIiwiYXV0aCIsImRiIiwiQ3JlZiIsInNuYXBzaG90IiwidmFsIiwiZGJSZWYiLCJleGlzdHMiLCJyZXNwb25zZSIsImxvYWRlZENob3JlcyIsIkNvbXBvbmVudFVJIiwid29ya3MiLCJTZWFyY2hCYXIiLCJzZWFyY2hiYXIiLCJwcm9wVHlwZXMiLCJTZWN1cml0eVNlcnZpY2UiLCJBZGRDaG9yZXNGb3JtIiwib25DaGlsZEFkZGVkIiwib25DaGlsZENoYW5nZWQiLCJvbkNoaWxkUmVtb3ZlZCIsIlVwbG9hZGluZ0Nob3Jlc1RvRGIiLCJ3cml0ZSIsInNldFdyaXRlIiwicG9zdExpc3QiLCJuZXdQb3N0IiwidXNlckRhdGUiLCJpbnRyb3MiLCJkZXRhaWxzIiwibG9mQnMiLCJMb2ZCcyIsImNvbnRhY3RSZWYiLCJhZGRDb250YWN0RWxlbWVudCIsInBvc3RFbGVtZW50IiwiYXV0aG9yIiwic2V0Q29udGFjdEVsZW1lbnQiLCJkZWxldGFDb250YWN0RWxlbWVudCIsInRvRGJIYW5kbGVyIiwicmVzcG9uY2UiLCJoZWFkZXJzIiwiSGVhZCIsIk1vbmdvQ2xpZW50IiwiT2JqZWN0SWQiLCJDaGF0cm9vbSIsIm1lZXR1cERhdGEiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsImNvbm5lY3QiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImNsb3NlIiwiZmFsbGJhY2siLCJwYXRocyIsIm1lZXR1cElkIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJzZWxlY3RlZE1lZXR1cCIsImZpbmRPbmUiLCJBYmx5Q2hhdENvbXBvbmVudCIsIkNoYXRVaSIsIlJvdXRpbmdQYWdlIiwiVXBsb2FkZGluZ0Nob3Jlc1RvRGIiLCJTdGFydFBhZ2UiLCJtZWV0dXBjb2xsZWN0aW9uIiwiYWxscmVzdWx0IiwicmV2YWxpZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=