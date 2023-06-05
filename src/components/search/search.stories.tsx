import type { Meta, StoryObj } from '@storybook/react';

import Search from '.';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
};

export default meta;

type SearchStory = StoryObj<typeof Search>;

export const SearchClose: SearchStory = {
  args: {
    onChange: () => { },
    onToggle: () => { }
  },
};

export const SearchOpen: SearchStory = {
  args: {
    open: true,
    onChange: () => { },
    onToggle: () => { }
  },
};

