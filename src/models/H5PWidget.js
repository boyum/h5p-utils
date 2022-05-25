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
exports.H5PWidget = void 0;
var H5P_utils_1 = require("../utils/H5P.utils");
var H5PWidget = /** @class */ (function (_super) {
    __extends(H5PWidget, _super);
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
}(H5P_utils_1.H5P.EventDispatcher));
exports.H5PWidget = H5PWidget;
