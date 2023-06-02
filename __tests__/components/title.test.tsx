import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import Title from '@/components/Title';

describe('<Title>', () => {
  describe('Deve exibir os estilos corretos do titulo quando ele for renderizado', () => {
    it('Deve exibir um titulo com o tamanho da fonte 36 quando ele for renderizado', () => {
      const title = faker.word.words(1);
      render(<Title>{title}</Title>);

      expect(screen.getByText(title)).toHaveStyle('font-size: 36px');
    });

    it('Deve exibir um titulo com a fonte do tipo "Cormorant"', () => {
      const title = faker.word.words(1);
      render(<Title>{title}</Title>);

      expect(screen.getByText(title)).toHaveStyle('font-family: "Cormorant"');
    });

    it('Deve exibir um titulo com a cor preta quando ele for renderizado', () => {
      const title = faker.word.words(1);
      render(<Title>{title}</Title>);

      expect(screen.getByText(title)).toHaveStyle('color: #000');
    })
  });
});
