import { useRef, useEffect } from 'react';

type InfiniteScrollProps<T> = {
  items: T[];
  isLoading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  renderItem: (item: T, index: number) => React.ReactNode;
  LoaderComponent: React.ReactNode;
};

const InfiniteScroll = <T,>({
  items,
  isLoading,
  hasMore,
  loadMore,
  renderItem,
  LoaderComponent,
}: InfiniteScrollProps<T>): JSX.Element => {
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, hasMore, loadMore]);

  return (
    <div>
      {items.map((item, index) => renderItem(item, index))}
      {hasMore && <div ref={loaderRef}>{LoaderComponent}</div>}
    </div>
  );
};

export default InfiniteScroll;
