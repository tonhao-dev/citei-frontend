import { ICollection } from "../../src/interfaces/collection";

export interface ICollectionService {
  getValidCollections: () => Promise<ICollection[]>
  filterCollections: (text: string, collections: ICollection[]) => ICollection[]
}
