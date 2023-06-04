import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Search from '@/components/search';

describe('<Search />', () => {
  describe('Deve exibir o componente de busca corretamente quando ele for renderizado', () => {
    it('Deve exibir um input text editável quando o icone de busca for clicado', async () => {
      render(<Search />);

      await userEvent.click(screen.getByTestId('search-icon'));

      expect(screen.getByRole('input')).toBeVisible();
    });

    it('Deve exibir um icone de close quando o icone de busca for clicado', async () => {
      render(<Search />);

      await userEvent.click(screen.getByTestId('search-icon'));

      expect(screen.getByTestId('search-icon')).toBeVisible();
    })

    it('Deve exibir o texto digitado pelo usuário no input de texto exibido quando o icone de busca for clicado', async () => {
      const title = faker.word.words(1);
      render(<Search />);

      await userEvent.click(screen.getByTestId('search-icon'));
      await userEvent.type(screen.getByRole('textbox'), title);

      expect(title).toBeInTheDocument();
    });
  });
})
