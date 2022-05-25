"use strict";
var __extends = (this && this.__extends) || (function () {
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
