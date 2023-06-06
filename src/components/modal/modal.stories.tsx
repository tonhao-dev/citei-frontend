import type { Meta, StoryObj } from '@storybook/react';

import Modal from '.';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type ModalStory = StoryObj<typeof Modal>;

export const OpenModal: ModalStory = {
  args: {
    visible: true,
    children: (
      <h1>Luis Antonio</h1>
    )
  },
};


