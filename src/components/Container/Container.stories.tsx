import { StoryFn } from '@storybook/react';
import Container from './Container';

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

const Template: StoryFn<typeof Container> = (args) => (
  <Container {...args}>
    <div style={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
      Content inside the container
    </div>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  className: '',
};
