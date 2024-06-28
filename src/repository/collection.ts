import { IServiceCollectionBody, IServiceCollectionResponse } from "src/interfaces/collection";

export interface ICollectionRepository {
  getAll: () => Promise<IServiceCollectionResponse[]>;
  saveOne: (collection: IServiceCollectionBody) => Promise<IServiceCollectionResponse>;
}

export class CollectionRepository implements ICollectionRepository {
  public async getAll() {
    const raw = localStorage.getItem('collections')
    if (!raw) return []

    return JSON.parse(raw) as IServiceCollectionResponse[]
  }

  public async saveOne(collection: IServiceCollectionBody) {
    const collections = await this.getAll()
    const id = collections.length + 1
    const newCollection: IServiceCollectionResponse = {
      ...collection,
      id: id,
      created_at: new Date().toISOString()
    }

    localStorage.setItem('collections', JSON.stringify([...collections, newCollection]))

    return newCollection
  }
}
