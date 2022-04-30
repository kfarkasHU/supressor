import m from "mithril";
import { BaseInputComponent } from "../_base/base-input";

export class TextInputComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-component__input", [
      m(new BaseInputComponent())
    ]);
  }
}
