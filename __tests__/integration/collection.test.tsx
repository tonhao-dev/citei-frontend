import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Collection from '../../src/containers/collection';
import { collection } from '../../__tests__/factory/collection';
import { collectionService as collectionServiceFactory } from '../../__tests__/factory/collectionService';

beforeAll(() => {
  jest.spyOn(window, 'alert').mockImplementation(() => { });
});

describe('/containers/collection', () => {
  describe('Deve exibir a tela de coleções corretamente quando nenhuma coleção for injetada', () => {
    it('Deve exibir o título da página quando ela for carregada', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.getByRole('heading', { name: 'Citei' })).toBeInTheDocument();
    });

    it('Deve renderizar uma lista de coleções vazia quando nenhuma coleção for injetada', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.queryByRole('list')).toBeEmptyDOMElement();
    });

    it('Deve exibir o botão de "Adicionar coleção"', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.getByText('Adicionar coleção')).toBeInTheDocument();
    });

    it('Deve exibir o subtítulo da página quando ela for carregada', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(
        screen.getByRole('heading', {
          name: 'Coleções, seu conjunto de citações em reunidos em lugar.',
        })
      );
    });

    it('Deve exibir um ícone de buscar quando a página for carregada', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });

      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.getByLabelText('search-icon')).toBeInTheDocument();
    });

    it('Deve esconder o título da página quando o icone de buscar for pressionado', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await act(async () => userEvent.click(screen.getByLabelText('search-icon')));

      expect(screen.queryByText('Citei')).toBe(null);
    });

    it('Deve esconder o subtítulo da página quando o icone de buscar for pressionado', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await act(async () => userEvent.click(screen.getByLabelText('search-icon')));

      expect(screen.queryByText('Coleções, seu cunjunto de citações em reunidos em lugar.')).toBe(
        null
      );
    });
  });

  describe('Deve renderizar as coleções corretamente quando elas forem injetadas via prop', () => {
    it('Deve exibir o nome das coleções que foram injetadas via serviço de coleções', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        collection({
          title: faker.word.words(2),
        })
      );
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue(collections),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      collections.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });
  });

  describe('Deve exibir corretamente o modal de adicionar coleção', () => {
    it('Deve exibir um campo para inserir o título da coleção', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByText('Adicionar coleção'));

      expect(screen.getByPlaceholderText('Título da coleção')).toBeVisible();
    });

    it('Deve exibir um campo para inserir o subtítulo da coleção', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByText('Adicionar coleção'));

      expect(screen.getByPlaceholderText('Subtítulo da coleção')).toBeVisible();
    });

    it('Deve exibir um campo para inserir link da imagem de capa da coleção', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByText('Adicionar coleção'));

      expect(screen.getByPlaceholderText('Link para imagem de capa')).toBeVisible();
    });

    it('Deve exibir um campo para inserir o nome do autor da coleção', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByText('Adicionar coleção'));

      expect(screen.getByPlaceholderText('Autor da coleção')).toBeVisible();
    });

    it('Deve exibir o botão de salvar a coleção', async () => {
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue([]),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByText('Adicionar coleção'));

      expect(screen.getByText('Salvar')).toBeVisible();
    });

    it('Deve esconder o modal quando o usuário clicar no botão "Salvar" após inserir todas as informações corretamente', async () => {
      const collectionService = collectionServiceFactory();
      const newCollection = collection();
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByText('Adicionar coleção'));
      await userEvent.type(screen.getByPlaceholderText('Título da coleção'), newCollection.title);
      await userEvent.type(
        screen.getByPlaceholderText('Subtítulo da coleção'),
        newCollection.subtitle
      );
      await userEvent.type(
        screen.getByPlaceholderText('Link para imagem de capa'),
        newCollection.image.url
      );
      await userEvent.type(screen.getByPlaceholderText('Autor da coleção'), newCollection.author);

      await userEvent.click(screen.getByRole('button', { name: 'Salvar' }));

      expect(window.alert).toBeCalledTimes(0);
      expect(screen.queryByText('Salvar')).toBe(null);
    });
  });

  describe('Deve manter o modal aberto quando o usuário clicar no botão salvar após inserir alguma informação incorreta', () => {
    it('Deve manter o modal aberto quando o usuário clicar no botão de Salvar coleção após não inserir o título da coleção', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        collection()
      );
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue(collections),
        isValidCollection: () => false,
      });
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByText('Adicionar coleção'));

      await userEvent.click(screen.getByText('Salvar'));

      expect(screen.getByText('Salvar')).toBeVisible();
    });
  });

  describe('Deve filtrar as coleções corretamente', () => {
    it('Deve exibir a coleção cujo titulo foi digitado no campo de busca', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 4, max: 10 }))).map(() =>
        collection({
          title: faker.word.words(2),
        })
      );
      const searchCollection = faker.helpers.arrayElement(collections);
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue(collections),
        filterCollections: (name, collections) =>
          collections.filter(collection => collection.title === name),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByLabelText('search-icon'));

      await userEvent.type(screen.getByRole('textbox'), searchCollection.title);

      expect(screen.getByText(searchCollection.title)).toBeInTheDocument();
    });

    it('Deve esconder as coleções cujo título não é igual ao título digitado no campo de busca', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 4, max: 10 }))).map(() =>
        collection({
          title: faker.word.words(2),
        })
      );
      const [first, second] = faker.helpers.arrayElements(collections, 2);
      const collectionService = collectionServiceFactory({
        getValidCollections: jest.fn().mockResolvedValue(collections),
        filterCollections: (name, collections) =>
          collections.filter(collection => collection.title === name),
      });
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByLabelText('search-icon'));

      await userEvent.type(screen.getByRole('textbox'), first.title);

      expect(screen.queryByText(second.title)).toBe(null);
    });
  });
});
