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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_ArtPieces_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ArtPieces/Index */ \"./components/ArtPieces/Index.js\");\n/* harmony import */ var _components_ArtPieces_Index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_ArtPieces_Index__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst URL = \"\";\nconst fetcher = async (url)=>{\n    const res = await fetch(url);\n    // If the status code is not in the range 200-299,\n    // we still try to parse and throw it.\n    if (!res.ok) {\n        const error = new Error(\"An error occurred while fetching the data.\");\n        // Attach extra info to the error object.\n        error.info = await res.json();\n        error.status = res.status;\n        throw error;\n    }\n    return res.json();\n};\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Art Gallery\"\n        }, void 0, false, {\n            fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/moritzhoyer/Desktop/spiced-bootcamp/recap-project-5_art-gallery-app/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQzRCO0FBRXJELE1BQU1FLE1BQU07QUFFWixNQUFNQyxVQUFVLE9BQU9DO0lBQ3JCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7SUFFeEIsa0RBQWtEO0lBQ2xELHNDQUFzQztJQUN0QyxJQUFJLENBQUNDLElBQUlFLEVBQUUsRUFBRTtRQUNYLE1BQU1DLFFBQVEsSUFBSUMsTUFBTTtRQUV4Qix5Q0FBeUM7UUFDekNELE1BQU1FLElBQUksR0FBRyxNQUFNTCxJQUFJTSxJQUFJO1FBQzNCSCxNQUFNSSxNQUFNLEdBQUdQLElBQUlPLE1BQU07UUFFekIsTUFBTUo7SUFDUjtJQUVBLE9BQU9ILElBQUlNLElBQUk7QUFDakI7QUFFZSxTQUFTRTtJQUN0QixxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdWO0tBTndCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IEFydFBpZWNlcyBmcm9tIFwiQC9jb21wb25lbnRzL0FydFBpZWNlcy9JbmRleFwiO1xuXG5jb25zdCBVUkwgPSBcIlwiO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuXG4gIC8vIElmIHRoZSBzdGF0dXMgY29kZSBpcyBub3QgaW4gdGhlIHJhbmdlIDIwMC0yOTksXG4gIC8vIHdlIHN0aWxsIHRyeSB0byBwYXJzZSBhbmQgdGhyb3cgaXQuXG4gIGlmICghcmVzLm9rKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyB0aGUgZGF0YS5cIik7XG5cbiAgICAvLyBBdHRhY2ggZXh0cmEgaW5mbyB0byB0aGUgZXJyb3Igb2JqZWN0LlxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGVycm9yLnN0YXR1cyA9IHJlcy5zdGF0dXM7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5BcnQgR2FsbGVyeTwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiQXJ0UGllY2VzIiwiVVJMIiwiZmV0Y2hlciIsInVybCIsInJlcyIsImZldGNoIiwib2siLCJlcnJvciIsIkVycm9yIiwiaW5mbyIsImpzb24iLCJzdGF0dXMiLCJIb21lUGFnZSIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});