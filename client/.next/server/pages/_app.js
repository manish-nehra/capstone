/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst { Item  } = antd__WEBPACK_IMPORTED_MODULE_1__.Menu;\nconst TopNav = ()=>{\n    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n         false && 0;\n    // console.log(window.location.pathname)\n    }, [\n        process.brower && window.location.pathname\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu, {\n        mode: \"horizontal\",\n        selectedKeys: [\n            current\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key)\n                ,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.AppstoreOutlined, {}, void 0, false, void 0, void 0),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \" App \"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, \"/\", false, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key)\n                ,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LoginOutlined, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        children: \" Login \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, \"/login\", true, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n                onClick: (e)=>setCurrent(e.key)\n                ,\n                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserAddOutlined, {}, void 0, false, void 0, void 0),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        children: \" Register \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    \" \"\n                ]\n            }, \"/register\", true, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\components\\\\TopNav.js\",\n        lineNumber: 15,\n        columnNumber: 14\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFDQztBQUN3RDtBQUMzQztBQUN6QyxLQUFLLENBQUMsQ0FBQyxDQUFDTyxJQUFJLEVBQUMsQ0FBQyxHQUFHUCxzQ0FBSTtBQUVyQixLQUFLLENBQUNRLE1BQU0sT0FBUyxDQUFDO0lBQ2xCLEtBQUssTUFBRUMsT0FBTyxNQUFHQyxVQUFVLE1BQUlMLCtDQUFRLENBQUMsQ0FBRTtJQUUxQ0MsZ0RBQVMsS0FBSyxDQUFDO1FBQ1hLLE1BQWUsSUFBSUQsQ0FBb0M7SUFDdkQsRUFBd0M7SUFDNUMsQ0FBQyxFQUFDLENBQUNDO1FBQUFBLE9BQU8sQ0FBQ0ssTUFBTSxJQUFJSCxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUTtJQUFBLENBQUM7SUFFOUMsTUFBTSw2RUFBSWYsc0NBQUk7UUFBQ2lCLElBQUksRUFBRyxDQUFZO1FBQUNDLFlBQVksRUFBRSxDQUFDVDtZQUFBQSxPQUFPO1FBQUEsQ0FBQzs7d0ZBQ3JERixJQUFJO2dCQUFVWSxPQUFPLEdBQUdDLENBQUMsR0FBR1YsVUFBVSxDQUFDVSxDQUFDLENBQUNDLEdBQUc7O2dCQUFHQyxJQUFJLDhFQUFNcEIsK0RBQWdCO3NHQUN6RUQsa0RBQUk7b0JBQUNzQixJQUFJLEVBQUcsQ0FBRzs4QkFBQyxDQUFLOzs7Ozs7ZUFEWCxDQUFHOzs7Ozt3RkFJYmhCLElBQUk7Z0JBQWNZLE9BQU8sR0FBR0MsQ0FBQyxHQUFHVixVQUFVLENBQUNVLENBQUMsQ0FBQ0MsR0FBRzs7Z0JBQUdDLElBQUksOEVBQU1uQiw0REFBYTs7Z0dBQzFFRixrREFBSTt3QkFBQ3NCLElBQUksRUFBRyxDQUFRO2tDQUFDLENBQU87Ozs7OztvQkFBTyxDQUFDOztlQUQzQixDQUFROzs7Ozt3RkFHakJoQixJQUFJO2dCQUFpQlksT0FBTyxHQUFHQyxDQUFDLEdBQUdWLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDQyxHQUFHOztnQkFBR0MsSUFBSSw4RUFBTWxCLDhEQUFlOztnR0FDL0VILGtEQUFJO3dCQUFDc0IsSUFBSSxFQUFHLENBQVc7a0NBQUMsQ0FBVTs7Ozs7O29CQUFPLENBQUM7O2VBRGpDLENBQVc7Ozs7Ozs7Ozs7O0FBSzdCLENBQUM7QUFFRCxpRUFBZWYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub3BOYXYuanM/OWU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluayc7XHJcbmltcG9ydCB7IEFwcHN0b3JlT3V0bGluZWQsIExvZ2luT3V0bGluZWQsIFVzZXJBZGRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VTdGF0ZSAsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjsgXHJcbmNvbnN0IHsgSXRlbSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjdXJyZW50ICwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxyXG4gICAgfSxbcHJvY2Vzcy5icm93ZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gICAgcmV0dXJuICggPE1lbnUgbW9kZSA9IFwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfT5cclxuICAgICAgICA8SXRlbSAga2V5PVwiL1wiIG9uQ2xpY2s9eyhlKT0+c2V0Q3VycmVudChlLmtleSl9IGljb24gPSB7IDxBcHBzdG9yZU91dGxpbmVkLz4gfSA+XHJcbiAgICAgICAgPExpbmsgaHJlZiA9IFwiL1wiPiBBcHAgPC9MaW5rPiBcclxuICAgICAgICA8L0l0ZW0+XHJcblxyXG4gICAgICAgIDxJdGVtIGtleT1cIi9sb2dpblwiIG9uQ2xpY2s9eyhlKT0+c2V0Q3VycmVudChlLmtleSl9IGljb24gPSB7IDxMb2dpbk91dGxpbmVkLz4gfSA+XHJcbiAgICAgICAgPExpbmsgaHJlZiA9IFwiL2xvZ2luXCI+IExvZ2luIDwvTGluaz4gPC9JdGVtPlxyXG5cclxuICAgICAgICA8SXRlbSBrZXk9XCIvcmVnaXN0ZXJcIiBvbkNsaWNrPXsoZSk9PnNldEN1cnJlbnQoZS5rZXkpfSBpY29uID0geyA8VXNlckFkZE91dGxpbmVkLz4gfSA+XHJcbiAgICAgICAgPExpbmsgaHJlZiA9IFwiL3JlZ2lzdGVyXCI+IFJlZ2lzdGVyIDwvTGluaz4gPC9JdGVtPlxyXG5cclxuICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjsiXSwibmFtZXMiOlsiTWVudSIsIkxpbmsiLCJBcHBzdG9yZU91dGxpbmVkIiwiTG9naW5PdXRsaW5lZCIsIlVzZXJBZGRPdXRsaW5lZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSXRlbSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiYnJvd2VyIiwibW9kZSIsInNlbGVjdGVkS2V5cyIsIm9uQ2xpY2siLCJlIiwia2V5IiwiaWNvbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\Semester-8\\\\capstone\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNJO0FBQ2xCO0FBQ007QUFDc0I7QUFDUDtTQUN2Q0csS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTTs7d0ZBQ0RKLDBEQUFjO2dCQUFDSyxRQUFRLEVBQUMsQ0FBWTs7Ozs7O3dGQUNwQ04sMERBQU07Ozs7O3dGQUNOSSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7OztBQU1oQyxDQUFDOztBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvcE5hdiBmcm9tICcuLi9jb21wb25lbnRzL1RvcE5hdic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3Mvc3R5bGVzLmNzcyc7XHJcbiBpbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbiAgaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKCA8PlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciBwb3NpdGlvbj1cInRvcC1jZW50ZXJcIi8+XHJcbiAgICAgICAgPFRvcE5hdi8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzIH0vPiBcclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJUb3BOYXYiLCJUb2FzdENvbnRhaW5lciIsInRvYXN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();