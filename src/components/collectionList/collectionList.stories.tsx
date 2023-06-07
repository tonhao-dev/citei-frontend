import type { Meta, StoryObj } from '@storybook/react';

import CollectionList from '.';
import { collection } from '../../../__tests__/factory/collection';

const meta: Meta<typeof CollectionList> = {
  title: 'Components/CollectionList',
  component: CollectionList,
  tags: ['autodocs'],
};

export default meta;

type CollectionListStory = StoryObj<typeof CollectionList>;

export const CollectionListStory: CollectionListStory = {
  args: {
    collections: Array.from(Array(4)).map(() => collection({
      title: 'Título da coleção',
      author: 'Luis',
      subtitle: 'Subtítulo da coleção',
    }))
  },
};


