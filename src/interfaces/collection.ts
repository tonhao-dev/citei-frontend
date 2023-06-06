import { ImageURL } from "src/entities/url";

export interface ICollection {
  readonly title: string;
  readonly subtitle: string;
  readonly author: string;
  readonly image: ImageURL;
}
