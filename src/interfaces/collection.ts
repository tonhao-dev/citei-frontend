import { ImageURL } from "src/entities/url";
import { ISODate } from "./isodate";

export interface ICollection {
  readonly title: string;
  readonly subtitle: string;
  readonly author: string;
  readonly image: ImageURL;
}

export interface IRawCollection {
  title: string;
  subtitle: string;
  author: string;
  image: string;
}

export interface IServiceCollection {
  colecao_id: number,
  colecao_titulo: string,
  colecao_subtitulo: string,
  colecao_imagem: string,
  colecao_autor: string,
  created_at: ISODate
}

export interface IServiceCollectionBody {
  titulo: string;
  subtitulo: string;
  imagem: string;
  autor: string;
}

export interface IServiceCollectionResponse extends IServiceCollectionBody {
  id: number;
  created_at: ISODate;
}
