export function getDocument(): Document {
  return document;
}

export function getDocumentBody(): HTMLBodyElement {
  return getDocument().body as HTMLBodyElement;
}

export function getElementById<T extends HTMLElement = HTMLElement>(id: string): T {
  return getDocument().getElementById(id) as T;
}
