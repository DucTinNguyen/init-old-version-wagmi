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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_contract/ILady.json */ \"(app-pages-browser)/./src/app/_contract/ILady.json\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\n\nconst useGetTokenBalance = (param)=>{\n    let { addressToken, chainId } = param;\n    _s();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    // let provider: ethers.providers.Web3Provider;\n    // provider = new ethers.providers.Web3Provider(window.ethereum as any);\n    // const contract = new ethers.Contract(addressToken, ABI_ERC20, provider);\n    // const getTokenBalance = async () => {\n    //     const result = await contract.balanceOf(address);\n    //     if (result) {\n    //         const balance = ethers.utils.formatEther(result);\n    //         console.log(balance)\n    //     }\n    // }\n    // getTokenBalance();\n    (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead)({\n        address: addressToken,\n        abi: _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__,\n        functionName: \"balanceOf\",\n        chainId: Number(chainId),\n        args: [\n            address\n        ],\n        cacheOnBlock: true,\n        watch: true,\n        onSuccess (data) {\n            if (data) {\n                const result = ethers__WEBPACK_IMPORTED_MODULE_3__.formatEther(data);\n                setBalance(result);\n            }\n        }\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        return balance;\n    }, [\n        balance\n    ]);\n};\n_s(useGetTokenBalance, \"65BNstscm7lC5nwVoXEilTOUEnE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetTokenBalance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSTBDO0FBQ007QUFDRDtBQUNJO0FBR25ELE1BQU1PLHFCQUFxQjtRQUFDLEVBQUNDLFlBQVksRUFBRUMsT0FBTyxFQUEwQzs7SUFFeEYsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wsaURBQVVBO0lBQzlCLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QywrQ0FBK0M7SUFDL0Msd0VBQXdFO0lBQ3hFLDJFQUEyRTtJQUczRSx3Q0FBd0M7SUFDeEMsd0RBQXdEO0lBQ3hELG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixJQUFJO0lBRUoscUJBQXFCO0lBRXJCRyxzREFBZUEsQ0FBQztRQUNaSSxTQUFTRjtRQUNUSyxLQUFLVCxpREFBU0E7UUFDZFUsY0FBYztRQUNkTCxTQUFTTSxPQUFPTjtRQUNoQk8sTUFBTTtZQUFDTjtTQUFRO1FBQ2ZPLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxXQUFVQyxJQUFJO1lBQ1YsSUFBSUEsTUFBTTtnQkFDTixNQUFNQyxTQUFTckIsK0NBQXdCLENBQUNvQjtnQkFDeENSLFdBQVdTO1lBQ2Y7UUFDSjtJQUNKO0lBR0EsT0FDSW5CLDhDQUFPQSxDQUFDO1FBQ0osT0FBT1M7SUFDWCxHQUFFO1FBQUNBO0tBQVE7QUFFbkI7R0F6Q01KOztRQUVrQkYsNkNBQVVBO1FBaUI5QkMsa0RBQWVBOzs7QUF3Qm5CLCtEQUFlQyxrQkFBa0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob29rcy91c2VHZXRUb2tlbkJhbGFuY2UudHN4P2M2ZmIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyBldGhlcnMsIHByb3ZpZGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCBSZWFjdCwgeyB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFCSV9FUkMyMCBmcm9tICcuLi9fY29udHJhY3QvSUxhZHkuanNvbidcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbnRyYWN0UmVhZCB9IGZyb20gJ3dhZ21pJ1xuXG5cbmNvbnN0IHVzZUdldFRva2VuQmFsYW5jZSA9ICh7YWRkcmVzc1Rva2VuLCBjaGFpbklkfToge2FkZHJlc3NUb2tlbjogc3RyaW5nLCBjaGFpbklkOiBudW1iZXJ9KSA9PiB7XG5cbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHVzZUFjY291bnQoKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgLy8gbGV0IHByb3ZpZGVyOiBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcjtcbiAgICAvLyBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0gYXMgYW55KTtcbiAgICAvLyBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoYWRkcmVzc1Rva2VuLCBBQklfRVJDMjAsIHByb3ZpZGVyKTtcblxuICAgXG4gICAgLy8gY29uc3QgZ2V0VG9rZW5CYWxhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5iYWxhbmNlT2YoYWRkcmVzcyk7XG4gICAgLy8gICAgIGlmIChyZXN1bHQpIHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0KTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBnZXRUb2tlbkJhbGFuY2UoKTtcbiAgICBcbiAgICB1c2VDb250cmFjdFJlYWQoe1xuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzVG9rZW4gYXMgYDB4JHtzdHJpbmd9YCxcbiAgICAgICAgYWJpOiBBQklfRVJDMjAsXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJiYWxhbmNlT2ZcIixcbiAgICAgICAgY2hhaW5JZDogTnVtYmVyKGNoYWluSWQpLFxuICAgICAgICBhcmdzOiBbYWRkcmVzc10sXG4gICAgICAgIGNhY2hlT25CbG9jazogdHJ1ZSxcbiAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihkYXRhIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgc2V0QmFsYW5jZShyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICB1c2VNZW1vKCgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiYWxhbmNlO1xuICAgICAgICB9LFtiYWxhbmNlXSlcbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUdldFRva2VuQmFsYW5jZVxuIl0sIm5hbWVzIjpbImV0aGVycyIsIlJlYWN0IiwidXNlTWVtbyIsInVzZVN0YXRlIiwiQUJJX0VSQzIwIiwidXNlQWNjb3VudCIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUdldFRva2VuQmFsYW5jZSIsImFkZHJlc3NUb2tlbiIsImNoYWluSWQiLCJhZGRyZXNzIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhYmkiLCJmdW5jdGlvbk5hbWUiLCJOdW1iZXIiLCJhcmdzIiwiY2FjaGVPbkJsb2NrIiwid2F0Y2giLCJvblN1Y2Nlc3MiLCJkYXRhIiwicmVzdWx0IiwidXRpbHMiLCJmb3JtYXRFdGhlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx\n"));

/***/ })

});