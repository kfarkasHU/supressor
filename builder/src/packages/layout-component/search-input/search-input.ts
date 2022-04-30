import m from "mithril";
import { TextInputComponent } from "../input";

export class SearchInput implements m.ClassComponent {
  public view() {
    return m("div.supressor-component__search-input", [
      m(new TextInputComponent())
    ]);
  }
}
