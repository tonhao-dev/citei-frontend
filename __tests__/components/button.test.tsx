import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker';
import Button from '@/components/button'

describe('<Button />', () => {
  describe('Deve renderizar o botão corretamente', () => {
    it('Deve ser igual ao snapshot', () => {
      const words = faker.word.words(3)
      render(<Button title={words} />);

      const button = screen.getByRole('button');

      expect(button).toMatchSnapshot();
    });

    it('Deve exibir o título do botão', () => {
      const words = faker.word.words(3)
      render(<Button title={words} />);

      const button = screen.getByText(words);

      expect(button).toBeInTheDocument();
    });

    it('Deve chamar a função de "onClick"', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('Deve renderizar as variantes do botão', () => {
    it("Variante black", () => {
      render(<Button variant="black" />);

      const button = screen.getByRole('button');

      expect(button).toHaveStyle("background-color: #000; border-radius: 7px; border: 1px solid #fff;");
    });

    it("Variante white", () => {
      render(<Button variant="white" />);

      const button = screen.getByRole('button');

      expect(button).toHaveStyle("background-color: #fff; border-radius: 7px; border: 1px solid #000;");
    });
   });
})
