import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Collection from '../../src/components/collection';
import { collection } from '../factory/collection';
import { ImageURL } from '../../src/entities/url';

describe('<Collection>', () => {
  describe('Deve exibir uma coleção corretamente quando as informações passadas forem válidas', () => {
    it('Deve exibir o título da coleção quando ele for passado na prop "title"', () => {
      const title = faker.word.words(2);
      render(<Collection collection={collection({ title })} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('Deve exibir o subtítulo da coleção quando ele for passado na prop "subtitle"', () => {
      const subtitle = faker.word.words(7);
      render(<Collection collection={collection({ subtitle })} />);

      expect(screen.getByText(subtitle)).toBeInTheDocument();
    });

    it('Deve exibir o nome do autor da coleção quando ele for passado na prop "author"', () => {
      const author = faker.person.fullName();
      render(<Collection collection={collection({ author })} />);

      expect(screen.getByText(author)).toBeInTheDocument();
    });

    it('Deve exibir o botão de editar coleção quando o componente for renderizado', () => {
      render(<Collection collection={collection()} />);

      expect(screen.getByText('Editar')).toBeInTheDocument();
    });

    it('Deve exibir o botão de excluir coleção quando o componente for renderizado', () => {
      render(<Collection collection={collection()} />);

      expect(screen.getByText('Excluir')).toBeInTheDocument();
    });

    it('Deve exibir uma imagem com o atributo src igual ao valor passado na prop "image"', () => {
      const src = faker.image.url();
      render(<Collection collection={collection({ image: new ImageURL(src) })} />);

      expect(screen.getByRole('img').getAttribute('src')).toBe(src);
    });
  });

  describe('Deve executar corretamente as ações da coleção quando o usuário clicar nelas', () => {
    it('Deve chamar a função de editar passada via prop "onEdit" quando o usuário clicar no botão Editar', async () => {
      const onEdit = jest.fn();
      render(<Collection collection={collection()} onEdit={onEdit} />);

      await userEvent.click(screen.getByRole('button', { name: 'Editar' }));

      expect(onEdit).toBeCalledTimes(1);
    });

    it('Deve chamar a função de excluir passada via prop "onDelete" quando o usuário clicar no botão de Excluir', async () => {
      const onDelete = jest.fn();
      render(<Collection collection={collection()} onDelete={onDelete} />);

      await userEvent.click(screen.getByRole('button', { name: 'Excluir' }));

      expect(onDelete).toBeCalledTimes(1);
    });
  });
});
