import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import Input from '../../src/components/input';

describe('<Input />', () => {
  describe('Deve renderizar o input corretamente', () => {
    it('Deve renderizar o input com o texto que for passado via prop "value"', () => {
      const text = faker.word.words(2);

      render(<Input value={text} onChange={() => {}} />);

      expect(screen.getByDisplayValue(text)).toBeInTheDocument();
    });

    it('Deve exibir o texto que for digitado pelo usuário dentro do input', async () => {
      const text = faker.word.words(2);
      render(<Input value={text} onChange={() => {}} />);

      await userEvent.type(screen.getByRole('textbox'), text);

      expect(screen.getByDisplayValue(text)).toBeInTheDocument();
    });
  });
});
