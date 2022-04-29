import m from "mithril";

import { PageComponent } from "./packages/layout";
import { ensureHtmlElement } from "./utils";

export function supressorBuilder(
  targetElement: HTMLElement | string,
) {
  const target = ensureHtmlElement(targetElement);
  m.mount(target, new PageComponent());
}
