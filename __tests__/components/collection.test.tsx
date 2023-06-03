import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Collection from '@/components/collection';

describe('<Collection>', () => {
  describe('Deve exibir uma coleção corretamente quando as informações passadas forem válidas', () => {
    it('Deve exibir o título da coleção quando ele for passado na prop "title"', () => {
      const title = faker.word.words(2);
      render(<Collection title={title} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('Deve exibir o subtítulo da coleção quando ele for passado na prop "subtitle"', () => {
      const subtitle = faker.word.words(7);
      render(<Collection subtitle={subtitle} />);

      expect(screen.getByText(subtitle)).toBeInTheDocument();
    });

    it('Deve exibir o subtítulo da coleção na cor cinza quando ele for passado na prop "subtitle"', () => {
      const subtitle = faker.word.words(7);
      render(<Collection subtitle={subtitle} />);

      expect(screen.getByText(subtitle)).toHaveStyle('color: #7A7A7A');
    });

    it('Deve exibir o nome do autor da coleção quando ele for passado na prop "author"', () => {
      const author = faker.person.fullName();
      render(<Collection author={author} />);

      expect(screen.getByText(author)).toBeInTheDocument();
    });

    it('Deve exibir o botão de editar coleção quando o componente for renderizado', () => {
      render(<Collection />);

      expect(screen.getByText('Editar')).toBeInTheDocument();
    });

    it('Deve exibir o botão de excluir coleção quando o componente for renderizado', () => {
      render(<Collection />);

      expect(screen.getByText('Excluir')).toBeInTheDocument();
    });

    it('Deve exibir uma imagem com o atributo src igual ao valor passado na prop "image"', () => {
      const src = faker.image.url();
      render(<Collection image={src} />);

      expect(screen.getByRole('img').getAttribute('src')).toBe(src);
    });
  });

  describe('Deve exibir os valores default quando as informações corretas não forem passadas vias prop', () => {
    it('Deve exibir o texto "Título da coleção" quando uma coleção for renderizada sem título', () => {
      render(<Collection />);

      expect(screen.getByText('Título da coleção')).toBeInTheDocument();
    });

    it('Deve exibir o texto "Subtítulo da coleção" quando uma coleção for renderizada sem subtítulo', () => {
      render(<Collection />);

      expect(screen.getByText('Subtítulo da coleção')).toBeInTheDocument();
    });

    it('Deve exibir uma imagem padrão quando um link inválido for passado via prop "image"', () => {
      const DEFAULT_IMAGE_URL = 'https://loremflickr.com/cache/resized/65535_52221967454_bd4b0a44d1_n_320_240_nofilter.jpg';
      render(<Collection image={faker.person.fullName()} />);

      expect(screen.getByRole('img').getAttribute('src')).toBe(DEFAULT_IMAGE_URL);
    });
  });

  describe('Deve executar corretamente as ações da coleção quando o usuário clicar nelas', () => {
    it('Deve chamar a função de editar passada via prop "onEdit" quando o usuário clicar no botão Editar', async () => {
      const onEdit = jest.fn();
      render(<Collection onEdit={onEdit} />);

      await userEvent.click(screen.getByText('Editar'));

      expect(onEdit).toBeCalledTimes(1);
    });

    it('Deve chamar a função de excluir passada via prop "onDelete" quando o usuário clicar no botão de Excluir', async () => {
      const onDelete = jest.fn();
      render(<Collection onDelete={onDelete} />);

      await userEvent.click(screen.getByText('Excluir'));

      expect(onDelete).toBeCalledTimes(1);
    });
  });
})
