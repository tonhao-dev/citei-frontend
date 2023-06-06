import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Collection from '../../src/containers/collection';
import { collection } from '../../__tests__/factory/collection';
import { ICollectionService } from '../../src/service/collection';

describe('/containers/collection', () => {
  describe('Deve exibir a tela de coleções corretamente quando nenhuma coleção for injetada', () => {
    it('Deve exibir o título da página quando ela for carregada', async () => {
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue([]),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.getByRole('heading', { name: 'Citei' })).toBeInTheDocument();
    });

    it('Deve renderizar uma lista de coleções vazia quando nenhuma coleção for injetada', async () => {
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue([]),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.queryByRole('list')).toBeEmptyDOMElement();
    });

    it('Deve exibir o botão de "Adicionar coleção"', async () => {
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue([]),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));

      expect(screen.getByText('Adicionar coleção')).toBeInTheDocument();
    });
  });

  describe('Deve renderizar as coleções corretamente quando elas forem injetadas via prop', () => {
    it('Deve exibir o nome das coleções que foram injetadas via serviço de coleções', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() => collection());
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue(collections),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));

      collections.forEach(({ title }) => expect(screen.getByText(title)).toBeInTheDocument());
    });
  });

  describe('Deve exibir corretamente o modal de adicionar coleção', () => {
    describe('Deve exibir o modal de adicionar coleção quando o usuário clicar no botão "Adicionar coleção"', () => {
      it('Deve exibir um campo para inserir o título da coleção', async () => {
        const collectionService: ICollectionService = {
          getValidCollections: jest.fn().mockResolvedValue([]),
        }
        await act(async () => render(<Collection collectionService={collectionService} />));

        await userEvent.click(screen.getByText('Adicionar coleção'));

        expect(screen.getByPlaceholderText('Título da coleção')).toBeVisible();
      });

      it('Deve exibir um campo para inserir o subtítulo da coleção', async () => {
        const collectionService: ICollectionService = {
          getValidCollections: jest.fn().mockResolvedValue([]),
        }
        await act(async () => render(<Collection collectionService={collectionService} />));

        await userEvent.click(screen.getByText('Adicionar coleção'));

        expect(screen.getByPlaceholderText('Subtítulo da coleção')).toBeVisible();
      });

      it('Deve exibir um campo para inserir link da imagem de capa da coleção', async () => {
        const collectionService: ICollectionService = {
          getValidCollections: jest.fn().mockResolvedValue([]),
        }
        await act(async () => render(<Collection collectionService={collectionService} />));

        await userEvent.click(screen.getByText('Adicionar coleção'));

        expect(screen.getByPlaceholderText('Link para imagem de capa')).toBeVisible();
      });

      it('Deve exibir um campo para inserir o nome do autor da coleção', async () => {
        const collectionService: ICollectionService = {
          getValidCollections: jest.fn().mockResolvedValue([]),
        }
        await act(async () => render(<Collection collectionService={collectionService} />));

        await userEvent.click(screen.getByText('Adicionar coleção'));

        expect(screen.getByPlaceholderText('Autor da coleção')).toBeVisible();
      });

      it('Deve exibir o botão de salvar a coleção', async () => {
        const collectionService: ICollectionService = {
          getValidCollections: jest.fn().mockResolvedValue([]),
        }
        await act(async () => render(<Collection collectionService={collectionService} />));

        await userEvent.click(screen.getByText('Adicionar coleção'));

        expect(screen.getByText('Salvar')).toBeVisible();
      });
    });
  });

  describe('Deve manter o modal aberto quando o usuário clicar no botão salvar após inserir alguma informação incorreta', () => {
    it('Deve manter o modal aberto quando o usuário clicar no botão de Salvar coleção após não inserir o título da coleção', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() => collection());
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue(collections),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByText('Adicionar coleção'));

      await userEvent.click(screen.getByText('Salvar'));

      expect(screen.getByText('Salvar')).toBeVisible();
    });
  });

  describe('Deve filtrar as coleções corretamente', () => {
    it('Deve exibir a coleção cujo titulo foi digitado no campo de busca', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 4, max: 10 }))).map(() => collection());
      const searchCollection = faker.helpers.arrayElement(collections);
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue(collections),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));
      await userEvent.click(screen.getByTestId('search-icon'));

      await userEvent.type(screen.getByRole('textbox'), searchCollection.title);

      expect(screen.getByText(searchCollection.title)).toBeInTheDocument();
    });

    it('Deve esconder as coleções cujo título não é igual ao título digitado no campo de busca', async () => {
      const collections = Array.from(Array(faker.number.int({ min: 4, max: 10 }))).map(() => collection());
      const [first, second] = faker.helpers.arrayElements(collections, 2);
      const collectionService: ICollectionService = {
        getValidCollections: jest.fn().mockResolvedValue(collections),
      }
      await act(async () => render(<Collection collectionService={collectionService} />));

      await userEvent.click(screen.getByTestId('search-icon'));

      await userEvent.type(screen.getByRole('textbox'), first.title);

      expect(screen.getByText(second.title)).not.toBeInTheDocument();
    });
  });
});
