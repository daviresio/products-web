import { Meta, StoryFn } from '@storybook/react';
import Badge from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning'],
      },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = (args) => <Badge {...args} />;

export const Info = Template.bind({});
Info.args = {
  children: 'Info Badge',
  variant: 'info',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success Badge',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Badge',
  variant: 'warning',
};
