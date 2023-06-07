import { ICollection, IRawCollection } from "../../src/interfaces/collection";

export interface ICollectionService {
  getValidCollections: () => Promise<ICollection[]>;
  filterCollections: (text: string, collections: ICollection[]) => ICollection[];
  saveCollection: (collection: IRawCollection) => void | Promise<void>;
  isValidCollection: (rawCollection: Partial<IRawCollection>) => boolean;
}
