"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/TotalBalance.tsx":
/*!*********************************************!*\
  !*** ./src/app/components/TotalBalance.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useGetTokenBalance */ \"(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TotalBalance = (param)=>{\n    let { addressToken } = param;\n    _s();\n    const { chain } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork)();\n    const { balance } = (0,_hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        addressToken: String(\"0x1674f0Ab1a0Ae8178f904433744177D5704c2047\"),\n        chainId: Number(chain === null || chain === void 0 ? void 0 : chain.id)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            balance,\n            \" Ladys\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/TotalBalance.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, undefined);\n};\n_s(TotalBalance, \"W+f+Muo2ASToMhdqHf//1iC8YOQ=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useNetwork,\n        _hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = TotalBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TotalBalance);\nvar _c;\n$RefreshReg$(_c, \"TotalBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub3RhbEJhbGFuY2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFDMEI7QUFJN0QsTUFBTUcsZUFBZTtRQUFDLEVBQUVDLFlBQVksRUFBNEI7O0lBSTVELE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdKLGlEQUFVQTtJQUc1QixNQUFNLEVBQUNLLE9BQU8sRUFBQyxHQUFHSixxRUFBa0JBLENBQUM7UUFDakNFLGNBQWNHLE9BQU9DLDRDQUFxQztRQUMxREcsU0FBU0MsT0FBT1Asa0JBQUFBLDRCQUFBQSxNQUFPUSxFQUFFO0lBQzdCO0lBR0YscUJBQ0ksOERBQUNDOztZQUFNUjtZQUFROzs7Ozs7O0FBRXJCO0dBaEJNSDs7UUFJZ0JGLDZDQUFVQTtRQUdWQyxpRUFBa0JBOzs7S0FQbENDO0FBa0JOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ub3RhbEJhbGFuY2UudHN4P2QyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTmV0d29yayB9IGZyb20gJ3dhZ21pJztcbmltcG9ydCB1c2VHZXRUb2tlbkJhbGFuY2UgZnJvbSAnLi4vaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlJztcblxudHlwZSBQcm9wcyA9IHt9XG5cbmNvbnN0IFRvdGFsQmFsYW5jZSA9ICh7IGFkZHJlc3NUb2tlbiB9OiB7IGFkZHJlc3NUb2tlbjogc3RyaW5nIH0pID0+IHtcbiAgICBcblxuXG4gICAgY29uc3QgeyBjaGFpbiB9ID0gdXNlTmV0d29yaygpO1xuXG5cbiAgICBjb25zdCB7YmFsYW5jZX0gPSB1c2VHZXRUb2tlbkJhbGFuY2Uoe1xuICAgICAgICBhZGRyZXNzVG9rZW46IFN0cmluZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MQURZU19UT0tFTl9BKSxcbiAgICAgICAgY2hhaW5JZDogTnVtYmVyKGNoYWluPy5pZClcbiAgICB9KVxuXG4gICAgXG4gIHJldHVybiAoXG4gICAgICA8ZGl2PnsgYmFsYW5jZX0gTGFkeXM8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3RhbEJhbGFuY2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTmV0d29yayIsInVzZUdldFRva2VuQmFsYW5jZSIsIlRvdGFsQmFsYW5jZSIsImFkZHJlc3NUb2tlbiIsImNoYWluIiwiYmFsYW5jZSIsIlN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19MQURZU19UT0tFTl9BIiwiY2hhaW5JZCIsIk51bWJlciIsImlkIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/TotalBalance.tsx\n"));

/***/ })

});