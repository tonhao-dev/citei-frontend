import type { Meta, StoryObj } from '@storybook/react';

import Title from '.';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;

type TitleStory = StoryObj<typeof Title>;

export const TitleStory: TitleStory = {
  args: {
    children: 'Citei',
  },
};
