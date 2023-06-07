import { AxiosInstance } from "axios";
import { ICollection, IRawCollection, IServiceCollection, IServiceCollectionBody } from "../../src/interfaces/collection";
import { ImageURL } from "../entities/url";
import { Collection } from "../entities/collection";

export interface ICollectionService {
  getValidCollections: () => Promise<ICollection[]>;
  filterCollections: (text: string, collections: ICollection[]) => ICollection[];
  saveCollection: (collection: IRawCollection) => void | Promise<void>;
  isValidCollection: (rawCollection: Partial<IRawCollection>) => boolean;
}

export class CollectionService implements ICollectionService {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async getValidCollections(): Promise<ICollection[]>{
    const { data: colecoes } = await this.api.get<IServiceCollection[]>('colecao');

    return colecoes.map(({
      colecao_titulo,
      colecao_subtitulo,
      colecao_autor,
      colecao_imagem
    }) => ({
      title: colecao_titulo,
      subtitle:colecao_subtitulo,
      author: colecao_autor,
      image: new ImageURL(colecao_imagem)
    }))
  }

  public filterCollections(text: string, collections: ICollection[]) {
    return collections.filter(({title}) => title.includes(text));
  }

  public async saveCollection(collection: IRawCollection) {
    await this.api.post<any, any, IServiceCollectionBody>('colecao', {
      titulo: collection.title,
      subtitulo: collection.subtitle,
      autor: collection.author,
      imagem: collection.image
    });
  }

  public isValidCollection({title,subtitle,author,image}: Partial<IRawCollection>){
    if(!title || !subtitle || !author || !image) return false;

    return new Collection(title, author, subtitle, new ImageURL(image)).isValid
  };
}
