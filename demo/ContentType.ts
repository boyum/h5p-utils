import type { IH5PContentType } from "h5p-types";
import { H5PContentType } from "../src/models/H5PContentType";
import { registerContentType } from "../src/utils/H5P.utils";

type Params = {
  person: string;
};

export class ContentType
  extends H5PContentType<Params>
  implements IH5PContentType
{
  attach($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error(
        "Found no containing element to attach `h5p-content-type` to.",
      );
      return;
    }

    const { person } = this.params;

    containerElement.appendChild(this.wrapper);
    containerElement.classList.add("h5p-content-type");

    const div = document.createElement("div");
    div.innerText = `Hello ${person ?? "World"}`;
    this.wrapper.appendChild(div);
  }
}

registerContentType("ContentType", ContentType);
