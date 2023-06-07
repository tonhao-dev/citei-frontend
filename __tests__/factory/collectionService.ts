import { ICollectionService } from "../../src/service/collection";
import { collection } from "./collection";

export function collectionService(initial?: Partial<ICollectionService>): ICollectionService {
  return {
    getValidCollections: () => new Promise(() => []),
    filterCollections: (_, collections) => collections,
    isValidCollection: (_) => true,
    saveCollection: (_) => new Promise(() => collection()),
    ...initial,
  }
}
