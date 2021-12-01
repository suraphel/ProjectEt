"use strict";
self["webpackHotUpdate_N_E"]("pages/AuthForm1",{

/***/ "./pages/AuthForm1.js":
/*!****************************!*\
  !*** ./pages/AuthForm1.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Token_Auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Token/Auth-context */ "./components/Token/Auth-context.js");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/usersAccount/Auth/AuthForm.module.css */ "./components/usersAccount/Auth/AuthForm.module.css");
/* harmony import */ var _components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var _components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignUpForm */ "./pages/SignUpForm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\AuthForm1.js",
    _this = undefined,
    _s = $RefreshSig$();


// LogIn form and validation with firebase








 //-------------------------------------firebase files -------------------



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



var AuthForm = function AuthForm() {
  _s();

  var _UserInput = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_7__.default)(function (value) {
    return value.trim() !== "";
  }),
      username = _UserInput.value,
      validUsername = _UserInput.isValid,
      inValidUsername = _UserInput.hasError,
      UsernameChangeHandler = _UserInput.valueChangeHandler,
      blurUsername = _UserInput.onfocusHandler,
      resetUsername = _UserInput.reset;

  var _UserInput2 = (0,_components_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_7__.default)(function (value) {
    return value.trim() !== "";
  }),
      password = _UserInput2.value,
      validPassword = _UserInput2.isValid,
      inValidPassword = _UserInput2.hasError,
      PasswordChangeHandler = _UserInput2.valueChangeHandler,
      blurPassword = _UserInput2.onfocusHandler,
      resetPassword = _UserInput2.reset; // signing with email and password
  // const history = useHistory();


  var formValidation = false;

  if (validUsername && validPassword) {
    formValidation = true;
  }

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  var usernameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var passwordInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var displayNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(); // const photoUrlInputRef = useRef();
  // const history = useHistory();

  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_Token_Auth_context__WEBPACK_IMPORTED_MODULE_3__.default); // validation if needed

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      isLogin = _useState[0],
      setIsLogin = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isloggedIn = _useState3[0],
      setIsloggedIn = _useState3[1]; //-***********************************************************
  // this will run once after the page has loaded
  // useEffect(() => {
  //   const loggedUser = localStorage.getItem("isloggedIn");
  //   if (loggedUser === "1") {
  //     setIsloggedIn(true);
  //   }
  // }, []);


  var firebaseConfig = {
    apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
    authDomain: "test-2a962.firebaseapp.com",
    databaseURL: "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-2a962",
    storageBucket: "test-2a962.appspot.com",
    messagingSenderId: "377052867142",
    appId: "1:377052867142:web:a8ce49ddb2f3c166217847"
  };
  var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_9__.initializeApp)(firebaseConfig);
  var auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.getAuth)(app);
  var db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getFirestore)(app); // this is a sample code for testing
  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  var submitHandler = function submitHandler(event) {
    event.preventDefault(); // this will fire if there is a change in the user account

    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.onAuthStateChanged)(auth, function (user) {
      if (user) {
        var uid = user.uid;
        router.push("/FetchingFromDB");
        authCtx.login(uid);
      } else {
        console.log("user logged out");
        console.log("no data to output");
      }
    }); // authCtx.login(uid);
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

    var enteredEmail = usernameInputRef.current.value;
    var enteredPassword = passwordInputRef.current.value; // const enetereddisplayName = displayNameInputRef.current.value;
    // const eneteredphotoUrl = photoUrlInputRef.current.value;

    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.createUserWithEmailAndPassword)(auth, enteredEmail, enteredPassword // displayName
    // phoneNumber
    ).then(function (userCredential) {
      // Signed in
      var user = userCredential.user; // ...
    })["catch"](function (error) {
      var errorCode = error.code;
      var errorMessage = error.message; // console.log(errorCode, errorMessage);
      // ..
    });
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(auth, enteredEmail, enteredPassword).then(function (userCredential) {
      // Signed in
      var user = userCredential.user;
      console.log("signed in from the Authform1!!" + user.uid);
      console.log("idToken " + idToken);
      localStorage.setItem("isloggedIn", "1"); // ...
    }) // .then((res) => {
    //   if (res.ok) {
    //     console.log("all good");
    //   } else {
    //     console.log("error somewhere");
    //   }
    // })
    .then(function (data) {
      authCtx.login(data.idToken);
      console.log("testing" + data.idToken);
    })["catch"](function (error) {
      var errorCode = error.code;
      var errorMessage = error.message; // console.log(errorCode, errorMessage);
    }); // console.log(user.uid);

    resetUsername("");
    resetPassword("");
  };

  var getdata = /*#__PURE__*/function () {
    var _ref = (0,A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var querySnapshot;
      return A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(db, "guides"));

            case 2:
              querySnapshot = _context.sent;
              querySnapshot.forEach(function (doc) {
                console.log("".concat(doc.id, " => ").concat(doc.data()));
                console.log(doc.data());
                var li = "".concat(doc.data(), " put this out }");
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getdata() {
      return _ref.apply(this, arguments);
    };
  }();

  var writeData = /*#__PURE__*/function () {
    var _ref2 = (0,A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var docRef, result;
      return A_Projects_NextJs_Balemoja_Next_Balemoja_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(db, "Chores"), {
                first: "Surafel",
                last: "Mekasha",
                title: "Senior Developer"
              });

            case 3:
              docRef = _context2.sent;
              console.log(docRef.id);
              result = doc.data;
              return _context2.abrupt("return", result);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error("Error adding element to the server");

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function writeData() {
      return _ref2.apply(this, arguments);
    };
  }(); // const updateProfile = () => {};


  var logout = function logout() {
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signOut)(auth).then(function () {
      console.log(auth);
      console.log("signOut successful");
      console.log("uid = ");
    });
  };

  var usernameInputClasses = inValidUsername ? "form-control invalid" : "form-control ";
  var passwordInputClasses = inValidPassword ? "form-control invalid" : "form-control ";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("section", {
    className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().auth),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("h1", {
      children: isLogin ? "Log in " : "Sign up".concat(" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_SignUpForm__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 51
      }, _this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
      onClick: getdata,
      children: " ServerData"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
      onClick: logout,
      children: " SignOut"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("button", {
      onClick: writeData,
      children: " Add data"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: usernameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("label", {
          htmlFor: "email",
          children: "Your Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("input", {
          type: "email",
          id: "email",
          ref: usernameInputRef,
          required: true,
          onBlur: blurUsername,
          onChange: UsernameChangeHandler,
          value: username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 11
        }, _this), inValidUsername && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the User-name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: passwordInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("label", {
          htmlFor: "password",
          children: "Your Password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("input", {
          type: "password",
          id: "password",
          ref: passwordInputRef,
          required: true,
          onBlur: blurPassword,
          onChange: PasswordChangeHandler,
          value: password
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 11
        }, _this), inValidPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("p", {
          className: "error-text",
          children: " Please enter the password"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        className: (_components_usersAccount_Auth_AuthForm_module_css__WEBPACK_IMPORTED_MODULE_13___default().actions),
        children: [!isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_ui_button_Button__WEBPACK_IMPORTED_MODULE_6__.default, {
          children: isLogin ? "Login" : "Create Account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/CreateAccount",
          children: " Create new Account "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: "/forgotPassword",
          children: " Forgot password "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 241,
    columnNumber: 5
  }, _this);
};

_s(AuthForm, "F4ts/GXGaL0NcMQ6rpEu03hRUzs=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = AuthForm;
/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

var _c;

$RefreshReg$(_c, "AuthForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0xLmRmZGRlMTUxZDQ4MTcyMWVlNDdiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxJQUFNdUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixtQkFPSWQsc0VBQVMsQ0FBQyxVQUFDZSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU0MsUUFEVCxjQUNFRixLQURGO0FBQUEsTUFFV0csYUFGWCxjQUVFQyxPQUZGO0FBQUEsTUFHWUMsZUFIWixjQUdFQyxRQUhGO0FBQUEsTUFJc0JDLHFCQUp0QixjQUlFQyxrQkFKRjtBQUFBLE1BS2tCQyxZQUxsQixjQUtFQyxjQUxGO0FBQUEsTUFNU0MsYUFOVCxjQU1FQyxLQU5GOztBQVNBLG9CQU9JM0Isc0VBQVMsQ0FBQyxVQUFDZSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU1ksUUFEVCxlQUNFYixLQURGO0FBQUEsTUFFV2MsYUFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcsZUFIWixlQUdFVCxRQUhGO0FBQUEsTUFJc0JVLHFCQUp0QixlQUlFUixrQkFKRjtBQUFBLE1BS2tCUyxZQUxsQixlQUtFUCxjQUxGO0FBQUEsTUFNU1EsYUFOVCxlQU1FTixLQU5GLENBVnFCLENBbUJyQjtBQUVBOzs7QUFDQSxNQUFJTyxjQUFjLEdBQUcsS0FBckI7O0FBRUEsTUFBSWhCLGFBQWEsSUFBSVcsYUFBckIsRUFBb0M7QUFDbENL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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQU9FLCtEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLGlCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQWpRRDs7R0FBTTFCO1VBNEJXakI7OztLQTVCWGlCO0FBbVFOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0F1dGhGb3JtMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMb2dJbiBmb3JtIGFuZCB2YWxpZGF0aW9uIHdpdGggZmlyZWJhc2VcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vQXV0aC1jb250ZXh0XCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9jb21wb25lbnRzL3VzZXJzQWNjb3VudC9BdXRoL0F1dGhGb3JtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uXCI7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaG9va3MvdXNlci1pbnB1dHNcIjtcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tIFwiLi9TaWduVXBGb3JtXCI7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWZpcmViYXNlIGZpbGVzIC0tLS0tLS0tLS0tLS0tLS0tLS1cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IHtcclxuICBnZXRBdXRoLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgc2lnbk91dCxcclxuICB1cGRhdGVQcm9maWxlLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIGFkZERvYywgZ2V0RG9jcyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbi8vIGltcG9ydCB7XHJcbi8vICAgYXBwLFxyXG4vLyAgIGF1dGgsXHJcbi8vICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4vLyAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4vLyAgIC8vIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxuLy8gICBzaWduT3V0LFxyXG4vLyAgIHVwZGF0ZVByb2ZpbGUsXHJcbi8vIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZmlyZWJhc2UvZmlyZWJhc2VcIjtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWVuZCBmaXJlYmFzZSBmaWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5jb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogdXNlcm5hbWUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZFVzZXJuYW1lLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRVc2VybmFtZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogVXNlcm5hbWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJVc2VybmFtZSxcclxuICAgIHJlc2V0OiByZXNldFVzZXJuYW1lLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogcGFzc3dvcmQsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZFBhc3N3b3JkLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRQYXNzd29yZCxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogUGFzc3dvcmRDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJQYXNzd29yZCxcclxuICAgIHJlc2V0OiByZXNldFBhc3N3b3JkLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICAvLyBzaWduaW5nIHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXHJcblxyXG4gIC8vIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgbGV0IGZvcm1WYWxpZGF0aW9uID0gZmFsc2U7XHJcblxyXG4gIGlmICh2YWxpZFVzZXJuYW1lICYmIHZhbGlkUGFzc3dvcmQpIHtcclxuICAgIGZvcm1WYWxpZGF0aW9uID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBwYXNzd29yZElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgZGlzcGxheU5hbWVJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IHBob3RvVXJsSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgLy8gY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgLy8gdmFsaWRhdGlvbiBpZiBuZWVkZWRcclxuICBjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNsb2dnZWRJbiwgc2V0SXNsb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8tKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gdGhpcyB3aWxsIHJ1biBvbmNlIGFmdGVyIHRoZSBwYWdlIGhhcyBsb2FkZWRcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgbG9nZ2VkVXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNsb2dnZWRJblwiKTtcclxuICAvLyAgIGlmIChsb2dnZWRVc2VyID09PSBcIjFcIikge1xyXG4gIC8vICAgICBzZXRJc2xvZ2dlZEluKHRydWUpO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgICBhcGlLZXk6IFwiQUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCIsXHJcbiAgICBhdXRoRG9tYWluOiBcInRlc3QtMmE5NjIuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgICBkYXRhYmFzZVVSTDpcclxuICAgICAgXCJodHRwczovL3Rlc3QtMmE5NjItZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxyXG4gICAgcHJvamVjdElkOiBcInRlc3QtMmE5NjJcIixcclxuICAgIHN0b3JhZ2VCdWNrZXQ6IFwidGVzdC0yYTk2Mi5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc3MDUyODY3MTQyXCIsXHJcbiAgICBhcHBJZDogXCIxOjM3NzA1Mjg2NzE0Mjp3ZWI6YThjZTQ5ZGRiMmYzYzE2NjIxNzg0N1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbiAgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuXHJcbiAgLy8gdGhpcyBpcyBhIHNhbXBsZSBjb2RlIGZvciB0ZXN0aW5nXHJcblxyXG4gIC8vIGNvbnN0IHN3aXRjaEF1dGhNb2RlSGFuZGxlciA9ICgpID0+IHtcclxuICAvLyAgIHNldElzTG9naW4oKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgZmlyZSBpZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiB0aGUgdXNlciBhY2NvdW50XHJcblxyXG4gICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gdXNlci51aWQ7XHJcbiAgICAgICAgcm91dGVyLnB1c2goXCIvRmV0Y2hpbmdGcm9tREJcIik7XHJcbiAgICAgICAgYXV0aEN0eC5sb2dpbih1aWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidXNlciBsb2dnZWQgb3V0XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF0YSB0byBvdXRwdXRcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gYXV0aEN0eC5sb2dpbih1aWQpO1xyXG5cclxuICAgIC8vIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xyXG4gICAgLy8gaWYgKHVzZXIpIHtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyB0aGlzIHdpbGwgZmlyZSBiZWNhdXNlIHRoaXMgaXMgYmVpbmcgY2FsbGVkIGluIHRoZSBvbkF1dGhTdGF0ZUNoYW5nZWRcclxuICAgIGZ1bmN0aW9uIHNldHVwVUkodXNlcikge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiWWVzIHRoZXJlIGlzIGEgdXNlclwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIHVzZXIgaW4gc2lnaHRcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWZvcm1WYWxpZGF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlbnRlcmVkRW1haWwgPSB1c2VybmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBwYXNzd29yZElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgLy8gY29uc3QgZW5ldGVyZWRkaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZTtcclxuICAgIC8vIGNvbnN0IGVuZXRlcmVkcGhvdG9VcmwgPSBwaG90b1VybElucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcblxyXG4gICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICBhdXRoLFxyXG4gICAgICBlbnRlcmVkRW1haWwsXHJcbiAgICAgIGVudGVyZWRQYXNzd29yZFxyXG4gICAgICAvLyBkaXNwbGF5TmFtZVxyXG4gICAgICAvLyBwaG9uZU51bWJlclxyXG4gICAgKVxyXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAvLyBTaWduZWQgaW5cclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICAgICAgICAvLyAuLi5cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgLy8gLi5cclxuICAgICAgfSk7XHJcblxyXG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgZW50ZXJlZEVtYWlsLCBlbnRlcmVkUGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ25lZCBpblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIGluIGZyb20gdGhlIEF1dGhmb3JtMSEhXCIgKyB1c2VyLnVpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpZFRva2VuIFwiICsgaWRUb2tlbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc2xvZ2dlZEluXCIsIFwiMVwiKTtcclxuICAgICAgICAvLyAuLi5cclxuICAgICAgfSlcclxuICAgICAgLy8gLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyAgIGlmIChyZXMub2spIHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiYWxsIGdvb2RcIik7XHJcbiAgICAgIC8vICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZXJyb3Igc29tZXdoZXJlXCIpO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBhdXRoQ3R4LmxvZ2luKGRhdGEuaWRUb2tlbik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGVzdGluZ1wiICsgZGF0YS5pZFRva2VuKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvckNvZGUsIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlci51aWQpO1xyXG4gICAgcmVzZXRVc2VybmFtZShcIlwiKTtcclxuICAgIHJlc2V0UGFzc3dvcmQoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0ZGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsIFwiZ3VpZGVzXCIpKTtcclxuICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAke2RvYy5pZH0gPT4gJHtkb2MuZGF0YSgpfWApO1xyXG4gICAgICBjb25zb2xlLmxvZyhkb2MuZGF0YSgpKTtcclxuICAgICAgY29uc3QgbGkgPSBgJHtkb2MuZGF0YSgpfSBwdXQgdGhpcyBvdXQgfWA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB3cml0ZURhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkb2NSZWYgPSBhd2FpdCBhZGREb2MoY29sbGVjdGlvbihkYiwgXCJDaG9yZXNcIiksIHtcclxuICAgICAgICBmaXJzdDogXCJTdXJhZmVsXCIsXHJcbiAgICAgICAgbGFzdDogXCJNZWthc2hhXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiU2VuaW9yIERldmVsb3BlclwiLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coZG9jUmVmLmlkKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gZG9jLmRhdGE7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZWxlbWVudCB0byB0aGUgc2VydmVyXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IHVwZGF0ZVByb2ZpbGUgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYXV0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2lnbk91dCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVpZCA9IFwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lSW5wdXRDbGFzc2VzID0gaW5WYWxpZFVzZXJuYW1lXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dENsYXNzZXMgPSBpblZhbGlkUGFzc3dvcmRcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGh9PlxyXG4gICAgICB7LypvcHRpb24gYi9uIGxvZ2luIG9yIHNpZ25VcCAgKi99XHJcbiAgICAgIDxoMT57aXNMb2dpbiA/IFwiTG9nIGluIFwiIDogYCR7XCJTaWduIHVwXCJ9ICR7KDxTaWduVXBGb3JtIC8+KX1gfTwvaDE+XHJcblxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldGRhdGF9PiBTZXJ2ZXJEYXRhPC9idXR0b24+XHJcbiAgICAgIHsvKiB0byBiZSBvdXQgb24gdGhlIGRvbSAqL31cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PiBTaWduT3V0PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17d3JpdGVEYXRhfT4gQWRkIGRhdGE8L2J1dHRvbj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1c2VybmFtZUlucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+WW91ciBFbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHJlZj17dXNlcm5hbWVJbnB1dFJlZn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25CbHVyPXtibHVyVXNlcm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtVc2VybmFtZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZFVzZXJuYW1lICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIFVzZXItbmFtZTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwYXNzd29yZElucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+WW91ciBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHJlZj17cGFzc3dvcmRJbnB1dFJlZn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25CbHVyPXtibHVyUGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtQYXNzd29yZENoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZFBhc3N3b3JkICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPiBQbGVhc2UgZW50ZXIgdGhlIHBhc3N3b3JkPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICB7IWlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24+e2lzTG9naW4gPyBcIkxvZ2luXCIgOiBcIkNyZWF0ZSBBY2NvdW50XCJ9PC9CdXR0b24+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvQ3JlYXRlQWNjb3VudFwiPiBDcmVhdGUgbmV3IEFjY291bnQgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZm9yZ290UGFzc3dvcmRcIj4gRm9yZ290IHBhc3N3b3JkIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiY2xhc3NlcyIsInVzZVJvdXRlciIsIkxpbmsiLCJCdXR0b24iLCJVc2VySW5wdXQiLCJ1c2VIaXN0b3J5IiwiU2lnblVwRm9ybSIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwidXBkYXRlUHJvZmlsZSIsImdldEZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2NzIiwiQXV0aEZvcm0iLCJ2YWx1ZSIsInRyaW0iLCJ1c2VybmFtZSIsInZhbGlkVXNlcm5hbWUiLCJpc1ZhbGlkIiwiaW5WYWxpZFVzZXJuYW1lIiwiaGFzRXJyb3IiLCJVc2VybmFtZUNoYW5nZUhhbmRsZXIiLCJ2YWx1ZUNoYW5nZUhhbmRsZXIiLCJibHVyVXNlcm5hbWUiLCJvbmZvY3VzSGFuZGxlciIsInJlc2V0VXNlcm5hbWUiLCJyZXNldCIsInBhc3N3b3JkIiwidmFsaWRQYXNzd29yZCIsImluVmFsaWRQYXNzd29yZCIsIlBhc3N3b3JkQ2hhbmdlSGFuZGxlciIsImJsdXJQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJmb3JtVmFsaWRhdGlvbiIsInJvdXRlciIsInVzZXJuYW1lSW5wdXRSZWYiLCJwYXNzd29yZElucHV0UmVmIiwiZGlzcGxheU5hbWVJbnB1dFJlZiIsImF1dGhDdHgiLCJpc0xvZ2luIiwic2V0SXNMb2dpbiIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJpc2xvZ2dlZEluIiwic2V0SXNsb2dnZWRJbiIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJhdXRoIiwiZGIiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXIiLCJ1aWQiLCJwdXNoIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwic2V0dXBVSSIsImVudGVyZWRFbWFpbCIsImN1cnJlbnQiLCJlbnRlcmVkUGFzc3dvcmQiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJlcnJvciIsImVycm9yQ29kZSIsImNvZGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwiaWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwiZ2V0ZGF0YSIsInF1ZXJ5U25hcHNob3QiLCJmb3JFYWNoIiwiZG9jIiwiaWQiLCJsaSIsIndyaXRlRGF0YSIsImZpcnN0IiwibGFzdCIsInRpdGxlIiwiZG9jUmVmIiwicmVzdWx0IiwibG9nb3V0IiwidXNlcm5hbWVJbnB1dENsYXNzZXMiLCJwYXNzd29yZElucHV0Q2xhc3NlcyIsImFjdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9