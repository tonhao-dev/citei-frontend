import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Quotation from '../../src/components/quotation'; // implement quotation

describe('<Quotation>', () => {
  describe('Deve deixar de exibir as informações quando elas não forem passadas para o componente', () => {
    it('Deve deixar de renderizar o parágrafo da citação quando nada for passado no atributo "quote"', () => {
      render(<Quotation />);

      expect(screen.getByTitle('quote-title')).not.toBeInTheDocument();
    });

    it('Deve deixar de renderizar o paragrafo com o nome do autor quando essa informação não for passada', () => {
      render(<Quotation />);

      expect(screen.getByTitle('quote-author')).not.toBeInTheDocument();
    });
  });

  describe('Deve renderizar as informações que foram passadas para o componente corretamente', () => {
    it('Deve exibir a citação que for passada no atributo "quote"', () => {
      const quote = faker.word.words(10);
      render(<Quotation quote={quote} />);

      expect(screen.getByText(quote)).toBeInTheDocument();
    });

    it('Deve exibir o nome do autor que for passado no atributo "author"', () => {
      const author = faker.person.fullName();
      render(<Quotation author={author} />);

      expect(screen.getByText(author)).toBeInTheDocument();
    });

    it('Deve exibir o nome da coleção quando ela for passada no atributo "collection"', () => {
      const collection = faker.word.words(1);
      render(<Quotation collection={collection} />);

      expect(screen.getByText(collection)).toBeInTheDocument();
    });

    it('Deve exibir o icone de copiar citação', () => {
      render(<Quotation />);

      expect(screen.getByTestId('quotation-copy')).toBeInTheDocument();
    });

    it('Deve exibir o icone de compartilhar a citação', () => {
      render(<Quotation />);

      expect(screen.getByTestId('quotation-share')).toBeInTheDocument();
    });
  });

  describe('Deve executar corretamente as ações quando o usuário clicar na citação', () => {
    it('Deve executar a função de copiar citação quando o usuário der um double clique no texto da citação', async () => {
      const quote = faker.word.words(10);
      const onCopy = jest.fn();
      render(<Quotation quote={quote} onCopy={onCopy} />);

      await userEvent.dblClick(screen.getByText(quote));

      expect(onCopy).toBeCalledTimes(1);
    });

    it('Deve executar a função de copiar citação quando o usuário clicar no ícone de copiar', async () => {
      const quote = faker.word.words(10);
      const onCopy = jest.fn();
      render(<Quotation quote={quote} onCopy={onCopy} />);

      await userEvent.click(screen.getByTestId('quotation-copy'));

      expect(onCopy).toBeCalledTimes(1);
    });

    it('Deve executar a função de compartilhar citação quando o usuário clicar no ícone de compartilhar', async () => {
      const quote = faker.word.words(10);
      const onShare = jest.fn();
      render(<Quotation quote={quote} onShare={onShare} />);

      await userEvent.click(screen.getByTestId('quotation-share'));

      expect(onShare).toBeCalledTimes(1);
    });
  });
});
