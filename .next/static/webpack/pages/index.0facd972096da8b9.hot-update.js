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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_ArtPieces_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ArtPieces/Index */ \"./components/ArtPieces/Index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst fetcher = async (url)=>{\n    const response = await fetch(url);\n    // If the status code is not in the range 200-299,\n    // we still try to parse and throw it.\n    if (!response.ok) {\n        const error = new Error(\"An error occurred while fetching the data.\");\n        // Attach extra info to the error object.\n        error.info = await response.json();\n        error.status = response.status;\n        throw error;\n    }\n    return response.json();\n};\nfunction HomePage() {\n    _s();\n    const { data, error } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://example-apis.vercel.app/api/art/\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n        lineNumber: 28,\n        columnNumber: 21\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 21\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Art Gallery\"\n            }, void 0, false, {\n                fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ArtPieces_Index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQzRCO0FBRXJELE1BQU1FLFVBQVUsT0FBT0M7SUFDckIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNRjtJQUU3QixrREFBa0Q7SUFDbEQsc0NBQXNDO0lBQ3RDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU1DLFFBQVEsSUFBSUMsTUFBTTtRQUV4Qix5Q0FBeUM7UUFDekNELE1BQU1FLElBQUksR0FBRyxNQUFNTCxTQUFTTSxJQUFJO1FBQ2hDSCxNQUFNSSxNQUFNLEdBQUdQLFNBQVNPLE1BQU07UUFFOUIsTUFBTUo7SUFDUjtJQUVBLE9BQU9ILFNBQVNNLElBQUk7QUFDdEI7QUFFZSxTQUFTRTs7SUFDdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVOLEtBQUssRUFBRSxHQUFHUCwrQ0FBTUEsQ0FDM0IsNENBQ0RFO0lBR0YsSUFBSUssT0FBTyxxQkFBTyw4REFBQ087a0JBQUlQLE1BQU1RLE9BQU87Ozs7OztJQUNwQyxJQUFJLENBQUNGLE1BQU0scUJBQU8sOERBQUNDO2tCQUFHOzs7Ozs7SUFFdEIscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ0Y7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2IsbUVBQVNBO2dCQUFDWSxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR3ZCO0dBZndCRDs7UUFDRVosMkNBQU1BOzs7S0FEUlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBBcnRQaWVjZXMgZnJvbSBcIkAvY29tcG9uZW50cy9BcnRQaWVjZXMvSW5kZXhcIjtcblxuY29uc3QgZmV0Y2hlciA9IGFzeW5jICh1cmwpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIC8vIElmIHRoZSBzdGF0dXMgY29kZSBpcyBub3QgaW4gdGhlIHJhbmdlIDIwMC0yOTksXG4gIC8vIHdlIHN0aWxsIHRyeSB0byBwYXJzZSBhbmQgdGhyb3cgaXQuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGZldGNoaW5nIHRoZSBkYXRhLlwiKTtcblxuICAgIC8vIEF0dGFjaCBleHRyYSBpbmZvIHRvIHRoZSBlcnJvciBvYmplY3QuXG4gICAgZXJyb3IuaW5mbyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBlcnJvci5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIGBodHRwczovL2V4YW1wbGUtYXBpcy52ZXJjZWwuYXBwL2FwaS9hcnQvYCxcbiAgICBmZXRjaGVyXG4gICk7XG5cbiAgaWYgKGVycm9yKSByZXR1cm4gPGgxPntlcnJvci5tZXNzYWdlfTwvaDE+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8aDE+TG9hZGluZyAuLi48L2gxPjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+QXJ0IEdhbGxlcnk8L2gxPlxuICAgICAgPEFydFBpZWNlcyBkYXRhPXtkYXRhfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkFydFBpZWNlcyIsImZldGNoZXIiLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJlcnJvciIsIkVycm9yIiwiaW5mbyIsImpzb24iLCJzdGF0dXMiLCJIb21lUGFnZSIsImRhdGEiLCJoMSIsIm1lc3NhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});