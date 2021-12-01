"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Token/Auth-context.js":
/*!******************************************!*\
  !*** ./components/Token/Auth-context.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContextProvider": function() { return /* binding */ AuthContextProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\Token\\Auth-context.js",
    _this = undefined,
    _s = $RefreshSig$();



var AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  uid: "",
  login: function login(uid) {},
  logout: function logout() {},
  isLoggedIn: false
}); // this is exported as a name export

var AuthContextProvider = function AuthContextProvider(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      uid = _useState[0],
      setIsLoggedIn = _useState[1];

  var userIsLoggedIn = !!uid;
  console.log(userIsLoggedIn + " check if it true or false");
  console.log(uid + " this is coming from the Context page");

  var loginHandler = function loginHandler(uid) {
    setIsLoggedIn(uid);
  };

  var logoutHandler = function logoutHandler() {
    setIsLoggedIn(null);
  };

  var contextValue = {
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  console.log(contextValue.isLoggedIn + " coming from the Context page");
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {
    value: contextValue,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(AuthContextProvider, "krLpZq1KVauyoDI6rNQ2SGOgbCQ=");

_c = AuthContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (AuthContext); // exported as a default value

var _c;

$RefreshReg$(_c, "AuthContextProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMjc1ZDNjZjE2NGEzOGEyNTdiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNRSxXQUFXLGdCQUFHRiwwREFBQSxDQUFvQjtBQUN0Q0ksRUFBQUEsR0FBRyxFQUFFLEVBRGlDO0FBRXRDQyxFQUFBQSxLQUFLLEVBQUUsZUFBQ0QsR0FBRCxFQUFTLENBQUUsQ0FGb0I7QUFHdENFLEVBQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBSHNCO0FBSXRDQyxFQUFBQSxVQUFVLEVBQUU7QUFKMEIsQ0FBcEIsQ0FBcEIsRUFPQTs7QUFDTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QyxrQkFBNkJSLCtDQUFRLENBQUMsSUFBRCxDQUFyQztBQUFBLE1BQU9HLEdBQVA7QUFBQSxNQUFZTSxhQUFaOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxDQUFDLENBQUNQLEdBQXpCO0FBQ0FRLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixjQUFjLEdBQUcsNEJBQTdCO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVCxHQUFHLEdBQUcsdUNBQWxCOztBQUVBLE1BQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNWLEdBQUQsRUFBUztBQUM1Qk0sSUFBQUEsYUFBYSxDQUFDTixHQUFELENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1XLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQkwsSUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTU0sWUFBWSxHQUFHO0FBQ25CWixJQUFBQSxHQUFHLEVBQUVBLEdBRGM7QUFFbkJHLElBQUFBLFVBQVUsRUFBRUksY0FGTztBQUduQk4sSUFBQUEsS0FBSyxFQUFFUyxZQUhZO0FBSW5CUixJQUFBQSxNQUFNLEVBQUVTO0FBSlcsR0FBckI7QUFNQUgsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlHLFlBQVksQ0FBQ1QsVUFBYixHQUEwQiwrQkFBdEM7QUFFQSxzQkFDRSw4REFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUVTLFlBQTdCO0FBQUEsY0FDR1AsS0FBSyxDQUFDUTtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBM0JNOztHQUFNVDs7S0FBQUE7QUE2QmIsK0RBQWVOLFdBQWYsR0FDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Rva2VuL0F1dGgtY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgdWlkOiBcIlwiLFxyXG4gIGxvZ2luOiAodWlkKSA9PiB7fSxcclxuICBsb2dvdXQ6ICgpID0+IHt9LFxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vIHRoaXMgaXMgZXhwb3J0ZWQgYXMgYSBuYW1lIGV4cG9ydFxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt1aWQsIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXVpZDtcclxuICBjb25zb2xlLmxvZyh1c2VySXNMb2dnZWRJbiArIFwiIGNoZWNrIGlmIGl0IHRydWUgb3IgZmFsc2VcIik7XHJcbiAgY29uc29sZS5sb2codWlkICsgXCIgdGhpcyBpcyBjb21pbmcgZnJvbSB0aGUgQ29udGV4dCBwYWdlXCIpO1xyXG5cclxuICBjb25zdCBsb2dpbkhhbmRsZXIgPSAodWlkKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKHVpZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0SGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4obnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udGV4dFZhbHVlID0ge1xyXG4gICAgdWlkOiB1aWQsXHJcbiAgICBpc0xvZ2dlZEluOiB1c2VySXNMb2dnZWRJbixcclxuICAgIGxvZ2luOiBsb2dpbkhhbmRsZXIsXHJcbiAgICBsb2dvdXQ6IGxvZ291dEhhbmRsZXIsXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0VmFsdWUuaXNMb2dnZWRJbiArIFwiIGNvbWluZyBmcm9tIHRoZSBDb250ZXh0IHBhZ2VcIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG4vLyBleHBvcnRlZCBhcyBhIGRlZmF1bHQgdmFsdWVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1aWQiLCJsb2dpbiIsImxvZ291dCIsImlzTG9nZ2VkSW4iLCJBdXRoQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJzZXRJc0xvZ2dlZEluIiwidXNlcklzTG9nZ2VkSW4iLCJjb25zb2xlIiwibG9nIiwibG9naW5IYW5kbGVyIiwibG9nb3V0SGFuZGxlciIsImNvbnRleHRWYWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==