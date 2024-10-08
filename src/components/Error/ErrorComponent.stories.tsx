import { Meta, StoryFn } from '@storybook/react';
import ErrorComponent from './ErrorComponent';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default {
  title: 'Components/ErrorComponent',
  component: ErrorComponent,
  argTypes: {
    onRetry: { action: 'retry clicked' },
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
} as Meta<typeof ErrorComponent>;

const Template: StoryFn<typeof ErrorComponent> = (args) => (
  <ErrorComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onRetry: () => alert('Retrying...'),
};
