import { faker } from "@faker-js/faker";
import { IQuotation } from "src/interfaces/quoatation";

export function quotation(initial?: Partial<IQuotation>): IQuotation {
  return {
    quote: faker.word.words(10),
    author: faker.person.fullName(),
    collection: faker.word.words(2),
    ...initial,
  }
}
