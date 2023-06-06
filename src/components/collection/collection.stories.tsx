import type { Meta, StoryObj } from '@storybook/react';

import Collection from '.';

const meta: Meta<typeof Collection> = {
  title: 'Components/Collection',
  component: Collection,
  tags: ['autodocs'],
};

export default meta;

type SearchStory = StoryObj<typeof Collection>;

export const CollectionStory: SearchStory = {
  args: {
    author: 'Luis Antonio'
  },
};


