"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArtPiecePreview/index.js":
/*!*********************************************!*\
  !*** ./components/ArtPiecePreview/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ArtPiecePreview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n// Create the component ArtPiecePreview\n// ArtPiecePreview props: image, title, artist\n// All acceptance criteria marked with 🖼️ are covered by component testing\n\n\nfunction ArtPiecePreview(param) {\n    let { image, title, artist } = param;\n    console.log(artist);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                alt: title,\n                width: 200,\n                height: 200\n            }, void 0, false, {\n                fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/components/ArtPiecePreview/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/components/ArtPiecePreview/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: artist\n            }, void 0, false, {\n                fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/components/ArtPiecePreview/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/components/ArtPiecePreview/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = ArtPiecePreview;\nvar _c;\n$RefreshReg$(_c, \"ArtPiecePreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydFBpZWNlUHJldmlldy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyw4Q0FBOEM7QUFDOUMsMkVBQTJFOztBQUU1QztBQUVoQixTQUFTQyxnQkFBZ0IsS0FBd0I7UUFBeEIsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUF4QjtJQUN0Q0MsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNQLG1EQUFLQTtnQkFBQ1EsS0FBS047Z0JBQU9PLEtBQUtOO2dCQUFPTyxPQUFPO2dCQUFLQyxRQUFROzs7Ozs7MEJBQ25ELDhEQUFDQzswQkFBSVQ7Ozs7OzswQkFDTCw4REFBQ1U7MEJBQUdUOzs7Ozs7Ozs7Ozs7QUFHVjtLQVZ3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRQaWVjZVByZXZpZXcvaW5kZXguanM/NGYwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGUgdGhlIGNvbXBvbmVudCBBcnRQaWVjZVByZXZpZXdcbi8vIEFydFBpZWNlUHJldmlldyBwcm9wczogaW1hZ2UsIHRpdGxlLCBhcnRpc3Rcbi8vIEFsbCBhY2NlcHRhbmNlIGNyaXRlcmlhIG1hcmtlZCB3aXRoIPCflrzvuI8gYXJlIGNvdmVyZWQgYnkgY29tcG9uZW50IHRlc3RpbmdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFydFBpZWNlUHJldmlldyh7IGltYWdlLCB0aXRsZSwgYXJ0aXN0IH0pIHtcbiAgY29uc29sZS5sb2coYXJ0aXN0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gd2lkdGg9ezIwMH0gaGVpZ2h0PXsyMDB9IC8+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8cD57YXJ0aXN0fTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkFydFBpZWNlUHJldmlldyIsImltYWdlIiwidGl0bGUiLCJhcnRpc3QiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArtPiecePreview/index.js\n"));

/***/ })

});