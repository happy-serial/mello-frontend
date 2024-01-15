import type { Meta, StoryObj } from '@storybook/react';
import { Colors } from '../../../public/styles/colors/colors';

import { Background } from '../../components/auth/background';

const meta = {
  title: 'Auth/Background',
  component: Background,
  parameters: {
    layout: 'centered',
  },  
  tags: ['autodocs']
} satisfies Meta<typeof Background>

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
    args: {
        purpose: "login",
        backgroundColor: "black",
        particleCount: 2400,
        size: 0.07,
        segment: 4,
        lightColor: Colors.pink,
        animateDirection: "twist",
        animateSpeed: 0.0007
      },
};