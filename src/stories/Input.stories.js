import { Input } from '../Components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    size: 'medium',
    placeholder: 'Default input'
  },
};

export const SearchPrimary = {
  args: {
    size: 'medium',
    placeholder: 'Primary search input',
    search: 'search-primary',
  },
};

export const SearchSecondary = {
  args: {
    size: 'medium',
    placeholder: 'Secondary search input',
    search: 'search-secondary',
  },
};