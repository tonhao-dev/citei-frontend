export class ImageURL {
  private url = '';

  constructor (url: string) {
    this.url = url;
  }

  public isValid() {
    try {
      const newUrl = new URL(this.url);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
  }
}
