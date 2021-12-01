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

  var authCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Token_Auth_context__WEBPACK_IMPORTED_MODULE_6__.default); //const authCtx = useContext(authUserContext);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zN2RkNmUzOTE5MmY3YWNkZGQ5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTUyxjQUFULEdBQTBCO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR1QsaURBQVUsQ0FBQ08sd0RBQUQsQ0FBMUIsQ0FEd0IsQ0FFeEI7O0FBRUFHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFPLENBQUNHLFVBQVIsR0FBcUIsNEJBQWpDO0FBRUEsTUFBTUMsVUFBVSxHQUFHSixPQUFPLENBQUNHLFVBQTNCO0FBQ0FGLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxVQUFVLEdBQUcsOEJBQXpCOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQlYsSUFBQUEsc0RBQU8sQ0FBQ0YsaURBQUQsQ0FBUCxDQUFjYSxJQUFkLENBQW1CLFlBQU07QUFDdkJMLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxpREFBWjtBQUNBUSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsS0FKRDtBQUtELEdBTkQsQ0FUd0IsQ0FpQnhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7OztBQUVBLHNCQUNFO0FBQVEsYUFBUyxFQUFFWiwwRUFBbkI7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQWUsZUFBUyxFQUFFQSx3RUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVdFO0FBQUssZUFBUyxFQUFFQSx1RUFBaEI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsZ0NBSUU7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBLGlDQUVFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyx5QkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsRUFTRyxDQUFDYyxVQUFELGlCQUNDO0FBQUksbUJBQVMsRUFBRWQsc0VBQWY7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLEVBQUMsWUFEUCxDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKLEVBb0JHYyxVQUFVLGlCQUNUO0FBQUksbUJBQVMsRUFBRWQsc0VBQWY7QUFBQSxpQ0FFRSw4REFBQyxrREFBRDtBQUNFLGdCQUFJLEVBQUMsVUFEUCxDQUVFO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSixFQWdDR2MsVUFBVSxpQkFDVDtBQUFJLG1CQUFTLEVBQUVkLHNFQUFmO0FBQUEsaUNBQ0UsOERBQUMsa0RBQUQ7QUFDRSxnQkFBSSxFQUFDLGNBRFAsQ0FFRTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQ0osRUE4REdVLE9BQU8sQ0FBQ0csVUFBUjtBQUFBO0FBQ0M7QUFDQTtBQUFRLGlCQUFPLEVBQUVFLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhFSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O0dBckhRTjs7S0FBQUE7QUF1SFQsK0RBQWVBLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWFpbk5hdmlnYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWFpbk5hdmlnYXRpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuLy8gaW1wb3J0IEF1dGhlbkNvbnRleHQgZnJvbSBcIi4uL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XG4vLyBpbXBvcnQgYXV0aFVzZXJDb250ZXh0IGZyb20gXCIuLi9Ub2tlbi9BdXRoVXNlckNvbnRleHRcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vVG9rZW4vRmlyZWJhc2VcIjtcblxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IERpc3BsYXkgZnJvbSBcIi4uLy4uL3BhZ2VzL2Rpc3BsYXlcIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vVG9rZW4vQXV0aC1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE1haW5OYXZpZ2F0aW9uKCkge1xuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIC8vY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoYXV0aFVzZXJDb250ZXh0KTtcblxuICBjb25zb2xlLmxvZyhhdXRoQ3R4LmlzTG9nZ2VkSW4gKyBcIiBjb21pbmcgZnJvbSB0aGUgTmF2IHBhZ2UgXCIpO1xuXG4gIGNvbnN0IElzbG9nZ2VkSW4gPSBhdXRoQ3R4LmlzTG9nZ2VkSW47XG4gIGNvbnNvbGUubG9nKElzbG9nZ2VkSW4gKyBcIiBjb21pbmcgZnJvbSB0aGUgTmF2IHBhZ2UgSUlcIik7XG5cbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBzaWduT3V0KGF1dGgpLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYXV0aCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNpZ25PdXQgc3VjY2Vzc2Z1bFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwidWlkID0gXCIpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICAvLyAgIGFwaUtleTogXCJBSXphU3lEMmRIdk1YbUpFOVJJQWdQd0p2YzA5ejhMOGlyaDBWbWNcIixcbiAgLy8gICBhdXRoRG9tYWluOiBcInRlc3QtMmE5NjIuZmlyZWJhc2VhcHAuY29tXCIsXG4gIC8vICAgZGF0YWJhc2VVUkw6XG4gIC8vICAgICBcImh0dHBzOi8vdGVzdC0yYTk2Mi1kZWZhdWx0LXJ0ZGIuZXVyb3BlLXdlc3QxLmZpcmViYXNlZGF0YWJhc2UuYXBwXCIsXG4gIC8vICAgcHJvamVjdElkOiBcInRlc3QtMmE5NjJcIixcbiAgLy8gICBzdG9yYWdlQnVja2V0OiBcInRlc3QtMmE5NjIuYXBwc3BvdC5jb21cIixcbiAgLy8gICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzNzcwNTI4NjcxNDJcIixcbiAgLy8gICBhcHBJZDogXCIxOjM3NzA1Mjg2NzE0Mjp3ZWI6YThjZTQ5ZGRiMmYzYzE2NjIxNzg0N1wiLFxuICAvLyB9O1xuICAvLyBjb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbiAgLy8gY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcblxuICAvLyBjb25zdCBnZXRtZW91dG9maGVyZSA9ICgpID0+IHtcblxuICAvLyB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxuICAgICAgICBCYWxlbW9qYVxuICAgICAgPC9MaW5rPlxuXG4gICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfT48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9Pjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPiAqL31cblxuICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2fT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy51bH0+XG4gICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ2hvcmVzVG9EYlwiPkNob3JlczwvTGluaz5cbiAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpfT5cbiAgICAgICAgICAgIHsvKiBuZXh0IExpbmsgaHJlZiA9ICcvbmFtZSBvZiBjb21wb25lbnQgd3JhcHBlZCBpbiBsaW5rJyAqL31cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYlwiPk5ldyBDb21wYW55PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICB7IUlzbG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9BdXRoRm9ybTFcIlxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge0lzbG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XG4gICAgICAgICAgICAgIHsvKiA8RGlzcGxheSAvPiAqL31cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL3NpZ25PdXRcIlxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge0lzbG9nZ2VkSW4gJiYgKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9Qcm9maWxlRm9ybVwiXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVc2VyIFByb2ZpbGVcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIHshSXNsb2dnZWRJbiAmJiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpfT5cbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dChhdXRoKVxuICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ24tb3V0IHN1Y2Nlc3NmdWxcIik7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBzaWduT3V0XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKX0gKi99XG5cbiAgICAgICAgICB7YXV0aEN0eC5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgICAgIC8vIDxidXR0b24gb25DbGljaz17bG9nb3V0SGFuZGxlcn0+TG9nb3V0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dEhhbmRsZXJ9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsInVzZUNvbnRleHQiLCJMaW5rIiwiYXV0aCIsImdldEF1dGgiLCJzaWduT3V0IiwiaW5pdGlhbGl6ZUFwcCIsIkRpc3BsYXkiLCJBdXRoQ29udGV4dCIsIk1haW5OYXZpZ2F0aW9uIiwiYXV0aEN0eCIsImNvbnNvbGUiLCJsb2ciLCJpc0xvZ2dlZEluIiwiSXNsb2dnZWRJbiIsImxvZ291dEhhbmRsZXIiLCJ0aGVuIiwiaGVhZGVyIiwibG9nbyIsIm5hdiIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9