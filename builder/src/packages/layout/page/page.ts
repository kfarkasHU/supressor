import m from "mithril";

export class PageComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container", [
      m("span", "hello supressor!")
    ]);
  }
}
