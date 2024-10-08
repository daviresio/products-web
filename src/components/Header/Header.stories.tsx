import { Meta, StoryFn } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <div style={{ height: '100vh' }}>
            <Story />
          </div>
        </I18nextProvider>
      </BrowserRouter>
    ),
  ],
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Default = Template.bind({});
