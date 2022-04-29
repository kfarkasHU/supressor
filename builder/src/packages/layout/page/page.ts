import m from "mithril";

export class PageComponent implements m.ClassComponent {
  public view() {
    return m("span", "Hello supressor!");
  }
}
