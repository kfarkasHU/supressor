import m from "mithril";
import { SearchInput } from "../../../layout-component";

export class SearchAreaComponent implements m.ClassComponent {
  public view() {
    return m("div.supressor-container-content__sidebar-search-area", [
      m(new SearchInput())
    ]);
  }

}
