(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Token/Auth-context.js":
/*!******************************************!*\
  !*** ./components/Token/Auth-context.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthContextProvider": () => (/* binding */ AuthContextProvider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\Token\\Auth-context.js";


const AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  uid: "",
  login: uid => {},
  logout: () => {},
  isLoggedIn: false
}); // this is exported as a name export

const AuthContextProvider = props => {
  const {
    0: uid,
    1: setIsLoggedIn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const userIsLoggedIn = !!uid;
  console.log(userIsLoggedIn + " check if it true or false");
  console.log(uid + " this is coming from the Context page");

  const loginHandler = uid => {
    setIsLoggedIn(uid);
  };

  const logoutHandler = () => {
    setIsLoggedIn(null);
  };

  const contextValue = {
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
  }, undefined);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext); // exported as a default value

/***/ }),

/***/ "./components/Token/Firebase.js":
/*!**************************************!*\
  !*** ./components/Token/Firebase.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "app": () => (/* binding */ app),
/* harmony export */   "onAuthStateChanged": () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged),
/* harmony export */   "createUserWithEmailAndPassword": () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword),
/* harmony export */   "signInWithEmailAndPassword": () => (/* reexport safe */ firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)
/* harmony export */ });
/* harmony import */ var Firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Firebase/app */ "Firebase/app");
/* harmony import */ var Firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
 // import { getAuth } from "@firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2dHvMXmJE9RIAgPwJvc09z8L8irh0Vmc",
  authDomain: "test-2a962.firebaseapp.com",
  databaseURL: "https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-2a962",
  storageBucket: "test-2a962.appspot.com",
  messagingSenderId: "377052867142",
  appId: "1:377052867142:web:a8ce49ddb2f3c166217847"
};
const app = (0,Firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);


/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainNavigation */ "./components/layout/MainNavigation.js");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.module.css */ "./components/layout/Layout.module.css");
/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\layout\\Layout.js";
 // import MainNavigation from "../usersAccount/Layout/MainNavigation";




function Layout(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MainNavigation__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("main", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
      className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("nav", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().__links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().__link),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "#",
              children: "Support"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_2___default().__link),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              href: "#",
              children: "Terms of Use"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./components/layout/MainNavigation.js":
/*!*********************************************!*\
  !*** ./components/layout/MainNavigation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MainNavigation.module.css */ "./components/layout/MainNavigation.module.css");
/* harmony import */ var _MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_MainNavigation_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Token_Firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Token/Firebase */ "./components/Token/Firebase.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/display */ "./pages/display.js");
/* harmony import */ var _pages_display__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_display__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Token_Auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Token/Auth-context */ "./components/Token/Auth-context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\components\\layout\\MainNavigation.js";


 // import AuthenContext from "../Token/LogInAuthentication ";
// import authUserContext from "../Token/AuthUserContext";








function MainNavigation() {
  const authCtx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Token_Auth_context__WEBPACK_IMPORTED_MODULE_6__.default); // const authCtx = useContext(authUserContext);

  console.log(authCtx.isLoggedIn + " coming from the Nav page ");
  const IsloggedIn = authCtx.isLoggedIn;
  console.log(IsloggedIn + " coming from the Nav page II");

  const logoutHandler = () => {
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_Token_Firebase__WEBPACK_IMPORTED_MODULE_2__.auth).then(() => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNavigation);

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_dataFlow_companyregistration_AddCompanies_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dataFlow/companyregistration/AddCompanies.css */ "./components/dataFlow/companyregistration/AddCompanies.css");
/* harmony import */ var _components_dataFlow_companyregistration_AddCompanies_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_dataFlow_companyregistration_AddCompanies_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Token_Auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Token/Auth-context */ "./components/Token/Auth-context.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "A:\\Projects\\Gitkraken\\ProjectEt\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Wrap the Component so the entire site will be included
// import Layout from "../components/usersAccount/Layout/Layout";
 // import Layout from "../components/usersAccount/Layout/Layout";




 // import { AuthContextProvider } from "../components/Token/LogInAuthentication ";

 // import { AuthUserProvider } from "../components/Token/AuthUserContext";



function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Some test for the gitkraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Some test for the gitkraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Some test for the gitkraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Some test for the gitkraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "Some test for the gitkraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
      children: "It has been a year and it is about time i know the in and out of gitKraken"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Token_Auth_context__WEBPACK_IMPORTED_MODULE_3__.AuthContextProvider, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./pages/display.js":
/*!**************************!*\
  !*** ./pages/display.js ***!
  \**************************/
/***/ (() => {

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

/***/ }),

/***/ "./components/layout/Layout.module.css":
/*!*********************************************!*\
  !*** ./components/layout/Layout.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "Layout_footer__1amKy",
	"__links": "Layout___links__TXPx0",
	"__link": "Layout___link__1Wa9a"
};


/***/ }),

/***/ "./components/layout/MainNavigation.module.css":
/*!*****************************************************!*\
  !*** ./components/layout/MainNavigation.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"header": "MainNavigation_header__t8YPG",
	"logo": "MainNavigation_logo__Qwpy5"
};


/***/ }),

/***/ "./components/dataFlow/companyregistration/AddCompanies.css":
/*!******************************************************************!*\
  !*** ./components/dataFlow/companyregistration/AddCompanies.css ***!
  \******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "Firebase/app":
/*!*******************************!*\
  !*** external "Firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("Firebase/app");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("firebase/auth");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVVFLDhEQUFDLDhEQUFEO0FBQUEsNkJBRUUsOERBQUMsK0VBQUQ7QUFBQSwrQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztBQUVELGlFQUFldUQsS0FBZjs7Ozs7Ozs7OztBQ3hDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUdKQSx5R0FBOEM7Ozs7Ozs7Ozs7OztBQ0E5Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL1Rva2VuL0F1dGgtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvVG9rZW4vRmlyZWJhc2UuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9wYWdlcy9kaXNwbGF5LmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2xheW91dC9NYWluTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllcy5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwiRmlyZWJhc2UvYXBwXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJmaXJlYmFzZS9hcHBcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcImZpcmViYXNlL2F1dGhcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9pZ25vcmVkfEE6XFxQcm9qZWN0c1xcR2l0a3Jha2VuXFxQcm9qZWN0RXRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcc2hhcmVkXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xyXG4gIHVpZDogXCJcIixcclxuICBsb2dpbjogKHVpZCkgPT4ge30sXHJcbiAgbG9nb3V0OiAoKSA9PiB7fSxcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxufSk7XHJcblxyXG4vLyB0aGlzIGlzIGV4cG9ydGVkIGFzIGEgbmFtZSBleHBvcnRcclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdWlkLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHVzZXJJc0xvZ2dlZEluID0gISF1aWQ7XHJcbiAgY29uc29sZS5sb2codXNlcklzTG9nZ2VkSW4gKyBcIiBjaGVjayBpZiBpdCB0cnVlIG9yIGZhbHNlXCIpO1xyXG4gIGNvbnNvbGUubG9nKHVpZCArIFwiIHRoaXMgaXMgY29taW5nIGZyb20gdGhlIENvbnRleHQgcGFnZVwiKTtcclxuXHJcbiAgY29uc3QgbG9naW5IYW5kbGVyID0gKHVpZCkgPT4ge1xyXG4gICAgc2V0SXNMb2dnZWRJbih1aWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRJc0xvZ2dlZEluKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIHVpZDogdWlkLFxyXG4gICAgaXNMb2dnZWRJbjogdXNlcklzTG9nZ2VkSW4sXHJcbiAgICBsb2dpbjogbG9naW5IYW5kbGVyLFxyXG4gICAgbG9nb3V0OiBsb2dvdXRIYW5kbGVyLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coY29udGV4dFZhbHVlLmlzTG9nZ2VkSW4gKyBcIiBjb21pbmcgZnJvbSB0aGUgQ29udGV4dCBwYWdlXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuLy8gZXhwb3J0ZWQgYXMgYSBkZWZhdWx0IHZhbHVlXHJcbiIsImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiRmlyZWJhc2UvYXBwXCI7XHJcbi8vIGltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiQGZpcmViYXNlL2F1dGhcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5RDJkSHZNWG1KRTlSSUFnUHdKdmMwOXo4TDhpcmgwVm1jXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ0ZXN0LTJhOTYyLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOlxyXG4gICAgXCJodHRwczovL3Rlc3QtMmE5NjItZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxyXG4gIHByb2plY3RJZDogXCJ0ZXN0LTJhOTYyXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ0ZXN0LTJhOTYyLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMzc3MDUyODY3MTQyXCIsXHJcbiAgYXBwSWQ6IFwiMTozNzcwNTI4NjcxNDI6d2ViOmE4Y2U0OWRkYjJmM2MxNjYyMTc4NDdcIixcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xyXG5cclxuZXhwb3J0IHtcclxuICBhdXRoLFxyXG4gIGFwcCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG59O1xyXG4iLCJpbXBvcnQgTWFpbk5hdmlnYXRpb24gZnJvbSBcIi4vTWFpbk5hdmlnYXRpb25cIjtcclxuLy8gaW1wb3J0IE1haW5OYXZpZ2F0aW9uIGZyb20gXCIuLi91c2Vyc0FjY291bnQvTGF5b3V0L01haW5OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0xheW91dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1haW5OYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT57cHJvcHMuY2hpbGRyZW59PC9tYWluPlxyXG5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5fX2xpbmtzfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5fX2xpbmt9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+U3VwcG9ydDwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5fX2xpbmt9PlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VGVybXMgb2YgVXNlPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01haW5OYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vIGltcG9ydCBBdXRoZW5Db250ZXh0IGZyb20gXCIuLi9Ub2tlbi9Mb2dJbkF1dGhlbnRpY2F0aW9uIFwiO1xyXG4vLyBpbXBvcnQgYXV0aFVzZXJDb250ZXh0IGZyb20gXCIuLi9Ub2tlbi9BdXRoVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi9Ub2tlbi9GaXJlYmFzZVwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCBEaXNwbGF5IGZyb20gXCIuLi8uLi9wYWdlcy9kaXNwbGF5XCI7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vVG9rZW4vQXV0aC1jb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNYWluTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBhdXRoQ3R4ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgLy8gY29uc3QgYXV0aEN0eCA9IHVzZUNvbnRleHQoYXV0aFVzZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc29sZS5sb2coYXV0aEN0eC5pc0xvZ2dlZEluICsgXCIgY29taW5nIGZyb20gdGhlIE5hdiBwYWdlIFwiKTtcclxuXHJcbiAgY29uc3QgSXNsb2dnZWRJbiA9IGF1dGhDdHguaXNMb2dnZWRJbjtcclxuICBjb25zb2xlLmxvZyhJc2xvZ2dlZEluICsgXCIgY29taW5nIGZyb20gdGhlIE5hdiBwYWdlIElJXCIpO1xyXG5cclxuICBjb25zdCBsb2dvdXRIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2lnbk91dChhdXRoKS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYXV0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwic2lnbk91dCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVpZCA9IFwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIC8vICAgYXBpS2V5OiBcIkFJemFTeUQyZEh2TVhtSkU5UklBZ1B3SnZjMDl6OEw4aXJoMFZtY1wiLFxyXG4gIC8vICAgYXV0aERvbWFpbjogXCJ0ZXN0LTJhOTYyLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIC8vICAgZGF0YWJhc2VVUkw6XHJcbiAgLy8gICAgIFwiaHR0cHM6Ly90ZXN0LTJhOTYyLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHBcIixcclxuICAvLyAgIHByb2plY3RJZDogXCJ0ZXN0LTJhOTYyXCIsXHJcbiAgLy8gICBzdG9yYWdlQnVja2V0OiBcInRlc3QtMmE5NjIuYXBwc3BvdC5jb21cIixcclxuICAvLyAgIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjM3NzA1Mjg2NzE0MlwiLFxyXG4gIC8vICAgYXBwSWQ6IFwiMTozNzcwNTI4NjcxNDI6d2ViOmE4Y2U0OWRkYjJmM2MxNjYyMTc4NDdcIixcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG4gIC8vIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcblxyXG4gIC8vIGNvbnN0IGdldG1lb3V0b2ZoZXJlID0gKCkgPT4ge1xyXG5cclxuICAvLyB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XHJcbiAgICAgICAgQmFsZW1vamFcclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnRvZ2dsZX0+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50b2dnbGV9Pjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMudG9nZ2xlfT48L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPiAqL31cclxuXHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdn0+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy51bH0+XHJcbiAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1VwbG9hZGluZ0Nob3Jlc1RvRGJcIj5DaG9yZXM8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMubGl9PlxyXG4gICAgICAgICAgICB7LyogbmV4dCBMaW5rIGhyZWYgPSAnL25hbWUgb2YgY29tcG9uZW50IHdyYXBwZWQgaW4gbGluaycgKi99XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYlwiPk5ldyBDb21wYW55PC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICB7IUlzbG9nZ2VkSW4gJiYgKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc2VzLmxpfT5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9BdXRoRm9ybTFcIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtJc2xvZ2dlZEluICYmIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XHJcbiAgICAgICAgICAgICAgey8qIDxEaXNwbGF5IC8+ICovfVxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiL3NpZ25PdXRcIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBPdXRcclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtJc2xvZ2dlZEluICYmIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvUHJvZmlsZUZvcm1cIlxyXG4gICAgICAgICAgICAgICAgLy8gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmt9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVXNlciBQcm9maWxlXHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7LyogeyFJc2xvZ2dlZEluICYmIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3Nlcy5saX0+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dChhdXRoKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaWduLW91dCBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBzaWduT3V0XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAge2F1dGhDdHguaXNMb2dnZWRJbiAmJiAoXHJcbiAgICAgICAgICAgIC8vIDxidXR0b24gb25DbGljaz17bG9nb3V0SGFuZGxlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17bG9nb3V0SGFuZGxlcn0+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbk5hdmlnYXRpb247XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcclxudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xyXG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBwcmVmZXRjaGVkID0ge1xyXG59O1xyXG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xyXG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xyXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxyXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxyXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XHJcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcclxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XHJcbn1cclxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XHJcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XHJcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXHJcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcclxuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxyXG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XHJcbiAgICAgICAgc2hhbGxvdyxcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcclxuICAgICAgICAgICAgaHJlZjogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XHJcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XHJcbiAgICAgICAgICAgIGFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcclxuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcclxuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcclxuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcclxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcclxuICAgICAgICB9O1xyXG4gICAgfSwgW1xyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBwcm9wcy5ocmVmLFxyXG4gICAgICAgIHByb3BzLmFzXHJcbiAgICBdKTtcclxuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcclxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xyXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXHJcbiAgICBsZXQgY2hpbGQ7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcclxuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcclxuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcclxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xyXG4gICAgICAgIGlmIChjaGlsZFJlZikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBjaGlsZFJlZixcclxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcclxuICAgIF0pO1xyXG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcclxuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XHJcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcclxuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGFzLFxyXG4gICAgICAgIGhyZWYsXHJcbiAgICAgICAgaXNWaXNpYmxlLFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBwLFxyXG4gICAgICAgIHJvdXRlclxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xyXG4gICAgICAgIHJlZjogc2V0UmVmLFxyXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xyXG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcclxuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcclxuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcclxuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xyXG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXHJcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcclxuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xyXG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xyXG59XHJcbnZhciBfZGVmYXVsdCA9IExpbms7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xyXG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcclxufVxyXG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xyXG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xyXG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XHJcbiAgICB9XHJcbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcclxuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcclxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xyXG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNiKHtcclxuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAxKTtcclxufTtcclxuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcclxuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xyXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XHJcbn07XHJcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XHJcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xyXG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xyXG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XHJcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XHJcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXHJcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxyXG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cclxuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXHJcbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcclxuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzb2x2ZXI7XHJcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgfSk7XHJcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XHJcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXHJcbiAgICAgICAgZnV0dXJlOiBwcm9tXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxyXG4gICAgKSA6IHByb207XHJcbn1cclxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcclxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxyXG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xyXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcclxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcclxuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XHJcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XHJcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XHJcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xyXG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XHJcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xyXG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XHJcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xyXG59XHJcbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cclxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxyXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxyXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XHJcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcclxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cclxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG59XHJcbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cclxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXHJcbmxldCBkZXZCdWlsZFByb21pc2U7XHJcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXHJcbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHAudGhlbigocik9PntcclxuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxyXG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXNvbHZlKHIpO1xyXG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxyXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBtcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xyXG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcclxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcclxuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcclxuICAgICAgICAgICAgc2NyaXB0czogW1xyXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxyXG4gICAgICAgICAgICBjc3M6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xyXG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XHJcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcclxuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XHJcbiAgICAgICAgaWYgKHByb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcclxuICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XHJcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XHJcbiAgICAgICAgaWYgKHByb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxyXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcclxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xyXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxyXG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXHJcbiAgICAgICAgICAgIGxldCBjbjtcclxuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXHJcbiAgICAgICAgICAgICAgICApIDogW10pXHJcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcclxuICAgIH1cclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcclxuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XHJcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcclxudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XHJcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xyXG4gICAgcm91dGVyOiBudWxsLFxyXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxyXG4gICAgcmVhZHkgKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXHJcbiAgICAncGF0aG5hbWUnLFxyXG4gICAgJ3JvdXRlJyxcclxuICAgICdxdWVyeScsXHJcbiAgICAnYXNQYXRoJyxcclxuICAgICdjb21wb25lbnRzJyxcclxuICAgICdpc0ZhbGxiYWNrJyxcclxuICAgICdiYXNlUGF0aCcsXHJcbiAgICAnbG9jYWxlJyxcclxuICAgICdsb2NhbGVzJyxcclxuICAgICdkZWZhdWx0TG9jYWxlJyxcclxuICAgICdpc1JlYWR5JyxcclxuICAgICdpc1ByZXZpZXcnLFxyXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcclxuICAgICdkb21haW5Mb2NhbGVzJywgXHJcbl07XHJcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcclxuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcclxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcclxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcclxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcclxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxyXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxyXG5dO1xyXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xyXG4gICAgJ3B1c2gnLFxyXG4gICAgJ3JlcGxhY2UnLFxyXG4gICAgJ3JlbG9hZCcsXHJcbiAgICAnYmFjaycsXHJcbiAgICAncHJlZmV0Y2gnLFxyXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXHJcbl07XHJcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XHJcbiAgICB9XHJcbn0pO1xyXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcclxuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cclxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXHJcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcclxuICAgICAgICBnZXQgKCkge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xyXG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgfTtcclxufSk7XHJcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcclxuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xyXG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xyXG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcclxuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XHJcbn1cclxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xyXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcclxuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxyXG4gICAgKTtcclxuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xyXG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xyXG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcclxuICAgIH07XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcclxuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcclxuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XHJcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xyXG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcclxuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XHJcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcclxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XHJcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcclxuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcclxuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXHJcbiAgICAgICAgICAgICwge1xyXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaXNEaXNhYmxlZCxcclxuICAgICAgICByb290TWFyZ2luLFxyXG4gICAgICAgIHZpc2libGVcclxuICAgIF0pO1xyXG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIHZpc2libGVcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBzZXRSZWYsXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xyXG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxyXG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xyXG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XHJcbiAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBvYnNlcnZlcixcclxuICAgICAgICBlbGVtZW50c1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xyXG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcclxuICAgICAgICB9LCBwcm9wcykpKTtcclxuICAgIH1cclxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcclxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XHJcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcclxuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XHJcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xyXG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XHJcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcclxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xyXG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xyXG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xyXG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XHJcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcclxudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XHJcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcclxudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XHJcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcclxudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xyXG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XHJcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcclxudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xyXG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XHJcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xyXG59XHJcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcclxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcclxuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XHJcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcclxuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xyXG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xyXG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XHJcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcclxuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcclxuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXHJcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XHJcbn1cclxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcclxuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcclxuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcclxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xyXG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XHJcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xyXG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XHJcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcclxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcclxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cclxuICAgIHF1ZXJ5O1xyXG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xyXG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcclxuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XHJcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXHJcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxyXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XHJcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxyXG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XHJcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxyXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXHJcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXHJcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcclxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XHJcbiAgICB9KSkge1xyXG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcclxuICAgICAgICA7XHJcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxyXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xyXG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcclxuICAgIGxldCBiYXNlO1xyXG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xyXG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxyXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXHJcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XHJcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xyXG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcclxuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xyXG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXHJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcclxuICAgICAgICAgICAgdXJsQXNTdHJpbmdcclxuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXHJcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcclxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xyXG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXHJcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXHJcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcclxuICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xyXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xyXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcclxuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XHJcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xyXG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXHJcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxyXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcclxuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xyXG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcclxuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxyXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xyXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XHJcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcclxuICAgIH1cclxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcclxuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXHJcbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcclxuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcclxufVxyXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKG4pIHtcclxuICAgIH1cclxufSgpO1xyXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xyXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cclxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcclxuICAgICAgICAvLyA+IG9wdGlvbi5cclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxyXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcclxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xyXG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXHJcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcclxuICAgICAgICAvLyBsb29wLlxyXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcclxuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfSk7XHJcbn1cclxuY2xhc3MgUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcclxuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxyXG4gICAgICAgIHRoaXMuc2RjID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcclxuICAgICAgICB0aGlzLnNkciA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXHJcbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcclxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxyXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcclxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxyXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxyXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxyXG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXHJcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxyXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcclxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcclxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XHJcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XHJcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcclxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxyXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XHJcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcclxuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcclxuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxyXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xyXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XHJcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxyXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxyXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xyXG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxyXG4gICAqLyBiYWNrKCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcclxuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxyXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXHJcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cclxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xyXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXHJcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcclxuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XHJcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XHJcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XHJcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cclxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XHJcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xyXG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcclxuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcclxuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcclxuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XHJcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxyXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcclxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XHJcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XHJcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xyXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxyXG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXHJcbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xyXG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcclxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXHJcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xyXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxyXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcclxuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXHJcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxyXG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XHJcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xyXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcclxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxyXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XHJcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcclxuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cclxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XHJcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSA6IG51bGw7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcclxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXHJcbiAgICAgICAgICAgICcnLCBhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XHJcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcclxuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcclxuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXHJcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cclxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cclxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcclxuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xyXG4gICAgICAgICAgICBsZXQgcHJvcHM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgZXJyLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XHJcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xyXG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XHJcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcclxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcclxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcclxuICAgICAgICB0aGlzLl9icHMgPSBjYjtcclxuICAgIH1cclxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XHJcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xyXG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcclxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXHJcbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxyXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXHJcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cclxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvSGFzaChhcykge1xyXG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxyXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcclxuICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XHJcbiAgICAgICAgaWYgKG5hbWVFbCkge1xyXG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXHJcbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcclxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxyXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxyXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XHJcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcclxuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xyXG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xyXG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XHJcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xyXG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xyXG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2dldERhdGEoZm4pIHtcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xyXG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xyXG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XHJcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcclxuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XHJcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XHJcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xyXG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcclxuICAgICAgICAgICAgQXBwVHJlZSxcclxuICAgICAgICAgICAgQ29tcG9uZW50LFxyXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYygpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxufVxyXG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCIvLyBXcmFwIHRoZSBDb21wb25lbnQgc28gdGhlIGVudGlyZSBzaXRlIHdpbGwgYmUgaW5jbHVkZWRcclxuXHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlcnNBY2NvdW50L0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvdXNlcnNBY2NvdW50L0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY29tcGFueXJlZ2lzdHJhdGlvbi9BZGRDb21wYW5pZXMuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZGF0YUZsb3cvY2hvcmVyZWdpc3RyZWF0aW9uL0FkZENob3JlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zZWFyY2hCYXIvU2VhcmNoLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHsgQXV0aENvbnRleHRQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuL0xvZ0luQXV0aGVudGljYXRpb24gXCI7XHJcblxyXG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vQXV0aC1jb250ZXh0XCI7XHJcblxyXG4vLyBpbXBvcnQgeyBBdXRoVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9rZW4vQXV0aFVzZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+U29tZSB0ZXN0IGZvciB0aGUgZ2l0a3Jha2VuPC9wPlxyXG4gICAgICA8cD5Tb21lIHRlc3QgZm9yIHRoZSBnaXRrcmFrZW48L3A+XHJcbiAgICAgIDxwPlNvbWUgdGVzdCBmb3IgdGhlIGdpdGtyYWtlbjwvcD5cclxuICAgICAgPHA+U29tZSB0ZXN0IGZvciB0aGUgZ2l0a3Jha2VuPC9wPlxyXG4gICAgICA8cD5Tb21lIHRlc3QgZm9yIHRoZSBnaXRrcmFrZW48L3A+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEl0IGhhcyBiZWVuIGEgeWVhciBhbmQgaXQgaXMgYWJvdXQgdGltZSBpIGtub3cgdGhlIGluIGFuZCBvdXQgb2ZcclxuICAgICAgICBnaXRLcmFrZW5cclxuICAgICAgPC9wPlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIHsvKiA8QXV0aENvbnRleHRQcm92aWRlcj4gKi99XHJcbiAgICAgICAgPEF1dGhDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIHsvKiA8L0F1dGhDb250ZXh0UHJvdmlkZXI+ICovfVxyXG5cclxuICAgICAgICB7LyogPC9BdXRoVXNlclByb3ZpZGVyPiAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiLyogTWFrZXMgc2V2ZXJhbCBkYiBjYWxscyAqL1xyXG5cclxuLy8gaW1wb3J0IHsgYXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcIi4uLy4vY29tcG9uZW50cy9Ub2tlbi9GaXJlYmFzZVwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gY29uc3QgRGlzcGxheSA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbZGlzcGxheSwgc2V0RGlzcGxheV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbi8vICAgb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XHJcbi8vICAgICBpZiAodXNlcikge1xyXG4vLyAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuLy8gICAgICAgc2V0RGlzcGxheSh1c2VyLmRpc3BsYXlOYW1lKTtcclxuLy8gICAgICAgc2V0RGlzcGxheSh1c2VyLmVtYWlsKTtcclxuXHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFxyXG4vLyAgICAgICAgIFwidGhpcyBpcyB0aGUgdXNlciB3aXRoIG9uQXV0aCBhdCBsaW5lIDEwMVwiICsgdXNlci5lbWFpbCxcclxuLy8gICAgICAgICB1c2VyLnVpZCxcclxuLy8gICAgICAgICB1c2VyLmRpc3BsYXlOYW1lLFxyXG4vLyAgICAgICAgIHVzZXIuZW1haWwsXHJcbi8vICAgICAgICAgdXNlclxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGxvZ2dlZCBvdXRcIik7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwibm8gZGF0YSB0byBvdXRwdXRcIik7XHJcbi8vICAgICAgIC8vIFVzZXIgaXMgc2lnbmVkIG91dFxyXG4vLyAgICAgICAvLyAuLi5cclxuLy8gICAgIH1cclxuLy8gICB9KTtcclxuXHJcbi8vICAgcmV0dXJuIDxkaXY+e2Rpc3BsYXl9PC9kaXY+O1xyXG4vLyB9O1xyXG4vLyBleHBvcnQgZGVmYXVsdCBEaXNwbGF5O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJMYXlvdXRfZm9vdGVyX18xYW1LeVwiLFxuXHRcIl9fbGlua3NcIjogXCJMYXlvdXRfX19saW5rc19fVFhQeDBcIixcblx0XCJfX2xpbmtcIjogXCJMYXlvdXRfX19saW5rX18xV2E5YVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiTWFpbk5hdmlnYXRpb25faGVhZGVyX190OFlQR1wiLFxuXHRcImxvZ29cIjogXCJNYWluTmF2aWdhdGlvbl9sb2dvX19Rd3B5NVwiXG59O1xuIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJGaXJlYmFzZS9hcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmlyZWJhc2UvYXBwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZpcmViYXNlL2F1dGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidWlkIiwibG9naW4iLCJsb2dvdXQiLCJpc0xvZ2dlZEluIiwiQXV0aENvbnRleHRQcm92aWRlciIsInByb3BzIiwic2V0SXNMb2dnZWRJbiIsInVzZXJJc0xvZ2dlZEluIiwiY29uc29sZSIsImxvZyIsImxvZ2luSGFuZGxlciIsImxvZ291dEhhbmRsZXIiLCJjb250ZXh0VmFsdWUiLCJjaGlsZHJlbiIsImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiYXV0aCIsIk1haW5OYXZpZ2F0aW9uIiwiY2xhc3NlcyIsIkxheW91dCIsIm1haW4iLCJmb290ZXIiLCJfX2xpbmtzIiwiX19saW5rIiwidXNlQ29udGV4dCIsIkxpbmsiLCJzaWduT3V0IiwiRGlzcGxheSIsImF1dGhDdHgiLCJJc2xvZ2dlZEluIiwidGhlbiIsImhlYWRlciIsImxvZ28iLCJuYXYiLCJ1bCIsImxpIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJfdXNlSW50ZXJzZWN0aW9uIiwib2JqIiwiX19lc01vZHVsZSIsInByZWZldGNoZWQiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJpc0xvY2FsVVJMIiwiY2F0Y2giLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwiZSIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwicmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJ1c2VFZmZlY3QiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJNeUFwcCJdLCJzb3VyY2VSb290IjoiIn0=