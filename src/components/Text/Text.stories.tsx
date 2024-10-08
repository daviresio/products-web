import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'subtitle',
          'body-light',
          'body-bold',
          'body-large',
          'label',
          'caption',
          'label-small',
        ],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'text',
          'neutral',
          'success',
          'danger',
          'gray',
          'white',
          'warning',
        ],
      },
    },
    strikethrough: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Example text',
  variant: 'body-light',
  color: 'text',
  strikethrough: false,
};
