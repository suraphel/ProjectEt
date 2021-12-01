"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Token/Firebase */ "./components/Token/Firebase.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/display */ "./pages/display.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_display__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Token_Auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Token/Auth-context */ "./components/Token/Auth-context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\layout\\MainNavigation.js",
    _s = $RefreshSig$();



 // import AuthenContext from "../Token/LogInAuthentication ";
// import authUserContext from "../Token/AuthUserContext";








function MainNavigation() {
  _s();

  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Token_Auth_context__WEBPACK_IMPORTED_MODULE_6__.default); // const authCtx = useContext(authUserContext);

  console.log(authCtx.isLoggedIn + " coming from the Nav page ");
  var IsloggedIn = authCtx.isLoggedIn;
  console.log(IsloggedIn + " coming from the Nav page II");

  var logoutHandler = function logoutHandler() {
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_Token_Firebase__WEBPACK_IMPORTED_MODULE_2__.auth).then(function () {
      console.log(_Token_Firebase__WEBPACK_IMPORTED_MODULE_2__.auth);
      console.log("signOut successful");
      console.log("uid = ");
    });
  }; // const firebaseConfig = {
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


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("header", {
    className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
      children: "Balemoja"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("nav", {
      className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().nav),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
        className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().ul),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
          className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().li),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/UploadingCompaniesToDb",
            children: "New Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this), !IsloggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
          className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().li),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/AuthForm1" // className={classes.link}
            ,
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), IsloggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
          className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().li),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/signOut" // className={classes.link}
            ,
            children: "Sign Out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, this), IsloggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("li", {
          className: (_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default().li),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/ProfileForm" // className={classes.link}
            ,
            children: "User Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 13
        }, this), authCtx.isLoggedIn &&
        /*#__PURE__*/
        // <button onClick={logoutHandler}>Logout</button>
        (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
          onClick: logoutHandler,
          children: "Logout"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(MainNavigation, "HgVQGKeM6jZ5dc2JVxj9nYffoaU=");

_c = MainNavigation;
/* harmony default export */ __webpack_exports__["default"] = (MainNavigation);

var _c;

$RefreshReg$(_c, "MainNavigation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZGJjYjY4MDY5MzAwMWJhZWU1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTUyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR1QsaURBQVUsQ0FBQ08sd0RBQUQsQ0FBMUIsQ0FEd0IsQ0FFeEI7O0FBRUFHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNHLFVBQVIsR0FBcUIsNEJBQWpDO0FBRUEsTUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNHLFVBQTNCO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxVQUFVLEdBQUcsOEJBQXpCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlYsSUFBQUEsc0RBQU8sQ0FBQ0YsaURBQUQsQ0FBUCxDQUFjYSxJQUFkLENBQW1CLFlBQU07QUFDdkJMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxpREFBWjtBQUNBUSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsS0FKRDtBQUtELEdBTkQsQ0FUd0IsQ0FpQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBLHNCQUNFO0FBQVEsYUFBUyxFQUFFWiwwRUFBbkI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsZUFBUyxFQUFFQSx3RUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFQSx1RUFBaEI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsZ0NBSUU7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLGlDQUVFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFTRyxDQUFDYyxVQUFELGlCQUNDO0FBQUksbUJBQVMsRUFBRWQsc0VBQWY7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLEVBQUMsWUFEUCxDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLEVBb0JHYyxVQUFVLGlCQUNUO0FBQUksbUJBQVMsRUFBRWQsc0VBQWY7QUFBQSxpQ0FFRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUCxDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSixFQWdDR2MsVUFBVSxpQkFDVDtBQUFJLG1CQUFTLEVBQUVkLHNFQUFmO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFDRSxnQkFBSSxFQUFDLGNBRFAsQ0FFRTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0osRUE4REdVLE9BQU8sQ0FBQ0csVUFBUjtBQUFBO0FBQ0M7QUFDQTtBQUFRLGlCQUFPLEVBQUVFLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O0dBckhRTjs7S0FBQUE7QUF1SFQsK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IEF1dGhlbkNvbnRleHQgZnJvbSBcIi4uL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XG4vLyBpbXBvcnQgYXV0aFVzZXJDb250ZXh0IGZyb20gXCIuLi9Ub2tlbi9BdXRoVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vVG9rZW4vRmlyZWJhc2VcIjtcblxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IERpc3BsYXkgZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vVG9rZW4vQXV0aC1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIC8vIGNvbnN0IGF1dGhDdHggPSB1c2VDb250ZXh0KGF1dGhVc2VyQ29udGV4dCk7XG5cbiAgY29uc29sZS5sb2coYXV0aEN0eC5pc0xvZ2dlZEluICsgXCIgY29taW5nIGZyb20gdGhlIE5hdiBwYWdlIFwiKTtcblxuICBjb25zdCBJc2xvZ2dlZEluID0gYXV0aEN0eC5pc0xvZ2dlZEluO1xuICBjb25zb2xlLmxvZyhJc2xvZ2dlZEluICsgXCIgY29taW5nIGZyb20gdGhlIE5hdiBwYWdlIElJXCIpO1xuXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGF1dGgpO1xuICAgICAgY29uc29sZS5sb2coXCJzaWduT3V0IHN1Y2Nlc3NmdWxcIik7XG4gICAgICBjb25zb2xlLmxvZyhcInVpZCA9IFwiKTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgLy8gICBhcGlLZXk6IFwiQUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCIsXG4gIC8vICAgYXV0aERvbWFpbjogXCJ0ZXN0LTJhOTYyLmZpcmViYXNlYXBwLmNvbVwiLFxuICAvLyAgIGRhdGFiYXNlVVJMOlxuICAvLyAgICAgXCJodHRwczovL3Rlc3QtMmE5NjItZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxuICAvLyAgIHByb2plY3RJZDogXCJ0ZXN0LTJhOTYyXCIsXG4gIC8vICAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0LTJhOTYyLmFwcHNwb3QuY29tXCIsXG4gIC8vICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc3MDUyODY3MTQyXCIsXG4gIC8vICAgYXBwSWQ6IFwiMTozNzcwNTI4NjcxNDI6d2ViOmE4Y2U0OWRkYjJmM2MxNjYyMTc4NDdcIixcbiAgLy8gfTtcbiAgLy8gY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gIC8vIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5cbiAgLy8gY29uc3QgZ2V0bWVvdXRvZmhlcmUgPSAoKSA9PiB7XG5cbiAgLy8gfTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgQmFsZW1vamFcbiAgICAgIDwvTGluaz5cblxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9Pjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfT48L3NwYW4+XG4gICAgICA8L2J1dHRvbj4gKi99XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdn0+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMudWx9PlxuICAgICAgICAgIHsvKiA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5DaG9yZXM8L0xpbms+XG4gICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XG4gICAgICAgICAgICB7LyogbmV4dCBMaW5rIGhyZWYgPSAnL25hbWUgb2YgY29tcG9uZW50IHdyYXBwZWQgaW4gbGluaycgKi99XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0NvbXBhbmllc1RvRGJcIj5OZXcgQ29tcGFueTwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuXG4gICAgICAgICAgeyFJc2xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGl9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvQXV0aEZvcm0xXCJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtJc2xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGl9PlxuICAgICAgICAgICAgICB7LyogPERpc3BsYXkgLz4gKi99XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9zaWduT3V0XCJcbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU9e2NsYXNzZXMubGlua31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNpZ24gT3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHtJc2xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGl9PlxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9XCIvUHJvZmlsZUZvcm1cIlxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgVXNlciBQcm9maWxlXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHsvKiB7IUlzbG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZ25PdXQoYXV0aClcbiAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWduLW91dCBzdWNjZXNzZnVsXCIpO1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2lnbk91dFxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9ICovfVxuXG4gICAgICAgICAge2F1dGhDdHguaXNMb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICAvLyA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5OYXZpZ2F0aW9uO1xuIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiTGluayIsImF1dGgiLCJnZXRBdXRoIiwic2lnbk91dCIsImluaXRpYWxpemVBcHAiLCJEaXNwbGF5IiwiQXV0aENvbnRleHQiLCJNYWluTmF2aWdhdGlvbiIsImF1dGhDdHgiLCJjb25zb2xlIiwibG9nIiwiaXNMb2dnZWRJbiIsIklzbG9nZ2VkSW4iLCJsb2dvdXRIYW5kbGVyIiwidGhlbiIsImhlYWRlciIsImxvZ28iLCJuYXYiLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==