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

/***/ "(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx":
/*!**********************************************!*\
  !*** ./src/app/hooks/useGetTokenBalance.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_contract/ILady.json */ \"(app-pages-browser)/./src/app/_contract/ILady.json\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\n\nconst useGetTokenBalance = (param)=>{\n    let { addressToken } = param;\n    _s();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.Web3Provider(window.ethereum);\n    const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(addressToken, _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__, provider);\n    const getTokenBalance = async ()=>{\n        const result = await contract.balanceOf(address);\n        console.log(result);\n    };\n    getTokenBalance();\n// useContractRead({\n//     address: addressToken as `0x${string}`,\n//     abi: ABI_ERC20,\n//     functionName: \"balanceOf\",\n//     chainId: Number(5),\n//     args: [address],\n//     cacheOnBlock: true,\n//     watch: true,\n//     onSuccess(data) {\n//         console.log(data)\n//     },\n// });\n};\n_s(useGetTokenBalance, \"P0Tew1bF/ofqCPuyR1AnB4HI6W0=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetTokenBalance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUkrQjtBQUNOO0FBQ3NCO0FBQ0k7QUFHbkQsTUFBTUkscUJBQXFCO1FBQUMsRUFBQ0MsWUFBWSxFQUF5Qjs7SUFFOUQsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gsaURBQVVBO0lBQzlCLE1BQU1JLFdBQVcsSUFBSVAsZ0RBQTZCLENBQUNVLE9BQU9DLFFBQVE7SUFFbEUsTUFBTUMsV0FBVyxJQUFJWiw0Q0FBZSxDQUFDSyxjQUFjSCxpREFBU0EsRUFBRUs7SUFFOUQsTUFBTU8sa0JBQWtCO1FBQ3BCLE1BQU1DLFNBQVMsTUFBTUgsU0FBU0ksU0FBUyxDQUFDVjtRQUN4Q1csUUFBUUMsR0FBRyxDQUFDSDtJQUNoQjtJQUVBRDtBQUVBLG9CQUFvQjtBQUNwQiw4Q0FBOEM7QUFDOUMsc0JBQXNCO0FBQ3RCLGlDQUFpQztBQUNqQywwQkFBMEI7QUFDMUIsdUJBQXVCO0FBQ3ZCLDBCQUEwQjtBQUMxQixtQkFBbUI7QUFDbkIsd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1QixTQUFTO0FBQ1QsTUFBTTtBQUNWO0dBMUJNVjs7UUFFa0JELDZDQUFVQTs7O0FBMEJsQywrREFBZUMsa0JBQWtCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlLnRzeD9jNmZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFCSV9FUkMyMCBmcm9tICcuLi9fY29udHJhY3QvSUxhZHkuanNvbidcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gJ3dhZ21pJ1xuXG5cbmNvbnN0IHVzZUdldFRva2VuQmFsYW5jZSA9ICh7YWRkcmVzc1Rva2VufToge2FkZHJlc3NUb2tlbjogc3RyaW5nfSkgPT4ge1xuXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxuXG4gICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3NUb2tlbiwgQUJJX0VSQzIwLCBwcm92aWRlcik7XG5cbiAgICBjb25zdCBnZXRUb2tlbkJhbGFuY2UgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmJhbGFuY2VPZihhZGRyZXNzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH1cblxuICAgIGdldFRva2VuQmFsYW5jZSgpO1xuICAgIFxuICAgIC8vIHVzZUNvbnRyYWN0UmVhZCh7XG4gICAgLy8gICAgIGFkZHJlc3M6IGFkZHJlc3NUb2tlbiBhcyBgMHgke3N0cmluZ31gLFxuICAgIC8vICAgICBhYmk6IEFCSV9FUkMyMCxcbiAgICAvLyAgICAgZnVuY3Rpb25OYW1lOiBcImJhbGFuY2VPZlwiLFxuICAgIC8vICAgICBjaGFpbklkOiBOdW1iZXIoNSksXG4gICAgLy8gICAgIGFyZ3M6IFthZGRyZXNzXSxcbiAgICAvLyAgICAgY2FjaGVPbkJsb2NrOiB0cnVlLFxuICAgIC8vICAgICB3YXRjaDogdHJ1ZSxcbiAgICAvLyAgICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgLy8gICAgIH0sXG4gICAgLy8gfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdldFRva2VuQmFsYW5jZVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIlJlYWN0IiwiQUJJX0VSQzIwIiwidXNlQWNjb3VudCIsInVzZUdldFRva2VuQmFsYW5jZSIsImFkZHJlc3NUb2tlbiIsImFkZHJlc3MiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29udHJhY3QiLCJDb250cmFjdCIsImdldFRva2VuQmFsYW5jZSIsInJlc3VsdCIsImJhbGFuY2VPZiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx\n"));

/***/ })

});