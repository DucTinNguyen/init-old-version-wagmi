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

/***/ "(app-pages-browser)/./src/app/components/Bridge.tsx":
/*!***************************************!*\
  !*** ./src/app/components/Bridge.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BtnConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BtnConnect */ \"(app-pages-browser)/./src/app/components/BtnConnect.tsx\");\n/* harmony import */ var _TotalBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TotalBalance */ \"(app-pages-browser)/./src/app/components/TotalBalance.tsx\");\n/* harmony import */ var _hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetTokenBalance */ \"(app-pages-browser)/./src/app/hooks/useGetTokenBalance.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Bridge = (props)=>{\n    _s();\n    const { chain } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useNetwork)();\n    const {} = (0,_hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        addressToken: String(\"0x1674f0Ab1a0Ae8178f904433744177D5704c2047\"),\n        chainId: Number(chain === null || chain === void 0 ? void 0 : chain.id)\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full lg:max-w-[1440px] mx-auto p-[100px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[500px] mx-auto flex flex-col space-y-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-4 border border-[#292929] p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"w-full flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Goerli\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TotalBalance__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    addressToken: \"0x1674f0Ab1a0Ae8178f904433744177D5704c2047\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full border border-[#292929] py-2 px-3 rounded-l\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \" w-full border-none outline-none\",\n                                type: \"text\",\n                                placeholder: \"...type amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-slate-500 w-fit mx-auto py-2 px-3 rounded\",\n                            children: \"Switch\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-slate-500 w-fit mx-auto py-2 px-3 rounded\",\n                            children: \"Bridge\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BtnConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col space-y-4 border border-[#292929] p-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"w-full flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"ARB Goerli\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"--\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ductinnguyen/Documents/Self-study/init-wagmi-ether-old-version/src/app/components/Bridge.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Bridge, \"clzHhtf6Bu6Q6A8ORfF7n9DY540=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useNetwork,\n        _hooks_useGetTokenBalance__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Bridge;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bridge);\nvar _c;\n$RefreshReg$(_c, \"Bridge\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9CcmlkZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDeUI7QUFDWTtBQUNJO0FBQ21CO0FBQzFCO0FBT2xDLE1BQU1LLFNBQVMsQ0FBQ0M7O0lBRWQsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsaURBQVVBO0lBRzVCLE1BQU0sRUFBRyxHQUFHRCxxRUFBa0JBLENBQUM7UUFDN0JLLGNBQWNDLE9BQU9DLDRDQUFxQztRQUMxREcsU0FBU0MsT0FBT1Asa0JBQUFBLDRCQUFBQSxNQUFPUSxFQUFFO0lBQzNCO0lBSUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFFRCxXQUFVOzs4Q0FDWCw4REFBQ0U7OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ2pCLHFEQUFZQTtvQ0FBQ00sY0FBY0UsNENBQXFDOzs7Ozs7Ozs7Ozs7c0NBRW5FLDhEQUFDTTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQU1ILFdBQVU7Z0NBQW1DSSxNQUFLO2dDQUFPQyxhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJaEYsOERBQUNOO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ007NEJBQU9OLFdBQVU7c0NBQStDOzs7Ozs7c0NBR2pFLDhEQUFDTTs0QkFBT04sV0FBVTtzQ0FBK0M7Ozs7OztzQ0FHakUsOERBQUNoQixtREFBVUE7Ozs7Ozs7Ozs7OzhCQU1iLDhEQUFDZTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUVELFdBQVU7OzBDQUNYLDhEQUFDRTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTswQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFsQjtHQWpETWQ7O1FBRWNELDZDQUFVQTtRQUdoQkQsaUVBQWtCQTs7O0tBTDFCRTtBQW1ETiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQnJpZGdlLnRzeD9lYjU5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ0bkNvbm5lY3QgZnJvbSAnLi9CdG5Db25uZWN0J1xuaW1wb3J0IFRvdGFsQmFsYW5jZSBmcm9tICcuL1RvdGFsQmFsYW5jZSdcbmltcG9ydCB1c2VHZXRUb2tlbkJhbGFuY2UgZnJvbSAnLi4vaG9va3MvdXNlR2V0VG9rZW5CYWxhbmNlJ1xuaW1wb3J0IHsgdXNlTmV0d29yayB9IGZyb20gJ3dhZ21pJ1xuXG50eXBlIFByb3BzID0ge31cblxuXG5cblxuY29uc3QgQnJpZGdlID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgY2hhaW4gfSA9IHVzZU5ldHdvcmsoKTtcblxuXG4gIGNvbnN0IHsgfSA9IHVzZUdldFRva2VuQmFsYW5jZSh7XG4gICAgYWRkcmVzc1Rva2VuOiBTdHJpbmcocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTEFEWVNfVE9LRU5fQSksXG4gICAgY2hhaW5JZDogTnVtYmVyKGNoYWluPy5pZClcbiAgfSlcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGxnOm1heC13LVsxNDQwcHhdIG14LWF1dG8gcC1bMTAwcHhdJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVs1MDBweF0gbXgtYXV0byBmbGV4IGZsZXgtY29sIHNwYWNlLXktNSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktNCBib3JkZXIgYm9yZGVyLVsjMjkyOTI5XSBwLTUnPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxzcGFuPkdvZXJsaTwvc3Bhbj5cbiAgICAgICAgICAgIDxUb3RhbEJhbGFuY2UgYWRkcmVzc1Rva2VuPXtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19MQURZU19UT0tFTl9BIGFzIHN0cmluZ30gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBib3JkZXIgYm9yZGVyLVsjMjkyOTI5XSBweS0yIHB4LTMgcm91bmRlZC1sJz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9JyB3LWZ1bGwgYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nLi4udHlwZSBhbW91bnQnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4Jz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctc2xhdGUtNTAwIHctZml0IG14LWF1dG8gcHktMiBweC0zIHJvdW5kZWQnPlxuICAgICAgICAgICAgU3dpdGNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXNsYXRlLTUwMCB3LWZpdCBteC1hdXRvIHB5LTIgcHgtMyByb3VuZGVkJz5cbiAgICAgICAgICAgIEJyaWRnZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxCdG5Db25uZWN0IC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS00IGJvcmRlciBib3JkZXItWyMyOTI5MjldIHAtNSc+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPHNwYW4+QVJCIEdvZXJsaTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPi0tPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJpZGdlIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnRuQ29ubmVjdCIsIlRvdGFsQmFsYW5jZSIsInVzZUdldFRva2VuQmFsYW5jZSIsInVzZU5ldHdvcmsiLCJCcmlkZ2UiLCJwcm9wcyIsImNoYWluIiwiYWRkcmVzc1Rva2VuIiwiU3RyaW5nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0xBRFlTX1RPS0VOX0EiLCJjaGFpbklkIiwiTnVtYmVyIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Bridge.tsx\n"));

/***/ })

});