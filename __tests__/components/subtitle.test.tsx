import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import SubTitle from '@/components/subtitle';

describe('<Title>', () => {
  describe('Deve exibir os estilos corretos do titulo quando ele for renderizado', () => {
    it('Deve exibir um subtitulo com o tamanho da fonte 16 quando ele for renderizado', () => {
      const subtitle = faker.word.words(1);
      render(<SubTitle>{subtitle}</SubTitle>);

      expect(screen.getByText(subtitle)).toHaveStyle('font-size: 16px');
    });

    it('Deve exibir um subtitulo com a familia de fontes "Cormorant"', () => {
      const subtitle = faker.word.words(1);
      render(<SubTitle>{subtitle}</SubTitle>);

      expect(screen.getByText(subtitle)).toHaveStyle('font-family: "Cormorant"');
    });

    it('Deve exibir um subtitulo com a cor preta', () => {
      const subtitle = faker.word.words(1);
      render(<SubTitle>{subtitle}</SubTitle>);

      expect(screen.getByText(subtitle)).toHaveStyle('color: #000');
    });
  });
});
