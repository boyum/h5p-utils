import type { H5PEditorObject, H5PObject } from "h5p-types";
export declare const H5P: H5PObject;
export declare const H5PEditor: H5PEditorObject;
/**
 * Get absolute path to image from relative parameters path
 *
 * @param path Relative path as found in content parameters
 * @returns Absolute path to image
 */
export declare const getAbsoluteUrlFromRelativePath: (path: string) => string;
export declare const getImageUrl: (imagePath: string | undefined) => string | null;
