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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contract_Bridge_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_contract/Bridge.json */ \"(app-pages-browser)/./src/app/_contract/Bridge.json\");\n/* harmony import */ var _contract_ILady_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_contract/ILady.json */ \"(app-pages-browser)/./src/app/_contract/ILady.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/providers/lib.esm/web3-provider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/contracts/lib.esm/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"(app-pages-browser)/./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst useBridge = (param)=>{\n    let { amount, desAddress, tokenAddress } = param;\n    _s();\n    const { data: signer } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner)({\n        chainId: Number(5)\n    });\n    const { address } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.Web3Provider(window.ethereum);\n    const approveBridge = async ()=>{\n        try {\n            const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(tokenAddress, _contract_ILady_json__WEBPACK_IMPORTED_MODULE_2__, signer);\n            return await contract.approve(String(\"0xEB17ecF28C691310a7eb72F583A372541aa1bB04\"), ethers__WEBPACK_IMPORTED_MODULE_6__.parseUnits(amount.toString()));\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const bridge = async ()=>{\n        const contract = new ethers__WEBPACK_IMPORTED_MODULE_5__.Contract(String(\"0xEB17ecF28C691310a7eb72F583A372541aa1bB04\"), _contract_Bridge_json__WEBPACK_IMPORTED_MODULE_1__, signer);\n        await approveBridge();\n    };\n    return {\n        approveBridge\n    };\n};\n_s(useBridge, \"L6EcFzb+ZU9h5c+BXyHVLXvTYpw=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useSigner,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useBridge);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaG9va3MvdXNlQnJpZGdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBRXVCO0FBQ0w7QUFDWDtBQUNjO0FBRTlDLE1BQU1NLFlBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUlyRDs7SUFFRyxNQUFNLEVBQUVDLE1BQU1DLE1BQU0sRUFBRSxHQUFHTixnREFBU0EsQ0FBQztRQUMvQk8sU0FBU0MsT0FBTztJQUNwQjtJQUVBLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdWLGlEQUFVQTtJQUU5QixNQUFNVyxXQUFXLElBQUlaLGdEQUE2QixDQUFDZSxPQUFPQyxRQUFRO0lBR2xFLE1BQU1DLGdCQUFnQjtRQUVsQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxJQUFJbEIsNENBQWUsQ0FBQ00sY0FBY1AsaURBQUtBLEVBQUVTO1lBQzFELE9BQU8sTUFBTVUsU0FBU0UsT0FBTyxDQUFDQyxPQUFPQyw0Q0FBcUMsR0FBR3RCLDhDQUF1QixDQUFDSSxPQUFPdUIsUUFBUTtRQUN4SCxFQUFFLE9BQU9DLEtBQUs7WUFDVkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNoQjtJQUVKO0lBR0EsTUFBTUcsU0FBUztRQUNYLE1BQU1iLFdBQVcsSUFBSWxCLDRDQUFlLENBQUNxQixPQUFPQyw0Q0FBcUMsR0FBR3hCLGtEQUFTQSxFQUFFVTtRQUMvRixNQUFNUztJQUNWO0lBRUEsT0FBTztRQUNIQTtJQUNKO0FBR0o7R0FyQ01kOztRQU11QkQsNENBQVNBO1FBSWRELDZDQUFVQTs7O0FBNkJsQywrREFBZUUsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2hvb2tzL3VzZUJyaWRnZS50c3g/YmE0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCcmlkZ2VBQkkgZnJvbSAnLi4vX2NvbnRyYWN0L0JyaWRnZS5qc29uJ1xuaW1wb3J0IEVSQzIwIGZyb20gJy4uL19jb250cmFjdC9JTGFkeS5qc29uJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZVNpZ25lciB9IGZyb20gJ3dhZ21pJztcblxuY29uc3QgdXNlQnJpZGdlID0gICh7IGFtb3VudCwgZGVzQWRkcmVzcywgdG9rZW5BZGRyZXNzIH06IHtcbiAgICBhbW91bnQ6IHN0cmluZztcbiAgICBkZXNBZGRyZXNzOiBzdHJpbmc7XG4gICAgdG9rZW5BZGRyZXNzOiBzdHJpbmc7XG59KSA9PiB7XG5cbiAgICBjb25zdCB7IGRhdGE6IHNpZ25lciB9ID0gdXNlU2lnbmVyKHtcbiAgICAgICAgY2hhaW5JZDogTnVtYmVyKDUpXG4gICAgfSlcblxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gdXNlQWNjb3VudCgpO1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtIGFzIGFueSk7XG5cblxuICAgIGNvbnN0IGFwcHJvdmVCcmlkZ2UgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdCh0b2tlbkFkZHJlc3MsIEVSQzIwLCBzaWduZXIgYXMgYW55KTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBjb250cmFjdC5hcHByb3ZlKFN0cmluZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MQURZU19CUklERV9BKSwgZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoYW1vdW50LnRvU3RyaW5nKCkpKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgY29uc3QgYnJpZGdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoU3RyaW5nKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0xBRFlTX0JSSURFX0EpLCBCcmlkZ2VBQkksIHNpZ25lciBhcyBhbnkpO1xuICAgICAgICBhd2FpdCBhcHByb3ZlQnJpZGdlKClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhcHByb3ZlQnJpZGdlXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlQnJpZGdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCcmlkZ2VBQkkiLCJFUkMyMCIsImV0aGVycyIsInVzZUFjY291bnQiLCJ1c2VTaWduZXIiLCJ1c2VCcmlkZ2UiLCJhbW91bnQiLCJkZXNBZGRyZXNzIiwidG9rZW5BZGRyZXNzIiwiZGF0YSIsInNpZ25lciIsImNoYWluSWQiLCJOdW1iZXIiLCJhZGRyZXNzIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFwcHJvdmVCcmlkZ2UiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiYXBwcm92ZSIsIlN0cmluZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19MQURZU19CUklERV9BIiwidXRpbHMiLCJwYXJzZVVuaXRzIiwidG9TdHJpbmciLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYnJpZGdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/hooks/useBridge.tsx\n"));

/***/ })

});