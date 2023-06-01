import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Search from '@/components/search';

describe('<Search />', () => {
  describe('Deve exibir o componente de busca corretamente quando ele for renderizado', () => {
    it('Deve exibir um ícone de lupa quando nenhuma prop for injetada', () => {
      render(<Search />);

      expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });

    it('Deve exibir um título quando um valor for passado na prop "Title"', () => {
      const title = faker.word.words(1);

      render(<Search title={title} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('Deve exibir um subtítulo quando um valor for passado na prop "SubTitle"', () => {
      const subtitle = faker.word.words(1);

      render(<Search subtitle={subtitle} />);

      expect(screen.getByText(subtitle)).toBeInTheDocument();
    });
  });

  describe('Deve exibir um campo de texto quando o icone de busca for clicado', () => {
    it('Deve exibir um input text editável quando o icone de busca for clicado', async () => {
      render(<Search />);

      await userEvent.click(screen.getByTestId('search-icon'));

      expect(screen.getByRole('input')).toBeVisible();
    });

    it('Deve exibir o texto digitado pelo usuário no input de texto exibido quando o icone de busca for clicado', async () => {
      const title = faker.word.words(1);
      render(<Search />);

      await userEvent.click(screen.getByTestId('search-icon'));
      await userEvent.type(screen.getByRole('input'), title);

      expect(title).toBeInTheDocument();
    })
  });
})
