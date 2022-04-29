import m from "mithril";
import { ContentComponent } from "../content/content";

const PageComponentConfig = Object.freeze({
  numberOfItems: 128
});

export class PageComponent implements m.ClassComponent {
  public view() {

    const boxes = [];
    for(let i = 0; i < PageComponentConfig.numberOfItems; i++) {
      boxes.push(m(".background-container-items-item"));
    }

    return m("div.supressor-container", [
      m("div.background-container", [
        m("div.background-container-items", boxes)
      ]),
      m("div.grey"),
      m(new ContentComponent())
    ]);
  }
}
