import m from "mithril";

export class SidebarComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__sidebar", [
      m("span", "SIDEBAR")
    ]);
  }
}
