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

/***/ "(app-pages-browser)/./src/app/hooks/useBridge.tsx":
/*!*************************************!*\
  !*** ./src/app/hooks/useBridge.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_contract/ILady.json */ \"(app-pages-browser)/./src/app/_contract/ILady.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\nvar _s = $RefreshSig$();\n\n\n\n\nconst useBridge = (param)=>{\n    let { amount, desAddress, tokenAddress } = param;\n    _s();\n    const { data: signer } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner)({\n        chainId: 5\n    });\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.Web3Provider(window.ethereum);\n    const approveBridge = async ()=>{\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.Contract(tokenAddress, _contract_ILady_json__WEBPACK_IMPORTED_MODULE_1__, provider);\n        return await contract.approve(address, amount);\n    };\n    return {\n        approveBridge\n    };\n};\n_s(useBridge, \"L6EcFzb+ZU9h5c+BXyHVLXvTYpw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useSigner,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useBridge);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlQnJpZGdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUdrQjtBQUNYO0FBQ2M7QUFFOUMsTUFBTUssWUFBYTtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxZQUFZLEVBSXJEOztJQUVHLE1BQU0sRUFBRUMsTUFBTUMsTUFBTSxFQUFFLEdBQUdOLGdEQUFTQSxDQUFDO1FBQy9CTyxTQUFTO0lBQ2I7SUFFQSxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHVCxpREFBVUE7SUFFOUIsTUFBTVUsV0FBVyxJQUFJWCxnREFBNkIsQ0FBQ2MsT0FBT0MsUUFBUTtJQUdsRSxNQUFNQyxnQkFBZ0I7UUFDbEIsTUFBTUMsV0FBVyxJQUFJakIsNENBQWUsQ0FBQ00sY0FBY1AsaURBQUtBLEVBQUVZO1FBQzFELE9BQU8sTUFBTU0sU0FBU0UsT0FBTyxDQUFDVCxTQUFTTjtJQUMzQztJQUdBLE9BQU87UUFDSFk7SUFDSjtBQUdKO0dBMUJNYjs7UUFNdUJELDRDQUFTQTtRQUlkRCw2Q0FBVUE7OztBQWtCbEMsK0RBQWVFLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9ob29rcy91c2VCcmlkZ2UudHN4P2JhNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQnJpZGdlQUJJIGZyb20gJy4uL19jb250cmFjdC9CcmlkZ2UuanNvbidcbmltcG9ydCBFUkMyMCBmcm9tICcuLi9fY29udHJhY3QvSUxhZHkuanNvbidcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VTaWduZXIgfSBmcm9tICd3YWdtaSc7XG5cbmNvbnN0IHVzZUJyaWRnZSA9ICAoeyBhbW91bnQsIGRlc0FkZHJlc3MsIHRva2VuQWRkcmVzcyB9OiB7XG4gICAgYW1vdW50OiBzdHJpbmc7XG4gICAgZGVzQWRkcmVzczogc3RyaW5nO1xuICAgIHRva2VuQWRkcmVzczogc3RyaW5nO1xufSkgPT4ge1xuXG4gICAgY29uc3QgeyBkYXRhOiBzaWduZXIgfSA9IHVzZVNpZ25lcih7XG4gICAgICAgIGNoYWluSWQ6IDVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0gYXMgYW55KTtcblxuXG4gICAgY29uc3QgYXBwcm92ZUJyaWRnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KHRva2VuQWRkcmVzcywgRVJDMjAsIHByb3ZpZGVyKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IGNvbnRyYWN0LmFwcHJvdmUoYWRkcmVzcywgYW1vdW50KVxuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFwcHJvdmVCcmlkZ2VcbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VCcmlkZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkVSQzIwIiwiZXRoZXJzIiwidXNlQWNjb3VudCIsInVzZVNpZ25lciIsInVzZUJyaWRnZSIsImFtb3VudCIsImRlc0FkZHJlc3MiLCJ0b2tlbkFkZHJlc3MiLCJkYXRhIiwic2lnbmVyIiwiY2hhaW5JZCIsImFkZHJlc3MiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiYXBwcm92ZUJyaWRnZSIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhcHByb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useBridge.tsx\n"));

/***/ })

});