import m from "mithril";
import { ButtonComponent } from "../../layout-component";
import { SearchAreaComponent } from "./search-area/search-area";

export class SidebarComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__sidebar", [
      m("div.supressor-container-content__sidebar-content", [
        m("div.supressor-container-content__sidebar-content--search", [
          m(new SearchAreaComponent()),
          m(new ButtonComponent("Search", "Search for the giver term", "primary", () => { alert("seach") }))
        ]),
        m("div.supressor-container-content__sidebar-content--list", [
          m("span", "list here")
        ])
      ])
    ]);
  }
}
