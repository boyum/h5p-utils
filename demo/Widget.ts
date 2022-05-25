import type { H5PFieldText, IH5PWidget } from "h5p-types";
import { H5PWidget } from "../src/models/H5PWidget";
import { H5PEditor } from "../src/utils/H5P.utils";

type Field = H5PFieldText;

export class Widget extends H5PWidget<Field> implements IH5PWidget {
  appendTo($container: JQuery<HTMLElement>): void {
    const containerElement = $container.get(0);
    if (!containerElement) {
      console.error("Found no containing element to attach `MyWidget` to.");
      return;
    }

    const { field, params: name, setValue, wrapper } = this;

    wrapper.classList.add("field", `field-name-${field.name}`);
    containerElement.appendChild(wrapper);

    H5PEditor.processSemanticsChunk(
      [this.field],
      {},
      $(this.wrapper),
      this.parent,
    );

    const labelElement = document.createElement("label");
    labelElement.innerText = "Insert name";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.onchange = () => setValue(field, nameInput.value);

    if (name) {
      nameInput.value = name;
    }

    labelElement.appendChild(nameInput);
    wrapper.appendChild(labelElement);
  }

  validate(): boolean {
    return true;
  }

  remove(): void {}
}
