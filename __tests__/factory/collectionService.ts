import { ICollectionService } from "../../src/service/collection";
import { collection } from "./collection";

export function collectionService(initial?: Partial<ICollectionService>): ICollectionService {
  return {
    getValidCollections: () => Promise.resolve([]),
    filterCollections: (_, collections) => collections,
    isValidCollection: (_) => true,
    saveCollection: (_) => Promise.resolve(collection()),
    ...initial,
  }
}
