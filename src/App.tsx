import './styles/main.scss';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ProductDetailModal from './pages/productDetail/ProductDetailModal';
import ProductsPage from './pages/products/ProductsPage';
import NotFoundPage from './pages/notFound/NotFoundPage';
import ProductsProvider from './providers/ProductsProvider';

function App() {
  const location = useLocation();
  const background = location.state && location.state.previousLocation;

  return (
    <>
      <Routes location={background || location}>
        <Route
          path="/productos"
          element={
            <ProductsProvider>
              <ProductsPage />
            </ProductsProvider>
          }
        />

        <Route path="/" element={<Navigate to="/productos" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/productos/:id" element={<ProductDetailModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
