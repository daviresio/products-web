import { Meta, StoryFn } from '@storybook/react';
import Rating from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    rating: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 0.1,
      },
    },
    amountOfRatings: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<typeof Rating>;

const Template: StoryFn<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  rating: 4.5,
  amountOfRatings: 123,
};
