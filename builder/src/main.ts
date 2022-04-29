import m from "mithril";

import { PageComponent } from "./packages/layout";
import { ensureHtmlElement } from "./utils";

import "./styles.scss";

export function supressorBuilder(
  targetElement: HTMLElement | string,
) {
  const target = ensureHtmlElement(targetElement);
  m.mount(target, new PageComponent());
}
