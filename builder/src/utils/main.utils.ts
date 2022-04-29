import { isString } from "../core";
import { getElementById } from "../core/dom";

export function ensureHtmlElement(element: HTMLElement | string): HTMLElement {
  return isString(element)
    ? getElementById(element as string)
    : element as HTMLElement
  ;
}
