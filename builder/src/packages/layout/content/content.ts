import m from "mithril";
import { SidebarComponent } from "../sidebar/sidebar";
import { WorkareaComponent } from "../workarea/workarea";
import { HeadbarComponent } from "./headbar/headbar";

export class ContentComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content", [
      m("div.supressor-container-content-headbar", [
        m(new HeadbarComponent())
      ]),
      m("div.supressor-container-content-layout", [
        m(new SidebarComponent()),
        m(new WorkareaComponent())
      ])
    ]);
  }
}
