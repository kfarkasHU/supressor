import m from "mithril";

export class DropdownComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-component__dropdown", [
      m("span", "dropdown here")
    ]);
  }
}
