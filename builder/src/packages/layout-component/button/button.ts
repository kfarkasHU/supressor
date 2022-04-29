import m from "mithril";

export type ButtonType = "primary" | "secondary" | "action" | "cancel";

export class ButtonComponent implements m.ClassComponent {

  constructor(
    private readonly label: string,
    private readonly tooltip: string,
    private readonly type: ButtonType,
    private readonly onClick: Function,
    private readonly isEnabled: boolean = true
  ) {}

  public view() {
    return m(
      `button${this.getButtonClass()}`,
      {
        "onclick": this.onClick,
        "alt": this.tooltip,
        "disabled": !this.isEnabled
      },
      this.label
    );
  }

  private getButtonClass() {
    return `.supressor-component__button--${this.type}`;
  }

}
