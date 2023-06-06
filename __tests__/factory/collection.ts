import { faker } from "@faker-js/faker";
import { ImageURL } from "../../src/entities/url";
import { ICollection } from "../../src/interfaces/collection";

export function collection(initial?: Partial<ICollection>): ICollection {
const DEFAULT_IMAGE_URL = 'https://i.ibb.co/ZHDSnj4/foo.jpg';

  return {
    title: faker.word.words(2),
    author: faker.person.fullName(),
    subtitle: faker.word.words(7),
    image: new ImageURL(DEFAULT_IMAGE_URL),
    ...initial,
  }
}
