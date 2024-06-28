import { AxiosInstance, AxiosResponse } from "axios";
import { ICollection, IRawCollection, IServiceCollection, IServiceCollectionBody, IServiceCollectionResponse } from "../../src/interfaces/collection";
import { ImageURL } from "../entities/url";
import { Collection } from "../entities/collection";
import { ICollectionRepository } from "src/repository/collection";

export interface ICollectionService {
  getValidCollections: () => Promise<ICollection[]>;
  filterCollections: (text: string, collections: ICollection[]) => ICollection[];
  saveCollection: (collection: IRawCollection) => Promise<ICollection>;
  isValidCollection: (rawCollection: Partial<IRawCollection>) => boolean;
}

export class CollectionService implements ICollectionService {
  private repository: ICollectionRepository;

  constructor(repository: ICollectionRepository) {
    this.repository = repository;
  }

  public async getValidCollections(): Promise<ICollection[]> {
    const colecoes = await this.repository.getAll();

    return colecoes.map(({
      colecao_titulo,
      colecao_subtitulo,
      colecao_autor,
      colecao_imagem
    }) => ({
      title: colecao_titulo,
      subtitle: colecao_subtitulo,
      author: colecao_autor,
      image: new ImageURL(colecao_imagem)
    }))
  }

  public filterCollections(text: string, collections: ICollection[]) {
    return collections.filter(({ title }) => title.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
  }

  public async saveCollection(collection: IRawCollection): Promise<ICollection> {
    const data = await this.repository.saveOne({
      titulo: collection.title,
      subtitulo: collection.subtitle,
      autor: collection.author,
      imagem: collection.image
    });

    return this.fromResponseToCollection(data);
  }

  private fromResponseToCollection(collection: IServiceCollectionResponse): ICollection {
    return {
      title: collection.titulo,
      subtitle: collection.subtitulo,
      author: collection.autor,
      image: new ImageURL(collection.imagem)
    }
  }

  public isValidCollection({ title, subtitle, author, image }: Partial<IRawCollection>) {
    if (!title || !subtitle || !author || !image) return false;

    return new Collection(title, author, subtitle, new ImageURL(image)).isValid
  };
}
