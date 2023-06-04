import { faker } from "@faker-js/faker";
import { ICollection } from "src/interfaces/collection";

export function collection(initial?: Partial<ICollection>):ICollection {
  return {
    title: faker.word.words(2),
    author: faker.person.fullName(),
    subtitle: faker.word.words(7),
    ...initial,
  }
}
