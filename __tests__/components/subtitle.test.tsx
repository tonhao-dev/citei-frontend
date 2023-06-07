import React from 'react';
import { render, screen } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import SubTitle from '../../src/components/subtitle';

describe('<SubTitle>', () => {
  it('Deve exibir o subtítulo com o valor passado no children', () => {
    const subtitle = faker.lorem.sentence();

    render(<SubTitle>{subtitle}</SubTitle>);

    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
