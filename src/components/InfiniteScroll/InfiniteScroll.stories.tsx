import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InfiniteScroll from './InfiniteScroll';

export default {
  title: 'Components/InfiniteScroll',
  component: InfiniteScroll,
  argTypes: {
    hasMore: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
} as Meta<typeof InfiniteScroll>;

const Template: StoryFn = (args) => {
  const [items, setItems] = useState<number[]>([1, 2, 3, 4, 5]);

  const loadMore = () => {
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...Array.from({ length: 5 }, (_, i) => prevItems.length + i + 1),
      ]);
    }, 1000);
  };

  return (
    <InfiniteScroll
      isLoading={false}
      hasMore={false}
      {...args}
      items={items}
      loadMore={loadMore}
      renderItem={(item: number) => <div key={item}>Item {item}</div>}
      LoaderComponent={<div>Loading more items...</div>}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  hasMore: true,
};
