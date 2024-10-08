import { Meta, StoryFn } from '@storybook/react';
import EmptyResult from './EmptyResult';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default {
  title: 'Components/EmptyResult',
  component: EmptyResult,
  argTypes: {
    onClearFilter: { action: 'clear filter clicked' },
  },
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18n}>
        <div style={{ height: '100vh' }}>
          <Story />
        </div>
      </I18nextProvider>
    ),
  ],
} as Meta<typeof EmptyResult>;

const Template: StoryFn<typeof EmptyResult> = (args) => (
  <EmptyResult {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClearFilter: () => alert('Clearing filter...'),
};
