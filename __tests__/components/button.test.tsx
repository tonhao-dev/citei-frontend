import { fireEvent, render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker';
import Button from '@/components/button';

describe('<Button />', () => {
  it('Deve ser igual ao snapshot salvo anteriormente quando o botão for renderizado', () => {
    const words = faker.word.words(3)
    render(<Button title={words} />);

    const button = screen.getByRole('button');

    expect(button).toMatchSnapshot();
  });


  describe('Deve exibir o botão corretamente quando ele for renderizado', () => {
    it('Deve exibir o título do botão quando o valor for passado via prop "Title"', () => {
      const words = faker.word.words(3)
      render(<Button title={words} />);

      const button = screen.getByText(words);

      expect(button).toBeInTheDocument();
    });

    it('Deve chamar a função de "onClick" quando o botão for clicado', () => {
      const onClick = jest.fn();
      render(<Button onClick={onClick} />);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(onClick).toBeCalledTimes(1);
    });
  });

  describe('Deve renderizar as variantes do botão corretamente quando o valor for passado via prop "variant"', () => {
    it('Deve renderizar um botão preto quando o valor passado via prop "variant" for igual a "black"', () => {
      render(<Button variant="black" />);

      const button = screen.getByRole('button');

      expect(button).toHaveStyle("background-color: #000; border-radius: 7px; border: 1px solid #fff;");
    });

    it('Deve renderizar um botão preto quando o valor passado via prop "variant" for igual a "white"', () => {
      render(<Button variant="white" />);

      const button = screen.getByRole('button');

      expect(button).toHaveStyle("background-color: #fff; border-radius: 7px; border: 1px solid #000;");
    });
   });
})
