import './sourcemap-register.cjs';/******/ // The require scope
/******/ var __nccwpck_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__nccwpck_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "gX": () => (/* reexport */ H5P_utils_namespaceObject.H5P),
  "Cl": () => (/* reexport */ H5PContentType_namespaceObject.H5PContentType),
  "_t": () => (/* reexport */ H5P_utils_namespaceObject.H5PEditor),
  "Bf": () => (/* reexport */ H5PWidget_namespaceObject.H5PWidget),
  "X5": () => (/* reexport */ H5P_utils_namespaceObject.getAbsoluteUrlFromRelativePath),
  "Jn": () => (/* reexport */ H5P_utils_namespaceObject.getImageUrl)
});

// NAMESPACE OBJECT: ./src/models/H5PContentType.js
var H5PContentType_namespaceObject = {};
__nccwpck_require__.r(H5PContentType_namespaceObject);

// NAMESPACE OBJECT: ./src/models/H5PWidget.js
var H5PWidget_namespaceObject = {};
__nccwpck_require__.r(H5PWidget_namespaceObject);

// NAMESPACE OBJECT: ./src/utils/H5P.utils.js
var H5P_utils_namespaceObject = {};
__nccwpck_require__.r(H5P_utils_namespaceObject);

;// CONCATENATED MODULE: ./src/models/H5PContentType.js

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.H5PContentType = void 0;
var H5P_utils_1 = require("../utils/H5P.utils");
var H5PContentType = /** @class */ (function (_super) {
    __extends(H5PContentType, _super);
    function H5PContentType(params, contentId, extras) {
        var _this = _super.call(this) || this;
        _this.params = params;
        _this.contentId = contentId;
        _this.extras = extras;
        _this.wrapper = H5PContentType.createWrapperElement();
        return _this;
    }
    H5PContentType.createWrapperElement = function () {
        return document.createElement("div");
    };
    return H5PContentType;
}(H5P_utils_1.H5P.EventDispatcher));
exports.H5PContentType = H5PContentType;

;// CONCATENATED MODULE: ./src/models/H5PWidget.js

var H5PWidget_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.H5PWidget = void 0;
var H5PWidget_H5P_utils_1 = require("../utils/H5P.utils");
var H5PWidget = /** @class */ (function (_super) {
    H5PWidget_extends(H5PWidget, _super);
    function H5PWidget(parent, field, params, setValue) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.field = field;
        _this.params = params;
        _this.setValue = setValue;
        _this.wrapper = H5PWidget.createWrapperElement();
        return _this;
    }
    H5PWidget.createWrapperElement = function () {
        return document.createElement("div");
    };
    return H5PWidget;
}(H5PWidget_H5P_utils_1.H5P.EventDispatcher));
exports.H5PWidget = H5PWidget;

;// CONCATENATED MODULE: ./src/utils/H5P.utils.js

var _a, _b;
exports.__esModule = true;
exports.getImageUrl = exports.getAbsoluteUrlFromRelativePath = exports.H5PEditor = exports.H5P = void 0;
exports.H5P = (_a = window.H5P) !== null && _a !== void 0 ? _a : {};
exports.H5PEditor = (_b = window.H5PEditor) !== null && _b !== void 0 ? _b : {};
/**
 * Get absolute path to image from relative parameters path
 *
 * @param path Relative path as found in content parameters
 * @returns Absolute path to image
 */
var getAbsoluteUrlFromRelativePath = function (path) {
    return exports.H5P.getPath(path, exports.H5PEditor.contentId);
};
exports.getAbsoluteUrlFromRelativePath = getAbsoluteUrlFromRelativePath;
var getImageUrl = function (imagePath) {
    if (!imagePath) {
        return null;
    }
    var imagePathIsAbsolute = imagePath.startsWith("http://") || imagePath.startsWith("https://");
    var imageUrl = imagePathIsAbsolute
        ? imagePath
        : (0, exports.getAbsoluteUrlFromRelativePath)(imagePath);
    return imageUrl;
};
exports.getImageUrl = getImageUrl;

;// CONCATENATED MODULE: ./index.ts




var __webpack_exports__H5P = __webpack_exports__.gX;
var __webpack_exports__H5PContentType = __webpack_exports__.Cl;
var __webpack_exports__H5PEditor = __webpack_exports__._t;
var __webpack_exports__H5PWidget = __webpack_exports__.Bf;
var __webpack_exports__getAbsoluteUrlFromRelativePath = __webpack_exports__.X5;
var __webpack_exports__getImageUrl = __webpack_exports__.Jn;
export { __webpack_exports__H5P as H5P, __webpack_exports__H5PContentType as H5PContentType, __webpack_exports__H5PEditor as H5PEditor, __webpack_exports__H5PWidget as H5PWidget, __webpack_exports__getAbsoluteUrlFromRelativePath as getAbsoluteUrlFromRelativePath, __webpack_exports__getImageUrl as getImageUrl };

//# sourceMappingURL=index.js.map