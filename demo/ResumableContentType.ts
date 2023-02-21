import { H5PResumableContentType } from "../src/models/H5PResumableContentType.js";
import { registerContentType } from "../src/utils/H5P.utils.js";

type Params = {
  person: string;
};

type State = {
  isActive: boolean;
};

export class ContentType extends H5PResumableContentType<Params, State> {
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

  getCurrentState(): State {
    return (
      this.state ?? {
        isActive: false,
      }
    );
  }
}

registerContentType("ContentType", ContentType);
