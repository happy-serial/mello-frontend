import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../public/styles/colors/colors';

import { Header } from '../../components/layout/header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs'],  
  argTypes: {
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
  },
};

