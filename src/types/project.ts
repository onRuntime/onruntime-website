export interface Project {
  id: string;
  name: string;
  tags: Tag[];
  shortDescription: string;
  description: string;
  iconUrl: string;
  showcaseUrl: string;
}

export enum Tag {
  FEATURED = "featured",
  OPEN_SOURCE = "open-source",
}