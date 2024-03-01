export interface ListElement {
  sectionName: string;
  elements: Element[];
}

export interface Element {
  title: string;
  link: string;
  difficulty: 0 | 1 | 2 | 3;
}
