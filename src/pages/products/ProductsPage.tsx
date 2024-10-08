import { useEffect, useState } from 'react';
import { getProducts } from '../../services/productsRequests';
import Header from '../../components/Header/Header';
import ProductListItemComponent from './components/ProductListItem/ProductListItem';
import { Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container';
import ProductListItemShimmer from './components/ProductListItem/ProductListItemShimmer';
import { Product } from '../../types/product';
import { useProductsContext } from '../../providers/ProductsProvider';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import NoResultsFound from '../../components/Empty/EmptyResult';
import useUpdateSearchQuery from '../../hooks/useUpdateSearchQuery';
import ErrorComponent from '../../components/Error/ErrorComponent';

const ProductsPage: React.FC = () => {
  const {
    searchTerm,
    page,
    products,
    totalPages,
    isLoading,
    setProducts,
    setPage,
    setTotalPages,
    setIsLoading,
  } = useProductsContext();

  const [errorLoadingFirstPage, setErrorLoadingFirstPage] = useState(false);
  const updateSearchQuery = useUpdateSearchQuery();

  const loadMore = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setErrorLoadingFirstPage(false);

    try {
      const response = await getProducts(page, searchTerm);
      const result = response.data;
      setProducts((prevProducts) => [
        ...(page === 1 ? [] : prevProducts),
        ...(result.data || []),
      ]);
      setTotalPages(result.total_pages);
    } catch (error) {
      console.error('Error fetching products:', error);
      if (page === 1) {
        setErrorLoadingFirstPage(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMore();
  }, [page, searchTerm]);

  const handleRetry = () => {
    setErrorLoadingFirstPage(false);
    loadMore();
  };

  const renderItem = (item: Product, index: number): React.ReactNode => (
    <ProductListItemComponent key={index} product={item} />
  );

  return (
    <>
      <Header />
      <Container>
        {isLoading && page === 1 && (
          <>
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductListItemShimmer key={index} />
            ))}
          </>
        )}

        {!isLoading && products.length === 0 && !errorLoadingFirstPage && (
          <NoResultsFound onClearFilter={() => updateSearchQuery('')} />
        )}

        {errorLoadingFirstPage && <ErrorComponent onRetry={handleRetry} />}

        <InfiniteScroll<Product>
          items={products}
          isLoading={isLoading}
          hasMore={page < totalPages}
          loadMore={() => setPage((prev) => prev + 1)}
          renderItem={renderItem}
          LoaderComponent={<ProductListItemShimmer />}
        />
        <Outlet />
      </Container>
    </>
  );
};

export default ProductsPage;
