import { Meta, StoryFn } from '@storybook/react';
import Column from './Column';

export default {
  title: 'Layout/Column',
  component: Column,
  argTypes: {
    alignItems: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'stretch'],
      },
    },
    justifyContent: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end', 'between', 'around'],
      },
    },
    fullHeight: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
} as Meta<typeof Column>;

const Template: StoryFn<typeof Column> = (args) => (
  <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', height: '100vh' }}>
    <Column {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '1rem',
        border: '1px solid #ddd',
      }}
    >
      Column Content
    </div>
  ),
  alignItems: 'stretch',
  justifyContent: 'start',
  fullHeight: false,
  fullWidth: false,
};
