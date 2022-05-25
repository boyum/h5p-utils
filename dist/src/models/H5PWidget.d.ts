import type { H5PField, H5PForm, H5PSetValue, ParamTypeInferredFromFieldType } from "h5p-types";
import { H5P } from "../utils/H5P.utils";
export declare class H5PWidget<TField extends H5PField = H5PField, TParams = ParamTypeInferredFromFieldType<TField>> extends H5P.EventDispatcher {
    protected parent: H5PForm<TParams>;
    field: TField;
    protected params: TParams | undefined;
    protected setValue: H5PSetValue<TParams>;
    protected wrapper: HTMLElement;
    constructor(parent: H5PForm<TParams>, field: TField, params: TParams | undefined, setValue: H5PSetValue<TParams>);
    private static createWrapperElement;
}
