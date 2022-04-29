import m from "mithril";
import { ButtonComponent } from "../../../layout-component";
import { ThemeSelectorComponent } from "./theme-selector/theme-selector";

export class HeadbarComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__headbar", [
      m("div.supressor-container-content__headbar-action-buttons", [
        m(new ButtonComponent("New", "Save current project", "primary", () => alert("New"))),
        m(new ButtonComponent("Reset", "Save current project", "primary", () => alert("Reset"))),
        m(new ButtonComponent("Save", "Save current project", "primary", () => alert("Save"))),
        m(new ButtonComponent("Load", "Save current project", "primary", () => alert("Load"))),
      ]),
      m("div.supressor-container-content__headbar-theme-selector", [
        m(new ThemeSelectorComponent())
      ])
    ]);
  }
}
