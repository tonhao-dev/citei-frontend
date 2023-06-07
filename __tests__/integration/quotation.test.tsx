import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Quotation from '../../src/containers/quotation'; // implement quotation
import { quotation } from '../factory/quotation';

describe('/containers/quotation', () => {
  describe('Deve renderizar a tela de citação corretamente quando nenhuma citação estiver visível', () => {
    it('Deve renderizar o título da página de citações quando ela for renderizada', () => {
      const fetch = jest.fn(() => Promise.resolve([]));
      render(<Quotation fetchData={fetch} />);

      expect(screen.getByText('Citei')).toBeInTheDocument();
    });

    it('Deve renderizar o subtítulo da página de citações quando ela for renderizada', () => {
      const fetch = jest.fn(() => Promise.resolve([]));
      render(<Quotation fetchData={fetch} />);

      expect(screen.getByText('Torne-se um dev “by the book”')).toBeInTheDocument();
    });

    it('Deve renderizar o botão de adicionar citação quando a página for carregada', () => {
      const fetch = jest.fn(() => Promise.resolve([]));
      render(<Quotation fetchData={fetch} />);

      expect(screen.getByText('Adicionar citação')).toBeInTheDocument();
    });
  });

  describe('Deve renderizar a tela de citação corretamente quando uma função de mock de citações for injetada', () => {
    it('Deve renderizar uma lista de citações passada via prop "fetchData"', () => {
      const quotations = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        quotation({ collection: 'colecao' })
      );
      const fetch = jest.fn(() => Promise.resolve(quotations));
      render(<Quotation fetchData={fetch} />);

      quotations.forEach(({ quote }) => expect(screen.getByText(quote)).toBeInTheDocument());
    });
  });

  describe('Deve renderizar corretamente o modal de Adicionar citação', () => {
    it('Deve exibir o modal de adicionar citação corretamente quando o usuário clicar no botão de "Adicionar citação"', async () => {
      const quotations = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        quotation({ collection: 'colecao' })
      );
      const fetch = jest.fn(() => Promise.resolve(quotations));
      render(<Quotation fetchData={fetch} />);

      await userEvent.click(screen.getByText('Adicionar citação'));

      expect(screen.getByText('Salvar')).toBeVisible();
    });

    it('Deve exibir um input de texto dentro do modal de adicionar citação quando o usuário clicar no botão de "Adicionar citação"', async () => {
      const quotations = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        quotation({ collection: 'colecao' })
      );
      const fetch = jest.fn(() => Promise.resolve(quotations));
      render(<Quotation fetchData={fetch} />);

      await userEvent.click(screen.getByText('Adicionar citação'));

      expect(screen.getByPlaceholderText('Texto da citação')).toBeVisible();
    });

    it('Deve continuar exibindo o modal caso o usuário clique no botão de salvar citação sem inserir nenhum texto no campo de citação', async () => {
      const fetch = jest.fn(() => Promise.resolve([]));
      render(<Quotation fetchData={fetch} />);
      await userEvent.click(screen.getByText('Adicionar citação'));

      await userEvent.click(screen.getByText('Salvar'));

      expect(screen.getByText('Salvar')).toBeVisible();
    });
  });

  describe('Deve filtrar as citações corretamente', () => {
    it('Deve seguir exibindo todas as citações quando o usuário não inserir nenhum texto após clicar no icone de buscar', async () => {
      const quotations = Array.from(Array(faker.number.int({ min: 1, max: 10 }))).map(() =>
        quotation({ collection: 'colecao' })
      );
      const fetch = jest.fn(() => Promise.resolve(quotations));
      render(<Quotation fetchData={fetch} />);

      await userEvent.click(screen.getByTestId('search-icon'));

      quotations.forEach(({ quote }) => expect(screen.getByText(quote)).toBeInTheDocument());
    });

    it('Deve exibir somente a citação cujo texto for inserido no campo de buscar citação', async () => {
      const quotations = Array.from(Array(faker.number.int({ min: 5, max: 10 }))).map(() =>
        quotation({ collection: 'colecao' })
      );
      const fetch = jest.fn(() => Promise.resolve(quotations));
      const [first, second] = faker.helpers.arrayElements(quotations, 2);
      render(<Quotation fetchData={fetch} />);

      await userEvent.click(screen.getByTestId('search-icon'));
      await userEvent.type(screen.getByRole('textbox'), first.quote);

      expect(screen.getByText(first.quote)).toBeInTheDocument();
      expect(screen.getByText(second.quote)).not.toBeInTheDocument();
    });
  });
});
