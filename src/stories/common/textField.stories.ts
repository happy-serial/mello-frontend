import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../public/styles/colors/colors';

import { TextField } from './../../components/common/textField';

const meta = {
  title: 'Common/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },  
  tags: ['autodocs'],  
  argTypes: {
    borderColor: { control: 'color' },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    placeholder: "Email Address",
    borderColor: Colors.gray,
    onChange: (e) => console.log(e.target.value),
  },
};
