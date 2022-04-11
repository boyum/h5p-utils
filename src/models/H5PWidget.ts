import type {
  H5PField,
  H5PForm,
  H5PSetValue,
  ParamTypeInferredFromFieldType,
} from "h5p-types";
import { H5P } from "../utils/H5P.utils";

export class H5PWidget<
  TField extends H5PField = H5PField,
  TParams = ParamTypeInferredFromFieldType<TField>
> extends H5P.EventDispatcher {
  protected wrapper: HTMLElement;

  constructor(
    protected parent: H5PForm<TParams>,
    public field: TField,
    protected params: TParams | undefined,
    protected setValue: H5PSetValue<TParams>
  ) {
    super();
    this.wrapper = H5PWidget.createWrapperElement();
  }

  private static createWrapperElement(): HTMLDivElement {
    return document.createElement("div");
  }
}
