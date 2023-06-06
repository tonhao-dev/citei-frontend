const DEFAULT_IMAGE_URL = 'https://i.ibb.co/ZHDSnj4/foo.jpg';

export class ImageURL {
  public url = DEFAULT_IMAGE_URL;
  public isValid = false;

  constructor (url: string) {
    this.url = url;
    this.isValid = this.isValidUrl()
  }

  private isValidUrl(){
    try {
      const newUrl = new URL(this.url);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
  }
}
