import { faker } from '@faker-js/faker';
import { ImageURL } from '../../src/entities/url';

describe('entities/url', () => {
  describe('isValid', () => {
    it('Deve retornar true quando uma URL válida for enviada', () => {
      const url = faker.image.urlPlaceholder();

      expect(new ImageURL(url).isValid).toBe(true);
    });

    it('Deve retornar false quando uma URL inválida for enviada', () => {
      const url = faker.person.fullName();

      expect(new ImageURL(url).isValid).toBe(false);
    });

    it('Deve retornar false quando uma URL for criada com uma string vazia', () => {
      const url = '';

      expect(new ImageURL(url).isValid).toBe(false);
    });
  });
});
