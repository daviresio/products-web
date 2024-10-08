import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['flat', 'outlined'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'danger',
          'success',
          'info',
          'warning',
        ],
      },
    },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimaryFlat = Template.bind({});
PrimaryFlat.args = {
  label: 'Primary Flat Button',
  variant: 'flat',
  color: 'primary',
  disabled: false,
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  label: 'Secondary Outlined Button',
  variant: 'outlined',
  color: 'secondary',
  disabled: false,
};

export const DangerDisabled = Template.bind({});
DangerDisabled.args = {
  label: 'Disabled Danger Button',
  variant: 'flat',
  color: 'danger',
  disabled: true,
};
