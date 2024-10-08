import { Meta, StoryFn } from '@storybook/react';
import Spacing from './Spacing';

export default {
  title: 'Layout/Spacing',
  component: Spacing,
  argTypes: {
    m: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    mt: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    mr: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    mb: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    ml: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    p: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    pt: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    pr: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    pb: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    pl: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    w: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    h: {
      control: {
        type: 'select',
        options: ['xs', 'sm', 'md', 'md-lg', 'lg', 'lg-xl', 'xl', 'xxl'],
      },
    },
    className: {
      control: 'text',
    },
  },
} as Meta<typeof Spacing>;

const Template: StoryFn<typeof Spacing> = (args) => (
  <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', height: '100vh' }}>
    <Spacing {...args}>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '1rem',
          border: '1px solid #ddd',
        }}
      >
        Spacing Content
      </div>
    </Spacing>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  m: 'md',
};
