import type { Meta, StoryObj } from '@storybook/react';

import SubTitle from '.';

const meta: Meta<typeof SubTitle> = {
  title: 'Components/SubTitle',
  component: SubTitle,
  tags: ['autodocs'],
};

export default meta;

type SubTitleStory = StoryObj<typeof SubTitle>;

export const Subtitle: SubTitleStory = {
  args: {
    children: 'Sub Título'
  },
};
