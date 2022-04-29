import m, { Vnode } from "mithril";

export type DropdownOption = {
  key: string | number,
  label: string
}

export class DropdownComponent implements m.ClassComponent {

  private selectedElementKey: string | number;

  constructor(
    private readonly options: DropdownOption[],
    private readonly tooltip: string,
    private readonly onSelectionChange: Function,
    private readonly isEnabled: boolean = true
  ) {}

  public view = () => {
    const dropdownOptions = this.options.map(m_ => m("option", { value: m_.key }, m_.label));
    return m("select", {
        "title": this.tooltip,
        "onchange": this.onItemClick,
        "disabled": !this.isEnabled
      },
      dropdownOptions
    );
  }

  private onItemClick = (e: Event) => {
    const index = (e.target as HTMLSelectElement).selectedIndex;
    const element = this.options[index];
    this.selectedElementKey = element.key;
    console.log(this.selectedElementKey, element.key);
    this.onSelectionChange(element);
  }

}
