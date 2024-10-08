import { Meta, StoryFn } from '@storybook/react';
import Shimmer from './Shimmer';

export default {
  title: 'Components/Shimmer',
  component: Shimmer,
  argTypes: {
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta<typeof Shimmer>;

const Template: StoryFn<typeof Shimmer> = (args) => <Shimmer {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: '16px',
  borderRadius: '4px',
};
