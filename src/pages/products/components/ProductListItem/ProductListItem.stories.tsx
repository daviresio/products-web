import { Meta, StoryFn } from '@storybook/react';
import ProductListItem from './ProductListItem';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../i18n';
import { Product } from '../../../../types/product';

export default {
  title: 'Components/ProductListItem',
  component: ProductListItem,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <div style={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
            <Story />
          </div>
        </I18nextProvider>
      </BrowserRouter>
    ),
  ],
} as Meta<typeof ProductListItem>;

const productExample: Product = {
  id: '1',
  name: 'Exemplo de Produto',
  brand: 'Marca Exemplo',
  store_name: 'Loja Exemplo',
  image_link: 'https://via.placeholder.com/150',
  price: 100.0,
  discounted_price: 80.0,
  discount: 20,
  has_interest: false,
  installment_value: 20.0,
  max_installments: 4,
  review_score: 4.5,
  total_reviews: 200,
  arrive_today: true,
  highlight_status: 'BEST_SELLER',
};

const Template: StoryFn<typeof ProductListItem> = (args) => (
  <ProductListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  product: productExample,
};
