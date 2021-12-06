(() => {
var exports = {};
exports.id = "pages/UploadingCompaniesToDb";
exports.ids = ["pages/UploadingCompaniesToDb"];
exports.modules = {

/***/ "./components/dataFlow/companyregistration/AddCompaniesForm.js":
/*!*********************************************************************!*\
  !*** ./components/dataFlow/companyregistration/AddCompaniesForm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/user-inputs */ "./components/hooks/user-inputs.js");
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/button/Button */ "./components/ui/button/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\dataFlow\\companyregistration\\AddCompaniesForm.js";
// import  {useRef} from 'react'
// import  './AddCompanies.css';




function AddCompaniesForm(props) {
  const {
    value: companyname,
    isValid: validcompname,
    hasError: inValidcompname,
    valueChangeHandler: compnameChangeHandler,
    onfocusHandler: blurcompname,
    reset: resetcompanyname
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: lineOfBusiness,
    isValid: ValidlineOfBusiness,
    hasError: inValidlineOfBusiness,
    valueChangeHandler: lineOfBusinessChangeHandler,
    onfocusHandler: blurlineOfBusiness,
    reset: resetlineOfBusiness
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: contactperson,
    isValid: validcontactperson,
    hasError: inValidcontactperson,
    valueChangeHandler: contactpersonChangeHandler,
    onfocusHandler: blurcontactperson,
    reset: resetcontactperson
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: tele,
    isValid: validtele,
    hasError: inValidtele,
    valueChangeHandler: teleChangeHandler,
    onfocusHandler: blurtele,
    reset: resettele
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  const {
    value: TIN,
    isValid: validtin,
    hasError: inValidtin,
    valueChangeHandler: tinChangeHandler,
    onfocusHandler: blurtin,
    reset: resettin
  } = (0,_hooks_user_inputs__WEBPACK_IMPORTED_MODULE_0__.default)(value => value.trim() !== "");
  let formValidation = false;

  if (validcompname && validcontactperson && validtele && validtin // lineOfBusiness
  ) {
    formValidation = true;
  } // const companyname = useRef();
  // const contactperson = useRef();
  // const telephone = useRef();
  // cn


  const submitHandler = event => {
    event.preventDefault();

    if (!formValidation) {
      return;
    } // console.log(companyname,contactperson,tele);
    //getting the select option  form input from the form


    let e = document.getElementById("lineOfBusiness");
    let lineOfBusiness = e.value;
    const companyDataObject = {
      companyname,
      contactperson,
      tele,
      TIN,
      lineOfBusiness
    };
    console.log("here is the text " + lineOfBusiness);
    props.onAddcompaniesform(companyDataObject);
    resetcompanyname("");
    resetcontactperson("");
    resettele("");
    resettin("");
    let use = companyDataObject.lineOfBusiness = "";
    console.log("here is the formted form " + use); // resetForm("");
    // const items = {
    //   name: companyname.current.value,
    //   cperson: contactperson.current.value,
    //   sname: telephone.current.value}
  }; // const items = {
  //   name :companyname.current.value,
  //   cperson: contactperson.current.value,
  //   sname :telephone.current.value
  // }


  const nameInputClasses = inValidcompname ? "form-control invalid" : "form-control ";
  const contactInputClasses = inValidcontactperson ? "form-control invalid" : "form-control ";
  const teleInputClasses = inValidtele ? "form-control invalid" : "form-control ";
  const tinInputClasses = inValidtin ? "form-control invalid" : "form-control ";
  const lineOfBusinessClasses = inValidlineOfBusiness ? "form-control invalid" : "form-control";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
    onSubmit: submitHandler,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "app",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: tinInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tin",
          children: " TIN ID "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "number",
          id: "TIN" // ref={telephone}
          ,
          value: TIN,
          onBlur: blurtin,
          onChange: tinChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this), inValidtin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid TIN ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: nameInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "compname",
          children: " Company Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "compname" // ref={companyname}
          ,
          onBlur: blurcompname,
          onChange: compnameChangeHandler,
          value: companyname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, this), inValidcompname && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please fill in a valid name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: lineOfBusinessClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "lineOfBusiness",
          children: " Line of Business "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("select", {
          id: "lineOfBusiness",
          required: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Mechanic",
            children: "Mechanic "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "HandyMan",
            children: "HandyMan "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "House Hel",
            children: "House Help "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "IT Solution",
            children: "IT Solution "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Architect",
            children: "Architect "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Gardner",
            children: "Gardner "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 177,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Transport",
            children: "Transport "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "Cleaning",
            children: "Cleaning "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("option", {
            value: "other",
            children: "Other ... "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: contactInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "contperson",
          children: " Contact Person "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "text",
          id: "contperson" // ref={contactperson}
          ,
          value: contactperson,
          onBlur: blurcontactperson,
          onChange: contactpersonChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), inValidcontactperson && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Contact Person"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: teleInputClasses,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("label", {
          htmlFor: "tel",
          children: " Telephone "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
          type: "tel",
          id: "tel" // ref={telephone}
          ,
          value: tele,
          onBlur: blurtele,
          onChange: teleChangeHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 11
        }, this), inValidtele && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          className: "error-text",
          children: "Please enter a valid Phone number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ui_button_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
        className: "button",
        children: " Add Company "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCompaniesForm);

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
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\components\\ui\\button\\Button.js";
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

/***/ "./pages/UploadingCompaniesToDb.js":
/*!*****************************************!*\
  !*** ./pages/UploadingCompaniesToDb.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dataFlow/companyregistration/AddCompaniesForm */ "./components/dataFlow/companyregistration/AddCompaniesForm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "A:\\Projects\\NextJs\\Balemoja_Next\\Balemoja\\pages\\UploadingCompaniesToDb.js";




function UploadingCompaniesToDb() {
  async function toDbHandler(companyDataObject) {
    const responce = await fetch("https://test-2a962-default-rtdb.europe-west1.firebasedatabase.app/Companies.json", // "https://balemoja-9c5e6-default-rtdb.europe-west1.firebasedatabase.app/Companies.json",
    {
      method: "POST",
      body: JSON.stringify(companyDataObject),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!responce.ok) {
      throw new Error("Error");
    }

    const data = await responce.json(); // the responce from the server

    console.log(data);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("section", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_dataFlow_companyregistration_AddCompaniesForm__WEBPACK_IMPORTED_MODULE_1__.default, {
        onAddcompaniesform: toDbHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadingCompaniesToDb);

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/UploadingCompaniesToDb.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzFCO0FBQ0E7QUFDRUMsTUFBQUEsTUFBTSxFQUFFLE1BRFY7QUFFRUMsTUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLGlCQUFmLENBRlI7QUFHRWlDLE1BQUFBLE9BQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSFgsS0FKMEIsQ0FBNUI7O0FBWUEsUUFBSSxDQUFDTixRQUFRLENBQUNPLEVBQWQsRUFBa0I7QUFDaEIsWUFBTSxJQUFJQyxLQUFKLENBQVUsT0FBVixDQUFOO0FBQ0Q7O0FBQ0QsVUFBTUMsSUFBSSxHQUFHLE1BQU1ULFFBQVEsQ0FBQ1UsSUFBVCxFQUFuQixDQWhCNEMsQ0FpQjVDOztBQUNBcEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlrQyxJQUFaO0FBQ0Q7O0FBQ0Qsc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSwyQkFDRTtBQUFBLDZCQUNFLDhEQUFDLDhGQUFEO0FBQWtCLDBCQUFrQixFQUFFVjtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztBQUVELGlFQUFlRCxzQkFBZjs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy9kYXRhRmxvdy9jb21wYW55cmVnaXN0cmF0aW9uL0FkZENvbXBhbmllc0Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmFsZW1vamEvLi9jb21wb25lbnRzL2hvb2tzL3VzZXItaW5wdXRzLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vY29tcG9uZW50cy91aS9idXR0b24vQnV0dG9uLmpzIiwid2VicGFjazovL2JhbGVtb2phLy4vcGFnZXMvVXBsb2FkaW5nQ29tcGFuaWVzVG9EYi5qcyIsIndlYnBhY2s6Ly9iYWxlbW9qYS8uL2NvbXBvbmVudHMvdWkvYnV0dG9uL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JhbGVtb2phL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9iYWxlbW9qYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAge3VzZVJlZn0gZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCAgJy4vQWRkQ29tcGFuaWVzLmNzcyc7XHJcbmltcG9ydCBVc2VySW5wdXQgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZXItaW5wdXRzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL3VpL2J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmZ1bmN0aW9uIEFkZENvbXBhbmllc0Zvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29tcGFueW5hbWUsXHJcbiAgICBpc1ZhbGlkOiB2YWxpZGNvbXBuYW1lLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRjb21wbmFtZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29tcG5hbWVDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJjb21wbmFtZSxcclxuICAgIHJlc2V0OiByZXNldGNvbXBhbnluYW1lLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogbGluZU9mQnVzaW5lc3MsXHJcbiAgICBpc1ZhbGlkOiBWYWxpZGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgaGFzRXJyb3I6IGluVmFsaWRsaW5lT2ZCdXNpbmVzcyxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogbGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyLFxyXG4gICAgb25mb2N1c0hhbmRsZXI6IGJsdXJsaW5lT2ZCdXNpbmVzcyxcclxuICAgIHJlc2V0OiByZXNldGxpbmVPZkJ1c2luZXNzLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogY29udGFjdHBlcnNvbixcclxuICAgIGlzVmFsaWQ6IHZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkY29udGFjdHBlcnNvbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogY29udGFjdHBlcnNvbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cmNvbnRhY3RwZXJzb24sXHJcbiAgICByZXNldDogcmVzZXRjb250YWN0cGVyc29uLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogdGVsZSxcclxuICAgIGlzVmFsaWQ6IHZhbGlkdGVsZSxcclxuICAgIGhhc0Vycm9yOiBpblZhbGlkdGVsZSxcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGVsZUNoYW5nZUhhbmRsZXIsXHJcbiAgICBvbmZvY3VzSGFuZGxlcjogYmx1cnRlbGUsXHJcbiAgICByZXNldDogcmVzZXR0ZWxlLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB2YWx1ZTogVElOLFxyXG4gICAgaXNWYWxpZDogdmFsaWR0aW4sXHJcbiAgICBoYXNFcnJvcjogaW5WYWxpZHRpbixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcjogdGluQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyOiBibHVydGluLFxyXG4gICAgcmVzZXQ6IHJlc2V0dGluLFxyXG4gIH0gPSBVc2VySW5wdXQoKHZhbHVlKSA9PiB2YWx1ZS50cmltKCkgIT09IFwiXCIpO1xyXG5cclxuICBsZXQgZm9ybVZhbGlkYXRpb24gPSBmYWxzZTtcclxuICBpZiAoXHJcbiAgICB2YWxpZGNvbXBuYW1lICYmXHJcbiAgICB2YWxpZGNvbnRhY3RwZXJzb24gJiZcclxuICAgIHZhbGlkdGVsZSAmJlxyXG4gICAgdmFsaWR0aW5cclxuICAgIC8vIGxpbmVPZkJ1c2luZXNzXHJcbiAgKSB7XHJcbiAgICBmb3JtVmFsaWRhdGlvbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBjb21wYW55bmFtZSA9IHVzZVJlZigpO1xyXG4gIC8vIGNvbnN0IGNvbnRhY3RwZXJzb24gPSB1c2VSZWYoKTtcclxuICAvLyBjb25zdCB0ZWxlcGhvbmUgPSB1c2VSZWYoKTtcclxuICAvLyBjblxyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghZm9ybVZhbGlkYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGNvbXBhbnluYW1lLGNvbnRhY3RwZXJzb24sdGVsZSk7XHJcblxyXG4gICAgLy9nZXR0aW5nIHRoZSBzZWxlY3Qgb3B0aW9uICBmb3JtIGlucHV0IGZyb20gdGhlIGZvcm1cclxuICAgIGxldCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lT2ZCdXNpbmVzc1wiKTtcclxuICAgIGxldCBsaW5lT2ZCdXNpbmVzcyA9IGUudmFsdWU7XHJcblxyXG4gICAgY29uc3QgY29tcGFueURhdGFPYmplY3QgPSB7XHJcbiAgICAgIGNvbXBhbnluYW1lLFxyXG4gICAgICBjb250YWN0cGVyc29uLFxyXG4gICAgICB0ZWxlLFxyXG4gICAgICBUSU4sXHJcbiAgICAgIGxpbmVPZkJ1c2luZXNzLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmUgaXMgdGhlIHRleHQgXCIgKyBsaW5lT2ZCdXNpbmVzcyk7XHJcblxyXG4gICAgcHJvcHMub25BZGRjb21wYW5pZXNmb3JtKGNvbXBhbnlEYXRhT2JqZWN0KTtcclxuXHJcbiAgICByZXNldGNvbXBhbnluYW1lKFwiXCIpO1xyXG4gICAgcmVzZXRjb250YWN0cGVyc29uKFwiXCIpO1xyXG4gICAgcmVzZXR0ZWxlKFwiXCIpO1xyXG4gICAgcmVzZXR0aW4oXCJcIik7XHJcblxyXG4gICAgbGV0IHVzZSA9IChjb21wYW55RGF0YU9iamVjdC5saW5lT2ZCdXNpbmVzcyA9IFwiXCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZSBpcyB0aGUgZm9ybXRlZCBmb3JtIFwiICsgdXNlKTtcclxuXHJcbiAgICAvLyByZXNldEZvcm0oXCJcIik7XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSB7XHJcbiAgICAvLyAgIG5hbWU6IGNvbXBhbnluYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAgIC8vICAgc25hbWU6IHRlbGVwaG9uZS5jdXJyZW50LnZhbHVlfVxyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGl0ZW1zID0ge1xyXG4gIC8vICAgbmFtZSA6Y29tcGFueW5hbWUuY3VycmVudC52YWx1ZSxcclxuICAvLyAgIGNwZXJzb246IGNvbnRhY3RwZXJzb24uY3VycmVudC52YWx1ZSxcclxuICAvLyAgIHNuYW1lIDp0ZWxlcGhvbmUuY3VycmVudC52YWx1ZVxyXG5cclxuICAvLyB9XHJcblxyXG4gIGNvbnN0IG5hbWVJbnB1dENsYXNzZXMgPSBpblZhbGlkY29tcG5hbWVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCBjb250YWN0SW5wdXRDbGFzc2VzID0gaW5WYWxpZGNvbnRhY3RwZXJzb25cclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0ZWxlSW5wdXRDbGFzc2VzID0gaW5WYWxpZHRlbGVcclxuICAgID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiXHJcbiAgICA6IFwiZm9ybS1jb250cm9sIFwiO1xyXG5cclxuICBjb25zdCB0aW5JbnB1dENsYXNzZXMgPSBpblZhbGlkdGluID8gXCJmb3JtLWNvbnRyb2wgaW52YWxpZFwiIDogXCJmb3JtLWNvbnRyb2wgXCI7XHJcblxyXG4gIGNvbnN0IGxpbmVPZkJ1c2luZXNzQ2xhc3NlcyA9IGluVmFsaWRsaW5lT2ZCdXNpbmVzc1xyXG4gICAgPyBcImZvcm0tY29udHJvbCBpbnZhbGlkXCJcclxuICAgIDogXCJmb3JtLWNvbnRyb2xcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGluSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGluXCI+IFRJTiBJRCA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cIlRJTlwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17VElOfVxyXG4gICAgICAgICAgICBvbkJsdXI9e2JsdXJ0aW59XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aW5DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGluICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBlbnRlciBhIHZhbGlkIFRJTiBJRDwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtuYW1lSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tcG5hbWVcIj4gQ29tcGFueSBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cImNvbXBuYW1lXCJcclxuICAgICAgICAgICAgLy8gcmVmPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVyY29tcG5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb21wbmFtZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21wYW55bmFtZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbXBuYW1lICYmIChcclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlBsZWFzZSBmaWxsIGluIGEgdmFsaWQgbmFtZTwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsaW5lT2ZCdXNpbmVzc0NsYXNzZXN9PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsaW5lT2ZCdXNpbmVzc1wiPiBMaW5lIG9mIEJ1c2luZXNzIDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0IGlkPVwibGluZU9mQnVzaW5lc3NcIiByZXF1aXJlZD5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVjaGFuaWNcIj5NZWNoYW5pYyA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhhbmR5TWFuXCI+SGFuZHlNYW4gPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIb3VzZSBIZWxcIj5Ib3VzZSBIZWxwIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSVQgU29sdXRpb25cIj5JVCBTb2x1dGlvbiA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFyY2hpdGVjdFwiPkFyY2hpdGVjdCA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdhcmRuZXJcIj5HYXJkbmVyIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiVHJhbnNwb3J0XCI+VHJhbnNwb3J0IDwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2xlYW5pbmdcIj5DbGVhbmluZyA8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+T3RoZXIgLi4uIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgey8qIC8vICkgfHwgKFxyXG4gICAgICAgICAgICAvLyAgIDxpbnB1dFxyXG4gICAgICAgICAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAvLyAgICAgaWQ9XCJsaW5lT2ZCdXNpbmVzc1wiXHJcbiAgICAgICAgICAgIC8vICAgICAvLyByZWY9e3RlbGVwaG9uZX1cclxuICAgICAgICAgICAgLy8gICAgIHZhbHVlPXtsaW5lT2ZCdXNpbmVzc31cclxuICAgICAgICAgICAgLy8gICAgIG9uQmx1cj17Ymx1cmxpbmVPZkJ1c2luZXNzfVxyXG4gICAgICAgICAgICAvLyAgICAgb25DaGFuZ2U9e2xpbmVPZkJ1c2luZXNzQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgLy8gICAvPiBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8ge2luVmFsaWRsaW5lT2ZCdXNpbmVzcyAmJiAoXHJcbiAgICAgICAgICAvLyAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5TcGVjaWZ5IExpbmUgb2YgQnVzaW5lc3MgPC9wPlxyXG4gICAgICAgICAgLy8gKX0qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFjdElucHV0Q2xhc3Nlc30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbnRwZXJzb25cIj4gQ29udGFjdCBQZXJzb24gPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwiY29udHBlcnNvblwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17Y29udGFjdHBlcnNvbn1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIG9uQmx1cj17Ymx1cmNvbnRhY3RwZXJzb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb250YWN0cGVyc29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7aW5WYWxpZGNvbnRhY3RwZXJzb24gJiYgKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgQ29udGFjdCBQZXJzb248L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0ZWxlSW5wdXRDbGFzc2VzfT5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVsXCI+IFRlbGVwaG9uZSA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICBpZD1cInRlbFwiXHJcbiAgICAgICAgICAgIC8vIHJlZj17dGVsZXBob25lfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGVsZX1cclxuICAgICAgICAgICAgb25CbHVyPXtibHVydGVsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RlbGVDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIHtpblZhbGlkdGVsZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBQaG9uZSBudW1iZXI8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPiBBZGQgQ29tcGFueSA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkQ29tcGFuaWVzRm9ybTtcclxuIiwiaW1wb3J0IHsgIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuY29uc3QgVXNlcklucHV0ID0gKHZhbGlkYXRpb24pID0+e1xyXG4gICAgY29uc3QgW2VudGVyZWRWYWx1ZSwgc2V0RW50ZXJlZFZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgICBjb25zdCBbaXNUb3VjZWQsIHNldElzVG91Y2hlZF0gPSB1c2VTdGF0ZSgnJyk7IFxyXG5cclxuICAgIGNvbnN0IHZhbHVlSXNWYWxpZCA9IHZhbGlkYXRpb24oZW50ZXJlZFZhbHVlKTsgXHJcbiAgICBjb25zdCBoYXNFcnJvciA9ICF2YWx1ZUlzVmFsaWQgJiYgaXNUb3VjZWQ7IFxyXG5cclxuICAgIGNvbnN0IHZhbHVlQ2hhbmdlSGFuZGxlciA9IChldmVudCkgPT57XHJcbiAgICAgICAgc2V0RW50ZXJlZFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25mb2N1c0hhbmRsZXIgPShldmVudCkgPT4ge1xyXG4gICAgICAgIHNldElzVG91Y2hlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXNldFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEVudGVyZWRWYWx1ZSgnJyk7XHJcbiAgICAgICAgc2V0SXNUb3VjaGVkKGZhbHNlKTsgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGlvbiBvYmplY3RcclxuICAgIHJldHVybiB7XHJcbiAgICB2YWx1ZTplbnRlcmVkVmFsdWUsXHJcbiAgICBpc1ZhbGlkIDogdmFsdWVJc1ZhbGlkLFxyXG4gICAgaGFzRXJyb3IgOiBoYXNFcnJvcixcclxuICAgIHZhbHVlQ2hhbmdlSGFuZGxlcixcclxuICAgIG9uZm9jdXNIYW5kbGVyLFxyXG4gICAgcmVzZXQ6cmVzZXRWYWx1ZSxcclxufTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJJbnB1dDsiLCIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0J1dHRvbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gIGNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgY2xhc3NOYW1lID0ge2NsYXNzZXMuYnV0dG9ufVxyXG4vLyAgICAgICAgIHR5cGU9IHtwcm9wcy50eXBlIHx8ICdidXR0b24nfVxyXG4vLyAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbi8vICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICApXHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2J1dHRvbi9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT17cHJvcHMudHlwZX1cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgb25DbGljaz17cHJvcHMub25DbGlja31cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBZGRDb21wYW5pZXNGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGFGbG93L2NvbXBhbnlyZWdpc3RyYXRpb24vQWRkQ29tcGFuaWVzRm9ybVwiO1xyXG5cclxuZnVuY3Rpb24gVXBsb2FkaW5nQ29tcGFuaWVzVG9EYigpIHtcclxuICBhc3luYyBmdW5jdGlvbiB0b0RiSGFuZGxlcihjb21wYW55RGF0YU9iamVjdCkge1xyXG4gICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL3Rlc3QtMmE5NjItZGVmYXVsdC1ydGRiLmV1cm9wZS13ZXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcC9Db21wYW5pZXMuanNvblwiLFxyXG5cclxuICAgICAgLy8gXCJodHRwczovL2JhbGVtb2phLTljNWU2LWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvQ29tcGFuaWVzLmpzb25cIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tcGFueURhdGFPYmplY3QpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBpZiAoIXJlc3BvbmNlLm9rKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbmNlLmpzb24oKTtcclxuICAgIC8vIHRoZSByZXNwb25jZSBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8c2VjdGlvbj5cclxuICAgICAgICA8QWRkQ29tcGFuaWVzRm9ybSBvbkFkZGNvbXBhbmllc2Zvcm09e3RvRGJIYW5kbGVyfSAvPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZGluZ0NvbXBhbmllc1RvRGI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fXzVCRkNpXCIsXG5cdFwiZm9jdXNcIjogXCJCdXR0b25fZm9jdXNfXzJ4d0NYXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlVzZXJJbnB1dCIsIkJ1dHRvbiIsIkFkZENvbXBhbmllc0Zvcm0iLCJwcm9wcyIsInZhbHVlIiwiY29tcGFueW5hbWUiLCJpc1ZhbGlkIiwidmFsaWRjb21wbmFtZSIsImhhc0Vycm9yIiwiaW5WYWxpZGNvbXBuYW1lIiwidmFsdWVDaGFuZ2VIYW5kbGVyIiwiY29tcG5hbWVDaGFuZ2VIYW5kbGVyIiwib25mb2N1c0hhbmRsZXIiLCJibHVyY29tcG5hbWUiLCJyZXNldCIsInJlc2V0Y29tcGFueW5hbWUiLCJ0cmltIiwibGluZU9mQnVzaW5lc3MiLCJWYWxpZGxpbmVPZkJ1c2luZXNzIiwiaW5WYWxpZGxpbmVPZkJ1c2luZXNzIiwibGluZU9mQnVzaW5lc3NDaGFuZ2VIYW5kbGVyIiwiYmx1cmxpbmVPZkJ1c2luZXNzIiwicmVzZXRsaW5lT2ZCdXNpbmVzcyIsImNvbnRhY3RwZXJzb24iLCJ2YWxpZGNvbnRhY3RwZXJzb24iLCJpblZhbGlkY29udGFjdHBlcnNvbiIsImNvbnRhY3RwZXJzb25DaGFuZ2VIYW5kbGVyIiwiYmx1cmNvbnRhY3RwZXJzb24iLCJyZXNldGNvbnRhY3RwZXJzb24iLCJ0ZWxlIiwidmFsaWR0ZWxlIiwiaW5WYWxpZHRlbGUiLCJ0ZWxlQ2hhbmdlSGFuZGxlciIsImJsdXJ0ZWxlIiwicmVzZXR0ZWxlIiwiVElOIiwidmFsaWR0aW4iLCJpblZhbGlkdGluIiwidGluQ2hhbmdlSGFuZGxlciIsImJsdXJ0aW4iLCJyZXNldHRpbiIsImZvcm1WYWxpZGF0aW9uIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbXBhbnlEYXRhT2JqZWN0IiwiY29uc29sZSIsImxvZyIsIm9uQWRkY29tcGFuaWVzZm9ybSIsInVzZSIsIm5hbWVJbnB1dENsYXNzZXMiLCJjb250YWN0SW5wdXRDbGFzc2VzIiwidGVsZUlucHV0Q2xhc3NlcyIsInRpbklucHV0Q2xhc3NlcyIsImxpbmVPZkJ1c2luZXNzQ2xhc3NlcyIsInVzZVN0YXRlIiwidmFsaWRhdGlvbiIsImVudGVyZWRWYWx1ZSIsInNldEVudGVyZWRWYWx1ZSIsImlzVG91Y2VkIiwic2V0SXNUb3VjaGVkIiwidmFsdWVJc1ZhbGlkIiwidGFyZ2V0IiwicmVzZXRWYWx1ZSIsImNsYXNzZXMiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayIsImNoaWxkcmVuIiwiUmVhY3QiLCJVcGxvYWRpbmdDb21wYW5pZXNUb0RiIiwidG9EYkhhbmRsZXIiLCJyZXNwb25jZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==