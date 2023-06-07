import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type InputStory = StoryObj<typeof Input>;

export const ClearInput: InputStory = {
  args: {},
};

export const InputWithText: InputStory = {
  args: {
    value: 'Luis Antonio'
  },
};
