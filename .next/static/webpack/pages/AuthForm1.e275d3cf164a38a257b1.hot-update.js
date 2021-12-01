"use strict";
self["webpackHotUpdate_N_E"]("pages/AuthForm1",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQXV0aEZvcm0xLmUyNzVkM2NmMTY0YTM4YTI1N2IxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1FLFdBQVcsZ0JBQUdGLDBEQUFBLENBQW9CO0FBQ3RDSSxFQUFBQSxHQUFHLEVBQUUsRUFEaUM7QUFFdENDLEVBQUFBLEtBQUssRUFBRSxlQUFDRCxHQUFELEVBQVMsQ0FBRSxDQUZvQjtBQUd0Q0UsRUFBQUEsTUFBTSxFQUFFLGtCQUFNLENBQUUsQ0FIc0I7QUFJdENDLEVBQUFBLFVBQVUsRUFBRTtBQUowQixDQUFwQixDQUFwQixFQU9BOztBQUNPLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVDLGtCQUE2QlIsK0NBQVEsQ0FBQyxJQUFELENBQXJDO0FBQUEsTUFBT0csR0FBUDtBQUFBLE1BQVlNLGFBQVo7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLENBQUMsQ0FBQ1AsR0FBekI7QUFDQVEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGNBQWMsR0FBRyw0QkFBN0I7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQUcsR0FBRyx1Q0FBbEI7O0FBRUEsTUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1YsR0FBRCxFQUFTO0FBQzVCTSxJQUFBQSxhQUFhLENBQUNOLEdBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTVcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCTCxJQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNTSxZQUFZLEdBQUc7QUFDbkJaLElBQUFBLEdBQUcsRUFBRUEsR0FEYztBQUVuQkcsSUFBQUEsVUFBVSxFQUFFSSxjQUZPO0FBR25CTixJQUFBQSxLQUFLLEVBQUVTLFlBSFk7QUFJbkJSLElBQUFBLE1BQU0sRUFBRVM7QUFKVyxHQUFyQjtBQU1BSCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsWUFBWSxDQUFDVCxVQUFiLEdBQTBCLCtCQUF0QztBQUVBLHNCQUNFLDhEQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRVMsWUFBN0I7QUFBQSxjQUNHUCxLQUFLLENBQUNRO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0EzQk07O0dBQU1UOztLQUFBQTtBQTZCYiwrREFBZU4sV0FBZixHQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9rZW4vQXV0aC1jb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICB1aWQ6IFwiXCIsXHJcbiAgbG9naW46ICh1aWQpID0+IHt9LFxyXG4gIGxvZ291dDogKCkgPT4ge30sXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbn0pO1xyXG5cclxuLy8gdGhpcyBpcyBleHBvcnRlZCBhcyBhIG5hbWUgZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VpZCwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB1c2VySXNMb2dnZWRJbiA9ICEhdWlkO1xyXG4gIGNvbnNvbGUubG9nKHVzZXJJc0xvZ2dlZEluICsgXCIgY2hlY2sgaWYgaXQgdHJ1ZSBvciBmYWxzZVwiKTtcclxuICBjb25zb2xlLmxvZyh1aWQgKyBcIiB0aGlzIGlzIGNvbWluZyBmcm9tIHRoZSBDb250ZXh0IHBhZ2VcIik7XHJcblxyXG4gIGNvbnN0IGxvZ2luSGFuZGxlciA9ICh1aWQpID0+IHtcclxuICAgIHNldElzTG9nZ2VkSW4odWlkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0SXNMb2dnZWRJbihudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICB1aWQ6IHVpZCxcclxuICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxyXG4gICAgbG9naW46IGxvZ2luSGFuZGxlcixcclxuICAgIGxvZ291dDogbG9nb3V0SGFuZGxlcixcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGNvbnRleHRWYWx1ZS5pc0xvZ2dlZEluICsgXCIgY29taW5nIGZyb20gdGhlIENvbnRleHQgcGFnZVwiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbi8vIGV4cG9ydGVkIGFzIGEgZGVmYXVsdCB2YWx1ZVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVpZCIsImxvZ2luIiwibG9nb3V0IiwiaXNMb2dnZWRJbiIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInNldElzTG9nZ2VkSW4iLCJ1c2VySXNMb2dnZWRJbiIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbkhhbmRsZXIiLCJsb2dvdXRIYW5kbGVyIiwiY29udGV4dFZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9