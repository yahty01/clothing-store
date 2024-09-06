import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Basket } from './pages/basket/Basket';
import { HomePage } from './pages/homePage/HomePage';
import { Navigation } from './components/navigator/Navigator';
import ProductDetail from "./pages/productDetail/ProductDetail";
import { PageNotFound } from "./components/404/PageNotFound";
import { Footer } from "./components/footer/Footer";
import { BasketProvider } from './pages/basket/BasketContext';
import styled from "styled-components";
import OrderForm from "./pages/orderForm/OrderForm";
import PaymentStatus from "./pages/paymentStatus/PaymentStatus";

export interface ProductType {
  id: string;
  title: string;
  compound: string;
  price: number;
  imgUrl: string;
  sizes: string[];
  size_s_quantity: number;
  size_m_quantity: number;
  size_c_quantity: number;
}

const fetchProducts = async () => {
  const response = await fetch('https://vyacheslavna.ru/products.php');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return await response.json();
};

function App() {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <BasketProvider>
      <StyledApp className="App">
        <Navigation />
        <Routes>
        <Route path="/" element={products ? <HomePage products={products} /> : <p>Loading products...</p>} />
        <Route path="/basket" element={<Basket />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/product/:id" element={products ? <ProductDetail products={products} /> : <p>Loading product...</p>} />          <Route path="/order/payment-status/:orderId" element={<PaymentStatus />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer />
      </StyledApp>
    </BasketProvider>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 20px);
`;

export default App;