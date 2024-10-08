import { Meta, StoryFn } from '@storybook/react';
import Row from './Row';

export default {
  title: 'Layout/Row',
  component: Row,
  argTypes: {
    alignItems: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end'],
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
} as Meta<typeof Row>;

const Template: StoryFn<typeof Row> = (args) => (
  <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', height: '100vh' }}>
    <Row {...args} />
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
      Row Content
    </div>
  ),
  alignItems: 'center',
  justifyContent: 'start',
  fullHeight: false,
  fullWidth: false,
};
