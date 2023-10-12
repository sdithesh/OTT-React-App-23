import type { Meta, StoryObj } from '@storybook/react';
// import { COLORS,FONT } from '../../styles/constants';
import Button from './Button';
import './Button.scss';
import '../../index.scss'

const meta = {
  title: 'compoment/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Register: Story = {
  args: {
    className:'signIn-button',
    value:'Register',
  },
};

export const SignIn: Story = {
    args: {
      className:'signUp-button',
      value:'signIn',
    },
  };

  export const SignUp: Story = {
    args: {
      className:'register',
      value:'signIn',
    },
  };
