import type { H5PExtras } from "h5p-types";
import { H5P } from "../utils/H5P.utils";
export declare class H5PContentType<TParams extends Record<string, unknown> | unknown = unknown> extends H5P.EventDispatcher {
    protected params: TParams;
    protected contentId: string;
    protected extras?: H5PExtras | undefined;
    protected wrapper: HTMLElement;
    constructor(params: TParams, contentId: string, extras?: H5PExtras | undefined);
    private static createWrapperElement;
}
