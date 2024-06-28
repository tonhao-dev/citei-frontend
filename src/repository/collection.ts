import { ICollection, IServiceCollection, IServiceCollectionBody, IServiceCollectionResponse } from "src/interfaces/collection";

export interface ICollectionRepository {
  getAll: () => Promise<IServiceCollection[]>;
  saveOne: (collection: IServiceCollectionBody) => Promise<IServiceCollectionResponse>;
}

export class CollectionRepository implements ICollectionRepository {
  public async getAll() {
    return []
  }

  public async saveOne(collection: IServiceCollectionBody) {
    return {} as IServiceCollectionResponse
  }
}
