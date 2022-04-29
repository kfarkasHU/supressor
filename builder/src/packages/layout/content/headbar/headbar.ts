import m from "mithril";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector";

export class HeadbarComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__headbar", [
      m(new ThemeSelectorComponent())
    ]);
  }
}
