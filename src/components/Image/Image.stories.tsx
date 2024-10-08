import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Image from './Image';
import Shimmer from '../Shimmer/Shimmer';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
} as Meta<typeof Image>;

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  placeholder: <Shimmer width="150px" height="150px" />,
};
