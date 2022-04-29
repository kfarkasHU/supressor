import m from "mithril";
import { DropdownComponent } from "../../../../layout-component";

export class ThemeSelectorComponent implements m.ClassComponent {

  public view() {
    return m("div.supressor-container-content__headbar-theme-selector", [
      m(new DropdownComponent(
        [
          {
            key: "1",
            label: "alma"
          },
          {
            key: "2",
            label: "béka"
          }
        ],
        "Select a theme for your editor!",
        (item: string | unknown) => console.log(item)
      ))
    ]);
  }
}
