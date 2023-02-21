import type { H5PExtras, IH5PResumableType } from "h5p-types";
import { H5PContentType } from "./H5PContentType";

export abstract class H5PResumableContentType<
    TParams = unknown,
    TState = unknown,
  >
  extends H5PContentType<TParams>
  implements IH5PResumableType<TState>
{
  // @ts-expect-error
  private state: TState | undefined;

  constructor(
    params: TParams,
    contentId: string,
    extras?: H5PExtras,
    previousState?: TState,
  ) {
    super(params, contentId, extras);
    this.state = previousState;
  }

  abstract getCurrentState(): TState;
}
