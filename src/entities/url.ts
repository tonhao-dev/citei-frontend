const DEFAULT_IMAGE_URL = 'https://i.ibb.co/ZHDSnj4/foo.jpg';

export class ImageURL {
  public url = DEFAULT_IMAGE_URL;
  public isValid = false;

  constructor (url: string) {
    this.isValid = this.isValidUrl(url);
    if(!this.isValid) return;

    this.url = url;
  }

  private isValidUrl(url: string){
    try {
      const newUrl = new URL(url);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
  }
}
