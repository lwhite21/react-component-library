import { Button } from '../Components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Button',
    size: 'medium',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Button',
    size: 'medium',
  },
};