import { ICollection } from "src/interfaces/collection";
import { ImageURL } from "./url";

export class Collection implements ICollection {
  public title = 'Título da coleção';
  public author = '';
  public subtitle = 'Subtítulo da coleção';
  public image = new ImageURL('');
  public isValid = false;

  constructor(title: string, author: string, subtitle: string, image: ImageURL) {
    this.title = title;
    this.author = author;
    this.subtitle = subtitle;
    this.image = image;

    this.validate();
  }

  private validate(){
    this.isValid = this.isValidTitle() && this.isValidSubTitle() && this.isValidAuthor() && this.isValidImage();
  }

  private isValidTitle(){
    return this.title !== '';
  }

  private isValidSubTitle(){
    return this.subtitle !== '';
  }

  private isValidAuthor(){
    return this.author !== '';
  }

  private isValidImage(){
    return this.image.isValid;
  }
}
