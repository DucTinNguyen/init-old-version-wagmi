"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/encode-utf8";
exports.ids = ["vendor-chunks/encode-utf8"];
exports.modules = {

/***/ "(ssr)/./node_modules/encode-utf8/index.js":
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("\nmodule.exports = function encodeUtf8(input) {\n    var result = [];\n    var size = input.length;\n    for(var index = 0; index < size; index++){\n        var point = input.charCodeAt(index);\n        if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {\n            var second = input.charCodeAt(index + 1);\n            if (second >= 0xDC00 && second <= 0xDFFF) {\n                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae\n                point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;\n                index += 1;\n            }\n        }\n        // US-ASCII\n        if (point < 0x80) {\n            result.push(point);\n            continue;\n        }\n        // 2-byte UTF-8\n        if (point < 0x800) {\n            result.push(point >> 6 | 192);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // 3-byte UTF-8\n        if (point < 0xD800 || point >= 0xE000 && point < 0x10000) {\n            result.push(point >> 12 | 224);\n            result.push(point >> 6 & 63 | 128);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // 4-byte UTF-8\n        if (point >= 0x10000 && point <= 0x10FFFF) {\n            result.push(point >> 18 | 240);\n            result.push(point >> 12 & 63 | 128);\n            result.push(point >> 6 & 63 | 128);\n            result.push(point & 63 | 128);\n            continue;\n        }\n        // Invalid character\n        result.push(0xEF, 0xBF, 0xBD);\n    }\n    return new Uint8Array(result).buffer;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5jb2RlLXV0ZjgvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFdBQVlDLEtBQUs7SUFDekMsSUFBSUMsU0FBUyxFQUFFO0lBQ2YsSUFBSUMsT0FBT0YsTUFBTUcsTUFBTTtJQUV2QixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUYsTUFBTUUsUUFBUztRQUN6QyxJQUFJQyxRQUFRTCxNQUFNTSxVQUFVLENBQUNGO1FBRTdCLElBQUlDLFNBQVMsVUFBVUEsU0FBUyxVQUFVSCxPQUFPRSxRQUFRLEdBQUc7WUFDMUQsSUFBSUcsU0FBU1AsTUFBTU0sVUFBVSxDQUFDRixRQUFRO1lBRXRDLElBQUlHLFVBQVUsVUFBVUEsVUFBVSxRQUFRO2dCQUN4Qyx3RUFBd0U7Z0JBQ3hFRixRQUFRLENBQUNBLFFBQVEsTUFBSyxJQUFLLFFBQVFFLFNBQVMsU0FBUztnQkFDckRILFNBQVM7WUFDWDtRQUNGO1FBRUEsV0FBVztRQUNYLElBQUlDLFFBQVEsTUFBTTtZQUNoQkosT0FBT08sSUFBSSxDQUFDSDtZQUNaO1FBQ0Y7UUFFQSxlQUFlO1FBQ2YsSUFBSUEsUUFBUSxPQUFPO1lBQ2pCSixPQUFPTyxJQUFJLENBQUMsU0FBVSxJQUFLO1lBQzNCUCxPQUFPTyxJQUFJLENBQUMsUUFBUyxLQUFNO1lBQzNCO1FBQ0Y7UUFFQSxlQUFlO1FBQ2YsSUFBSUgsUUFBUSxVQUFXQSxTQUFTLFVBQVVBLFFBQVEsU0FBVTtZQUMxREosT0FBT08sSUFBSSxDQUFDLFNBQVUsS0FBTTtZQUM1QlAsT0FBT08sSUFBSSxDQUFDLFNBQVcsSUFBSyxLQUFNO1lBQ2xDUCxPQUFPTyxJQUFJLENBQUMsUUFBUyxLQUFNO1lBQzNCO1FBQ0Y7UUFFQSxlQUFlO1FBQ2YsSUFBSUgsU0FBUyxXQUFXQSxTQUFTLFVBQVU7WUFDekNKLE9BQU9PLElBQUksQ0FBQyxTQUFVLEtBQU07WUFDNUJQLE9BQU9PLElBQUksQ0FBQyxTQUFXLEtBQU0sS0FBTTtZQUNuQ1AsT0FBT08sSUFBSSxDQUFDLFNBQVcsSUFBSyxLQUFNO1lBQ2xDUCxPQUFPTyxJQUFJLENBQUMsUUFBUyxLQUFNO1lBQzNCO1FBQ0Y7UUFFQSxvQkFBb0I7UUFDcEJQLE9BQU9PLElBQUksQ0FBQyxNQUFNLE1BQU07SUFDMUI7SUFFQSxPQUFPLElBQUlDLFdBQVdSLFFBQVFTLE1BQU07QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbml0LXdhZ21pLWV0aGVyLW9sZC12ZXJzaW9uLy4vbm9kZV9tb2R1bGVzL2VuY29kZS11dGY4L2luZGV4LmpzPzlkODAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5jb2RlVXRmOCAoaW5wdXQpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBzaXplID0gaW5wdXQubGVuZ3RoXG5cbiAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHNpemU7IGluZGV4KyspIHtcbiAgICB2YXIgcG9pbnQgPSBpbnB1dC5jaGFyQ29kZUF0KGluZGV4KVxuXG4gICAgaWYgKHBvaW50ID49IDB4RDgwMCAmJiBwb2ludCA8PSAweERCRkYgJiYgc2l6ZSA+IGluZGV4ICsgMSkge1xuICAgICAgdmFyIHNlY29uZCA9IGlucHV0LmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgICBpZiAoc2Vjb25kID49IDB4REMwMCAmJiBzZWNvbmQgPD0gMHhERkZGKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LWVuY29kaW5nI3N1cnJvZ2F0ZS1mb3JtdWxhZVxuICAgICAgICBwb2ludCA9IChwb2ludCAtIDB4RDgwMCkgKiAweDQwMCArIHNlY29uZCAtIDB4REMwMCArIDB4MTAwMDBcbiAgICAgICAgaW5kZXggKz0gMVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVTLUFTQ0lJXG4gICAgaWYgKHBvaW50IDwgMHg4MCkge1xuICAgICAgcmVzdWx0LnB1c2gocG9pbnQpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIDItYnl0ZSBVVEYtOFxuICAgIGlmIChwb2ludCA8IDB4ODAwKSB7XG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgPj4gNikgfCAxOTIpXG4gICAgICByZXN1bHQucHVzaCgocG9pbnQgJiA2MykgfCAxMjgpXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIC8vIDMtYnl0ZSBVVEYtOFxuICAgIGlmIChwb2ludCA8IDB4RDgwMCB8fCAocG9pbnQgPj0gMHhFMDAwICYmIHBvaW50IDwgMHgxMDAwMCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCA+PiAxMikgfCAyMjQpXG4gICAgICByZXN1bHQucHVzaCgoKHBvaW50ID4+IDYpICYgNjMpIHwgMTI4KVxuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ICYgNjMpIHwgMTI4KVxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICAvLyA0LWJ5dGUgVVRGLThcbiAgICBpZiAocG9pbnQgPj0gMHgxMDAwMCAmJiBwb2ludCA8PSAweDEwRkZGRikge1xuICAgICAgcmVzdWx0LnB1c2goKHBvaW50ID4+IDE4KSB8IDI0MClcbiAgICAgIHJlc3VsdC5wdXNoKCgocG9pbnQgPj4gMTIpICYgNjMpIHwgMTI4KVxuICAgICAgcmVzdWx0LnB1c2goKChwb2ludCA+PiA2KSAmIDYzKSB8IDEyOClcbiAgICAgIHJlc3VsdC5wdXNoKChwb2ludCAmIDYzKSB8IDEyOClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gSW52YWxpZCBjaGFyYWN0ZXJcbiAgICByZXN1bHQucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICB9XG5cbiAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuYnVmZmVyXG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImVuY29kZVV0ZjgiLCJpbnB1dCIsInJlc3VsdCIsInNpemUiLCJsZW5ndGgiLCJpbmRleCIsInBvaW50IiwiY2hhckNvZGVBdCIsInNlY29uZCIsInB1c2giLCJVaW50OEFycmF5IiwiYnVmZmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/encode-utf8/index.js\n");

/***/ })

};
;