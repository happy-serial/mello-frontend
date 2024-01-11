import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../public/styles/colors/colors';

import { Profile } from '../../components/common/profile';

const meta = {
  title: 'Common/Profile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs']
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  args: {
    size: "large",
    username: "김상수"
  },
};

export const Mobile: Story = {
  args: {
    size: "small",
    username: "서범수"
  },
};