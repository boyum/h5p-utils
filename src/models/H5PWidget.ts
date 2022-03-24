import {
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
  public field: Readonly<TField>;

  protected parent: H5PForm;

  protected params: TParams | undefined;

  protected setValue: H5PSetValue<TParams>;

  protected wrapper: HTMLElement;

  constructor(
    parent: H5PForm<TParams>,
    field: TField,
    params: TParams | undefined,
    setValue: H5PSetValue<TParams>
  ) {
    super();
    this.wrapper = H5PWidget.createWrapperElement();

    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }

  private static createWrapperElement(): HTMLDivElement {
    return document.createElement("div");
  }
}
