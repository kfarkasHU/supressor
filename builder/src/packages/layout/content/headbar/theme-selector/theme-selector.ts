import m from "mithril";
import { DropdownComponent } from "../../../../layout-component";

export class ThemeSelectorComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__headbar-theme-selector", [
      m(new DropdownComponent())
    ]);
  }
}
