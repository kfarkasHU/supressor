import m from "mithril";

export class WorkareaComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__workarea", [
      m("span", "workarea")
    ]);
  }
}
