import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductsContextType {
  searchTerm: string;
  products: Product[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  resetSearch: () => void;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(
  undefined,
);

const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const resetSearch = () => {
    setProducts([]);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const newSearchTerm = params.get('search') || '';
    setSearchTerm(newSearchTerm);
    setPage(1);
  }, [location.search]);

  return (
    <ProductsContext.Provider
      value={{
        searchTerm,
        products,
        page,
        totalPages,
        isLoading,
        resetSearch,
        setProducts,
        setPage,
        setTotalPages,
        setIsLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): ProductsContextType => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }
  return context;
};

export default ProductsProvider;
