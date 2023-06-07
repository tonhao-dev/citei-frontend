import { ImageURL } from "../../src/entities/url";
import { ICollection } from "../../src/interfaces/collection";

export function collection(initial?: Partial<ICollection>): ICollection {
const DEFAULT_IMAGE_URL = 'https://i.ibb.co/ZHDSnj4/foo.jpg';

  return {
    title: 'Título da coleção',
    author: 'Luis',
    subtitle: 'Subtítulo da coleção',
    image: new ImageURL(DEFAULT_IMAGE_URL),
    ...initial,
  }
}
