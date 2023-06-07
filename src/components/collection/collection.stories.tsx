import type { Meta, StoryObj } from '@storybook/react';

import Collection from '.';
import { collection } from '../../../__tests__/factory/collection';

const meta: Meta<typeof Collection> = {
  title: 'Components/Collection',
  component: Collection,
  tags: ['autodocs'],
};

export default meta;

type SearchStory = StoryObj<typeof Collection>;

export const CollectionStory: SearchStory = {
  args: {
    collection: collection({
      title: 'Título da coleção',
      author: 'Luis',
      subtitle: 'Subtítulo da coleção',
    })
  },
};


