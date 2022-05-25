import type { H5PExtras } from "h5p-types";
import { H5P } from "../utils/H5P.utils";

export class H5PContentType<
  TParams extends Record<string, unknown> | unknown = unknown,
> extends H5P.EventDispatcher {
  protected wrapper: HTMLElement;

  constructor(
    protected params: TParams,
    protected contentId: string,
    protected extras?: H5PExtras,
  ) {
    super();
    this.wrapper = H5PContentType.createWrapperElement();
  }

  private static createWrapperElement(): HTMLDivElement {
    return document.createElement("div");
  }
}
