import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['add', 'delete'],
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TypeButton: Story = {
  args: {
    onClick: () => {
      console.log('정상 작동');
    },
    type: 'add',
  },
};
