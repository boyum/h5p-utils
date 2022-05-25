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
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__nccwpck_require__.d(__webpack_exports__, {
  "gX": () => (/* reexport */ H5P),
  "Cl": () => (/* reexport */ H5PContentType),
  "_t": () => (/* reexport */ H5PEditor),
  "Bf": () => (/* reexport */ H5PWidget),
  "X5": () => (/* reexport */ getAbsoluteUrlFromRelativePath),
  "Jn": () => (/* reexport */ getImageUrl)
});

;// CONCATENATED MODULE: ./src/utils/H5P.utils.ts
const H5P = window.H5P ?? {};
const H5PEditor = window.H5PEditor ?? {};
/**
 * Get absolute path to image from relative parameters path
 *
 * @param path Relative path as found in content parameters
 * @returns Absolute path to image
 */
const getAbsoluteUrlFromRelativePath = (path) => {
    return H5P.getPath(path, H5PEditor.contentId);
};
const getImageUrl = (imagePath) => {
    if (!imagePath) {
        return null;
    }
    const imagePathIsAbsolute = imagePath.startsWith("http://") || imagePath.startsWith("https://");
    const imageUrl = imagePathIsAbsolute
        ? imagePath
        : getAbsoluteUrlFromRelativePath(imagePath);
    return imageUrl;
};

;// CONCATENATED MODULE: ./src/models/H5PContentType.ts

class H5PContentType extends H5P.EventDispatcher {
    params;
    contentId;
    extras;
    wrapper;
    constructor(params, contentId, extras) {
        super();
        this.params = params;
        this.contentId = contentId;
        this.extras = extras;
        this.wrapper = H5PContentType.createWrapperElement();
    }
    static createWrapperElement() {
        return document.createElement("div");
    }
}

;// CONCATENATED MODULE: ./src/models/H5PWidget.ts

class H5PWidget extends H5P.EventDispatcher {
    parent;
    field;
    params;
    setValue;
    wrapper;
    constructor(parent, field, params, setValue) {
        super();
        this.parent = parent;
        this.field = field;
        this.params = params;
        this.setValue = setValue;
        this.wrapper = H5PWidget.createWrapperElement();
    }
    static createWrapperElement() {
        return document.createElement("div");
    }
}

;// CONCATENATED MODULE: ./index.ts




var __webpack_exports__H5P = __webpack_exports__.gX;
var __webpack_exports__H5PContentType = __webpack_exports__.Cl;
var __webpack_exports__H5PEditor = __webpack_exports__._t;
var __webpack_exports__H5PWidget = __webpack_exports__.Bf;
var __webpack_exports__getAbsoluteUrlFromRelativePath = __webpack_exports__.X5;
var __webpack_exports__getImageUrl = __webpack_exports__.Jn;
export { __webpack_exports__H5P as H5P, __webpack_exports__H5PContentType as H5PContentType, __webpack_exports__H5PEditor as H5PEditor, __webpack_exports__H5PWidget as H5PWidget, __webpack_exports__getAbsoluteUrlFromRelativePath as getAbsoluteUrlFromRelativePath, __webpack_exports__getImageUrl as getImageUrl };

//# sourceMappingURL=index.js.map