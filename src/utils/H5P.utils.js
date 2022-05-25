"use strict";
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
