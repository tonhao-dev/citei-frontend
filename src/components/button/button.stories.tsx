import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type ButtonStory = StoryObj<typeof Button>;

export const BlackButton: ButtonStory = {
  args: {
    title: 'click me',
    variant: 'black',
  },
};

export const WhiteButton: ButtonStory = {
  args: {
    title: 'click me',
    variant: 'white',
  },
};
