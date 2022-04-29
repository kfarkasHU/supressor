import m from "mithril";
import { ContentComponent } from "../content/content";

export class PageComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container", [
      m(new ContentComponent())
    ]);
  }
}
