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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_contract/ILady.json */ \"(app-pages-browser)/./src/app/_contract/ILady.json\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\n\n\nconst useGetTokenBalance = (param)=>{\n    let { addressToken, chainId } = param;\n    _s();\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    // let provider: ethers.providers.Web3Provider;\n    // provider = new ethers.providers.Web3Provider(window.ethereum as any);\n    // const contract = new ethers.Contract(addressToken, ABI_ERC20, provider);\n    // const getTokenBalance = async () => {\n    //     const result = await contract.balanceOf(address);\n    //     if (result) {\n    //         const balance = ethers.utils.formatEther(result);\n    //         console.log(balance)\n    //     }\n    // }\n    // getTokenBalance();\n    (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead)({\n        address: addressToken,\n        abi: _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__,\n        functionName: \"balanceOf\",\n        chainId: Number(chainId),\n        args: [\n            address\n        ],\n        cacheOnBlock: true,\n        watch: true,\n        onSuccess (data) {\n            if (data) {\n                const result = ethers__WEBPACK_IMPORTED_MODULE_3__.formatEther(data);\n                setBalance(result);\n            }\n        }\n    });\n    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{}, [\n        balance\n    ]);\n};\n_s(useGetTokenBalance, \"65BNstscm7lC5nwVoXEilTOUEnE=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractRead\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetTokenBalance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSTBDO0FBQ007QUFDRDtBQUNJO0FBR25ELE1BQU1PLHFCQUFxQjtRQUFDLEVBQUNDLFlBQVksRUFBRUMsT0FBTyxFQUEwQzs7SUFFeEYsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wsaURBQVVBO0lBQzlCLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QywrQ0FBK0M7SUFDL0Msd0VBQXdFO0lBQ3hFLDJFQUEyRTtJQUczRSx3Q0FBd0M7SUFDeEMsd0RBQXdEO0lBQ3hELG9CQUFvQjtJQUNwQiw0REFBNEQ7SUFDNUQsK0JBQStCO0lBQy9CLFFBQVE7SUFDUixJQUFJO0lBRUoscUJBQXFCO0lBRXJCRyxzREFBZUEsQ0FBQztRQUNaSSxTQUFTRjtRQUNUSyxLQUFLVCxpREFBU0E7UUFDZFUsY0FBYztRQUNkTCxTQUFTTSxPQUFPTjtRQUNoQk8sTUFBTTtZQUFDTjtTQUFRO1FBQ2ZPLGNBQWM7UUFDZEMsT0FBTztRQUNQQyxXQUFVQyxJQUFJO1lBQ1YsSUFBSUEsTUFBTTtnQkFDTixNQUFNQyxTQUFTckIsK0NBQXdCLENBQUNvQjtnQkFDeENSLFdBQVdTO1lBQ2Y7UUFDSjtJQUNKO0lBR0EsT0FDSW5CLDhDQUFPQSxDQUFDLEtBQUssR0FBRTtRQUFDUztLQUFRO0FBRWhDO0dBdkNNSjs7UUFFa0JGLDZDQUFVQTtRQWlCOUJDLGtEQUFlQTs7O0FBc0JuQiwrREFBZUMsa0JBQWtCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlLnRzeD9jNmZiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4ndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgZXRoZXJzLCBwcm92aWRlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBQklfRVJDMjAgZnJvbSAnLi4vX2NvbnRyYWN0L0lMYWR5Lmpzb24nXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb250cmFjdFJlYWQgfSBmcm9tICd3YWdtaSdcblxuXG5jb25zdCB1c2VHZXRUb2tlbkJhbGFuY2UgPSAoe2FkZHJlc3NUb2tlbiwgY2hhaW5JZH06IHthZGRyZXNzVG9rZW46IHN0cmluZywgY2hhaW5JZDogbnVtYmVyfSkgPT4ge1xuXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoJycpO1xuICAgIC8vIGxldCBwcm92aWRlcjogZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXI7XG4gICAgLy8gcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtIGFzIGFueSk7XG4gICAgLy8gY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGFkZHJlc3NUb2tlbiwgQUJJX0VSQzIwLCBwcm92aWRlcik7XG5cbiAgIFxuICAgIC8vIGNvbnN0IGdldFRva2VuQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuYmFsYW5jZU9mKGFkZHJlc3MpO1xuICAgIC8vICAgICBpZiAocmVzdWx0KSB7XG4gICAgLy8gICAgICAgICBjb25zdCBiYWxhbmNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3VsdCk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLy8gZ2V0VG9rZW5CYWxhbmNlKCk7XG4gICAgXG4gICAgdXNlQ29udHJhY3RSZWFkKHtcbiAgICAgICAgYWRkcmVzczogYWRkcmVzc1Rva2VuIGFzIGAweCR7c3RyaW5nfWAsXG4gICAgICAgIGFiaTogQUJJX0VSQzIwLFxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYmFsYW5jZU9mXCIsXG4gICAgICAgIGNoYWluSWQ6IE51bWJlcihjaGFpbklkKSxcbiAgICAgICAgYXJnczogW2FkZHJlc3NdLFxuICAgICAgICBjYWNoZU9uQmxvY2s6IHRydWUsXG4gICAgICAgIHdhdGNoOiB0cnVlLFxuICAgICAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIoZGF0YSBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIHNldEJhbGFuY2UocmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgdXNlTWVtbygoKT0+e30sW2JhbGFuY2VdKVxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlR2V0VG9rZW5CYWxhbmNlXG4iXSwibmFtZXMiOlsiZXRoZXJzIiwiUmVhY3QiLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJBQklfRVJDMjAiLCJ1c2VBY2NvdW50IiwidXNlQ29udHJhY3RSZWFkIiwidXNlR2V0VG9rZW5CYWxhbmNlIiwiYWRkcmVzc1Rva2VuIiwiY2hhaW5JZCIsImFkZHJlc3MiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsImFiaSIsImZ1bmN0aW9uTmFtZSIsIk51bWJlciIsImFyZ3MiLCJjYWNoZU9uQmxvY2siLCJ3YXRjaCIsIm9uU3VjY2VzcyIsImRhdGEiLCJyZXN1bHQiLCJ1dGlscyIsImZvcm1hdEV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx\n"));

/***/ })

});