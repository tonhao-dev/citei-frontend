import React from 'react';
import { render } from '@testing-library/react';
import Modal from '../../src/components/modal';

describe('<Modal />', () => {
  describe('Deve renderizar o modal corretamente', () => {
    it('Deve esconder o modal quando ele for renderizado com a prop visible igual a false', () => {
      const visible = false;
      const { container } = render(<Modal visible={visible} />);

      expect(container).toBeEmptyDOMElement();
    });

    it('Deve exibir o modal quando o ele for renderizado com a prop visible igual a true', () => {
      const visible = true;
      const { container } = render(<Modal visible={visible} />);

      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
