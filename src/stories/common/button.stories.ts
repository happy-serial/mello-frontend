import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../public/styles/colors/colors';

import { Button } from '../../components/common/button';

const meta = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs'],  
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    label: '로그인',
    backgroundColor: Colors.transparent,
    color: Colors.pink,
    borderColor: Colors.pink,
  },
};

export const Join: Story = {
  args: {
    label: '회원가입',
    backgroundColor: Colors.transparent,
    color: Colors.black,
  },
};
