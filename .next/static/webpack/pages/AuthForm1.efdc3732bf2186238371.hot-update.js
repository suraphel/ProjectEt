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

  var switchAuthModeHandler = function switchAuthModeHandler() {
    setIsLogin(function (prevState) {
      return !prevState;
    });
  };

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
      // authCtx.login(data.idToken);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0xLmVmZGMzNzMyYmYyMTg2MjM4MzcxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0NBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFFQSxJQUFNdUIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNyQixtQkFPSWQsc0VBQVMsQ0FBQyxVQUFDZSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU0MsUUFEVCxjQUNFRixLQURGO0FBQUEsTUFFV0csYUFGWCxjQUVFQyxPQUZGO0FBQUEsTUFHWUMsZUFIWixjQUdFQyxRQUhGO0FBQUEsTUFJc0JDLHFCQUp0QixjQUlFQyxrQkFKRjtBQUFBLE1BS2tCQyxZQUxsQixjQUtFQyxjQUxGO0FBQUEsTUFNU0MsYUFOVCxjQU1FQyxLQU5GOztBQVNBLG9CQU9JM0Isc0VBQVMsQ0FBQyxVQUFDZSxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFOLE9BQWlCLEVBQTVCO0FBQUEsR0FBRCxDQVBiO0FBQUEsTUFDU1ksUUFEVCxlQUNFYixLQURGO0FBQUEsTUFFV2MsYUFGWCxlQUVFVixPQUZGO0FBQUEsTUFHWVcsZUFIWixlQUdFVCxRQUhGO0FBQUEsTUFJc0JVLHFCQUp0QixlQUlFUixrQkFKRjtBQUFBLE1BS2tCUyxZQUxsQixlQUtFUCxjQUxGO0FBQUEsTUFNU1EsYUFOVCxlQU1FTixLQU5GLENBVnFCLENBbUJyQjtBQUVBOzs7QUFDQSxNQUFJTyxjQUFjLEdBQUcsS0FBckI7O0FBRUEsTUFBSWhCLGFBQWEsSUFBSVcsYUFBckIsRUFBb0M7QUFDbENL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QUFBQTtBQUFBLGlCQUZKLGVBS0UsK0RBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFPRSwrREFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0FqUUQ7O0dBQU0xQjtVQTRCV2pCOzs7S0E1QlhpQjtBQW1RTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9BdXRoRm9ybTEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTG9nSW4gZm9ybSBhbmQgdmFsaWRhdGlvbiB3aXRoIGZpcmViYXNlXHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuL0F1dGgtY29udGV4dFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vY29tcG9uZW50cy91c2Vyc0FjY291bnQvQXV0aC9BdXRoRm9ybS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvblwiO1xyXG5pbXBvcnQgVXNlcklucHV0IGZyb20gXCIuLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSBcIi4vU2lnblVwRm9ybVwiO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1maXJlYmFzZSBmaWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIHNpZ25PdXQsXHJcbiAgdXBkYXRlUHJvZmlsZSxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBjb2xsZWN0aW9uLCBhZGREb2MsIGdldERvY3MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG4vLyBpbXBvcnQge1xyXG4vLyAgIGFwcCxcclxuLy8gICBhdXRoLFxyXG4vLyAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuLy8gICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuLy8gICAvLyBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbi8vICAgc2lnbk91dCxcclxuLy8gICB1cGRhdGVQcm9maWxlLFxyXG4vLyB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZpcmViYXNlL2ZpcmViYXNlXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1lbmQgZmlyZWJhc2UgZmlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHVzZXJuYW1lLFxyXG4gICAgaXNWYWxpZDogdmFsaWRVc2VybmFtZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkVXNlcm5hbWUsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFVzZXJuYW1lQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyVXNlcm5hbWUsXHJcbiAgICByZXNldDogcmVzZXRVc2VybmFtZSxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdmFsdWU6IHBhc3N3b3JkLFxyXG4gICAgaXNWYWxpZDogdmFsaWRQYXNzd29yZCxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkUGFzc3dvcmQsXHJcbiAgICB2YWx1ZUNoYW5nZUhhbmRsZXI6IFBhc3N3b3JkQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVyUGFzc3dvcmQsXHJcbiAgICByZXNldDogcmVzZXRQYXNzd29yZCxcclxuICB9ID0gVXNlcklucHV0KCh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiKTtcclxuXHJcbiAgLy8gc2lnbmluZyB3aXRoIGVtYWlsIGFuZCBwYXNzd29yZFxyXG5cclxuICAvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG4gIGxldCBmb3JtVmFsaWRhdGlvbiA9IGZhbHNlO1xyXG5cclxuICBpZiAodmFsaWRVc2VybmFtZSAmJiB2YWxpZFBhc3N3b3JkKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1c2VybmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRpc3BsYXlOYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCBwaG90b1VybElucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIC8vIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIC8vIHZhbGlkYXRpb24gaWYgbmVlZGVkXHJcbiAgY29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzbG9nZ2VkSW4sIHNldElzbG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIC8vLSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIHRoaXMgd2lsbCBydW4gb25jZSBhZnRlciB0aGUgcGFnZSBoYXMgbG9hZGVkXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGNvbnN0IGxvZ2dlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzbG9nZ2VkSW5cIik7XHJcbiAgLy8gICBpZiAobG9nZ2VkVXNlciA9PT0gXCIxXCIpIHtcclxuICAvLyAgICAgc2V0SXNsb2dnZWRJbih0cnVlKTtcclxuICAvLyAgIH1cclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiLFxyXG4gICAgYXV0aERvbWFpbjogXCJ0ZXN0LTJhOTYyLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gICAgZGF0YWJhc2VVUkw6XHJcbiAgICAgIFwiaHR0cHM6Ly90ZXN0LTJhOTYyLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcclxuICAgIHByb2plY3RJZDogXCJ0ZXN0LTJhOTYyXCIsXHJcbiAgICBzdG9yYWdlQnVja2V0OiBcInRlc3QtMmE5NjIuYXBwc3BvdC5jb21cIixcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NzA1Mjg2NzE0MlwiLFxyXG4gICAgYXBwSWQ6IFwiMTozNzcwNTI4NjcxNDI6d2ViOmE4Y2U0OWRkYjJmM2MxNjYyMTc4NDdcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuICBjb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG4gIGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4gIC8vIHRoaXMgaXMgYSBzYW1wbGUgY29kZSBmb3IgdGVzdGluZ1xyXG5cclxuICBjb25zdCBzd2l0Y2hBdXRoTW9kZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2luKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gdGhpcyB3aWxsIGZpcmUgaWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gdGhlIHVzZXIgYWNjb3VudFxyXG5cclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVpZCA9IHVzZXIudWlkO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL0ZldGNoaW5nRnJvbURCXCIpO1xyXG4gICAgICAgIGF1dGhDdHgubG9naW4odWlkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgbG9nZ2VkIG91dFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5vIGRhdGEgdG8gb3V0cHV0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGF1dGhDdHgubG9naW4odWlkKTtcclxuXHJcbiAgICAvLyBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlcjtcclxuICAgIC8vIGlmICh1c2VyKSB7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gdGhpcyB3aWxsIGZpcmUgYmVjYXVzZSB0aGlzIGlzIGJlaW5nIGNhbGxlZCBpbiB0aGUgb25BdXRoU3RhdGVDaGFuZ2VkXHJcbiAgICBmdW5jdGlvbiBzZXR1cFVJKHVzZXIpIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlllcyB0aGVyZSBpcyBhIHVzZXJcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJubyB1c2VyIGluIHNpZ2h0XCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFmb3JtVmFsaWRhdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZW50ZXJlZEVtYWlsID0gdXNlcm5hbWVJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIC8vIGNvbnN0IGVuZXRlcmVkZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWU7XHJcbiAgICAvLyBjb25zdCBlbmV0ZXJlZHBob3RvVXJsID0gcGhvdG9VcmxJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xyXG5cclxuICAgIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChcclxuICAgICAgYXV0aCxcclxuICAgICAgZW50ZXJlZEVtYWlsLFxyXG4gICAgICBlbnRlcmVkUGFzc3dvcmRcclxuICAgICAgLy8gZGlzcGxheU5hbWVcclxuICAgICAgLy8gcGhvbmVOdW1iZXJcclxuICAgIClcclxuICAgICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbmVkIGluXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJDcmVkZW50aWFsLnVzZXI7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIC8vIC4uXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVudGVyZWRFbWFpbCwgZW50ZXJlZFBhc3N3b3JkKVxyXG4gICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAvLyBTaWduZWQgaW5cclxuICAgICAgICBjb25zdCB1c2VyID0gdXNlckNyZWRlbnRpYWwudXNlcjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ25lZCBpbiBmcm9tIHRoZSBBdXRoZm9ybTEhIVwiICsgdXNlci51aWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaWRUb2tlbiBcIiArIGlkVG9rZW4pO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNsb2dnZWRJblwiLCBcIjFcIik7XHJcbiAgICAgICAgLy8gLi4uXHJcbiAgICAgIH0pXHJcbiAgICAgIC8vIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImFsbCBnb29kXCIpO1xyXG4gICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVycm9yIHNvbWV3aGVyZVwiKTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgLy8gYXV0aEN0eC5sb2dpbihkYXRhLmlkVG9rZW4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRlc3RpbmdcIiArIGRhdGEuaWRUb2tlbik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXIudWlkKTtcclxuICAgIHJlc2V0VXNlcm5hbWUoXCJcIik7XHJcbiAgICByZXNldFBhc3N3b3JkKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldGRhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBcImd1aWRlc1wiKSk7XHJcbiAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhgJHtkb2MuaWR9ID0+ICR7ZG9jLmRhdGEoKX1gKTtcclxuICAgICAgY29uc29sZS5sb2coZG9jLmRhdGEoKSk7XHJcbiAgICAgIGNvbnN0IGxpID0gYCR7ZG9jLmRhdGEoKX0gcHV0IHRoaXMgb3V0IH1gO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgd3JpdGVEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwiQ2hvcmVzXCIpLCB7XHJcbiAgICAgICAgZmlyc3Q6IFwiU3VyYWZlbFwiLFxyXG4gICAgICAgIGxhc3Q6IFwiTWVrYXNoYVwiLFxyXG4gICAgICAgIHRpdGxlOiBcIlNlbmlvciBEZXZlbG9wZXJcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRvY1JlZi5pZCk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGRvYy5kYXRhO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIGVsZW1lbnQgdG8gdGhlIHNlcnZlclwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBjb25zdCB1cGRhdGVQcm9maWxlID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGF1dGgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInNpZ25PdXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgY29uc29sZS5sb2coXCJ1aWQgPSBcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VybmFtZUlucHV0Q2xhc3NlcyA9IGluVmFsaWRVc2VybmFtZVxyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IHBhc3N3b3JkSW5wdXRDbGFzc2VzID0gaW5WYWxpZFBhc3N3b3JkXHJcbiAgICA/IFwiZm9ybS1jb250cm9sIGludmFsaWRcIlxyXG4gICAgOiBcImZvcm0tY29udHJvbCBcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdXRofT5cclxuICAgICAgey8qb3B0aW9uIGIvbiBsb2dpbiBvciBzaWduVXAgICovfVxyXG4gICAgICA8aDE+e2lzTG9naW4gPyBcIkxvZyBpbiBcIiA6IGAke1wiU2lnbiB1cFwifSAkeyg8U2lnblVwRm9ybSAvPil9YH08L2gxPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRkYXRhfT4gU2VydmVyRGF0YTwvYnV0dG9uPlxyXG4gICAgICB7LyogdG8gYmUgb3V0IG9uIHRoZSBkb20gKi99XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0fT4gU2lnbk91dDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3dyaXRlRGF0YX0+IEFkZCBkYXRhPC9idXR0b24+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dXNlcm5hbWVJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPllvdXIgRW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICByZWY9e3VzZXJuYW1lSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clVzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17VXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRVc2VybmFtZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBVc2VyLW5hbWU8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cGFzc3dvcmRJbnB1dENsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPllvdXIgUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZWY9e3Bhc3N3b3JkSW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1clBhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17UGFzc3dvcmRDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2luVmFsaWRQYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj4gUGxlYXNlIGVudGVyIHRoZSBwYXNzd29yZDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgeyFpc0xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8QnV0dG9uPntpc0xvZ2luID8gXCJMb2dpblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvQnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL0NyZWF0ZUFjY291bnRcIj4gQ3JlYXRlIG5ldyBBY2NvdW50IDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZvcmdvdFBhc3N3b3JkXCI+IEZvcmdvdCBwYXNzd29yZCA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiQnV0dG9uIiwiVXNlcklucHV0IiwidXNlSGlzdG9yeSIsIlNpZ25VcEZvcm0iLCJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwic2lnbk91dCIsInVwZGF0ZVByb2ZpbGUiLCJnZXRGaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZ2V0RG9jcyIsIkF1dGhGb3JtIiwidmFsdWUiLCJ0cmltIiwidXNlcm5hbWUiLCJ2YWxpZFVzZXJuYW1lIiwiaXNWYWxpZCIsImluVmFsaWRVc2VybmFtZSIsImhhc0Vycm9yIiwiVXNlcm5hbWVDaGFuZ2VIYW5kbGVyIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiYmx1clVzZXJuYW1lIiwib25mb2N1c0hhbmRsZXIiLCJyZXNldFVzZXJuYW1lIiwicmVzZXQiLCJwYXNzd29yZCIsInZhbGlkUGFzc3dvcmQiLCJpblZhbGlkUGFzc3dvcmQiLCJQYXNzd29yZENoYW5nZUhhbmRsZXIiLCJibHVyUGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwiZm9ybVZhbGlkYXRpb24iLCJyb3V0ZXIiLCJ1c2VybmFtZUlucHV0UmVmIiwicGFzc3dvcmRJbnB1dFJlZiIsImRpc3BsYXlOYW1lSW5wdXRSZWYiLCJhdXRoQ3R4IiwiaXNMb2dpbiIsInNldElzTG9naW4iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNsb2dnZWRJbiIsInNldElzbG9nZ2VkSW4iLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsImRiIiwic3dpdGNoQXV0aE1vZGVIYW5kbGVyIiwicHJldlN0YXRlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwidWlkIiwicHVzaCIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsInNldHVwVUkiLCJlbnRlcmVkRW1haWwiLCJjdXJyZW50IiwiZW50ZXJlZFBhc3N3b3JkIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwiZXJyb3IiLCJlcnJvckNvZGUiLCJjb2RlIiwiZXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsImlkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsImdldGRhdGEiLCJxdWVyeVNuYXBzaG90IiwiZm9yRWFjaCIsImRvYyIsImlkIiwibGkiLCJ3cml0ZURhdGEiLCJmaXJzdCIsImxhc3QiLCJ0aXRsZSIsImRvY1JlZiIsInJlc3VsdCIsImxvZ291dCIsInVzZXJuYW1lSW5wdXRDbGFzc2VzIiwicGFzc3dvcmRJbnB1dENsYXNzZXMiLCJhY3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==