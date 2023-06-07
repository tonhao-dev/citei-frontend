import { Collection } from '../../src/entities/collection';
import { faker } from '@faker-js/faker';
import { ICollection } from '../../src/interfaces/collection';
import { ImageURL } from '../../src/entities/url';

describe('entities/collection', () => {
  describe('Deve retornar false quando uma coleção for instanciada com algum valor invalido', () => {
    it('Deve retornar false quando uma coleção for criada com o Título vazio', () => {
      const arrange: ICollection = {
        title: '',
        author: faker.person.fullName(),
        image: new ImageURL(faker.image.url()),
        subtitle: faker.word.words(7),
      };

      const collection = new Collection(
        arrange.title,
        arrange.author,
        arrange.subtitle,
        arrange.image
      );

      expect(collection.isValid).toBe(false);
    });

    it('Deve retornar false quando uma coleção for criada com o subtítulo vazio', () => {
      const arrange: ICollection = {
        title: faker.word.words(2),
        author: faker.person.fullName(),
        image: new ImageURL(faker.image.url()),
        subtitle: '',
      };

      const collection = new Collection(
        arrange.title,
        arrange.author,
        arrange.subtitle,
        arrange.image
      );

      expect(collection.isValid).toBe(false);
    });

    it('Deve retornar false quando uma coleção é criada com uma ImageURL invalida', () => {
      const arrange: ICollection = {
        title: faker.word.words(2),
        author: faker.person.fullName(),
        image: new ImageURL(''),
        subtitle: faker.word.words(7),
      };

      const collection = new Collection(
        arrange.title,
        arrange.author,
        arrange.subtitle,
        arrange.image
      );

      expect(collection.isValid).toBe(false);
    });
  });

  it('Deve retornar o valor true na propriedade isValid quando uma coleção for criada com todos os valores válidos', () => {
    const arrange: ICollection = {
      title: faker.word.words(2),
      subtitle: faker.word.words(7),
      author: faker.person.fullName(),
      image: new ImageURL(faker.image.url()),
    };

    const collection = new Collection(
      arrange.title,
      arrange.author,
      arrange.subtitle,
      arrange.image
    );

    expect(collection.isValid).toBe(true);
  });
});
