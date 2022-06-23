import { H5PContentType } from "../src/models/H5PContentType.js";
import { registerContentType } from "../src/utils/H5P.utils.js";

type Params = {
  person: string;
};

export class ContentType extends H5PContentType<Params> {
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
