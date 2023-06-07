import { ICollectionService } from "../../src/service/collection";

export function collectionService(initial?: ICollectionService): ICollectionService {
  return {
    ...initial,
    getValidCollections: () => new Promise(() => []),
    filterCollections: (_, collections) => collections
  }
}
